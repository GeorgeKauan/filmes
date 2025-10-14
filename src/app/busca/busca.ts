import { Component, inject } from '@angular/core';
import { FilmeService } from '../model/filme-service';

@Component({
  selector: 'app-busca',
  imports: [],
  templateUrl: './busca.html',
  styleUrl: './busca.css'
})
export class Busca {
  filmeService = inject(FilmeService)

  constructor(){

  }

  buscarPorTitulo() {
    this.filmeService.obterFilme('Star Wars').subscribe(
      filme => {
        console.log(filme)
      }
    )
  }
}
