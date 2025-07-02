import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { createClient } from 'redis';

@Injectable()
export class ProductsService {
    private redisClient;

    constructor(
        @InjectRepository(Product)
        private productRepo: Repository<Product>,
    ) {
        this.redisClient = createClient();
        this.redisClient.connect().catch(console.error);
    }

    async getAllProducts(): Promise<any> {
        const cacheKey = 'products';


        const cached = await this.redisClient.get(cacheKey);
        if (cached) {
            return {
                fuente: 'cache',
                data: JSON.parse(cached),
            };
        }
        const products = await this.productRepo.find();
        await this.redisClient.setEx(cacheKey, 20, JSON.stringify(products));
        return {
            fuente: 'db',
            data: products,
        }
    };

}

