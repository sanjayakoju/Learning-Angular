import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './parent/child/child.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NumberValidatorDirective} from './core/directive/number-validator.directive';
import {MyserviceService} from "./service/myservice.service";
import {MyPipePipe} from './core/pipe/my-pipe.pipe';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MyInterceptorInterceptor} from "./core/interceptor/my-interceptor.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    NumberValidatorDirective,
    MyPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  /**
   *  App Module provided same instance of service is application wide (app component)i.
   *   Single Service is serve
   */
  providers: [MyserviceService,
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
