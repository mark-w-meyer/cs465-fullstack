import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from "@angular/router"
import { Trip } from '../models/trip';
>>>>>>> 4c51029e58afc17152791a3d4d3d470fd90e8cc9

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

<<<<<<< HEAD
  @Input('trip') trip: any;

  constructor() { }
=======
  @Input('trip') trip: Trip;

  constructor(
    private router: Router
  ) { }
>>>>>>> 4c51029e58afc17152791a3d4d3d470fd90e8cc9

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  private editTrip(trip: Trip): void {
    console.log('Inside TripListingComponent#editTrip');
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }
>>>>>>> 4c51029e58afc17152791a3d4d3d470fd90e8cc9
}
