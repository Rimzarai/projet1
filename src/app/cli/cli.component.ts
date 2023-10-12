import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.css']
})
export class CliComponent implements OnInit{
 
  Message() {
    alert('Contact Zone !');
  }
constructor(){}

ngOnInit():void{

}

}
