import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule)
        ,canActivate: [AuthGuard]
      },
      {
        path: 'news',
        loadChildren: () => import('./views/news/news.module').then(m => m.NewsModule)
        ,canActivate: [AuthGuard]
      },
      {
        path: 'calendrier',
        loadChildren: () => import('./views/calendrier/calendrier.module').then(m => m.CalendrierModule)
        ,canActivate: [AuthGuard]
      },
      {
        path: 'notes',
        loadChildren: () => import('./views/notes/notes.module').then(m => m.NotesModule)
        ,canActivate: [AuthGuard]
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
        ,canActivate: [AuthGuard]
      },
      {
        path: 'event',
        loadChildren: () => import('./views/event/event.module').then(m => m.EventModule)
        ,canActivate: [AuthGuard]
      },
      {
        path: 'rendez-vous',
        loadChildren: () => import('./views/rendez-vous/rendez-vous.module').then(m => m.RendezVousModule)
        ,canActivate: [AuthGuard]
      },
      {
        path: 'direction',
        loadChildren: () => import('./views/direction/direction.module').then(m=>m.DirectionModule)
        ,canActivate: [AuthGuard]
      },
      {
        path: 'laboratoire',
        loadChildren: () => import('./views/laboratoire/laboratoire.module').then(m=>m.LaboratoireModule)
        ,canActivate: [AuthGuard]
      },
      {
        path: 'enseignant',
        loadChildren: () => import('./views/enseignant/enseignant.module').then(m=>m.EnseignantModule)
        ,canActivate: [AuthGuard]
      },
      {
        path: 'partenariats',
        loadChildren: () => import('./views/partenariats/partenariats.module').then(m=>m.PartenariatsModule)
        ,canActivate: [AuthGuard]
      },
      {
        path: 'conventions',
        loadChildren: () => import('./views/conventions/conventions.module').then(m=>m.ConventionsModule)
        ,canActivate: [AuthGuard]
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
