import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'unscheduled',
  templateUrl: './unscheduled.component.html',
  styleUrls:['./unscheduled.scss']
})

export class UnscheduledComponent{
  public _rate1:number = 0;
  public _max1:number = 1;
  @ViewChild('childModal') childModal: ModalDirective;

  showChildModal(): void {
    this.childModal.show();
  }
  
  hideChildModal(): void {
    this.childModal.hide();
  }
}