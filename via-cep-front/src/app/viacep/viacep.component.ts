import { Component } from '@angular/core';
import { EnderecoDto, ViacepService } from './viacep.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cep-form',
  templateUrl: './viacep.component.html'
})
export class ViaCepComponent {
  cep: string = '';
  endereco?: EnderecoDto;
  erro = '';

  constructor(private enderecoService: ViacepService, private snackbar: MatSnackBar) {}

  buscar() {
  this.enderecoService.buscarPorCep(this.cep).subscribe({
    next: (res) => {
      this.endereco = res;
      this.erro = '';
    },
    error: () => {
      this.endereco = undefined;
      this.snackbar.open('CEP inválido ou erro na requisição.', 'Fechar', {
        duration: 3000,
      });
    }
  });
 }
}
