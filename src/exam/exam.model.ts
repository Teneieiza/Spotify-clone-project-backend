import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

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

@InputType()
export class CreateExamInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field(() => Int)
  age: number;
}
