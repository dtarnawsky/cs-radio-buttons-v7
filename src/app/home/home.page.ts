import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal: IonModal | undefined = undefined;

  fuel = 'i1';
  fuelList: fuel[] = [
    { text: 'item 1', value: 'i1' },
    { text: 'item 2', value: 'i2' },
    { text: 'item 3', value: 'i3' }
  ];
  constructor() { }
  
  setFuel(e: any) {
    this.fuel = e.detail.value;
    console.log('Set Fuel',this.fuel);
  }

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

}

interface fuel {
  text: string;
  value: string;
}
