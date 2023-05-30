import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contrato-cadastro',
  templateUrl: './contrato-cadastro.component.html',
  styleUrls: ['./contrato-cadastro.component.css']
})
export class ContratoCadastroComponent implements OnInit {

    empresas: any;

    operadoras: any;

    taxas: any;

    ngOnInit(): void {
        this.empresas = [
            { label: 'Cometa Supermercados Ltda', value: 0 },
            { label: 'Mirelly Supermercados Ltda', value: 1 },
            { label: 'Baratão Supermercados Ltda', value: 2 },
            { label: 'Pinheiro Supermercados Ltda', value: 3 }
        ];

        this.operadoras = [
            { label: 'Ifood', value: 0 },
            { label: 'Ubearts', value: 1 },
            { label: 'Zé', value: 2 }
        ];

        this.taxas = [
            { descricao: "Taxa de entrega pela operadora", valor: 'R$ 1,50', ativo: true },
            { descricao: "Taxa de entrega pela loja", valor: 'R$ 2,50', ativo: false }
        ]
    }
}
