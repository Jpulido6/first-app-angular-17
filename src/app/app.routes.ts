import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './user/new-user.component';

export const routes: Routes = [
    {path: '', component: UserComponent},
    {path: 'new-user', component: NewUserComponent},
    {path: '**', redirectTo: ''}
];
