import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuInputComponent } from './pages/menu-input/menu-input.component';
import { ImageUrlPipe } from './Piprs/image-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuInputComponent,
    ImageUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }