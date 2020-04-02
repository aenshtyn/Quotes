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

  //
  // quoteUpvote(upvote:boolean){
  //   this.isUpvote.emit(complete);
  // }
  // quoteDownvote(downvote:boolean){
  //   this.isDownvote.emit(complete);
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
