import { Component, OnInit } from '@angular/core';
import { InvDashboardService } from '../shared/inv-dashboard.service';
import { InvDashboard } from '../shared/inv-dashboard.model';
import { parse } from 'url';

@Component({
  selector: 'app-inv-dashboard',
  templateUrl: './inv-dashboard.component.html',
  styles: []
})
export class InvDashboardComponent implements OnInit {

  constructor(public service: InvDashboardService) { }
  datee = new Date();

  //init percentages
  IFIssued: number = 0.00;
  IFIssReturned: number = 0.00;
  IFEncoded: number = 0.00;
  IFNotEncoded: number = 0.00;
  IFOk: number = 0.00;
  IFVariance: number = 0.00;

  ESVerified: number = 0.0;
  ESVerReturned: number = 0.0;
  ESEncoded: number = 0.0;
  ESNotEncoded: number = 0.0;
  ESOk: number = 0.0;
  ESVariance: number = 0.0;

  resetDashboard() {
    this.service.ds = {
      //first
      BatchNo: null,
      FIssued: 0.0,
      FIssReturned: 0.0,
      FEncoded: 0.0,
      FNotEncoded: 0.0,
      FOk: 0.0,
      FVariance: 0.0,

      //second
      SVerified: 0.0,
      SVerReturned: 0.0,
      SEncoded: 0.0,
      SNotEncoded: 0.0,
      SOk: 0.0,
      SVariance: 0.0,
      TotNoOfCounts: 0.0
    }
  }

  calcPercentage(num){
    return parseFloat(((num/ this.service.ds.TotNoOfCounts) * 100).toFixed(2));
  }

  ngOnInit() {
    this.resetDashboard();
  }

  onSearch() {
    this.service.searhDashboardByBatchNo().
      subscribe(res => {
        //will pass the data
        this.service.ds = res as InvDashboard;
        //First Count
        this.IFIssued = this.calcPercentage(this.service.ds.FIssued);
        this.IFIssReturned = this.calcPercentage(this.service.ds.FIssReturned);
        this.IFEncoded = this.calcPercentage(this.service.ds.FEncoded);
        this.IFNotEncoded = this.calcPercentage(this.service.ds.FNotEncoded);
        this.IFOk = this.calcPercentage(this.service.ds.FOk);
        this.IFVariance = this.calcPercentage(this.service.ds.FVariance);
        //Second Count
        this.ESVerified = this.calcPercentage(this.service.ds.SVerified);
        this.ESVerReturned = this.calcPercentage(this.service.ds.SVerReturned);
        this.ESEncoded = this.calcPercentage(this.service.ds.SEncoded);
        this.ESNotEncoded = this.calcPercentage(this.service.ds.SNotEncoded);
        this.ESOk = this.calcPercentage(this.service.ds.SOk);
        this.ESVariance = this.calcPercentage(this.service.ds.SVariance);
      });
  }
}