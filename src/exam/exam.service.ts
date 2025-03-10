import { Injectable } from '@nestjs/common';

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

  create(createExamInput: {
    firstname: string;
    lastname: string;
    age: number;
  }) {
    const newPerson = {
      id: this.examData.length + 1,
      ...createExamInput,
    };
    this.examData.push(newPerson);
    return newPerson;
  }
}
