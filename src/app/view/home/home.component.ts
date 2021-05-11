import { Component, OnInit, ViewChild } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class HomeComponent implements OnInit {

  imagemBack: string = '../../../assets/home/background.png';
  @ViewChild('modalAnimar') modalAnimar: HTMLElement;
  constructor() { }

  ngOnInit(): void {
    
  }

  animar(){
    debugger
    // console.log(this.modalAnimar);
    // this.modalAnimar.style.removeProperty('.animar');
    var modal = document.getElementById('modal');
    modal.classList.toggle('animar');
  }

}
