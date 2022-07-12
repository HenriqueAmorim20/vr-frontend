import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandlerInterceptor } from './error-handler.interceptor';
import { ApiPrefixInterceptor } from './api-prefix.interceptor';
import { AppService } from '../app.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    AppService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
  ],
})
export class HttpModule {}
