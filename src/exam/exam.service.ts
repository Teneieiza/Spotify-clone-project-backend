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
      firstname: 'Eart',
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
}
