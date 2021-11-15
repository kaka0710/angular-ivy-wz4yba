import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocerylistapp',
  templateUrl: './grocerylistapp.component.html',
  styleUrls: ['./grocerylistapp.component.css']
})
export class GrocerylistappComponent implements OnInit {
  public nameOfOA:any = [];

  public namesung: any ="";
  public agesung: any = "";
  public unit: any ="";
  constructor() { }

  ngOnInit(): void {
  }

  addItem(x:any){
    this.nameOfOA.push(x)
    this.namesung = "";
    this.agesung = "";
    this.unit ="";
    document.getElementById("name")!.focus();
 }
  remove(x:any){
    this.nameOfOA.splice(x, 1);
  }
  done(x:any){
    document.getElementById(x)!.style.textDecoration = "line-through"
  }
  undone(x:any){
    document.getElementById(x)!.style.textDecoration = "none"
  }
}
