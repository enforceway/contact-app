import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ContactService } from "../../services/contact.service";

@Component({
  styleUrls: ['app/modules/edit/edit.component.css'],
  selector: 'contact-list',
  templateUrl: 'app/modules/edit/edit.component.html'
})
export class EditComponent implements OnInit {
    private contact: any;
    private ifEditMode: boolean;
    constructor(private _location: Location,
                private _activatedRoute : ActivatedRoute, 
                private _router: Router,
                private _contactSvc: ContactService) {
    }
    public doSave() {
        this._contactSvc.updateContact(this.contact);
        alert("dosave");
    }
    public doAdd() {
        alert("doAdd");
    }
    ngOnInit() {
        this.contact = {};
        let contactId = this._activatedRoute.snapshot.params["id"];
        if(contactId != null && contactId != undefined) {
            this.ifEditMode = true;
        } else {
            this.ifEditMode = false;
        }
        if(this.ifEditMode == true) {
            this._contactSvc.getContact(contactId).then((data) => {
                if(data) {
                    // 如果取到了数值
                    this.contact = data;
                }
            });
        }
    }
    public submitForm(): void {
      alert(1231);
    }
    public cancel(): void {
        this._location.back();
    }
    
}