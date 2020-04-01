import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appTopvoted]'
})
export class TopvotedDirective {

  constructor(private elem;ElementRef) { }

}
