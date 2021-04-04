import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oder-details',
  templateUrl: './oder-details.component.html',
  styleUrls: ['./oder-details.component.css']
})
export class OderDetailsComponent implements OnInit {
  CustomerName: any;
  amount: any;
  Address: any;
  itemName: any;
  constructor(private active:ActivatedRoute) { 
    this.active.queryParams.subscribe((params)=>{
      this.CustomerName = params.name;
      this.amount =params.price;
      this.Address =params.address;
      this.itemName=params.itemname;
      console.log('qwerty',params)
    })
  }

  ngOnInit() {
  }

}
