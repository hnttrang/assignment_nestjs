import { Module } from '@nestjs/common';
import { AppController, CalculatorController } from './app.controller';
import { AppService, CalculatorService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CalculatorController],
  providers: [AppService, CalculatorService],
})
export class AppModule {}
