import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Exam {
  @Field()
  id: number;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  age: number;
}
