import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { JobListServiceService } from '../job-list-service.service';
import { JobList } from './jobListModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  jobLists : JobList[];
  input: String;
  inputs: string[] = [];
  // jobLists : JobList[];
  constructor(private jobListService: JobListServiceService) { }

  ngOnInit(): void {

    this.jobLists = this.jobListService.getJobLists();
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  deleteList(jobListId: number){

     this.jobListService.deleteList(jobListId);
  }

  getJobList(): JobList[] {
    return this.jobListService.jobList;
  }

  addTask(cardIndex:number) {
    if(this.inputs[cardIndex].trim()){
    this.jobListService.addJobList(cardIndex, this.inputs[cardIndex]);
    }
  }

  deleteTask(cardIndex: number, jobIndex: number ){
     this.jobListService.deleteTask(cardIndex, jobIndex);
  }

}



