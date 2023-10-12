import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IternetComponent } from './iternet/iternet.component';
import { HomeComponent } from './home/home.component';
import { ServeurComponent } from './serveur/serveur.component';
import { CliComponent } from './cli/cli.component';
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


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'inter',component:InterComponent},
  {path:'iternet',component:IternetComponent},
  {path:'serveur',component:ServeurComponent},
  {path:'qal',component:QalComponent},
  {path:'acc',component:AccComponent},
  {path:'veri',component:VeriComponent},
  {path:'cli',component:CliComponent},
  {path:'zone',component:ZoneComponent},
  {path:'bae',component:BaeComponent},
  {path:'fini',component:FiniComponent},
  {path:'part2',component:Part2Component},
  {path:'coor',component:CoorComponent},
  {path:'emi',component:EmiComponent},
  {path:'ss',component:SsComponent},
  {path:'der',component:DerComponent},
  {path:'deb',component:DebComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
