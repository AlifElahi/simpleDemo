import { RouterModule, Routes } from '@angular/router';

// Import your components
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';

// Define the routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route to home
  { path: 'home', component: HomeComponent }, // Route to HomeComponent
  { path: 'table', component: TableComponent }, // Route to TableComponent
  { path: '**', redirectTo: '/home' } // Wildcard route for handling invalid URLs
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the router at the application's root level
  exports: [RouterModule] // Export the RouterModule for use in the app
})
export class AppRoutingModule { }
