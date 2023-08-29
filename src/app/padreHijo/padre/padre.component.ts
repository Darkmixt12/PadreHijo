import { HijoComponent } from './../hijo/hijo.component';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements AfterViewInit { 
 
  @Input()
  grandfather = 0

  sonAge!: number
  fatherAge = 30

@ViewChild(HijoComponent) hijo: any;

ngAfterViewInit(): void {
  this.sonAge = this.hijo.sonAge
}

}
