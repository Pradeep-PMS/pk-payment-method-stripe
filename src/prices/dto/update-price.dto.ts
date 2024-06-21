import { PartialType } from '@nestjs/mapped-types';
import { CreatePriceDto } from './create-price.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePriceDto extends PartialType(CreatePriceDto) {

    @ApiProperty({type:String,required:true,default:"111"})
    order_id:string
}
