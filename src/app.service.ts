import { Injectable } from '@nestjs/common';
const stripe = require('stripe')('sk_test_51POWmOLE51cuzNZQwef3SOpzTLTJmX8rbbvYaLi54zYWHCCZLKkKtD0qzPKTsBTo7WW2W7hSjrhQg2xJ7HBnjYI400hpE2sNf6');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  async createPaymentIntent() {

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    
    return paymentIntent
  }

}
