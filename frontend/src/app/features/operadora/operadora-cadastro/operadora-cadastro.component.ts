import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-operadora-cadastro',
  templateUrl: './operadora-cadastro.component.html',
  styleUrls: ['./operadora-cadastro.component.css']
})
export class OperadoraCadastroComponent implements OnInit {

    taxas: any;

    ngOnInit(): void {
        this.taxas = [
            { descricao: "Taxa de entrega pela operadora", valor: 'R$ 1,50', ativo: true },
            { descricao: "Taxa de entrega pela loja", valor: 'R$ 2,50', ativo: true },
            { descricao: "Taxa de maquineta pela operadora", valor: 'R$ 2,80', ativo: true },
            { descricao: "Taxa de maquineta pela loja", valor: 'R$ 1,75', ativo: true }
        ]
    }
}
