import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { PricesModule } from './prices/prices.module';
// import { SubscriptionModule } from './subscription/subscription.module';
import { SubscriptionModule } from './subscription/subscription.module';
@Module({
  imports: [CustomerModule, PricesModule, SubscriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}