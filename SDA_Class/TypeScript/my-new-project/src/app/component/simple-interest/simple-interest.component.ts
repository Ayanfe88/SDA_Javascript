import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css']
})
export class SimpleInterestComponent implements OnInit {
 name: string = 'Simple Interest'
  constructor() { }

  ngOnInit(): void {
  }

}
