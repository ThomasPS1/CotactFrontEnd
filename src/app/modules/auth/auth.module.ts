import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './features/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailComponent } from '../../common/components/email/email.component';
import { TextComponent } from '../../common/components/text/text.component';
import { ButtonComponent } from '../../common/components/button/button.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    EmailComponent,
    TextComponent,
    ButtonComponent
  ]
})
export class AuthModule { }
