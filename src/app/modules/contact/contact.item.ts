/**
 * core
*/
import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router } from "@angular/router";


@Component({
    styleUrls: ['app/modules/contact/contact.item.css'],
    selector: 'contact-item',
    templateUrl: 'app/modules/contact/contact.item.html'
})
export class ContactItemComponent implements OnInit {
    @Input() contact: any = {};
    public goToDetail(): void {
        this._router.navigateByUrl("/detail/" + this.contact.id);
    }
    constructor(private _router: Router) {
        
    }
    ngOnInit() {
        
    }
}
