import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

export class QuoteComponent implements OnInit {

  quote:Quotes[] = [

    {id:1, name: , author:}

    new Quotes(1,'If you are good at something, never do it for free' ,'The Joker', new Date(2012,3,14)),
  ];

  addNewQuote(quote){
  let quoteLength = this.quote.length;
  quote.id = goalLength+1;
  quote.completeDate = new Date(quote.completeDate)
  quote.upvote = 0
  quote.downvote = 0
  this.quotes.push(goal)
}

}

toggleDetails(index){
  this.Quotes[index].showAuthor = !this.quotes[index].showAuthor;
}
upvoteQuote (isUpvote, index) {
  if (isUpvote ) {
    this.quote.
  }
}

constructor() {  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

}

ngOnInit(): void {

}
