import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appTopvoted]'
})
export class TopvotedDirective {

  constructor(private elem:ElementRef) {}
  // this.elem.nativeElement.style.textDecoration='underline';

  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }


  private textDeco(action:string){
     this.elem.nativeElement.style.textDecoration=action;
   }

}
