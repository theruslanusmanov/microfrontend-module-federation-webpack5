import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'news',
        loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
      },
      {path: '**', redirectTo: '/news'}
    ], {initialNavigation: 'enabled'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
