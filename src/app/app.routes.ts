import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '' }  // Wildcard route for 404 redirection
];
