import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { SignupComponent } from './components/header/signup/signup.component';
import { UserFormContainerComponent } from './components/header/user-form-container/user-form-container.component';
import { LoginComponent } from './components/header/login/login.component';
import { HeaderComponent } from './components/header/header/header.component';
import { NavMobileComponent } from './components/header/nav-mobile/nav-mobile.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComparePasswordsDirective } from './directives/compare-passwords.directive';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ClientspageComponent } from './components/clients/clientspage/clientspage.component';
import { ChatpageComponent } from './components/chatpage/chatpage.component';
import { RoutingModule } from './modules/routing.module';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { ClientDetailsComponent } from './components/clients/client-details/clients-details.component';
import { ClientFormComponent } from './components/clients/client-form/client-form.component';
import { EditClientComponent } from './components/clients/edit-client/edit-client.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { ModalComponent } from './components/modal/modal.component';
import { RemoveModalComponent } from './components/clients/remove-modal/remove-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    UserFormContainerComponent,
    LoginComponent,
    HeaderComponent,
    NavMobileComponent,
    OverlayComponent,
    FooterComponent,
    ComparePasswordsDirective,
    HomepageComponent,
    ClientspageComponent,
    ChatpageComponent,
    AddClientComponent,
    ClientDetailsComponent,
    ClientFormComponent,
    EditClientComponent,
    BackBtnComponent,
    ModalComponent,
    RemoveModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
