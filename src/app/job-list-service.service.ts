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

  saveToStorage(): void {
    if(window && window.localStorage){
      window.localStorage.setItem("jobList", JSON.stringify(this.jobList));
    }
  }

  getJobLists(): JobList[] {
    if (window && window.localStorage) {
      this.jobList = JSON.parse(window.localStorage.getItem('jobLists')) || [];
    }
    return this.jobList;
  }

  deleteList(jobListId: number){
    this.jobList = this.jobList.filter((p) => p.id !== jobListId);
    this.saveToStorage();
  };

  deleteTask(cardIndex: number, jobIndex: number){
    // this.jobList = this.jobList[cardIndex].job.filter((p) => p.name !== jobName)
    this.jobList[cardIndex].job.splice(jobIndex,1);
    this.saveToStorage();
  };

  addJobList( cardIndex:number, jobName: string){
     this.jobList[cardIndex].job.push(jobName);
     this.saveToStorage();
  }


}
