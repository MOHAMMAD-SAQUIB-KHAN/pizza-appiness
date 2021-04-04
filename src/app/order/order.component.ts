import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  pizzaoder:any=[];
  orderForm:FormGroup
  testModel:[{
    status:'Recived'
  },
  {
    status:'Prepared'
  },
  {
    status:'Ready'
  }]
  statusdata: any;

  constructor(private service:PizzaService,private router:Router) { }

  ngOnInit() {
    this.pizzaoder =this.service.orderDetails
    this.orderForm=new FormGroup({
      'status':new FormControl()
    })
  }
  orderview(CustomerName,amount,Address,itemName){
    this.router.navigate(['/order-details'],{queryParams:{name:CustomerName,price:amount,address:Address,itemname:itemName}})
  }

  changestatus(e,id) {

    // console.log(e.target.value);
    let user = this.pizzaoder.find(item => item.id == id);
    user.status=e.target.value;
    alert(JSON.stringify(user.status))

  }

  updatestatus(data,id){
    if(data=='Recived'){
      let user = this.pizzaoder.find(item => item.id == id);
      user.status='Prepared';
    }
    if(data=='Prepared'){
      let user = this.pizzaoder.find(item => item.id == id);
      user.status='Ready';
    }
  } 

}

