import { Injectable } from '@nestjs/common';
import { CacheService } from './cache.service';

@Injectable()
export class AppService {
  constructor(private readonly cacheService: CacheService) {}

  async getFrases(): Promise<string[]> {
    const cacheKey = 'frases';
    const cached = await this.cacheService.get<string[]>(cacheKey);

    if (cached) {
      console.log('---Respuesta obtenida desde caché');
      return cached;
    }

    console.log('-----Simulando llamada costosa...');
    const frases = await new Promise<string[]>((resolve) =>
      setTimeout(() => {
        resolve([
          'Hola que tal recuerda que el no puedo, es para el que no puede',
          'Pero como tu si puedes, entonces no hay nada que te detenga',
          'el limite es el cielo',
          'Cree en ti, llegara lejos',
          'inspire to desire'
        ]);
      }, 2000)
    );

    await this.cacheService.set(cacheKey, frases, 15);

    console.log('---Frases guardadas en caché por 15 segundos');
    return frases;
  }
}
