import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import {NgbRatingModule, NgbModule, NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import {NgIf} from "@angular/common";
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidationComponent } from './components/partials/input-validation/input-validation.component';
import { TextInputComponent } from './components/partials/text-input/text-input.component';
import { DefaultButtonComponent } from './components/partials/default-button/default-button.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { LoadingComponent } from './components/partials/loading/loading.component';
import {LoadingInterceptor} from "./shared/interceptors/loading.interceptor";
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { OrderItemsListComponent } from './components/partials/order-items-list/order-items-list.component';
import { MapComponent } from './components/partials/map/map.component';
import {AuthInterceptor} from "./auth/auth.interceptor";
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { CheckboxInputComponent } from './components/partials/new-/checkbox-input/checkbox-input.component';
import { RatingInputComponent } from './components/partials/new-/rating-input/rating-input.component';
import { TagsInputComponent } from './components/partials/new-/tags-input/tags-input.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {OrderTrackPageComponent} from "./components/pages/order-track-page/order-track-page.component";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent,
    LoadingComponent,
    CheckoutPageComponent,
    OrderItemsListComponent,
    MapComponent,
    PaymentPageComponent,
    CheckboxInputComponent,
    RatingInputComponent,
    OrderTrackPageComponent,
    TagsInputComponent
  ],
  imports: [
    RouterModule,
    NgbDropdownModule,
    BrowserModule,
    AppRoutingModule,
    NgbRatingModule,
    NgIf,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        newestOnTop: false
      }
    ),
    FormsModule,
    MatFormFieldModule,
    MatSelectModule


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
