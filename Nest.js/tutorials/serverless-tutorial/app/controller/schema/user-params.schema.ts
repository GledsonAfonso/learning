import { IsString } from "class-validator";

export class UserParams {
  @IsString()
  name: string;
}