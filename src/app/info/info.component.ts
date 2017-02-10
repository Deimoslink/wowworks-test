import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  animations: [
    trigger('itemState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.02)'
      })),
      transition('inactive <=> active', animate('100ms ease-out')),
      // transition('inactive => active', animate('100ms ease-in')),
      // transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class InfoComponent implements OnInit {


  public technologies: any = [
    {name:'AngularJS',
    state:'inactive',
    toggleState:function(){this.state = this.state === 'active' ? 'inactive':'active'}},
    {name:'Vue.js',
      state:'inactive',
      toggleState:function(){this.state = this.state === 'active' ? 'inactive':'active'}},
    {name:'React',
      state:'inactive',
      toggleState:function(){this.state = this.state === 'active' ? 'inactive':'active'}},
    {name:'Webpack',
      state:'inactive',
      toggleState:function(){this.state = this.state === 'active' ? 'inactive':'active'}},
    {name:'jQuery',
      state:'inactive',
      toggleState:function(){this.state = this.state === 'active' ? 'inactive':'active'}},
  ];

  public textToCopy: string;

  constructor() { }

  copyTrackCode(event: Event): void {
    event = event || window.event;
    event!.preventDefault();
    let x = document.createElement('textarea');
    x.style.display = 'hidden';
    x.value = this.textToCopy.toString();
    document.body.appendChild(x);
    x.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      alert('Не удалось скопировать код в вашем браузере. Попробуйте сделать это мышкой.');
    }
    document.body.removeChild(x);
  }


  ngOnInit() {
  }

}
