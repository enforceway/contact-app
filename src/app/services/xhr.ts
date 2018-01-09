import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";

@Injectable()
export class XHRService {

    constructor(private _http: Http) {

    }

    request(url: string, opts:any = {method:'GET', data: {}}) {
        let options: any = {
            method: opts.method,
            // url: url,
            headers: new Headers({ 'Content-Type': 'application/json' }),
        };
        if(opts.method == 'post') {
            options.body = JSON.stringify(opts.data);
        }
        let httpRequestor = this._http.request(url, options);
        console.log('httpRequestor:', httpRequestor._subscribe);
        
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
