import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createGroup(title: string){
    return this.webReqService.post('groups', { title });
  }

  getGroups(){
    return this.webReqService.get('groups');
  }

  createTask(title: string, groupId: string){
    return this.webReqService.post(`groups/${groupId}/tasks`, ({ title }) );
  }

  getTasks(groupId: string){
    return this.webReqService.get(`groups/$(groupId)/tasks`);
  }

  complete(task: Task){
    return this.webReqService.patch(`groups/$(task._groupId)/tasks/$(task._id)`, {
      completed: true
    });
  }
}
