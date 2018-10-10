import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {Observable} from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  temperatura:any;
  fecha:any;
  title = 'thermometer';
  temperaturas:any;
  tiempo:any;
  timer:any;
  constructor(private http: HttpClient){
    this.tiempo =4;
    interval(this.tiempo).subscribe(x =>
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
}
