import { ContactService } from "../services/contact.service";
import { XHRService } from '../services/xhr';
import { AlbumService } from "../services/album.service";
import { Http, RequestOptions, Request, XHRBackend, ConnectionBackend, XHRConnection } from '@angular/http';
import { CanActivateGuard } from '../interceptor/loginCan';
import { DeCanActivateGuard } from '../interceptor/loginDeCan';
import { PubSubService } from "../services/pubsup.service";
import { InterceptorService } from 'ng2-interceptors';
import { interceptorFactory } from "../rebuild/httpFactory";
import { ServerURLInterceptor } from "../interceptor/server.interceptor";
import { provideInterceptorService } from 'ng2-interceptors';

export default [
    ContactService,
    XHRService,
    AlbumService,
    CanActivateGuard,
    DeCanActivateGuard,
    // ServerURLInterceptor,
    // {
    //     provide: InterceptorService,
    //     useFactory: interceptorFactory,
    //     deps: [XHRBackend, RequestOptions, ServerURLInterceptor]
    // }
    provideInterceptorService([
        ServerURLInterceptor
    ])
    // providers: [{ provide: APP_BASE_HREF, useValue: "/app" }],
]
