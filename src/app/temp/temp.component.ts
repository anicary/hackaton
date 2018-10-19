import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {Observable} from 'rxjs';
import { interval } from 'rxjs';
import $ from 'jquery';
import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  temperatura:any=Array<{temperature: any, date: any}>();
  fecha:any;
  title = 'Thermometer';
  temperaturas:any;
  tiempo:any;
  timer:any;
  contador=interval(4000);
  constructor(private http: HttpClient,private titleService: Title) {
    interval(4000).subscribe(x =>
      this.getData()
    );
     this.titleService.setTitle( "TECNM TEPIC | TEMPERATURAS" );
  }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.http.get('https://lit-thicket-52542.herokuapp.com/lasttemp').subscribe(data => {
      console.log(data);
      this.temperatura=data["temperatura"];
      //this.fecha=data[0]["date"];
    });
    this.http.get('https://lit-thicket-52542.herokuapp.com/temps').subscribe(data => {
     this.temperaturas=data["temperaturas"];
    });
  }
  cambiar(){
    console.log("se cambio"+this.timer);
    this.tiempo = this.timer;
  }
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40]
  ];
  public lineChartLabels:Array<any> = ['Enero', 'Febrero', 'Marzp', 'Abril', 'Mayo', 'Junio', 'Julio'];
  public lineChartType:string = 'line';


  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }
  public chartClicked(e:any):void {
    console.log(e);
  }
  public chartHovered(e:any):void {
    console.log(e);
  }

}
