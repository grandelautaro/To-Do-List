import { Group } from './../../models/group.model';
import { Task } from 'src/app/models/task.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  groups: Group[];
  tasks: Task[];


  constructor(private taskService: TaskService, private route: ActivatedRoute){
    this.groups = [];
    this.tasks = [];
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        // this.taskService.getTasks(params['groupId']).subscribe((tasks: Task[]) => {
        //   this.tasks = tasks;
        // })
      }
    )

    // this.taskService.getGroups().subscribe((groups: Group[]) =>{
    //   this.groups = groups;
    // })
  }

  onTaskClick(task: Task){
    // this.taskService.complete(task).subscribe(() => {
    //   console.log("Completed Succesfully");
    // })
  }

}
