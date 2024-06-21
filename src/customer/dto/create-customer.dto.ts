
import { ApiProperty } from "@nestjs/swagger";
export class CreateCustomerDto {
    @ApiProperty({ type:String, required: true, default: "pkname"})
    name : string
    @ApiProperty({ type:String, required: true, default: "test@gmail.com"})
    email : string
}
