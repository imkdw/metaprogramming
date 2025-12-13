import { IsString } from "./decorators/is-string";
import { IsNumber } from "./decorators/is-number";
import { IsArray } from "./decorators/is-array";
import { validate } from "./validate";

class CreateSeatDto {
  @IsString()
  seatName: string;

  @IsNumber()
  seatNumber: number;

  @IsArray({ each: "string" })
  tags: string[];

  @IsArray({ each: "number" })
  scores: number[];

  @IsArray()
  items: unknown[];
}

const dto1 = new CreateSeatDto();
dto1.seatName = "A1";
dto1.seatNumber = 1;
dto1.tags = ["tag1", "tag2"];
dto1.scores = [1, 2, 3];
dto1.items = [1, 2, 3];

validate(dto1);
console.log(dto1);
