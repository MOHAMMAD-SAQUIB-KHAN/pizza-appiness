import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  orderDetails=[{
    id:1,
    CustomerName:'Saquib',
    items:'5',
    amount:'1500',
    status:'Recived',
    Address:'Bangalore',
    itemName:'New York-Style Pizza'
  },
  {
   id:2,
   CustomerName:'Aquib',
   items:'4',
   amount:'1200',
   status:'Recived',
   Address:'Kolkata',
   itemName:' Chicago Pizza'
 },
 {
   id:3,
   CustomerName:'Mohit',
   items:'2',
   amount:'1000',
   status:'Recived',
   Address:'Patna',
   itemName:' Greek Pizza'
 },
 {
   id:4,
   CustomerName:'Shadab',
   items:'3',
   amount:'1000',
   status:'Recived',
   Address:'Delhi',
   itemName:'Sicilian Pizza'
 }]
 
 
}
