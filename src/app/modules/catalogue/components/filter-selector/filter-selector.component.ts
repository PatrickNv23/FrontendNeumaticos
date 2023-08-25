import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TiresService } from 'src/app/services/api/tires.service';


@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css']
})
export class FilterSelectorComponent {
  @Input() filter: any;

  selectedOption: any;

  constructor(private tiressService: TiresService, private router: Router) {

  }

  capture() {
    this.tiressService.setFilter(this.selectedOption);
    this.router.navigate(["/catalogue"]);
  }








}
