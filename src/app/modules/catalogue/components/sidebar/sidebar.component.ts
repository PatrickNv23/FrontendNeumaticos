import { Component } from '@angular/core';
import { filtersValue } from '../../../../data/constants/filtersValue.constants';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  filters = filtersValue;
  isOpen: boolean;

  constructor() {
    this.isOpen = true;
  }

  changeIsOpen() {
    this.isOpen = !this.isOpen;
  }
}
