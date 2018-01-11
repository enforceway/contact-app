import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { XHRService } from "./xhr";
import { apiPath } from "../config/constants";
import { RequestOptsClass, RequestOptsIn } from "../interfaces/request.opts";

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

    getContact(contactId: any) {
        let param: RequestOptsIn = {method: "Get", urlParam: {id: contactId}};
        return this.xhrSvc.request(`${apiPath}/getContactById`, param);
    }

    updateContact(contactObj: any) {
        let param: RequestOptsIn = {method: "Get", param: contactObj};
        return this.xhrSvc.request(`${apiPath}/updateContact`, param);
    }

}
