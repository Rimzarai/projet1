import { Component } from '@angular/core';

@Component({
  selector: 'app-iternet',
  templateUrl: './iternet.component.html',
  styleUrls: ['./iternet.component.css']
})
export class IternetComponent {
  afficherMessage() {
    alert("Merci d'aiguiller la réclamation vers le service ROC.");
  }

}
