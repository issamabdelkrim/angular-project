import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input() art : any;
  @Input() num : any;
  constructor() { }

  ngOnInit() {
    console.log("sss")
  }

}
