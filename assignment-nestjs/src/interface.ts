import { IsNotEmpty, IsNumber, IsNumberString } from "class-validator";


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
    @IsNumberString()
    @IsNotEmpty()
    bill: number;

    @IsNumberString()
    @IsNotEmpty()
    tip: number;

    @IsNumberString()
    @IsNotEmpty()
    people: number;
}