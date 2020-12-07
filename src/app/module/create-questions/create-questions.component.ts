import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.scss']
})
export class CreateQuestionsComponent implements OnInit {

  selectedSubject : string ;
  selectedTopic : string;
  selectedSubTopic : string;
  numOfAnwsers : number;
  typeOfQuestion : string;

  numof_questions = [1,2,3,4,5,6,7,8,9,10]
  anwsersList = []

  constructor() { }

  ngOnInit(): void {
  }

  selectedNumOfAnwsers(event){
    this.anwsersList = []
    for (let index = 0; index < Number(event.value); index++) {
      this.anwsersList.push('');
    }
  }



}
