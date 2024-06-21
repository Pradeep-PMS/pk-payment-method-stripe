import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
const stripe = require('stripe')('sk_test_51POWmOLE51cuzNZQwef3SOpzTLTJmX8rbbvYaLi54zYWHCCZLKkKtD0qzPKTsBTo7WW2W7hSjrhQg2xJ7HBnjYI400hpE2sNf6');

@Injectable()
export class CustomerService {
  async create(createCustomerDto: CreateCustomerDto) {
    const customer = await stripe.customers.create({
      name: createCustomerDto.name,
      email: createCustomerDto.email,
    });
    return customer
  }
   async findAll() {
    const customers = await stripe.customers.list();
    return customers
  }

  
  
}
