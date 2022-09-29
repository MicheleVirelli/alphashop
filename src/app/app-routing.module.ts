import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { MerchandiseComponent } from './pages/merchandise/merchandise.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RouteGuardServiceService } from 'src/services/route-guard-service.service';

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'logout', component: LogoutComponent},
    { path: 'welcome', component: WelcomeComponent, canActivate:[RouteGuardServiceService]},
    { path: 'welcome/:userid', component: WelcomeComponent, canActivate:[RouteGuardServiceService]},
    { path: 'merchandise', component: MerchandiseComponent, canActivate:[RouteGuardServiceService]},
    { path: '**', component: ErrorComponent}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
