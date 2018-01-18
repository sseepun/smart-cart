import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

// Injectable services
import { WindowRefService } from './services/window-ref.service';

// Import components
import { InteractiveGlobeComponent } from './interactive-globe/interactive-globe.component';
import { IntroductionPageComponent } from './introduction-page/introduction-page.component';
import { UsaStatisticPageComponent } from './usa-statistic-page/usa-statistic-page.component';
import { UsaMapComponent } from './usa-map/usa-map.component';
import { GrocerySalePageComponent } from './grocery-sale-page/grocery-sale-page.component';
import { BarchartComponent } from './barchart/barchart.component';
import { ProblemPageComponent } from './problem-page/problem-page.component';
import { SurveyPageComponent } from './survey-page/survey-page.component';
import { SolutionPageComponent } from './solution-page/solution-page.component';
import { UsaMapStaticComponent } from './usa-map-static/usa-map-static.component';
import { SmartCartPageComponent } from './smart-cart-page/smart-cart-page.component';
import { SmartCartAppComponent } from './smart-cart-app/smart-cart-app.component';
import { SmartCartSliderComponent } from './smart-cart-slider/smart-cart-slider.component';
import { PersonaManaPageComponent } from './persona-mana-page/persona-mana-page.component';
import { PersonaManeePageComponent } from './persona-manee-page/persona-manee-page.component';
import { MlBdPageComponent } from './ml-bd-page/ml-bd-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { FuturePageComponent } from './future-page/future-page.component';
import { ReferencePageComponent } from './reference-page/reference-page.component';
import { ThankPageComponent } from './thank-page/thank-page.component';
import { InteractiveGlobeAbsComponent } from './interactive-globe-abs/interactive-globe-abs.component';


@NgModule({
  declarations: [
    AppComponent,
    InteractiveGlobeComponent,
    IntroductionPageComponent,
    UsaStatisticPageComponent,
    UsaMapComponent,
    GrocerySalePageComponent,
    BarchartComponent,
    ProblemPageComponent,
    SurveyPageComponent,
    SolutionPageComponent,
    UsaMapStaticComponent,
    SmartCartPageComponent,
    SmartCartAppComponent,
    SmartCartSliderComponent,
    PersonaManaPageComponent,
    PersonaManeePageComponent,
    MlBdPageComponent,
    ResultPageComponent,
    FuturePageComponent,
    ReferencePageComponent,
    ThankPageComponent,
    InteractiveGlobeAbsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    WindowRefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
