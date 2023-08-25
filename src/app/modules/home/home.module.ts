import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MeasurecardComponent } from './components/measurecard/measurecard.component';



@NgModule({
  declarations: [
    HomeComponent,
    MeasurecardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
