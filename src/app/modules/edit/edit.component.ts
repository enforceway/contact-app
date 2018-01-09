import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
// import contacts from "../../data/contacts";

@Component({
  styleUrls: ['app/modules/edit/edit.component.css'],
  selector: 'contact-list',
  templateUrl: 'app/modules/edit/edit.component.html'
})
export class EditComponent implements OnInit {
    private contact: any;
    private ifEditMode: boolean;
    constructor(private _location: Location, private _activatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
        // let contactId = this._activatedRoute.params.subscribe((params) => {
        //     let contactId = params['id'];
        //     let result = contacts.find(function(item) {
        //       return item.id == contactId;
        //     });
        //     this.ifEditMode = !contactId;
        //     if(result) {
    
        //         this.contact = result;
        //     } else {
                
        //     }
        // });
    }
    public submitForm(): void {
      alert(1231);
    }
    public cancel(): void {
        this._location.back();
    }
}
