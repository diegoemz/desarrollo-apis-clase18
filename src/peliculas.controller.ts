import { Controller, Get, Param } from "@nestjs/common";
import { PeliculasService } from "./peliculas.service";

@Controller('peliculas')
export class PeliculasController{
    constructor(private readonly peliculasService: PeliculasService){}

    @Get(':año')
    async obtenerPeliculasPorAño(@Param('año') año: string){
        return this.peliculasService.getPeliculasPorAño(año);
    }
}