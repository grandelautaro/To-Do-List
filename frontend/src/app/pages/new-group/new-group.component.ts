import { Group } from './../../models/group.model';
import { TaskService } from '../../task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.scss']
})
export class NewGroupComponent implements OnInit {

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  createGroup(title: string){
    // this.taskService.createGroup(title).subscribe((group: Group) => {
    //   console.log(group);
    //   this.router.navigate([ '/groups' , group._id ]);
    // });
  }

}
