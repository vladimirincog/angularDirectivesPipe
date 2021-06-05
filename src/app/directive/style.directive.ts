import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input() appStyle: string = 'black'
  @Input() font!: { fontSize: string, color: string }
  @HostBinding('style.color') elColor: string = 'black'

  constructor(private el: ElementRef, private render: Renderer2) {
    this.render.setStyle(this.el.nativeElement, 'color', 'blue')
  }

  @HostListener('click', ['$event.target']) onClick (event: Event){
    console.log(event)
  }

  @HostListener('mouseenter') onEnter (){
    this.elColor = this.font.color
    //this.render.setStyle(this.el.nativeElement, 'color', this.font.color)

   // this.render.setStyle(this.el.nativeElement, 'fontSize', null)
  }

  @HostListener('mouseleave') onLeave (){
    this.elColor = 'black'
    //this.render.setStyle(this.el.nativeElement, 'color', null)
    //this.render.setStyle(this.el.nativeElement, 'fontSize', this.font.fontSize)

  }
}
