import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { IsNumberString } from 'class-validator';
import { get } from 'http';
import { AppService, CalculatorService } from './app.service';
import { IData, IValue } from './interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService){}

  @Get()
  calculator(
    @Query() data: IValue) {
      //return data;
      return this.calculatorService.calculate(data);
  }
}
