import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom, isDevMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { todoReducer } from './app/store/todo.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideAnimations(),
    provideStore({ todos: todoReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
}).catch((err) => console.error(err));
