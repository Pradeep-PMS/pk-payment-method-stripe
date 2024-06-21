import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
const stripe = require('stripe')('sk_test_51POWmOLE51cuzNZQwef3SOpzTLTJmX8rbbvYaLi54zYWHCCZLKkKtD0qzPKTsBTo7WW2W7hSjrhQg2xJ7HBnjYI400hpE2sNf6');

@Injectable()
export class SubscriptionService {
  async create(createSubscriptionDto: CreateSubscriptionDto) {
    
const subscription = await stripe.subscriptions.create({
      customer: createSubscriptionDto.customer,
      items: [
        {
          price: createSubscriptionDto.price,
        },
      ],
      payment_behavior: 'default_incomplete',
      payment_settings: { save_default_payment_method: 'on_subscription' },
      expand: ['latest_invoice.payment_intent'],
    });
    return subscription

  }

  findAll() {
    return `This action returns all subscription`;
  }

 
}
