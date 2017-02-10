import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

@Injectable()

export class TableComponent implements OnInit {

  angParseInt = parseInt;

  public search: string;
  public sortingField: string;
  public reverseSorting: boolean;
  public data: any;
  public postResponse: any;
  public testItem: any = {
    "Damage":"666",
    "Name":"Alessandra's Dagger",
    "Type":"1 Hand Dagger",
    "Tempering":"Not possible",
    "Weight":"1",
    "Value":"10"
  };


  constructor(private http: Http) { }

  sortTable(event, Field) {
    event.preventDefault();
    this.sortingField = Field;
    this.reverseSorting = !this.reverseSorting;
  }

  deleteCurrent(event, item) {
    event.preventDefault();
    let answer = confirm("Are you sure you want to delete the selected item?");
    if (answer) {
      this.http.delete('http://localhost:3000/items/' + item.id).subscribe(
        (res) => {
          let index = this.data.indexOf(item);
          this.data.splice(index, 1);
          console.log(res);
        },
        (err) => {console.log(err)}
        );
    }
  }

  requestData() {
      this.http.get('http://localhost:3000/items').map((res: Response) => res.json()).subscribe(
        (res: any) => {
          this.data = res;
        },
        err => {
          console.log(err);
          //this.processingErrorStatus(err, callbackErr);
        }
      );
  }

  addItem(item) {
    this.http.post('http://localhost:3000/items/',item).map((res: Response) => res.json()).subscribe(
      (res: any) => {
        this.postResponse = res;
        this.data.push(res);
      },
      err => {
        console.log(err);
        //this.processingErrorStatus(err, callbackErr);
      }
    );
  }



  ngOnInit() {

  }

}
