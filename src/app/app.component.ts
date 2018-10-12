import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {Observable} from 'rxjs';
import { interval } from 'rxjs';
import $ from 'jquery';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temperatura:any;
  fecha:any;
  title = 'Thermometer';
  temperaturas:any;
  tiempo:any;
  timer:any;
  contador=interval(4000);
  constructor(private http: HttpClient){

    interval(4000).subscribe(x =>
      this.getData()
    );
  }
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.http.get('https://lit-thicket-52542.herokuapp.com/lasttemp').subscribe(data => {
      console.log(data);
      this.temperatura=data[0]["temperature"];
      this.fecha=data[0]["date"];
    });
    this.http.get('https://lit-thicket-52542.herokuapp.com/temps').subscribe(data => {
      console.log(data);
      this.temperaturas=data;
    });

  }
  cambiar(){
    console.log("se cambio"+this.timer);
    this.tiempo = this.timer;
  }
/*  public lineChartData:Array<any> = [
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
  }*/
}
