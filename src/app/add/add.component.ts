import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  task: any = {
    Body: "",
    Loc: "",
    Deadline: "",
    Urgent: false,
    Night: false,
    Personal: false,
    Price: null,
    Status: "new"
  };


  constructor(private http: Http) {

  }

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  GENrandomDate() {
    console.log(this.randomDate(new Date(2012, 0, 1), new Date()));
  }

  addTask() {
    this.http.post('http://localhost:3000/tasks/', this.task).map((res: Response) => res.json()).subscribe(
      (res: any) => {
        console.log(res);
        alert('A new task has been added');
      },
      err => {
        console.log(err);
      }
    );
  }


  ngOnInit() {
  }

}
