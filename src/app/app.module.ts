import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// useful links

// https://github.com/angular/angularfire/blob/HEAD/docs/messaging/messaging.md
// https://www.youtube.com/watch?v=BsCBCudx58g
// https://firebase.google.com/docs/cloud-messaging/js/client#web-v8_1