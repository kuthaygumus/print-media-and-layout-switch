import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'print_specific_components';

  isAccordionOpen: boolean = false;
  isPPBAccordionOpen: boolean = false;


  isFeatureFlagActive: boolean = false;


  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }

  togglePPBAccordion() {
    this.isPPBAccordionOpen = !this.isPPBAccordionOpen;
  }

  print() {
    window.print();
  }
}
