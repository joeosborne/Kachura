// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { MovieComponent } from './movie/movie.component';
//
// export const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'movie/:id', component: MovieComponent },
//   { path: '**', redirectTo: '' },
// ];
//
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'movie/:id', component: MovieComponent }, // Movie route with parameter 'id'
  { path: '**', redirectTo: '' }, // Wildcard route to redirect any unknown paths to the home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
