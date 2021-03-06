import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
this.isComplete.emit(complete);
}

  quoteUpvote() {
this.quote.upvotes += 1;
}
  quoteDownvote() {
this.quote.downvotes += 1;
}

  constructor() { }

  ngOnInit(): void {
  }

}
