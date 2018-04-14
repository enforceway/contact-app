import { XHRConnectionBackend } from "../interceptor/httpInterceptorBackend";
import { RequestOptions, Http } from "@angular/http";

export function XHRFactory(xhrConnectionBackend: XHRConnectionBackend, requestOpts: RequestOptions): Http {
    debugger;
    return new Http(xhrConnectionBackend, requestOpts);
}