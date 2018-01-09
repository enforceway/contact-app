import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
// import contacts from "../../data/contacts";

@Component({
    styleUrls: ['app/modules/detail/detail.component.css'],
    selector: 'detail',
    templateUrl: 'app/modules/detail/detail.component.html'
})
export class DetailComponent implements OnInit, OnDestroy {
    private detail: any;
    public goToEdit(): void {
        this._router.navigateByUrl("/edit/" + this.detail.id);
    }

    constructor(private _activatedRoute : ActivatedRoute, private _router: Router) {
      
    }

    ngOnInit() {
        
        let contactId = this._activatedRoute.snapshot.params["id"];
        console.log("contactId:", contactId);
        // let result = contacts.find(function(item: any) {
        //     return item.id == contactId;
        // });
        // if(result) {
        //     this.detail = result;
        // }

    }

    ngOnDestroy() {

    }

}
