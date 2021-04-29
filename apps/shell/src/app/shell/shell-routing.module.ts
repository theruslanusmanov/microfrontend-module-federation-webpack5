import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {loadRemoteModule} from "@angular-architects/module-federation/src";
import {ShellComponent} from "./shell.component";
import {environment} from "../../environments/environment";

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () => loadRemoteModule({
          remoteEntry: environment.localRoutes
            ? 'http://localhost:4201/homeRemoteEntry.js'
            : '/home/homeRemoteEntry.js',
          remoteName: 'home',
          exposedModule: './Module'
        })
          .then(m => m.HomeModule)
          .catch(() => import('./modules/empty/empty.module').then((m) => m.EmptyModule))
      },
      {
        path: 'news',
        loadChildren: () => loadRemoteModule({
          remoteEntry: environment.localRoutes
            ? 'http://localhost:4202/newsRemoteEntry.js'
            : '/news/newsRemoteEntry.js',
          remoteName: 'news',
          exposedModule: './Module'
        })
          .then(m => m.NewsModule)
          .catch(() => import('./modules/empty/empty.module').then((m) => m.EmptyModule))
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
