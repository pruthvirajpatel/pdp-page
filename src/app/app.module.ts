import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PdpContainerComponent } from './pdp-container/pdp-container.component';
import { PdpDetailsComponent } from './pdp-details/pdp-details.component';
import { PdpDetailsFiltersComponent } from './pdp-details-filters/pdp-details-filters.component';
import { PdpImageContainerComponent } from './pdp-image-container/pdp-image-container.component';
import { RecommendedProductsComponent } from './recommended-products/recommended-products.component';
import { ApiService } from './api/api.service';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared.service';
import { FeaturesStripComponent } from './features-strip/features-strip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    PdpContainerComponent,
    PdpDetailsComponent,
    PdpDetailsFiltersComponent,
    PdpImageContainerComponent,
    RecommendedProductsComponent,
    FeaturesStripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService, AppService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
