import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IternetComponent } from './iternet/iternet.component';
import { HomeComponent } from './home/home.component';
import { ServeurComponent } from './serveur/serveur.component';
import { CliComponent } from './cli/cli.component';
import { FormsModule } from '@angular/forms';
import { QalComponent } from './qal/qal.component';
import { AccComponent } from './acc/acc.component';
import { VeriComponent } from './veri/veri.component';
import { InterComponent } from './inter/inter.component';
import { ZoneComponent } from './zone/zone.component';
import { BaeComponent } from './bae/bae.component';
import { FiniComponent } from './fini/fini.component';
import { Part2Component } from './part2/part2.component';
import { CoorComponent } from './coor/coor.component';
import { EmiComponent } from './emi/emi.component';
import { SsComponent } from './ss/ss.component';
import { DerComponent } from './der/der.component';
import { DebComponent } from './deb/deb.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IternetComponent,
    HomeComponent,
    ServeurComponent,
    CliComponent,
    QalComponent,
    AccComponent,
    VeriComponent,
    InterComponent,
    ZoneComponent,
    BaeComponent,
    FiniComponent,
    Part2Component,
    CoorComponent,
    EmiComponent,
    SsComponent,
    DerComponent,
    DebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
