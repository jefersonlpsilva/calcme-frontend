import { Component, OnInit } from '@angular/core';
import { NomeService } from './nome.service';
import { Nome } from './nome';

@Component({
  selector: 'app-nome',
  templateUrl: './nome-info.component.html'
})

export class NomeInfoComponent  implements OnInit {

    //"strictPropertyInitialization": false
    registro: Nome ;
    messageShow: string = '';
    alertSalvoComSucesso: boolean = false;

    constructor(private nomeService: NomeService) { }

    ngOnInit(): void {
       this.registro = new Nome();
    }


    newNome(): void {
       this.messageShow = '';
       this.alertSalvoComSucesso = false;
       this.nomeService.save(this.registro).subscribe({
            next: registro => this.alertSalvoComSucesso = true,
            error: err =>  this.messageShow = err.message
       });
    }
}
