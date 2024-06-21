import { ApiProperty } from "@nestjs/swagger";

export class CreateSubscriptionDto {
    @ApiProperty({type:String,default:'asdfgh'})
    customer:string


    @ApiProperty({type:String,default:'ppppppppppp'})
    price:string
}
