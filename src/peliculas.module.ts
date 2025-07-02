import { Module } from "@nestjs/common";
import { PeliculasController } from "./peliculas.controller";
import { PeliculasService } from "./peliculas.service";
import { CacheService } from "./cache.service";

@Module({
    controllers: [PeliculasController],
    providers: [PeliculasService, CacheService],
})

export class PeliculasModule{}