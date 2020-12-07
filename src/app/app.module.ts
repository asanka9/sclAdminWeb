import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { LoginComponent } from './module/login/login.component';
import { CreateQuestionsComponent } from './module/create-questions/create-questions.component';
import { CreateNotesComponent } from './module/create-notes/create-notes.component';
import { CreateLessonsComponent } from './module/create-lessons/create-lessons.component';
import { CreateTopicsComponent } from './steppers/create-topics/create-topics.component';
import { CreateSubjectsComponent } from './steppers/create-subjects/create-subjects.component';
import { CreateSubTopicsComponent } from './steppers/create-sub-topics/create-sub-topics.component';
import { CreateUsersComponent } from './module/create-users/create-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';
import { HomeComponent } from './module/home/home.component';

import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateQuestionsComponent,
    CreateNotesComponent,
    CreateLessonsComponent,
    CreateTopicsComponent,
    CreateSubjectsComponent,
    CreateSubTopicsComponent,
    CreateUsersComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    MatStepperModule,
    ScrollingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
