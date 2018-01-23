import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute }   from '@angular/router';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {

	dataBanks;

  constructor(
  	private http: Http,
  	private route: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.findTurret(param.id)
      .subscribe(response => this.dataBanks = response.json());
  	});
  }

  findTurret(turretNumber){
    return this.http.get('http://localhost:3000/api/turret/'+turretNumber);
	}

}
