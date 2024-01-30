import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ListClientsComponent from './components/list-clients/list-clients.component';
import { AddEditClientComponent } from './components/add-edit-client/add-edit-client.component';
import { InvoiceComponent } from './components/invoice/invoice.component';



const routes: Routes = [
  {path: '', component: ListClientsComponent},
    {path: 'add', component: AddEditClientComponent},
    {path: 'edit/:id', component: AddEditClientComponent},
    {path: 'invoice/:id', component: InvoiceComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
