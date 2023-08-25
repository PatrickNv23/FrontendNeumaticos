import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue.component';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { TireListComponent } from './components/tire-list/tire-list.component';
import { TireCardComponent } from './components/tire-card/tire-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FilterSelectorComponent } from './components/filter-selector/filter-selector.component';
import { ModalTireCardComponent } from './components/modal-tire-card/modal-tire-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CatalogueComponent,
    TireListComponent,
    TireCardComponent,
    PaginationComponent,
    SidebarComponent,
    FilterSelectorComponent,
    ModalTireCardComponent
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    FormsModule
  ]
})
export class CatalogueModule { }
