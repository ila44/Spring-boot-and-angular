import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public bikereg;
  constructor(private bikesrvc:BikeService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getBikeReg(this.route.snapshot.params.id);
  }

  getBikeReg(id:number) {
    this.bikesrvc.getBike(id).subscribe(
      data=> {
        this.bikereg=data;
      },
      err=>console.error(err),
      ()=>console.log("Bike Loaded")
    );
  }

}
