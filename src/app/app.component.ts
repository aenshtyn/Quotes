import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote:Quotes[] = [
    {id:1, name: 'If you are good at something, never do it for free', author:'The Joker'}
  ]
}
