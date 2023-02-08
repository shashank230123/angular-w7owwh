import { Component } from '@angular/core';

import{ customers } from '../customersData';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {

  customers = customers;

  offer(){
    window.alert("Product is in offer!!!");
  }

  noOffer(){
    window.alert("Product is not in offer..")
  }

}
