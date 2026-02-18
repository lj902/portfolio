import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'resume', pathMatch: 'full'},
  {path: 'resume', loadComponent: () => import('./resume/resume').then(m => m.Resume)},
  {path: '**', redirectTo: 'resume'}
];
