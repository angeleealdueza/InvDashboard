import { Injectable } from '@angular/core';
import { InvDashboard } from './inv-dashboard.model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InvDashboardService {

  readonly rootURL = 'http://192.168.50.50/invDashboard/api';
  //readonly rootURL = 'http://localhost:27117/api';
  
  ds = new InvDashboard;

  constructor(private http: HttpClient) { }

  searhDashboardByBatchNo(){
    return this.http.get(this.rootURL + '/Inventory?BatchNo=' + this.ds.BatchNo);
  }

    /*this.http.get(this.rootURL + '/Inventory?BatchNo='+ this.ds.BatchNo)
    .toPromise()
    .then(res => this.ds = res as InvDashboard);*/
    
    /*
    this.ds = {
    BatchNo: 557,
    FIssued: 11,
    FIssReturned: 9,
    FEncoded: 2,
    FNotEncoded: 444,
    FOk: 1,
    FVariance: 1,

    //second
    SVerified: 6,
    SVerReturned: 4,
    SEncoded: 2,
    SNotEncoded: 444,
    SOk: 1,
    SVariance: 1,
    
    //tot no.
    TotNoOfCounts: 446
  }
*/

}
