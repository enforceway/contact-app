import {Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { ContactService } from '../../services/contact.service';

@Component({
    styleUrls: ['app/modules/favorites/favorites.component.css'],
    selector: 'contact-favorites',
    templateUrl: 'app/modules/favorites/favorites.component.html'
})
export class FavoriteComponent implements OnInit {
    private contacts: Array<any>;
    constructor(
        private _router: Router,
        private _contactSvc: ContactService) {
    }

    ngOnInit() {
        this._contactSvc.getFavoriteContacts().then((data) => {
          if(data) {
              // 如果取到了数值
              this.contacts = data;
          }
        });
    }
}
