import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmeService } from '../model/filme-service';
import { Filme } from '../model/filme';

@Component({
  selector: 'app-busca',
  imports: [CommonModule, FormsModule],
  templateUrl: './busca.html',
  styleUrls: ['./busca.css']
})
export class Busca {
  filmeService = inject(FilmeService);
  filme?: Filme;
  lista?: any[];
  tipoConsulta: string = 't'; // 't' = individual, 's' = lista

  constructor() {}

  buscarPorTitulo(titulo: string) {
    if (!titulo || titulo.trim() === '') {
      this.filme = undefined;
      this.lista = undefined;
      return;
    }

    if (this.tipoConsulta === 't') {
      this.filmeService.obterFilme(titulo).subscribe(
        resultado => {
          this.filme = resultado;
          this.lista = undefined;
        },
        erro => {
          console.error('Erro ao buscar filme:', erro);
          this.filme = undefined;
        }
      );
    } else {
      this.filmeService.obterLista(titulo).subscribe(
        resultado => {
          this.lista = resultado.Search; 
          this.filme = undefined;
        },
        erro => {
          console.error('Erro ao buscar lista:', erro);
          this.lista = undefined;
        }
      );
    }
  }
}
