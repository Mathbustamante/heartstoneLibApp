import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';

import { FcmService } from './shared/service/fcm.service';
import { ToastService } from './shared/service/toast.service';

const config = {
    apiKey: "AIzaSyAoeZ-OJwclAgDNOz6obCucEGWAk4yFIus",
    authDomain: "heartstonelibapp-7b8ab.firebaseapp.com",
    databaseURL: "https://heartstonelibapp-7b8ab.firebaseio.com",
    projectId: "heartstonelibapp-7b8ab",
    storageBucket: "heartstonelibapp-7b8ab.appspot.com",
    messagingSenderId: "409380775711"
  };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    FcmService,
    ToastService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}