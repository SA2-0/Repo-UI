import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { HeaderComponent } from './components/header/header.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { CloudServiceComponent } from './pages/flow/cloud-service/cloud-service.component';
import { FlowComponent } from './pages/flow/flow.component';
import { ProcessTypeComponent } from './pages/flow/process-type/process-type.component';
import { SharedModule } from './shared/shared.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true
};



@NgModule({
  declarations: [
    AppComponent,
    FlowComponent,
    CloudServiceComponent,
    ProcessTypeComponent,
    DefaultLayoutComponent,
    SidenavComponent,
    UserMenuComponent,
    MessagesComponent,
    HeaderComponent,
    GlobalSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

