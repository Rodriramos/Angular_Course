import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Search } from './pages/search/search';
import { Booking } from './pages/booking/booking';
import { MyBooking } from './pages/my-booking/my-booking';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, 
  {
    path: 'home',
    component: Home
  },
  {
    path: 'search',
    component: Search
  },
  {
    path: 'booking',
    component: Booking
  },
  {
    path: 'my-booking',
    component: MyBooking
  }
];
