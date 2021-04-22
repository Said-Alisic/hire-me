import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './pages/signup/signup.component';
import { UsersComponent } from './pages/users/users.component';

// Services
import { UsersService } from './pages/users/users.service';

// Ant-design
import { AppAntDesignModule } from './app-antd.module';



@NgModule({
  declarations: [AppComponent, SignupComponent, UsersComponent],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppAntDesignModule,
  ],
  providers: [
    UsersService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
