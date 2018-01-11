import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the Http Module services
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { WindowRefService } from './services/window-ref.service';

// Import components
import { NavbarComponent } from './navbar/navbar.component';
import { AnalysisPageComponent } from './analysis-page/analysis-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DataLoadingPageComponent } from './data-loading-page/data-loading-page.component';
import { DataCleaningPageComponent } from './data-cleaning-page/data-cleaning-page.component';
import { SelectionDropdownComponent } from './selection-dropdown/selection-dropdown.component';
import { PlotHistogramComponent } from './plot-histogram/plot-histogram.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { PaginateButtonSetComponent } from './paginate-button-set/paginate-button-set.component';
import { HtmlPdfButtonComponent } from './html-pdf-button/html-pdf-button.component';
import { AboutPageComponent } from './about-page/about-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnalysisPageComponent,
    WelcomePageComponent,
    DataLoadingPageComponent,
    DataCleaningPageComponent,
    SelectionDropdownComponent,
    PlotHistogramComponent,
    DonutChartComponent,
    DataTableComponent,
    SearchBoxComponent,
    PaginateButtonSetComponent,
    HtmlPdfButtonComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    DataService,
    WindowRefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
