import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { XHRService } from "./xhr";
import { apiPath } from "../config/constants";

@Injectable()
export class ContactService {

    constructor(private xhrSvc: XHRService) {

    }

    getAllContacts() {
        return this.xhrSvc.request(`${apiPath}/getContactList`);
        // .assign({
        //     method: 'get'
        // }));
    }

}
