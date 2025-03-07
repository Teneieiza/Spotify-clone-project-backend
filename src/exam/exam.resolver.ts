import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ExamService } from './exam.service';
import { Exam } from './exam.model';

@Resolver(() => Exam)
export class ExamResolver {
  constructor(private readonly examService: ExamService) {}

  @Query(() => [Exam])
  examAll() {
    return this.examService.findAll();
  }

  @Query(() => Exam, { nullable: true })
  examOne(@Args('id', { type: () => Int }) id: number) {
    return this.examService.findOne(id);
  }
}
