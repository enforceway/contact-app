import { Injectable, Inject } from "@angular/core";
import { Request, Response } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpInterceptor {
    beforeRequest(request: Request): Request {
        console.log("beforeRequest");
        return request;
    }
    afterRequest(res: Observable<Response>): Observable<any> {
        res.subscribe((data) => {
            console.log("after response with data:",data);
        });
        return res;
    }
}
