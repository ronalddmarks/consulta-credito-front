import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-nfse',
  templateUrl: './consulta-nfse.component.html',
  styleUrls: ['./consulta-nfse.component.css']
})
export class ConsultaNfseComponent {
  numeroNfse: string = '';
  erro: string = '';

  constructor(private router: Router) {}

  consultar() {
    if (!this.numeroNfse || this.numeroNfse.trim().length === 0) {
      this.erro = 'Informe um número válido de NFS-e.';
      return;
    }

    this.erro = '';
    this.router.navigate(['/resultados', this.numeroNfse.trim()]);
  }
}
