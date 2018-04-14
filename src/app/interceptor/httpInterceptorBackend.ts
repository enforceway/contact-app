import { HttpInterceptor } from "../interceptor/httpInterceptor";
import { ConnectionBackend, XHRBackend, Request, XHRConnection } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class XHRConnectionBackend implements ConnectionBackend {

    constructor(private _httpInterceptor: HttpInterceptor,
                private _xhrBackend: XHRBackend) {
    }

    createConnection(request: Request): XHRConnection {
        let interceptor = this._httpInterceptor;
        let req: Request;
        if(interceptor.beforeRequest) {
            req = interceptor.beforeRequest(request);
        }
        let result: XHRConnection = this._xhrBackend.createConnection(req);
        result.response = this._httpInterceptor.afterRequest(result.response);
        return result;
    }


}
