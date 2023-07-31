import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HomeModule } from './pages/home/home.module';
import { UsersModule } from './pages/users/users.module';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    DashboardComponent,
   
   
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    HomeModule,
    UsersModule,
    MatDialogModule
    
    
  ],
  exports:[
    DashboardComponent,
  ]
})
export class DashboardModule { 
  
}
