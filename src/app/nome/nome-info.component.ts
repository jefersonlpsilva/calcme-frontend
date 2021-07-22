import { Component, OnInit } from '@angular/core';
import { NomeService } from './nome.service';
import { Nome } from './nome';

@Component({
  selector: 'app-nome',
  templateUrl: './nome-info.component.html'
})

export class NomeInfoComponent  implements OnInit {

    registro: Nome ;
    constructor(private nomeService: NomeService) { }

    ngOnInit(): void {
       this.registro = new Nome();
    }

    enviar(): void {
       this.nomeService.save(this.registro).subscribe({
            next: registro =>  console.log('nome salvo'+registro.nome),
            error: err =>  console.log(err.message)
       });
    }
}
