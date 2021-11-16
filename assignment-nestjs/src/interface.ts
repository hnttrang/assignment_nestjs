import { IsNotEmpty, IsNumber } from "class-validator";


export interface IData{

    bill: number
    tip: number
    people: number

}
  
export interface IResult{
    result: boolean
    total?: number
    amount?: number
}

export class IValue{
    @IsNumber()
    @IsNotEmpty()
    bill: number;

    @IsNumber()
    @IsNotEmpty()
    tip: number;

    @IsNumber()
    @IsNotEmpty()
    people: number;
}