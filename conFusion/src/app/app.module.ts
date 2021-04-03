import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MatToolbarModule} from '@angular/material/toolbar'
import { AppRoutingModule } from './app-routing.module';
import {FlexLayoutModule, StyleUtils, StylesheetMap, MediaMarshaller, ɵMatchMedia, BreakPointRegistry, PrintHook, LayoutStyleBuilder, FlexStyleBuilder, ShowHideStyleBuilder, FlexOrderStyleBuilder, LayoutGapStyleBuilder, LayoutAlignStyleBuilder} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DishService } from './services/dish.service';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    StyleUtils,
    DishService,
    StylesheetMap,
    MediaMarshaller,
    ɵMatchMedia,
    BreakPointRegistry,
    PrintHook,
    LayoutStyleBuilder,
    LayoutGapStyleBuilder,
    FlexStyleBuilder,
    ShowHideStyleBuilder,
    FlexOrderStyleBuilder,
    LayoutAlignStyleBuilder,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
