import { Component } from '@angular/core';
import { Invoice } from '../../interfaces/invoice';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {
    listInvoices: Invoice[] = [
      { id: 1, name: 'Jose', service: 'Plan plus', Quantity: 1, unitPrice: 25, amount: 25 },
    ]

}
