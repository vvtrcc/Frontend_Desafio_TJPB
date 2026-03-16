import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from '../../services/cadastro';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {
  cadastro: any = { name: '', price: 0 };
  isEditMode: boolean = false;

  constructor(private cadastroService: CadastroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.cadastroService.getCadastroById(Number(id)).subscribe(data => {
        this.cadastro = data;
      });
    }
  }

  saveProduct() {
    this.cadastroService.createCadastro(this.cadastro).subscribe(() => {
        this.router.navigate(['/cadastros']);
    });
  }
}