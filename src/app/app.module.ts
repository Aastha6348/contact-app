import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { GetContactComponent } from './component/get-contact/get-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SortDirective } from './directives/sort-name/sort.name';
import { FormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import {FilterName, FilterAddress, FilterCompany} from './pipes';
@NgModule({
  declarations: [
    AppComponent,
    SortDirective,
    GetContactComponent,
    FilterName,
    FilterAddress,
    FilterCompany
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
