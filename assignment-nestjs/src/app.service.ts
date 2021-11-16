import { Injectable } from '@nestjs/common';
import { isNull } from 'util';
import { IData, IResult } from './interface';



@Injectable()
export class AppService {


  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class CalculatorService {
  private result : IResult;
  //amountCalculate()

  isValid(data: IData): boolean{
    if (data.bill < 0 || data.tip < 0 || data.people < 1) return false;
    if (data.bill == null || data.tip == null || data.people == null) return false;
    return true;
  }

  calculate(data: IData): IResult{
    data.bill = Number(data.bill);
    data.people = Number(data.people);
    data.tip = Number(data.tip);
    //return {result: false, total: data.bill}
    
    if(!this.isValid(data)) return {result: false};
    return this.getResult(data);
  }

  getResult(data: IData): IResult{
    let amount = Number((data.bill * (data.tip / 100)) / data.people);
    let total = (data.bill / data.people) + amount;

    return {result: true, amount: amount,  total: total}
  }

}
