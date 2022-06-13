import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { trips } from '../data/trips';
=======
import { Router } from "@angular/router";
import { TripDataService } from 'src/app/services/trip-data.service';
import { Trip } from 'src/app/models/trip';
>>>>>>> 4c51029e58afc17152791a3d4d3d470fd90e8cc9

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
<<<<<<< HEAD
  styleUrls: ['./trip-listing.component.css']
})
export class TripListingComponent implements OnInit {
  
  trips: Array<any> = trips;

  constructor() { }

  ngOnInit(): void {
  }

=======
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  
  trips: Trip[];

  message: string;

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) { }

  private addTrip(): void {
    console.log('Inside TripListingComponent#addTrip');
    this.router.navigate(['add-trip']);
  }

  private editTrip(): void {
    console.log('Inside TripListingComponent#editTrip');
    this.router.navigate(['edit-trip']);
  }
  
  private getTrips(): void {
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for trips';
    this.tripDataService
      .getTrips()
        .then(foundTrips => {
          this.message = foundTrips.length > 0 ? '' : 'No trips found';
          this.trips = foundTrips;
        });
  }

  ngOnInit(): void {
    this.addTrip();
    this.editTrip();
    this.getTrips();
  }
  
>>>>>>> 4c51029e58afc17152791a3d4d3d470fd90e8cc9
}
