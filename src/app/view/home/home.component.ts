import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class HomeComponent implements OnInit, AfterViewInit {

  imagemBack: string = '../../../assets/home/background.png';
  @ViewChild('modalAnimar') modalAnimar: HTMLElement;
  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#008C8C';
  }
}
