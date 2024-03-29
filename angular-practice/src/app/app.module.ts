import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule} from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { FeaturedProductComponent } from './container/featured-product/featured-product.component';
import { ChangeStyle } from './directives/style.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    TopHeaderComponent,
    MainMenuComponent,
    ProductListComponent,
    SearchComponent,
    ContainerComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedProductComponent,
    ChangeStyle
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
