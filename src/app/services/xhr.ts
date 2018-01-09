import { Injectable } from "@angular/core";
import { XHRBackend, Http, RequestOptions, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class XHRService extends Http {
    constructor(backend: XHRBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    request(url: string, opts:any = {method:'GET', data: {}}): Observable<Response> {
        return super.request(url, opts).catch((error: Response) => {
            console.log(error);           
            return Observable.throw(error);
        });
        
        let options: any = {
            method: opts.method,
            // url: url,
            headers: new Headers({ 'Content-Type': 'application/json' }),
        };
        if(opts.method == 'post') {
            options.body = JSON.stringify(opts.data);
        }
        let httpRequestor = this._http.request(url, new RequestOptions(options));
        
        // this._http.request(new Request(options)).toPromise().then((response) => {
        //     //do something...
        // });
        console.log('httpRequestor:', httpRequestor.subscribe);
        
        // return result;
        // return .map(resza=> {
        //     let _res = res.json();
        //     if(opts.id){
        //         for(let i=0; i<_res.length; i++){
        //             if(_res[i].id == opts.id){
        //                 _res = _res[i];
        //             }
        //         }
        //     }
        //     if(opts.collection){
        //         let temp:any = [];
        //         for(let i=0; i<_res.length; i++){
        //             if(_res[i].collection == opts.collection){
        //                 temp.push(_res[i]);
        //             }
        //         }
        //         _res = temp;
        //     }
        //     return _res;
        // })h
    }

}
