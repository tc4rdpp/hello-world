import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  PICTUREPARK_CONFIGURATION,
  PictureparkConfiguration,
  AuthService,
  AccessTokenAuthService
} from '@picturepark/sdk-v1-angular';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { MaterialElevationDirective } from './directives/material-elevation.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    ContentDetailComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent,
    ResultCardComponent,
    MaterialElevationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: AuthService, useClass: AccessTokenAuthService },
    {
      provide: PICTUREPARK_CONFIGURATION,
      useValue: {
        apiServer: 'https://api.01.qa-picturepark.com',
        customerAlias: 'localtest',
        accessToken:
          '2fa4151d30d5810b16e55b34b5fc0e9b166f5e06b40f9de6473eb657f6dafa1b'
      } as PictureparkConfiguration
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
