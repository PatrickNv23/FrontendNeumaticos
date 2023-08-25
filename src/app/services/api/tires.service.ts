import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiresService {

  filter: any;

  constructor(private http: HttpClient) {
    this.filter = "";
  }

  getAllTires(): Observable<any> {
    return this.http.get("https://localhost:7031/api/tires");
  }

  setFilter(filter: any) {
    this.filter = filter;
    console.log(this.filter);
    this.getTiresByBrand().subscribe(data => {

      console.log(data);
    });
  }
  getTireById(id: any): Observable<any> {
    return this.http.get(`https://localhost:7031/api/tires/${id}`);
  }
  getTiresByBrand(): Observable<any> {
    return this.http.get(`https://localhost:7031/api/tires/brand=${this.filter}`);
  }

  getTiresByWidth(): Observable<any> {
    return this.http.get(`https://localhost:7031/api/tires/width=${this.filter}`);
  }

  getTiresByPrice(): Observable<any> {
    return this.http.get(`https://localhost:7031/api/tires/price=${this.filter}`);
  }

  getTiresByRing(): Observable<any> {
    return this.http.get(`https://localhost:7031/api/tires/ring=${this.filter}`);
  }
}
