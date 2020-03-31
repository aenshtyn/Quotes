import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

    quote:Quotes[] = [
      {id:1, name: 'If you are good at something, never do it for free', author:'The Joker'}
    ]
  }

  constructor() {
  }

  ngOnInit(): void {

  }
