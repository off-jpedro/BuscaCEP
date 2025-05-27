// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViaCepModule } from './viacep/viacep.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa o módulo correto

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ViaCepModule,
    BrowserAnimationsModule // ✅ agora está corretamente importado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
