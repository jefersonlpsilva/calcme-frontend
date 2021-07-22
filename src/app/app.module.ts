import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NomeInfoComponent } from './nome/nome-info.component';



@NgModule({
  declarations: [
    AppComponent,
    NomeInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {
          path: 'nomes' ,component: NomeInfoComponent
        },
        {
          path: '' ,redirectTo: 'nomes', pathMatch:'full'
        }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
