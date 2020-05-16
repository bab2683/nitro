import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, PostComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
