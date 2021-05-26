import { PersonDto } from "@/dtos/personDto";

export class PersonModel implements PersonDto {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public projectCount: number,
    public skills: string[]
  ) {}

  public get name(): string {
    return this.firstName + " " + this.lastName;
  }
}
