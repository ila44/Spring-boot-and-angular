import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: String[]=[
    'Apache 200 RTR',
    'HONDA SHINE'
  ];

  bikeform:FormGroup;
  validMessage: String="";

  constructor( private bikesrvc:BikeService) { }

  ngOnInit() {

    this.bikeform= new FormGroup({
      bname:new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      bmodel: new FormControl('',Validators.required),
      serialNumber: new FormControl('',Validators.required),
      purchasePrice:new FormControl('',Validators.required),
      purchaseDate:new FormControl('',Validators.required),
      contact:new FormControl()
    });
  }

  submitRegistration() {
    if(this.bikeform.valid) {
      this.validMessage="Your bike registration has been submitted.Thank You!";
      this.bikesrvc.createBikeRegistration(this.bikeform.value).subscribe(
        data=> {
          this.bikeform.reset();
          return true;
        },
        error=> { return console.log(error) }

      );
    }
    else {
      this.validMessage="Please fill out the fields before submitting";
    }
  }

}
