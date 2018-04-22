import { InterceptorService } from 'ng2-interceptors';
import { XHRBackend, RequestOptions } from '@angular/http';
 
export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions){
  let service = new InterceptorService(xhrBackend, requestOptions);
  // Add interceptors here with service.addInterceptor(interceptor)
  return service;
}