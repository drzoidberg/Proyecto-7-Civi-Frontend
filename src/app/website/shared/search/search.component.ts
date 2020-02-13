import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
input={
  input:''
}
  constructor(private router:Router) { }
  buscador(){
 
  console.log(this.input);
  localStorage.setItem('buscador', this.input.input);
  this.router.navigate(["/"]).then(result=>{window.location.href = 'http://localhost:4200/ofertas-omni';});

}
  ngOnInit() {
  }

}
