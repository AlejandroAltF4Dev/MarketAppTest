import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { LayoutComponent } from './layout/layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { PageTitleComponent } from './layout/page-title/page-title.component';
import { CoreModule } from './layout/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {UrlSerializer} from "@angular/router";
import {CustomUrlSerializer} from "./layout/urlserializer";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    LayoutModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule,
    HotToastModule.forRoot({
      position: 'bottom-center',
      dismissible: true,
      theme: 'snackbar',
    }),
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: environment.baseUrl,
        httpMethods: {
          PUT: 'PATCH',
        },
      },
    },
/*
    { provide: UrlSerializer, useClass: CustomUrlSerializer },
*/
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
  exports: [PageTitleComponent],
})
export class AppModule {}
