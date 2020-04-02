import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quotes: Quote [] = [
    new Quote(1,'If you are good at something, never do it for free' ,'The Joker',  'Moha' , new Date(2012,3,14)),
    new Quote(2,'If you are good at something, never do it for free' ,'The Joker',  'Moha' ,new Date(2012,3,14)),
    new Quote(3,'If you are good at something, never do it for free' ,'The Joker',  'Moha' ,new Date(2012,3,14)),
    new Quote(4,'If you are good at something, never do it for free' ,'The Joker',  'Moha' ,new Date(2012,3,14)),
    new Quote(5,'If you are good at something, never do it for free' ,'The Joker',  'Moha' ,new Date(2012,3,14)),
    new Quote(6,'If you are good at something, never do it for free' ,'The Joker', 'Moha' , new Date(2012,3,14)),

  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  // upvoteQuote (isUpvote, index) {
  //   if (isUpvote ) {
  //     this.quotes.
  //   }
  // }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    // quote.upvote = 0
    // quote.downvote = 0
    this.quotes.push(quote)
  }

  constructor() {}

  ngOnInit(){
  }
}
