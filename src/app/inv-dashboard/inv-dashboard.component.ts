import { Component, OnInit } from '@angular/core';
import { InvDashboardService } from '../shared/inv-dashboard.service';

@Component({
  selector: 'app-inv-dashboard',
  templateUrl: './inv-dashboard.component.html',
  styles: []
})
export class InvDashboardComponent implements OnInit {

  constructor(private service: InvDashboardService) { }
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


  ngOnInit() {
  }

  onSearch() {
    this.service.searhDashboardByBatchNo1();
    
    this.IFIssued = parseFloat(((this.service.ds.FIssued / this.service.ds.TotNoOfCounts) * 100).toFixed(2));
    this.IFIssReturned = parseFloat(((this.service.ds.FIssReturned / this.service.ds.TotNoOfCounts) * 100).toFixed(2));
    this.IFEncoded = parseFloat(((this.service.ds.FEncoded / this.service.ds.TotNoOfCounts) * 100).toFixed(2));
    this.IFNotEncoded = parseFloat(((this.service.ds.FNotEncoded / this.service.ds.TotNoOfCounts) * 100).toFixed(2));
    this.IFOk = parseFloat(((this.service.ds.FOk / this.service.ds.TotNoOfCounts) * 100).toFixed(2));
    this.IFVariance = parseFloat(((this.service.ds.FVariance / this.service.ds.TotNoOfCounts) * 100).toFixed(2));

    //Second Count
    this.ESVerified = parseFloat(((this.service.ds.SVerified / this.service.ds.TotNoOfCounts) * 100).toFixed(2));
    this.ESVerReturned= parseFloat(((this.service.ds.SVerReturned / this.service.ds.TotNoOfCounts) * 100).toFixed(2));
    this.ESEncoded= parseFloat(((this.service.ds.SEncoded / this.service.ds.TotNoOfCounts) * 100).toFixed(2));
    this.ESNotEncoded= parseFloat(((this.service.ds.SNotEncoded / this.service.ds.TotNoOfCounts) * 100).toFixed(2));
    this.ESOk= parseFloat(((this.service.ds.SOk / this.service.ds.TotNoOfCounts) * 100).toFixed(2));
    this.ESVariance= parseFloat(((this.service.ds.SVariance / this.service.ds.TotNoOfCounts) * 100).toFixed(2));
  }
}
