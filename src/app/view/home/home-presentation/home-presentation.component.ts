import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-presentation',
  templateUrl: './home-presentation.component.html',
  styleUrls: ['./home-presentation.component.scss']
})
export class HomePresentationComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#d3d3d3';
  }

}
