import { NewTaskComponent } from './pages/new-task/new-task.component';
import { NewGroupComponent } from './pages/new-group/new-group.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'groups', pathMatch:'full'},
  { path: 'new-group', component: NewGroupComponent},
  { path: 'groups/:groupId', component: TaskViewComponent},
  { path: 'groups', component: TaskViewComponent},
  { path: 'groups/:groupId/new-task', component: NewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
