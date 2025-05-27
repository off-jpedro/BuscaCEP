import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface EnderecoDto {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

@Injectable({
  providedIn: 'root'
})
export class ViacepService {
  private apiUrl = 'http://localhost:8080/api/endereco';

  constructor(private http: HttpClient) {}

  buscarPorCep(cep: string): Observable<EnderecoDto> {
    return this.http.get<EnderecoDto>(`${this.apiUrl}/${cep}`);
  }
}
