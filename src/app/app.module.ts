import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ExhibitionComponent } from './exhibition/exhibition.component';
import { FooterComponent } from './footer/footer.component';

import { HomepageComponent } from './homepage/homepage.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { ResponseModalComponent } from './response-modal/response-modal.component';
import { HeaderComponent } from './header/header.component';
import { SitemapComponent } from './sitemap/sitemap.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    CatalogComponent,
    ContactComponent,
    CheckoutComponent,
    ExhibitionComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    JumbotronComponent,
    MainBodyComponent,
    ResponseModalComponent,
    SitemapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
