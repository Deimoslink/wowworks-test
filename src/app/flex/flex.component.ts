import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-flex',
    templateUrl: './flex.component.html',
    styleUrls: ['./flex.component.scss']
  })
  export class FlexComponent implements OnInit {

  public container: any = {
    flexDirection: String,
    justifyContent: String,
    alignItems: String,
    alignContent: String,
    flexWrap: String,
    width: Number
  };
  public commonStyles: any = {
    height: Number,
    width: Number,
    margins: Number
  };

  public childrenStyles: any = [];
  public numberOfChildren: number;
  public children: any = [];
  public selectedChild: number;

  returnContainerWidth(){
    return this.container.width+'%';
  }

  returnWidth(index){
    return this.childrenStyles[index].width+'px';
  }

  returnHeight(index){
    return this.childrenStyles[index].height+'px';
  }

  returnMargins(index){
    return '0 '+this.childrenStyles[index].margins+'px';
  }

  selectChild(i) {
    this.selectedChild = i+1;
  }

  setCommonStyle() {
    for (let child of this.childrenStyles) {
      child.width = this.commonStyles.width;
      child.height = this.commonStyles.height;
      child.margins = this.commonStyles.margins;
    }
  }

  setNumberOfChildren(length) {
    this.selectedChild = null;
    this.children = [];
    let totalStyles = this.childrenStyles.length;
    for (let i = 1; i <= length; i++) {
      if (totalStyles < i) {
        this.childrenStyles.push(
          {
            width: Number,
            height: Number,
            margins: Number,
            shrink: Number,
            grow: Number,
            order: Number,
            alignSelf: 'auto'
          }
        );
      }
      this.children.push(i);
    }
    this.childrenStyles = this.childrenStyles.slice(0,length);
  }

  constructor() {}

  ngOnInit() {}

}
