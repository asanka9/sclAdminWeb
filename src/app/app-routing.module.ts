import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './module/home/home.component';
import {CreateLessonsComponent} from './module/create-lessons/create-lessons.component';
import {CreateNotesComponent} from './module/create-notes/create-notes.component';
import {CreateQuestionsComponent} from './module/create-questions/create-questions.component';
import {CreateUsersComponent} from './module/create-users/create-users.component';


const routes: Routes = [
  {path:'',children:[
    {path:'',component:HomeComponent},
    {path:'create-lesson',component:CreateLessonsComponent},
    {path:'create-notes',component:CreateNotesComponent},
    {path:'create-questions',component:CreateQuestionsComponent},
    {path:'create-users',component:CreateUsersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
