import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': '7b0935bfcamshbac80d765728a94p11adb2jsnd711fa8e8f3c',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
              },
              setParams: {
                key: '9850eacfd5fe446daf98a90620bb9967',
              }
        });
        return next.handle(req);
    }
}