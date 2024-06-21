import { Injectable } from '@nestjs/common';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
const  stripe = require('stripe')('sk_test_51POWmOLE51cuzNZQwef3SOpzTLTJmX8rbbvYaLi54zYWHCCZLKkKtD0qzPKTsBTo7WW2W7hSjrhQg2xJ7HBnjYI400hpE2sNf6');

@Injectable()
export class PricesService {
  async create(createPriceDto: CreatePriceDto) {
    const price = await stripe.prices.create({
      currency: 'usd',
      unit_amount: 1000,
      recurring: {
        interval: 'month',
      },
      product_data: {
        name: 'Gold Plan',
      },
    });
    return price;
  }


  async update(updatePriceDto: UpdatePriceDto){
    const price = await stripe.prices.update(
      'price_1MoBy5LkdIwHu7ixZhnattbh',
      {
        metadata: {
          order_id: updatePriceDto.order_id,
        },
      }
    );
    return price;
}

  async findAll() {
    const prices = await stripe.prices.list();
    return prices
  }

}
