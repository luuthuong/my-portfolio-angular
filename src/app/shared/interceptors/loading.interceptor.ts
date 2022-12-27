import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AppInjector } from 'src/app/services/app-injector.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const spinner: NgxSpinnerService = AppInjector.getService(NgxSpinnerService)
    spinner.show();
    return next.handle(request).pipe(finalize(()=>{
      spinner.hide();
    }));
  }
}
