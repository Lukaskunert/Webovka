import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  zprava = "";
  email = "";
  jmeno = "";

  constructor() { }

  ngOnInit() {
  }

  printData() {
    console.log(this.zprava);
    console.log(this.email);
    console.log(this.jmeno);
  }
}
