import { IsString, IsNumber, IsArray, Min, Max, MinLength, MaxLength } from "./decorators";
import { validate } from "./validate";

class CreateUserDto {
  constructor(name: string, age: number, tags: string[]) {
    this.name = name;
    this.age = age;
    this.tags = tags;
  }

  @IsString()
  @MinLength(2)
  @MaxLength(20)
  private name: string;

  @IsNumber()
  @Min(1)
  @Max(150)
  private age: number;

  @IsArray({ each: "string" })
  private tags: string[];
}

const validUser = new CreateUserDto("아", 25, [1 as any, "typescript"]);

// Error: name: minLength (options: {"value":2}) 검증 실패, tags: isArray (options: {"each":"string"}) 검증 실패
//     at validate (/Users/imkdw/metaprogramming/mini-class-validator/dist/validate.js:59:15)
//     at Object.<anonymous> (/Users/imkdw/metaprogramming/mini-class-validator/dist/app.js:35:25)
validate(validUser);
