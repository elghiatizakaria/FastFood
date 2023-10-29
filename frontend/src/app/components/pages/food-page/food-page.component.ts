import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../../../services/food.service";
import {Food} from "../../../shared/models/Food";
import {CartService} from "../../../services/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  foods:Food[]=[];
  constructor(activatedRoute:ActivatedRoute, foodService:FoodService, private cartService:CartService,private router: Router) {
    let foodsObservalbe:Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.id)
           foodService.getFoodById(params.id).subscribe(serverFood=>{
             this.food=serverFood;
           });

    });
    foodsObservalbe = foodService.getAll();
    foodsObservalbe.subscribe((serverFoods) => {
      this.foods = serverFoods;

    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
