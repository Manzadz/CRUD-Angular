import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import ListClientsComponent  from './components/list-clients/list-clients.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { AddEditClientComponent } from './components/add-edit-client/add-edit-client.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    ListClientsComponent,
    NavbarComponent,
    InvoiceComponent,
    AddEditClientComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
