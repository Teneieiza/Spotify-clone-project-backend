import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExamService } from './exam.service';
import { Exam, ExamInput } from './exam.model';

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

  @Mutation(() => Exam)
  createExam(@Args('createExamInput') createExamInput: ExamInput) {
    return this.examService.create(createExamInput);
  }

  @Mutation(() => Exam, { nullable: true })
  editExam(
    @Args('id', { type: () => Int }) id: number,
    @Args('editexam') editExamInput: ExamInput,
  ) {
    return this.examService.editExam(id, editExamInput);
  }

  @Mutation(() => Exam, { nullable: true })
  deleteExam(@Args('id', { type: () => Int }) id: number) {
    return this.examService.deleteExam(id);
  }
}
