/**
 * core
*/
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ContactService } from "../../services/contact.service";
// import contacts from "../../data/contacts";

@Component({
  styleUrls: ['app/modules/contact/contacts.component.css'],
  selector: 'contact-list',
  templateUrl: 'app/modules/contact/contacts.component.html'
})
export class HomeComponent implements OnInit {
  private contacts: Array<Object>;
  constructor(private _router: Router, private _contactSvc: ContactService) {
    // console.log("homeom");
    //this._router.navigate(["/"]);
  }
  ngOnInit() {
    this._contactSvc.getAllContacts().then((allContacts) => {
        this.contacts = allContacts;
    });
    // .subscribe((data: any) => {
    //   console.log(data);
    // });
    // let allLocalContacts: string = localStorage.getItem(favoriteStorageName);
    // if(!allLocalContacts) {
    //     this.contacts = contacts;
    // }
    // console.log(this._contacts);

  }
}
