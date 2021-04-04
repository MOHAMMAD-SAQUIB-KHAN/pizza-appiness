import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tDayTime = new Date();
  pizzaoder: any;
  constructor(private service:PizzaService) {

  }

  ngOnInit() {
    this.pizzaoder =this.service.orderDetails
  }

}
