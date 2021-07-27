import { Component, OnInit } from '@angular/core';

export interface Employee{
  id: string;
  name: string;
  email: string;
  password: string;

}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  //making a array for employee interface(hard code)
  employees: Employee[] = [
    {id: '1', name: "Chamod", email: 'uv@gmail.com' , password: '123'},
    {id: '2', name: "Lakshan", email: 'lk@gmail.com' , password: '456'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  show(){
    alert('hello uv');
    console.log('uv');
  }

  done(){
    alert('done');
    console.log('done');
  }

}
