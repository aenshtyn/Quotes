import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quote:Quotes[] = [
    {id:1, name: , author:}

    new Quotes(1,'If you are good at something, never do it for free' ,'The Joker'),
  ]

}

toggleDetails(index){
  this.Quotes[index].showAuthor = !this.quotes[index].showAuthor;
}

constructor() {
}

ngOnInit(): void {

}
