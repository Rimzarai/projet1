import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serveur',
  templateUrl: './serveur.component.html',
  styleUrls: ['./serveur.component.css']
})
export class ServeurComponent implements OnInit {
  afficherMessage() {
    alert('Contact Zone!');
  }
  constructor(){}
  ngOnInit():void{
   
    

  }






}
