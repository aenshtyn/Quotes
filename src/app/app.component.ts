import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes : quote = [
    {id:1, lines: 'If you are good at something, never do it for free', name: 'Moha' , author:'The Joker'},
    {id:2, lines: 'If you are good at something, never do it for free', name: 'Moha' , author:'The Joker'},
    {id:3, lines: 'If you are good at something, never do it for free', name: 'Moha' , author:'The Joker'},
    {id:4, lines: 'If you are good at something, never do it for free', name: 'Moha' , author:'The Joker'},
    {id:5, lines: 'If you are good at something, never do it for free', name: 'Moha' , author:'The Joker'},
    {id:6, lines: 'If you are good at something, never do it for free', name: 'Moha' , author:'The Joker'},

  ];
}
