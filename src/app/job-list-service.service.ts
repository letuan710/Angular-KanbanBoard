import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { JobList } from './list/jobListModel';

@Injectable({
  providedIn: 'root',
})
export class JobListServiceService {
  constructor() {}

  jobList: JobList[] = [
    {
      id: 1,
      name: 'todo',
      job: ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'],
    },

    {
      id: 2,
      name: 'done',
      job: [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog',
      ],
    },
    { id: 3, name: 'doing', job: ['Learn HTML', 'Learn CSS'] },
  ];

  deleteList(jobListId: number){
    this.jobList = this.jobList.filter((p) => p.id !== jobListId)
  };

  deleteTask(cardIndex: number, jobIndex: number){
    // this.jobList = this.jobList[cardIndex].job.filter((p) => p.name !== jobName)
    this.jobList[cardIndex].job.splice(jobIndex,1);

  };

  addJobList( cardIndex:number, jobName: string){
     this.jobList[cardIndex].job.push(jobName);
  }

}
