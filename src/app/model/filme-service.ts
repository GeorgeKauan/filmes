import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Filme } from './filme';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilmeService {
/*ADICIONA O OBJETO DE SERVIÇO HTTPCLIENT PARA ACESSAR O API POR HTTP*/
  private http = inject(HttpClient)
  private API_URL = "http://www.omdbapi.com/"
  private API_KEY = "7b27a48d"

  /*Consulta por um filme dado o seu titulo*/
  obterFilme(titulo: string): Observable<Filme> {
    return this.http.get<Filme>(`${this.API_URL}?t=${titulo}&apikey=${this.API_KEY}`)
  }
  
}
