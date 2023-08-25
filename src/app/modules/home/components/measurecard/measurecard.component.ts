import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filtersValue } from 'src/app/data/constants/filtersValue.constants';
@Component({
  selector: 'app-measurecard',
  templateUrl: './measurecard.component.html',
  styleUrls: ['./measurecard.component.css']
})
export class MeasurecardComponent {

  filters: any;

  constructor(private router: Router) {
    this.filters = filtersValue;
  }

  getCatalogue() {
    this.router.navigateByUrl("/catalogue");
  }
}
