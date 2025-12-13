import { IsString } from "./decorators/is-string";

class CreateSeatDto {
  @IsString()
  seatName: string;
}

const dto = new CreateSeatDto();
dto.seatName = "1234";
