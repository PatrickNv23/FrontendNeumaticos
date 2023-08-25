import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TiresService } from 'src/app/services/api/tires.service';

@Component({
  selector: 'app-tire-list',
  templateUrl: './tire-list.component.html',
  styleUrls: ['./tire-list.component.css']
})
export class TireListComponent implements OnInit, OnChanges, OnDestroy {

  tires: any[];
  filterName: string;
  constructor(private tiresService: TiresService) {
    this.tires = [];
    this.filterName = this.tiresService.filter;
  }

  ngOnInit(): void {
    this.tiresService.getAllTires().subscribe((data) => {
      this.tires = data;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterName']) {
      this.tiresService.getTiresByBrand().subscribe((data) => {
        this.tires = data;
      })
    }
  }

  ngOnDestroy(): void {
    this.filterName = this.tiresService.filter;
  }

}

