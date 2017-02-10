import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public pictures: any = [];
  public currentIndex: number = 0;
  public totalPics: number;
  public autoSlide;


  constructor() { }

  switchSelected(i) {
    this.currentIndex = i;
  }

  nextSlide() {
    this.currentIndex ++;
    if (this.currentIndex > this.totalPics - 1) {
      this.currentIndex = 0;
    }
  };

  prevSlide() {
    this.currentIndex --;
    if (this.currentIndex < 0) {
      this.currentIndex = this.totalPics - 1;
    }
  };

  stopAutoSlide() {
    clearInterval(this.autoSlide);
  }

  startAutoSlide() {
    this.autoSlide = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  ngOnInit() {

    let i = 1;
    while (i <= 6) {
      this.pictures.push({url: "public/pics/" + i + ".jpg"});
      i++;
    }
    this.totalPics = this.pictures.length;

    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.autoSlide) {
      clearInterval(this.autoSlide);
    }
  }

}
