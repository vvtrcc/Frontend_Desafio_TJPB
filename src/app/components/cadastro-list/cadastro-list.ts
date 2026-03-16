import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../../services/cadastro';

@Component({
  selector: 'app-cadastro-list',
  templateUrl: './cadastro-list.component.html',
  styleUrls: ['./cadastro-list.component.css']
})
export class CadastroListComponent implements OnInit {
  cadastros: any[] = [];

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.cadastroService.getAllCadastros().subscribe(data => {
      this.cadastros = data;
    });
  }
}