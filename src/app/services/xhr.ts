import { Injectable } from "@angular/core";
import { XHRBackend, Http, RequestOptions, RequestOptionsArgs, Headers, Response, ResponseContentType, RequestMethod, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { RequestOptsIn, RequestOptsClass} from "../interfaces/request.opts";

@Injectable()
export class XHRService {
    constructor(private _http: Http) {

    }

    request(url: string, opts?: RequestOptsClass) {
        // 如果没有传入可选项
        if(!opts) {
            opts = new RequestOptsClass();
            opts.method = 'Get';
            opts.param = {};
            opts.urlParam = {};
        }

        // 如果传入了参数
        opts.method = opts.method.toUpperCase().substr(0,1) + opts.method.toLowerCase().substr(1);
        // 如果写入的method名字正确
        if(RequestMethod[opts.method] == undefined) {
            console.error("no support for request type '" + opts.method + "'");
            return;
        }
        
        let options: any = {
            method: RequestMethod[opts.method],
            url: url,
            headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }),
            responseType: ResponseContentType.Json,
            withCredentials: true,
            body: null,
            search: null
        };

        // request body params
        if(RequestMethod[opts.method] == RequestMethod.Post) {
            options.body = JSON.stringify(opts.param);
        }

        // set url param
        let searchParams = new URLSearchParams();
        if(opts.urlParam) {
            for(let attr in opts.urlParam) {
                searchParams.set(attr, opts.urlParam[attr]);
            }
        }
        options.search = searchParams;

        let httpRequestor = this._http.get(url, new RequestOptions(options));
        return httpRequestor.toPromise().then((response) => {
            let res = response.json();
            return res.data;
        }).catch((error) => {console.log(error)});
        // httpRequestor.toPromise
        // this._http.request(new Request(options)).toPromise().then((response) => {
        //     //do something...
        // });
        
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
