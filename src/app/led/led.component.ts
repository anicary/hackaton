import { Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Title} from '@angular/platform-browser';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {Observable} from 'rxjs';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
/*
GET: Obtener todos los estatus de leds
https://led-api-rest.herokuapp.com/leds
GET: Obtener el último estatus
https://led-api-rest.herokuapp.com/lastled
POST: Guardar un nuevo estatus, recibe json {"status": true\false}.
*/
@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit {
  leds:any;
  mainled:any=Array<{status: any, date: any}>();
  constructor(private http: HttpClient,private titleService: Title ) {
    this.titleService.setTitle( "TECNM TEPIC | LED" );
    interval(4000).subscribe(x =>
      this.getData()
    );
  }
  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.get('https://led-api-rest.herokuapp.com/leds').subscribe(data => {
      console.log(data);
      this.leds=data["leds"];
    });
    this.http.get('https://led-api-rest.herokuapp.com/lastled').subscribe(data => {
      console.log(data);
      this.mainled=data["leds"];
    });
  }
  ledChange(event){
    const headers = new Headers(
      {
        'Content-Type': 'application/json'
      }
    );
    if ( event.target.checked ) {
      console.log(this.mainled["status"]);
      console.log(true);
      let data ={ "status": true };
      let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      this.http.post('https://led-api-rest.herokuapp.com/addled',data,_options)
      .pipe(
        map(res => res)
      )
      .subscribe(res =>
        this.getData()
      );
    }else
    {
      console.log(false);
      let data ={ "status": false };
      let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      this.http.post('https://led-api-rest.herokuapp.com/addled',data,_options)
      .pipe(
        map(res => res)
      )
      .subscribe(res =>
        this.getData()
      );
    }

  }
}
