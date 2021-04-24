import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UsersComponent } from './pages/users/users.component';
import { SuccessComponent } from './pages/success/success.component';
import { ErrorComponent } from './pages/error/error.component';

// Services and Routing
import { UsersService } from './pages/users/users.service';
import { routing } from './app.routing';

// Ant-design
import { AppAntDesignModule } from './app-antd.module';

@NgModule({
  declarations: [
    AppComponent, 
    SignupComponent, 
    UsersComponent, 
    SuccessComponent, 
    ErrorComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    AppAntDesignModule,
    FormsModule,
    ReactiveFormsModule,
    AppAntDesignModule,
    routing,
  ],
  providers: [
    UsersService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
