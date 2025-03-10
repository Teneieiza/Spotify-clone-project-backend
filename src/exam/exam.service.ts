import { Injectable } from '@nestjs/common';

type ExamArgType = {
  firstname: string;
  lastname: string;
  age: number;
};
@Injectable()
export class ExamService {
  private examData = [
    {
      id: 1,
      firstname: 'Ten',
      lastname: 'eiei',
      age: 90,
    },
    {
      id: 2,
      firstname: 'Earth',
      lastname: 'eieiza',
      age: 2,
    },
  ];

  findAll() {
    return this.examData;
  }

  findOne(id: number) {
    return this.examData.find((data) => data.id === id);
  }

  create(createExamInput: ExamArgType) {
    const newPerson = {
      id: this.examData.length + 1,
      ...createExamInput,
    };
    this.examData.push(newPerson);
    return newPerson;
  }

  editExam(id: number, editExamInput: ExamArgType) {
    const value = this.findOne(id);
    // const valueId2 = this.examData.findIndex((data) => data.id === id);
    if (!value) {
      return null;
    }
    Object.assign(value, editExamInput);
    return value;
  }

  deleteExam(id: number) {
    const index = this.examData.findIndex((data) => data.id === id);
    if (index === -1) return null;

    const deletedExam = this.examData[index];
    this.examData.splice(index, 1);
    return deletedExam;
  }
}
