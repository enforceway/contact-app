import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { ContactService } from '../../services/contact.service';

@Component({
    styleUrls: ['app/modules/detail/detail.component.css'],
    selector: 'contact-detail',
    templateUrl: 'app/modules/detail/detail.component.html'
})
export class DetailComponent implements OnInit, OnDestroy {
    private contact: any;
    public goToEdit(): void {
        this._router.navigateByUrl("/edit/" + this.contact.id);
    }
    public collectTheContact(): void {
        this._contactSvc.setFavorite(this.contact.id).then((data) => {
            this.contact.if_like = data.if_like;
        });
    }
    constructor(private _activatedRoute : ActivatedRoute, 
                private _router: Router,
                private _contactSvc: ContactService) {
    }
    ngOnInit() {
        this.contact = {};
        let contactId = this._activatedRoute.snapshot.params["id"];
        if(!contactId) {
            alert("缺少参数，跳转到首页");
            return;
        }
        this._contactSvc.getContactWithLikes(contactId).then((data) => {
            if(data) {
                // 如果取到了数值
                this.contact = data;
            }
        });
    }

    ngOnDestroy() {

    }

}
