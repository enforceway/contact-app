import { OnInit } from "@angular/core";

export interface RequestOptsIn {
    method: string;
    param: any;
    urlParam: Object;
}
export class RequestOptsClass implements RequestOptsIn, OnInit {

    method: string;
    param: Object;
    urlParam: Object;
    constructor() {

    }

    ngOnInit() {
        this.method = 'get';
        this.param = {};
        this.urlParam = {};
    }

}