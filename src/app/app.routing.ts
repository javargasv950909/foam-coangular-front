import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CONSTANTS_URIS } from './constants/constants.uris';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes =[
  {path: CONSTANTS_URIS.Login, component: LoginComponent},
  {
    path: '',
    redirectTo: CONSTANTS_URIS.Login,
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  {path: '**', redirectTo: CONSTANTS_URIS.Login, pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
