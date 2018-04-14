import { ContactService } from "../services/contact.service";
import { XHRService } from '../services/xhr';
import { AlbumService } from "../services/album.service";
import { XHRConnectionBackend } from '../interceptor/httpInterceptorBackend';
import { HttpInterceptor } from '../interceptor/httpInterceptor';
import { Http, RequestOptions } from '@angular/http';
import { XHRFactory } from '../rebuild/httpFactory';
import { CanActivateGuard } from '../interceptor/loginCan';
import { DeCanActivateGuard } from '../interceptor/loginDeCan';

export default [
    ContactService,
    XHRService,
    AlbumService,
    CanActivateGuard,
    DeCanActivateGuard,
    // providers: [{ provide: APP_BASE_HREF, useValue: "/app" }],
    // {
    //     provide: Http,
    //     useFactory: XHRFactory,
    //     deps: [XHRConnectionBackend, RequestOptions]
    // }
]
