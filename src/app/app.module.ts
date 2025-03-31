import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Já está importado
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common'; // Adicione esta linha

@NgModule({
    declarations: [
        AppComponent,
        CadastroComponent,
        ConsultaComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule, // Para ngModel
        CommonModule, // Para *ngIf e currency pipe
        RouterModule.forRoot(routes, { bindToComponentInputs: true })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }