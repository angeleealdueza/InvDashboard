import { Injectable } from '@angular/core';
import { InvDashboard } from './inv-dashboard.model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InvDashboardService {
 // formData: InvDashboard;

  readonly rootURL = 'http://localhost:27117/api';
  ds = new InvDashboard;
  //readonly rootURL = 'http://localhost:27117/api/inventory?batchNo=557';

  constructor(private http: HttpClient) { }

 /* refreshDashboard(){
    this.http.get(this.rootURL + '/Inventory?' + this.formData.BatchNo)
    .toPromise()
    .then(res => this.dashboard = res as InvDashboard);
  }*/
//+ this.formData.BatchNo

  /*searhDashboardByBatchNo(){
    this.http.get('http://localhost:27117/api/Inventory?BatchNo=557')
    .toPromise()
    .then(res => this.ds = res as InvDashboard);
  }*/

  searhDashboardByBatchNo1(){
    this.http.get('http://localhost:27117/api/Inventory?BatchNo='+ this.ds.BatchNo)
    .toPromise()
    .then(res => this.ds = res as InvDashboard);


  }
}
