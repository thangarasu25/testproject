import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/UserModule';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [{ path: '', component: UserComponent },    { path: 'user', component:UserComponent },
{ path: 'main', component:MainComponent }
];
