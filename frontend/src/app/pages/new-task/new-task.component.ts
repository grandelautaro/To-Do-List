import { TaskService } from 'src/app/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  groupId: string = '';

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        this.groupId = params['groupId'];
        }
      )
    }

  createTask(title: string){
    // this.taskService.createTask(title, this.groupId).subscribe((newTask: Task)=>{
    //   this.router.navigate(['../'], {relativeTo: this.route});
    // })
  }
}
