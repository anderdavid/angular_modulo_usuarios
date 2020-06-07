import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { NavbarComponent } from './navbar.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    NavbarComponent,
    ViewUserComponent,
    CreateUserComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
