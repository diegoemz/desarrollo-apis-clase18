import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CacheService } from './cache.service';

@Injectable()
export class PeliculasService {
    private readonly apiKey = process.env.OMDB_API_KEY;

    constructor(private readonly cacheService: CacheService) { }

    async getPeliculasPorAño(año: string): Promise<any> {
        const cacheKey = `peliculas:${año}`;
        const cachedData = await this.cacheService.get(cacheKey);

        if (cachedData) {
            console.log('✔ Datos desde Redis');
            return cachedData;
        }

        try {
            const response = await axios.get('http://www.omdbapi.com/', {
                params: {
                    apikey: this.apiKey,
                    y: año,
                    s: 'movie'
                }
            });

            const peliculas = response.data;

            await this.cacheService.set(cacheKey, peliculas, 30);

            console.log('📡 Datos desde OMDb y cacheados');
            return peliculas;
        } catch (error) {
            console.error('Error al consultar OMDb:', error.message);
            throw new Error('Error al consultar películas');
        }
    }
}
