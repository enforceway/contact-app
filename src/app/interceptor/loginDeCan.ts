import { Injectable, Inject } from "@angular/core";
import { CanActivate } from "@angular/router";
import { XHRService } from "../services/xhr";
import { Observable } from 'rxjs/Observable';
import { apiPath } from "../config/constants";

@Injectable()
export class DeCanActivateGuard implements CanActivate {
    constructor(private _xhrSvc: XHRService) {

    }
    canActivate() {
        return new Observable<boolean>((observer: any) => {
            this._xhrSvc.request(`${apiPath}/ifLoginActive`).then((data) => {
                observer.next();
                console.log(data);
                observer.complete();
            }).catch((error) => {
                observer.error();
            });
        });
    }
}
