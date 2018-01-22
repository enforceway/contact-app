import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { APP_BASE_HREF } from "@angular/common";
import appRoutes from "./config/routes";
import declartions from "./config/declaration.list";
import { XHRService } from "./services/xhr";
import { ContactService } from "./services/contact.service";
import { AlbumService } from "./services/album.service";
import { HttpModule } from '@angular/http';
import { CanActivateGuard } from './interceptor/loginCan';
import { DeCanActivateGuard } from './interceptor/loginDeCan';

let routesRef = RouterModule.forRoot(appRoutes, {useHash: true});

@NgModule({
    // providers: [{ provide: APP_BASE_HREF, useValue: "/app" }],
    declarations: declartions,
    imports: [BrowserModule, routesRef, FormsModule, HttpModule],
    bootstrap: [AppComponent],
    providers   : [ContactService, XHRService, AlbumService, CanActivateGuard, DeCanActivateGuard]
})
export class AppModule {
}
