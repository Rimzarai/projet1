import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  valeur: string = '';
  conditionVerifiee: boolean = false;

  verifierCondition() {
    this.conditionVerifiee = this.valeur.startsWith('73');
  }

}
