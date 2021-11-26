import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ClasseListComponent } from './classe-list/classe-list.component';
import { CreateClasseComponent } from './create-classe/create-classe.component';
import { UpdateClasseComponent } from './update-classe/update-classe.component';
import { ClasseDetailsComponent } from './classe-details/classe-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },


  { path: '', redirectTo: 'classe', pathMatch: 'full' },
  { path: 'classes', component: ClasseListComponent },
  { path: 'add', component: CreateClasseComponent },
  { path: 'update/:id', component: UpdateClasseComponent },
  { path: 'details/:id', component: ClasseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
