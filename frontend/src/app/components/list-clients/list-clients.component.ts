import { Component } from '@angular/core';
import { Client } from '../../interfaces/client';
import { ClientService } from '../../services/client.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css'
})


export default class ListClientsComponent {
  listClients: Client[] = []
  loading: boolean = false;

  constructor(private _clientService: ClientService, private toastr: ToastrService) { }
  ngONinit(): void {
    this.getListClients();

  }

  getListClients() {
    this.loading = true;
    this._clientService.getListClients().subscribe((data) => {
      this.listClients = data;
      this.loading = false
    }) 
  }

  deleteClient(id:number) {
    this.loading = true;
    this._clientService.deleteClient(id).subscribe(() =>{
      this.loading = false;
      this.getListClients()
      this.toastr.warning('El producto fue eliminado con exito', 'Producto elminado')
    })
  }
  
  }
