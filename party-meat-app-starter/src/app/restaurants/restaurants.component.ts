import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';
import { Http } from '@angular/http';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]
  constructor(private restaurantService: RestaurantsService) {

  }

  ngOnInit() {
    this.restaurantService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
      
  }

}
