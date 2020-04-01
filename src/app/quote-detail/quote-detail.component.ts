import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteUpvote(upvote:boolean){
    this.isUpvote.emit(complete);
  }
  quoteDownvote(downvote:boolean){
    this.isDownvote.emit(complete);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
