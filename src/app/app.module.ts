import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { HttpModule } from './http/http.module';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    LayoutModule,
    FormsModule,
    ComponentsModule,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
