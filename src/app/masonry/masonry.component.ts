import { Component, Input, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
    selector: "app-masonry",
    templateUrl: "./masonry.component.html",
    styleUrls: ["./css/masonry.m.component.css", "./css/masonry.s.component.css", "./css/masonry.xs.component.css"]
})
export class MasonryComponent implements OnInit{
    @Input() pageHeight !: number;
    @Input() column : number[] = [0,3,4,5,6];
    columnNumber !: number[];
    
    constructor(private _breakpointObserver: BreakpointObserver){}

    ngOnInit() {
        this._breakpointObserver.observe([
          Breakpoints.XSmall,
          Breakpoints.Small,
          Breakpoints.Medium,
          Breakpoints.Large,
          Breakpoints.XLarge
        ]).subscribe( (state: BreakpointState) => {
          if (state.breakpoints[Breakpoints.XSmall]) {
                this.columnNumber = this.arrayCalculation(this.column[0]);
          }
          if (state.breakpoints[Breakpoints.Small]) {
                this.columnNumber = this.arrayCalculation(this.column[1]);
          }
          if (state.breakpoints[Breakpoints.Medium]) {
                this.columnNumber = this.arrayCalculation(this.column[2]);
          }
          if (state.breakpoints[Breakpoints.Large]) {
                this.columnNumber = this.arrayCalculation(this.column[3]);
          }
          if (state.breakpoints[Breakpoints.XLarge]) {
                this.columnNumber = this.arrayCalculation(this.column[4]);
          }
        });
    }

    arrayCalculation(number: number){
        return Array(number).fill(1).map((x, i) => i + 1);
    }

}