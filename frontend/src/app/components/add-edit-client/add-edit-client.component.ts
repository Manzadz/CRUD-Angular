import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../interfaces/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrl: './add-edit-client.component.css'
})
export class AddEditClientComponent {

  form: FormGroup;
  constructor(private fb: FormBuilder, private _clientService: ClientService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      service: ['', Validators.required],
      price: [null, Validators.required]
    })
  }

  addClient() {
    console.log(this.form.get('name')?.value)

    const client: Client = {
      name: this.form.value.name,
      service: [],
      price: []
    }
    this._clientService.saveClient(client ).subscribe(() => {
      console.log('Cliente agregado')
    })
  } 
}

 