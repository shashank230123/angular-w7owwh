import { Component, OnInit } from '@angular/core';
import {Customer, customers } from '../customersData';
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

   customer : Customer | undefined;

   constructor( private route : ActivatedRoute ){

   }

  ngOnInit(){

    const routeParams = this.route.snapshot.paramMap;
    const customerIdFromRoute = Number(routeParams.get('customerId'))
    this.customer = customers.find(customer=>customer.customerId===customerIdFromRoute );

  }

}
