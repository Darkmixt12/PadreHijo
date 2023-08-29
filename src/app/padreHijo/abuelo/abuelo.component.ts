import { Component, Input, ViewChild } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.css']
})
export class AbueloComponent {

  @Input()
  grandfather = 60

  biGranFather= 0;
  fatherAge!: number;


  @ViewChild(PadreComponent) padre:any;

  ngAfterViewInit(): void {
    this.fatherAge = this.padre.fatherAge
  }
}
