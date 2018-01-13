webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-selector {\r\n    padding: 10px 10px 10px 10px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    font-size: 0.9vw;\r\n    z-index: 2000;\r\n    opacity: 0.15;\r\n    cursor: pointer;\r\n    background: #0e0e0e;\r\n    color: #fffff0;    \r\n}\r\n.page-selector:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.page-selector span {\r\n    opacity: 0.25;\r\n    padding-bottom: 4px;\r\n    padding-left: 1.4vw;\r\n    padding-right: 1.4vw;\r\n}\r\n.page-selector span.active {\r\n    opacity: 1;\r\n    border-bottom: 0.3vw solid orange;\r\n}\r\n.page-selector span:hover {\r\n    opacity: 1;\r\n}\r\n\r\n#info-container1 {\r\n    position: absolute;\r\n    padding-left: 2.5vw;\r\n    left: 0;\r\n    top: calc(50% - 23vw);\r\n    pointer-events: none;\r\n}\r\n#info-container2 {\r\n    position: absolute;\r\n    right: 0;\r\n    top: calc(50% - 9vw);\r\n    padding-right: 2.5vw;\r\n    pointer-events: none;\r\n}\r\n.headline {\r\n    color: #fffff0;\r\n    font-size: 2.2vw;\r\n    opacity: 0;\r\n    transition: opacity 1s;\r\n}\r\n.infoline {\r\n    color: orange;\r\n    font-size: 3.5vw;\r\n    font-weight: 600;\r\n    opacity: 0;\r\n    transition: opacity 1s;\r\n}\r\n\r\n.main-statistic-source {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 0;\r\n    padding-right: 2.5vw; \r\n    font-size: 1.5vw;\r\n    color: #8f8f8f;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-selector\" align=\"middle\">\r\n    <span *ngFor=\"let p of pageDisplay; let i=index;\" (click)=\"changePage(pageArray[i])\"\r\n    [ngClass]=\"{'active':pageSelectClass(pageArray[i])}\">{{p}}</span>\r\n</div>\r\n\r\n<!-- Intro and population pages -->\r\n<ng-container *ngIf=\"page==0 || page==1\">\r\n    <app-introduction-page #introPage [page]=\"page\"></app-introduction-page>\r\n    <app-interactive-globe #globe [globeResources]=\"resources\"></app-interactive-globe>\r\n    <ng-container *ngIf=\"page==1\">\r\n        <div id=\"info-container1\">\r\n            <div class=\"headline stage-1\">\r\n                Expected global sales of \r\n                <br>healthy food products\r\n                <br>in 2017\r\n            </div>\r\n            <div class=\"infoline stage-1\">$1 trillion</div>\r\n        </div>\r\n        <div id=\"info-container2\">\r\n            <div class=\"headline stage-2\" align=\"right\">World population</div>\r\n            <div class=\"infoline stage-2\" align=\"right\">7.6 billion</div>\r\n\r\n            <div class=\"headline stage-3\" align=\"right\" style=\"padding-top:4vw;\">US population</div>\r\n            <div class=\"infoline stage-3\" align=\"right\">324 million</div>\r\n        </div>\r\n        <div class=\"main-statistic-source\">Source: Euromonitor International</div>\r\n    </ng-container>\r\n</ng-container>\r\n\r\n<!-- Statistic page -->\r\n<ng-container *ngIf=\"page==2\">\r\n    <app-usa-statistic-page #usaStatisticPage \r\n    [resources]=\"resources\"></app-usa-statistic-page>\r\n</ng-container>\r\n\r\n<!-- Grocery sale page -->\r\n<ng-container *ngIf=\"page==3\">\r\n    <app-grocery-sale-page></app-grocery-sale-page>\r\n</ng-container>\r\n\r\n<!-- Problem page -->\r\n<ng-container *ngIf=\"page==4\">\r\n    <app-problem-page #problemPage></app-problem-page>\r\n</ng-container>\r\n\r\n<!-- Survey page -->\r\n<ng-container *ngIf=\"page==5\">\r\n    <app-survey-page #surveyPage [resources]=\"resources\"></app-survey-page>\r\n</ng-container>\r\n\r\n<!-- Solution page -->\r\n<ng-container *ngIf=\"page==6\">\r\n    <app-solution-page></app-solution-page>\r\n</ng-container>\r\n\r\n<!-- Health Belief Model page -->\r\n<ng-container *ngIf=\"page==7\">\r\n    <app-hbm-page></app-hbm-page>\r\n</ng-container>\r\n\r\n<!-- Smart Cart page -->\r\n<ng-container *ngIf=\"page==8\">\r\n    <app-smart-cart-page #smartCartPage></app-smart-cart-page>\r\n</ng-container>\r\n\r\n<!-- Persona Mr.Mana page -->\r\n<ng-container *ngIf=\"page==9\">\r\n    <app-persona-mana-page #personaMana></app-persona-mana-page>\r\n</ng-container>\r\n\r\n<!-- Persona Miss Manee page -->\r\n<ng-container *ngIf=\"page==10\">\r\n    <app-persona-manee-page #personaManee></app-persona-manee-page>\r\n</ng-container>\r\n\r\n<!-- Result page -->\r\n<ng-container *ngIf=\"page==11\">\r\n    <app-result-page></app-result-page>\r\n</ng-container>\r\n\r\n<!-- Future page -->\r\n<ng-container *ngIf=\"page==12\">\r\n    <app-future-page></app-future-page>\r\n</ng-container>\r\n\r\n<!-- Reference page -->\r\n<ng-container *ngIf=\"page==13\">\r\n    <app-reference-page></app-reference-page>\r\n</ng-container>\r\n\r\n<!-- Thank page -->\r\n<ng-container *ngIf=\"page==14\">\r\n    <app-thank-page></app-thank-page>\r\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
var AppComponent = (function () {
    function AppComponent(element) {
        this.element = element;
        this.pageArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.pageDisplay = ['intro', 'population', 'statistic', 'sale', 'problem', 'survey', 'solution',
            'hbm', 'smart cart', 'mana', 'manee', 'result', 'future', 'references', 'thanks'];
        this.page = 9;
        this.stage = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var self = this;
        self.host = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](self.element.nativeElement);
        // Key change page
        self.keyChangePage();
        // Resources cross origin
        if (navigator.onLine) {
            self.resources = {
                bg: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/globe/bg.jpg',
                texture: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/globe/earth_texture_4.jpg',
                bump: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/globe/earth_bump_map.jpg',
                specular: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/globe/earth_specular_map.jpg',
                light: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/globe/earth_light_map.jpg',
                cloud: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/globe/cloud_3.jpg',
                world: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/json/world.json',
                worldCapitals: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/json/world-capitals.json',
                mapUSA: 'https://raw.githubusercontent.com/sseepun/FloridaTalk/master/json/usa-map.json'
            };
        }
        else {
            self.resources = {
                bg: 'assets/img/globe/bg.jpg',
                texture: 'assets/img/globe/earth_texture_4.jpg',
                bump: 'assets/img/globe/earth_bump_map.jpg',
                specular: 'assets/img/globe/earth_specular_map.jpg',
                light: 'assets/img/globe/earth_light_map.jpg',
                cloud: 'assets/img/globe/cloud_3.jpg',
                world: 'assets/json/world.json',
                worldCapitals: 'assets/json/world-capitals.json',
                mapUSA: 'assets/json/usa-map.json'
            };
        }
    };
    AppComponent.prototype.keyChangePage = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */]('body').on('keyup', function () {
            if (__WEBPACK_IMPORTED_MODULE_1_d3__["c" /* event */].code == 'Space' || __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* event */].code == 'ArrowRight')
                self.keyNextStage();
            else if (__WEBPACK_IMPORTED_MODULE_1_d3__["c" /* event */].code == 'ArrowLeft')
                self.keyPreviousStage();
            else if (__WEBPACK_IMPORTED_MODULE_1_d3__["c" /* event */].code == 'ArrowUp')
                self.keyInitStage();
        });
    };
    AppComponent.prototype.keyNextStage = function () {
        var self = this;
        if (self.page == 1 && self.stage < 3) {
            self.nextStagePage1();
        }
        else if (self.page == 2 && self.stage < 2) {
            self.stage += 1;
            self.usaStatisticPage.changeYear(2014 + self.stage);
        }
        else if (self.page == 4 && self.stage < 2) {
            self.stage += 1;
            self.problemPage.nextStage();
        }
        else if (self.page == 5 && self.stage < 2) {
            self.stage += 1;
            self.surveyPage.changeSurveyType(self.stage);
        }
        else if (self.page == 8 && self.smartCartPage.appPage != 'Summary') {
            self.smartCartPage.appNextPage();
        }
        else if (self.page == 9 && self.personaMana.appPage != 'Summary') {
            self.personaMana.appNextPage();
        }
        else if (self.page == 10 && self.personaManee.appPage != 'Summary') {
            self.personaManee.appNextPage();
        }
        else {
            self.changePage(__WEBPACK_IMPORTED_MODULE_1_d3__["h" /* min */]([self.page + 1, __WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */](self.pageArray)]));
        }
    };
    AppComponent.prototype.keyPreviousStage = function () {
        var self = this;
        if (self.stage > 0) {
            if (self.page == 1) {
                self.previousStagePage1();
            }
            else if (self.page == 2) {
                self.stage -= 1;
                self.usaStatisticPage.changeYear(2014 + self.stage);
            }
            else if (self.page == 4) {
                self.stage -= 1;
                self.problemPage.previousStage();
            }
            else if (self.page == 5) {
                self.stage -= 1;
                self.surveyPage.changeSurveyType(self.stage);
            }
        }
        else if (self.page == 8 && self.smartCartPage.appPage != 'Welcome') {
            self.smartCartPage.appPreviousPage();
        }
        else if (self.page == 9 && self.personaMana.appPage != 'Welcome') {
            self.personaMana.appPreviousPage();
        }
        else if (self.page == 10 && self.personaManee.appPage != 'Welcome') {
            self.personaManee.appPreviousPage();
        }
        else {
            self.changePage(__WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */]([self.page - 1, 0]));
        }
    };
    AppComponent.prototype.keyInitStage = function () {
        var self = this;
        self.stage = 0;
        if (self.page == 1)
            self.initStagePage1();
        else if (self.page == 2)
            self.usaStatisticPage.changeYear(2014);
        else if (self.page == 4)
            self.problemPage.initStagePage1();
        else if (self.page == 5)
            self.surveyPage.changeSurveyType(0);
        else if (self.page == 8) {
            if (self.smartCartPage.appPage != 'Welcome') {
                self.smartCartPage.appPage = 'Welcome';
                self.smartCartPage.appReset();
            }
        }
        else if (self.page == 9) {
            if (self.personaMana.appPage != 'Welcome') {
                self.personaMana.appPage = 'Welcome';
                self.personaMana.appReset();
            }
        }
        else if (self.page == 10) {
            if (self.personaManee.appPage != 'Welcome') {
                self.personaManee.appPage = 'Welcome';
                self.personaManee.appReset();
            }
        }
    };
    AppComponent.prototype.changePage = function (page) {
        var self = this;
        // Introduction page
        if (self.page < 2 && page < 2) {
            self.introPage.page = page;
            self.introPage.pageChange();
        }
        // Interactive globe page
        if (self.page < 2 && page > 1)
            self.globe.destroy();
        self.page = page;
        self.stage = 0;
    };
    AppComponent.prototype.pageSelectClass = function (page) {
        if (this.page == page)
            return true;
        else
            return false;
    };
    AppComponent.prototype.nextStagePage1 = function () {
        var self = this;
        if (self.page == 1) {
            self.stage += 1;
            self.host.selectAll('.stage-' + self.stage).style('opacity', 1);
        }
    };
    AppComponent.prototype.previousStagePage1 = function () {
        var self = this;
        if (self.page == 1) {
            self.host.selectAll('.stage-' + self.stage).style('opacity', 0);
            self.stage -= 1;
        }
    };
    AppComponent.prototype.initStagePage1 = function () {
        var self = this;
        if (self.page == 1) {
            self.stage = 0;
            self.host.selectAll('.stage-1').style('opacity', 0);
            self.host.selectAll('.stage-2').style('opacity', 0);
            self.host.selectAll('.stage-3').style('opacity', 0);
        }
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('introPage'),
    __metadata("design:type", Object)
], AppComponent.prototype, "introPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('globe'),
    __metadata("design:type", Object)
], AppComponent.prototype, "globe", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('usaStatisticPage'),
    __metadata("design:type", Object)
], AppComponent.prototype, "usaStatisticPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('problemPage'),
    __metadata("design:type", Object)
], AppComponent.prototype, "problemPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('surveyPage'),
    __metadata("design:type", Object)
], AppComponent.prototype, "surveyPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('smartCartPage'),
    __metadata("design:type", Object)
], AppComponent.prototype, "smartCartPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('personaMana'),
    __metadata("design:type", Object)
], AppComponent.prototype, "personaMana", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('personaManee'),
    __metadata("design:type", Object)
], AppComponent.prototype, "personaManee", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_window_ref_service__ = __webpack_require__("../../../../../src/app/services/window-ref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interactive_globe_interactive_globe_component__ = __webpack_require__("../../../../../src/app/interactive-globe/interactive-globe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__introduction_page_introduction_page_component__ = __webpack_require__("../../../../../src/app/introduction-page/introduction-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__usa_statistic_page_usa_statistic_page_component__ = __webpack_require__("../../../../../src/app/usa-statistic-page/usa-statistic-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__usa_map_usa_map_component__ = __webpack_require__("../../../../../src/app/usa-map/usa-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__grocery_sale_page_grocery_sale_page_component__ = __webpack_require__("../../../../../src/app/grocery-sale-page/grocery-sale-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__barchart_barchart_component__ = __webpack_require__("../../../../../src/app/barchart/barchart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__problem_page_problem_page_component__ = __webpack_require__("../../../../../src/app/problem-page/problem-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__survey_page_survey_page_component__ = __webpack_require__("../../../../../src/app/survey-page/survey-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__solution_page_solution_page_component__ = __webpack_require__("../../../../../src/app/solution-page/solution-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__usa_map_static_usa_map_static_component__ = __webpack_require__("../../../../../src/app/usa-map-static/usa-map-static.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__smart_cart_page_smart_cart_page_component__ = __webpack_require__("../../../../../src/app/smart-cart-page/smart-cart-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__smart_cart_app_smart_cart_app_component__ = __webpack_require__("../../../../../src/app/smart-cart-app/smart-cart-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__smart_cart_slider_smart_cart_slider_component__ = __webpack_require__("../../../../../src/app/smart-cart-slider/smart-cart-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__persona_mana_page_persona_mana_page_component__ = __webpack_require__("../../../../../src/app/persona-mana-page/persona-mana-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__persona_manee_page_persona_manee_page_component__ = __webpack_require__("../../../../../src/app/persona-manee-page/persona-manee-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__hbm_page_hbm_page_component__ = __webpack_require__("../../../../../src/app/hbm-page/hbm-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__result_page_result_page_component__ = __webpack_require__("../../../../../src/app/result-page/result-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__future_page_future_page_component__ = __webpack_require__("../../../../../src/app/future-page/future-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__reference_page_reference_page_component__ = __webpack_require__("../../../../../src/app/reference-page/reference-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__thank_page_thank_page_component__ = __webpack_require__("../../../../../src/app/thank-page/thank-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Injectable services

// Import components




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__interactive_globe_interactive_globe_component__["a" /* InteractiveGlobeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__introduction_page_introduction_page_component__["a" /* IntroductionPageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__usa_statistic_page_usa_statistic_page_component__["a" /* UsaStatisticPageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__usa_map_usa_map_component__["a" /* UsaMapComponent */],
            __WEBPACK_IMPORTED_MODULE_9__grocery_sale_page_grocery_sale_page_component__["a" /* GrocerySalePageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__barchart_barchart_component__["a" /* BarchartComponent */],
            __WEBPACK_IMPORTED_MODULE_11__problem_page_problem_page_component__["a" /* ProblemPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__survey_page_survey_page_component__["a" /* SurveyPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__solution_page_solution_page_component__["a" /* SolutionPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__usa_map_static_usa_map_static_component__["a" /* UsaMapStaticComponent */],
            __WEBPACK_IMPORTED_MODULE_15__smart_cart_page_smart_cart_page_component__["a" /* SmartCartPageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__smart_cart_app_smart_cart_app_component__["a" /* SmartCartAppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__smart_cart_slider_smart_cart_slider_component__["a" /* SmartCartSliderComponent */],
            __WEBPACK_IMPORTED_MODULE_18__persona_mana_page_persona_mana_page_component__["a" /* PersonaManaPageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__persona_manee_page_persona_manee_page_component__["a" /* PersonaManeePageComponent */],
            __WEBPACK_IMPORTED_MODULE_20__hbm_page_hbm_page_component__["a" /* HbmPageComponent */],
            __WEBPACK_IMPORTED_MODULE_21__result_page_result_page_component__["a" /* ResultPageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__future_page_future_page_component__["a" /* FuturePageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__reference_page_reference_page_component__["a" /* ReferencePageComponent */],
            __WEBPACK_IMPORTED_MODULE_24__thank_page_thank_page_component__["a" /* ThankPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_window_ref_service__["a" /* WindowRefService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/barchart/barchart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#barchart {\r\n    position: relative;\r\n    background: #262626;\r\n    padding: 20px;\r\n    /* border: 1px solid #F39C12; */\r\n    /* border: 1px solid #a966d8; */\r\n    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */\r\n}\r\n\r\n#barchart-title {\r\n    font-size: 2vw;\r\n    font-weight: 600;\r\n    margin: 0 0 25px 0;\r\n    /* color: #bebebe; */\r\n    color: white;\r\n}\r\n\r\n#barchart-tooltip {\r\n    position: absolute;\r\n    display: none;\r\n    pointer-events: none;\r\n    border: 2px solid #141414;\r\n    border-radius: 5px;\r\n    background: #ffffff;\r\n    text-align: start;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: #3a3a3a;\r\n    padding: 6px 10px 6px 10px;\r\n    min-width: 0;\r\n    min-height: 0;\r\n    z-index: 1500;\r\n}\r\n\r\n#barchart-trademark {\r\n    position: absolute;\r\n    display: inline;\r\n    font-size: 0.85vw;\r\n    right: 10px;\r\n    bottom: 5px;\r\n    color: #9b9b9b;\r\n}\r\n\r\n#barchart-source {\r\n    position: absolute;\r\n    display: inline;\r\n    font-size: 1.5vw;\r\n    right: 10px;\r\n    bottom: 10px;\r\n    font-size: 1.5vw;\r\n    color: #8f8f8f;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/barchart/barchart.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"barchart\">\r\n    <div id=\"barchart-title\" align=\"center\" [innerHTML]=\"graphSpec.title.label\"></div>\r\n    <div id=\"barchart-space\"></div>\r\n    <!-- <div id=\"barchart-trademark\">&copy; Big Data Solution</div> -->\r\n</div>\r\n\r\n<div id=\"barchart-tooltip\">\r\n  <ng-container *ngIf=\"hoverObj !== null\">\r\n    {{hoverObj.desc}}\r\n    <br> Value: {{hoverObj.value}}\r\n  </ng-container>\r\n</div>\r\n  \r\n"

/***/ }),

/***/ "../../../../../src/app/barchart/barchart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarchartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarchartComponent = (function () {
    function BarchartComponent(element) {
        this.element = element;
        this.outWidth = 1000;
        this.outHeight = 430;
        this.showH = 460;
        this.marginPercent = { left: 0.1, right: 0.01, top: 0.08, bottom: 0.1 };
        this.hoverObj = null;
    }
    BarchartComponent.prototype.ngOnInit = function () {
        var self = this;
        self.host = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](self.element.nativeElement);
        // Trade mark
        if (self.trademarkColor !== undefined) {
            self.host.select('#barchart-trademark').style('color', self.trademarkColor);
        }
        self.margin = { left: self.marginPercent.left * self.outWidth,
            right: self.marginPercent.right * self.outWidth,
            top: self.marginPercent.top * self.outHeight,
            bottom: self.marginPercent.bottom * self.outHeight };
        self.width = self.outWidth - self.margin.left - self.margin.right;
        self.height = self.outHeight - self.margin.top - self.margin.bottom;
        self.setupVariables();
        self.initBarchart();
    };
    BarchartComponent.prototype.setupVariables = function () {
        var self = this;
        // Background
        self.host.select('#barchart').style('background', self.graphSpec.background.color);
        // Title style
        self.host.select('#barchart').select('#barchart-title')
            .style('color', self.graphSpec.title.colorText);
        // Setup internal spec
        var labeLength = __WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */](self.graphSpec.data, function (d) { return d.desc.toString().length; });
        var valueArray = self.graphSpec.data.map(function (d) { return d.value; }), min = __WEBPACK_IMPORTED_MODULE_1_d3__["h" /* min */]([0, __WEBPACK_IMPORTED_MODULE_1_d3__["h" /* min */](valueArray)]), max = __WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */]([0, __WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */](valueArray)]) * 1.15, scaleH = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().range([0, self.height]).domain([min, max]), scaleY = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().range([self.height, 0]).domain([min, max]);
        var slotW = self.width / self.graphSpec.data.length, barW = slotW * self.graphSpec.barStyle.width, hoverW = slotW * self.graphSpec.hoverStyle.width;
        self.spec = {
            animTime: 1000,
            scaleH: scaleH,
            scaleY: scaleY,
            slotW: slotW, barW: barW, hoverW: hoverW,
            xLabEvery: Math.ceil(self.graphSpec.data.length / 12),
            xLabRotate: labeLength > 3
        };
        self.svg = self.host.select('#barchart').select('#barchart-space').select('svg');
        if (self.svg.empty()) {
            self.svg = self.host.select('#barchart').select('#barchart-space')
                .append('svg')
                .attr('width', '100%').attr('opacity', 1)
                .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
                .attr('viewBox', '0 0 ' + self.outWidth + ' ' + self.outHeight);
            self.workSpace = self.svg.append('g').attr('id', 'work-space')
                .attr('transform', 'translate(' + self.margin.left + ',' + self.margin.top + ')');
            // Clip-path
            // self.svg.append('defs').append('clipPath')
            //   .attr('id', 'work-space-clip')
            //   .append('rect').attr('width', self.width).attr('height', self.height).style('fill', 'none');
        }
        else {
            self.workSpace = self.svg.select('g#work-space');
        }
    };
    // Initialize
    BarchartComponent.prototype.initBarchart = function () {
        var self = this;
        var bars = self.workSpace.selectAll('g.bar').data(self.graphSpec.data).enter().append('g')
            .attr('class', 'bar').attr('opacity', 1)
            .attr('transform', function (d, i) {
            var xPos = self.spec.slotW * i;
            return 'translate(' + xPos + ',' + self.height + ')';
        });
        bars.append('text').attr('id', 'label')
            .attr('text-anchor', function () {
            if (self.spec.xLabRotate)
                return 'end';
            else
                return 'middle';
        })
            .attr('transform', function () {
            if (self.spec.xLabRotate)
                return 'translate(' + (self.spec.slotW / 2) + ',16)rotate(-45)';
            else
                return 'translate(' + (self.spec.slotW / 2) + ',20)';
        })
            .attr('font-size', 14).style('fill', self.graphSpec.xAxis.axisColor)
            .attr('opacity', 0)
            .text(function (d) { return d.desc; })
            .transition().duration(self.spec.animTime)
            .attr('opacity', function (d, i) {
            // if (i%self.spec.xLabEvery==0) return 1;
            // else return 0;
            return 1;
        });
        bars.append('rect')
            .attr('x', (self.spec.slotW - self.spec.barW) / 2)
            .attr('width', self.spec.barW).attr('height', 0)
            .style('fill', self.graphSpec.barStyle.colorText)
            .attr('opacity', self.graphSpec.barStyle.opacity)
            .on('touchstart', function (d, i) {
            __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* event */].preventDefault();
            self.mouseenter(d, i);
        })
            .on('touchmove', function () {
            __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* event */].preventDefault();
            self.mousemove();
        })
            .on('touchend', function () { self.mouseout(); })
            .on('mouseenter', function (d, i) { self.mouseenter(d, i); })
            .on('mousemove', function () { self.mousemove(); })
            .on('mouseout', function () { self.mouseout(); })
            .transition().duration(self.spec.animTime)
            .attr('y', function (d) { return -self.spec.scaleH(d.value); })
            .attr('height', function (d) { return self.spec.scaleH(d.value); });
        // Special for the talk
        bars.append('text').attr('id', 'value')
            .attr('x', (self.spec.slotW + self.spec.barW) / 2)
            .attr('text-anchor', 'end')
            .attr('font-size', 28).style('fill', '#fffff0')
            .attr('y', -0.02 * self.height)
            .text(function (d) { return '$' + Math.round(d.value) + ' billion'; })
            .attr('opacity', function (d, i) {
            if ((i + 1) % 5 == 0)
                return 1;
            else
                return 0;
        })
            .transition().duration(self.spec.animTime)
            .attr('y', function (d) { return -self.spec.scaleH(d.value) - 0.02 * self.height; });
        ///////////// 
        // Y axis
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["a" /* axisLeft */](self.spec.scaleY).ticks(5).tickFormat(function (d) { return d; });
        var yAxisSpace = self.svg.insert('g', ':first-child').attr('id', 'y-axis')
            .attr('transform', 'translate(' + (self.margin.left) + ',' + (self.margin.top) + ')')
            .call(customYAxis);
        yAxisSpace.append('text').attr('id', 'label')
            .attr('text-anchor', 'middle')
            .attr('font-size', 18).style('fill', self.graphSpec.yAxis.colorText)
            .attr('transform', 'translate(' + (-self.margin.left + 18) + ',' + (self.height / 2) + ')rotate(-90)')
            .text(self.graphSpec.yAxis.label);
        function customYAxis(g) {
            g.call(yAxis);
            g.select('.domain').attr('stroke-width', 2)
                .style('stroke', self.graphSpec.yAxis.axisColor);
            g.selectAll('.tick text')
                .attr('x', -18).attr('font-size', 14)
                .style('fill', self.graphSpec.yAxis.axisColor);
            g.selectAll('.tick line')
                .style('stroke', self.graphSpec.yAxis.axisColor).attr('stroke-width', 1.2)
                .attr('x1', 0).attr('x2', self.width).attr('opacity', 0.5);
        }
        ;
        // X axis
        var xAxisSpace = self.svg.append('g').attr('id', 'x-axis')
            .attr('transform', 'translate(' + (self.margin.left) + ',' + (self.margin.top + self.height) + ')');
        xAxisSpace.append('text').attr('id', 'label')
            .attr('text-anchor', 'middle')
            .attr('x', self.width / 2).attr('y', self.margin.bottom)
            .attr('font-size', 18).style('fill', self.graphSpec.xAxis.colorText)
            .text(self.graphSpec.xAxis.label);
        xAxisSpace.append('line')
            .attr('x1', 0).attr('x2', self.width)
            .attr('stroke-width', 2).style('stroke', self.graphSpec.xAxis.axisColor);
    };
    // Full update
    // Update functions
    BarchartComponent.prototype.updateBarchartData = function () {
        var _this = this;
        var self = this;
        self.setupVariables();
        var bars = self.workSpace.selectAll('g.bar').data(self.graphSpec.data);
        // Remove
        bars.exit().transition().duration(self.spec.animTime).attr('opacity', 0)
            .on('end', function () { __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](_this).remove(); });
        // Update
        bars.transition().duration(self.spec.animTime)
            .attr('transform', function (d, i) {
            var xPos = self.spec.slotW * i;
            return 'translate(' + xPos + ',' + self.height + ')';
        });
        bars.select('text#label')
            .attr('text-anchor', function () {
            if (self.spec.xLabRotate)
                return 'end';
            else
                return 'middle';
        })
            .attr('transform', function () {
            if (self.spec.xLabRotate)
                return 'translate(' + (self.spec.slotW / 2) + ',16)rotate(-45)';
            else
                return 'translate(' + (self.spec.slotW / 2) + ',20)';
        })
            .attr('opacity', function (d, i) {
            // if (i%self.spec.xLabEvery==0) return 1;
            // else return 0;
            return 1;
        })
            .attr('font-size', 14).style('fill', self.graphSpec.xAxis.axisColor)
            .text(function (d) { return d.desc; });
        bars.select('rect').transition().duration(self.spec.animTime)
            .attr('x', (self.spec.slotW - self.spec.barW) / 2)
            .attr('width', self.spec.barW)
            .attr('y', function (d) { return -self.spec.scaleH(d.value); })
            .attr('height', function (d) { return self.spec.scaleH(d.value); });
        // Enter
        var newBars = bars.enter().append('g')
            .attr('class', 'bar').attr('opacity', 1)
            .attr('transform', function (d, i) {
            var xPos = self.spec.slotW * i;
            return 'translate(' + xPos + ',' + self.height + ')';
        });
        newBars.append('text').attr('id', 'label')
            .attr('text-anchor', function () {
            if (self.spec.xLabRotate)
                return 'end';
            else
                return 'middle';
        })
            .attr('transform', function () {
            if (self.spec.xLabRotate)
                return 'translate(' + (self.spec.slotW / 2) + ',16)rotate(-45)';
            else
                return 'translate(' + (self.spec.slotW / 2) + ',20)';
        })
            .attr('font-size', 14).style('fill', self.graphSpec.xAxis.axisColor)
            .attr('opacity', 0)
            .text(function (d) { return d.desc; })
            .transition().duration(self.spec.animTime)
            .attr('opacity', function (d, i) {
            // if (i%self.spec.xLabEvery==0) return 1;
            // else return 0;
            return 1;
        });
        newBars.append('rect')
            .attr('x', (self.spec.slotW - self.spec.barW) / 2)
            .attr('width', self.spec.barW).attr('height', 0)
            .style('fill', self.graphSpec.barStyle.colorText)
            .attr('opacity', self.graphSpec.barStyle.opacity)
            .on('touchstart', function (d, i) {
            __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* event */].preventDefault();
            self.mouseenter(d, i);
        })
            .on('touchmove', function () {
            __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* event */].preventDefault();
            self.mousemove();
        })
            .on('touchend', function () { self.mouseout(); })
            .on('mouseenter', function (d, i) { self.mouseenter(d, i); })
            .on('mousemove', function () { self.mousemove(); })
            .on('mouseout', function () { self.mouseout(); })
            .transition().duration(self.spec.animTime)
            .attr('y', function (d) { return -self.spec.scaleH(d.value); })
            .attr('height', function (d) { return self.spec.scaleH(d.value); });
        // Y axis
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["a" /* axisLeft */](self.spec.scaleY).ticks(5).tickFormat(function (d) { return d; });
        self.svg.select('g#y-axis').transition().duration(self.spec.animTime)
            .call(customYAxis);
        function customYAxis(g) {
            g.call(yAxis);
            g.select('.domain').attr('stroke-width', 2)
                .style('stroke', self.graphSpec.yAxis.axisColor);
            g.selectAll('.tick text')
                .attr('x', -18).attr('font-size', 14)
                .style('fill', self.graphSpec.yAxis.axisColor);
            g.selectAll('.tick line')
                .style('stroke', self.graphSpec.yAxis.axisColor).attr('stroke-width', 1.2)
                .attr('x1', 0).attr('x2', self.width).attr('opacity', 0.5);
        }
        ;
    };
    BarchartComponent.prototype.updateBarStyle = function () {
        var self = this;
        var slotW = self.width / self.graphSpec.data.length, barW = slotW * self.graphSpec.barStyle.width;
        self.spec.slotW = slotW;
        self.spec.barW = barW;
        self.workSpace.selectAll('g.bar').select('rect')
            .attr('x', (self.spec.slotW - self.spec.barW) / 2)
            .attr('width', self.spec.barW)
            .style('fill', self.graphSpec.barStyle.colorText)
            .attr('opacity', self.graphSpec.barStyle.opacity);
    };
    BarchartComponent.prototype.updateHoverStyle = function () {
        var self = this;
        var slotW = self.width / self.graphSpec.data.length, hoverW = slotW * self.graphSpec.hoverStyle.width;
        self.spec.hoverW = hoverW;
    };
    BarchartComponent.prototype.updateXaxis = function () {
        var self = this;
        self.svg.select('g#x-axis').select('text#label')
            .style('fill', self.graphSpec.xAxis.colorText)
            .text(self.graphSpec.xAxis.label);
    };
    BarchartComponent.prototype.updateYaxis = function () {
        var self = this;
        self.svg.select('g#y-axis').select('text#label')
            .style('fill', self.graphSpec.yAxis.colorText)
            .text(self.graphSpec.yAxis.label);
    };
    BarchartComponent.prototype.updateTitle = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](self.element.nativeElement).select('#barchart').select('#barchart-title')
            .style('color', self.graphSpec.title.colorText);
    };
    BarchartComponent.prototype.mouseenter = function (d, i) {
        var self = this;
        self.workSpace.selectAll('g.bar').select('rect').transition().duration(self.spec.animTime / 4)
            .attr('opacity', function (data, index) {
            if (d.desc == data.desc && i == index)
                return self.graphSpec.barStyle.opacity;
            else if (self.graphSpec.hoverStyle.type == 2)
                return self.graphSpec.barStyle.opacity / 4;
            else
                return self.graphSpec.barStyle.opacity;
        })
            .attr('x', function (data, index) {
            if (d.desc == data.desc && i == index)
                return (self.spec.slotW - self.spec.hoverW) / 2;
            else
                return (self.spec.slotW - self.spec.barW) / 2;
        })
            .attr('width', function (data, index) {
            if (d.desc == data.desc && i == index)
                return self.spec.hoverW;
            else
                return self.spec.barW;
        })
            .style('fill', function (data, index) {
            if (d.desc == data.desc && i == index)
                return self.graphSpec.hoverStyle.colorText;
            else
                return self.graphSpec.barStyle.colorText;
        })
            .attr('y', function (data) { return -self.spec.scaleH(data.value); })
            .attr('height', function (data) { return self.spec.scaleH(data.value); });
        self.hoverObj = d;
        self.host.select('#barchart-tooltip').style('display', 'block');
        self.tooltipPositionUpdate();
    };
    BarchartComponent.prototype.mousemove = function () {
        var self = this;
        self.tooltipPositionUpdate();
    };
    BarchartComponent.prototype.mouseout = function () {
        var self = this;
        self.workSpace.selectAll('g.bar').select('rect').transition().duration(self.spec.animTime / 4)
            .attr('opacity', self.graphSpec.barStyle.opacity)
            .attr('x', (self.spec.slotW - self.spec.barW) / 2)
            .attr('width', self.spec.barW)
            .style('fill', self.graphSpec.barStyle.colorText)
            .attr('y', function (data) { return -self.spec.scaleH(data.value); })
            .attr('height', function (data) { return self.spec.scaleH(data.value); });
        self.hoverObj = null;
        self.host.select('#barchart-tooltip').style('display', 'none');
    };
    BarchartComponent.prototype.tooltipPositionUpdate = function () {
        var self = this;
        var element = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */]('body').node(), coordinates = __WEBPACK_IMPORTED_MODULE_1_d3__["i" /* mouse */](element), bbox = element.getBoundingClientRect();
        var x = coordinates[0] + 35 * bbox.width / 1686, y = coordinates[1] - 20;
        if (coordinates[0] > bbox.width * 0.8) {
            var tbbox = self.host.select('#barchart-tooltip').node().getBoundingClientRect();
            x -= tbbox.width + 70 * bbox.width / 1686;
        }
        self.host.select('#barchart-tooltip')
            .style('left', x + 'px').style('top', y + 'px');
    };
    return BarchartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], BarchartComponent.prototype, "graphSpec", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], BarchartComponent.prototype, "trademarkColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], BarchartComponent.prototype, "outWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], BarchartComponent.prototype, "outHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], BarchartComponent.prototype, "showH", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], BarchartComponent.prototype, "marginPercent", void 0);
BarchartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-barchart',
        template: __webpack_require__("../../../../../src/app/barchart/barchart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/barchart/barchart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], BarchartComponent);

var _a;
//# sourceMappingURL=barchart.component.js.map

/***/ }),

/***/ "../../../../../src/app/future-page/future-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#future-page {\r\n    padding-top: 5vw;\r\n}\r\n\r\n.headline {\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n    pointer-events: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/future-page/future-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"future-page\" class=\"wow fadeInLeft\">\n  <div class=\"headline\" align=\"middle\">\n    Future Direction\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/future-page/future-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuturePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuturePageComponent = (function () {
    function FuturePageComponent() {
    }
    FuturePageComponent.prototype.ngOnInit = function () {
    };
    return FuturePageComponent;
}());
FuturePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-future-page',
        template: __webpack_require__("../../../../../src/app/future-page/future-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/future-page/future-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FuturePageComponent);

//# sourceMappingURL=future-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/grocery-sale-page/grocery-sale-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#grocery-sale-page {\r\n    padding-top: 5vw;\r\n}\r\n\r\n#grocery-sale-page #barchart-container {\r\n    padding: 0 4vw 0 4vw;\r\n}\r\n\r\n.statistic-source {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 0;\r\n    padding-right: 3vw; \r\n    font-size: 1.5vw;\r\n    color: #8f8f8f;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grocery-sale-page/grocery-sale-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"grocery-sale-page\" class=\"wow fadeInLeft\">\r\n  <div id=\"barchart-container\">\r\n    <app-barchart #barchartBlack [graphSpec]=\"graphSpec\"></app-barchart>\r\n  </div>\r\n\r\n  <div class=\"statistic-source\">\r\n    Source: Statista, Market Research Company\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/grocery-sale-page/grocery-sale-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrocerySalePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GrocerySalePageComponent = (function () {
    function GrocerySalePageComponent() {
    }
    GrocerySalePageComponent.prototype.ngOnInit = function () {
        var self = this;
        self.graphSpec = {
            data: [{ desc: '92', value: 318.3 }, { desc: '93', value: 322.5 }, { desc: '94', value: 331.7 }, { desc: '95', value: 337.8 }, { desc: '96', value: 347.0 },
                { desc: '97', value: 354.1 }, { desc: '98', value: 359.9 }, { desc: '99', value: 375.4 },
                { desc: '00', value: 381.4 }, { desc: '01', value: 396.5 }, { desc: '02', value: 397.3 }, { desc: '03', value: 406.3 }, { desc: '04', value: 418.8 },
                { desc: '05', value: 435.5 }, { desc: '06', value: 448.7 }, { desc: '07', value: 468.4 }, { desc: '08', value: 488.5 }, { desc: '09', value: 489.0 },
                { desc: '10', value: 498.0 }, { desc: '11', value: 523.4 }, { desc: '12', value: 539.2 }, { desc: '13', value: 549.1 }, { desc: '14', value: 573.8 },
                { desc: '15', value: 587.9 }, { desc: '16', value: 600.3 }],
            barStyle: {
                color: null, opacity: 0.7, width: 0.7, colorText: 'orange'
            },
            hoverStyle: {
                color: null, type: 2, width: 0.8, colorText: '#428bca'
            },
            title: {
                label: 'Supermarket and other grocery store sales in the United States from 1992 to 2016 <br>(in billion U.S. dollars)', color: null, colorText: '#fffff0'
            },
            xAxis: {
                label: '', color: null, colorText: '#fffff0', axisColor: '#b6b6b2'
            },
            yAxis: {
                label: 'Sales in billion U.S. dollars', color: null, colorText: '#fffff0', axisColor: '#b6b6b2'
            },
            background: {
                color: '#0e0e0e'
            }
        };
    };
    return GrocerySalePageComponent;
}());
GrocerySalePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-grocery-sale-page',
        template: __webpack_require__("../../../../../src/app/grocery-sale-page/grocery-sale-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/grocery-sale-page/grocery-sale-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GrocerySalePageComponent);

//# sourceMappingURL=grocery-sale-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/hbm-page/hbm-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#hbm-page {\r\n    padding-top: 5vw;\r\n}\r\n\r\n.headline {\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n    pointer-events: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hbm-page/hbm-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"hbm-page\" class=\"wow fadeInLeft\">\n  <div class=\"headline\" align=\"middle\">\n    Health Belief Model\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/hbm-page/hbm-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HbmPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HbmPageComponent = (function () {
    function HbmPageComponent() {
    }
    HbmPageComponent.prototype.ngOnInit = function () {
    };
    return HbmPageComponent;
}());
HbmPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-hbm-page',
        template: __webpack_require__("../../../../../src/app/hbm-page/hbm-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hbm-page/hbm-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HbmPageComponent);

//# sourceMappingURL=hbm-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/interactive-globe/interactive-globe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#interactive-globe canvas {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/interactive-globe/interactive-globe.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"interactive-globe\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/interactive-globe/interactive-globe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractiveGlobeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_topojson_client__ = __webpack_require__("../../../../topojson-client/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three__ = __webpack_require__("../../../../three/build/three.module.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrbitControls = __webpack_require__("../../../../three-orbit-controls/index.js")(__WEBPACK_IMPORTED_MODULE_3_three__);
// Import the DataService
// import { WindowRefService } from '../services/window-ref.service';
var InteractiveGlobeComponent = (function () {
    function InteractiveGlobeComponent(element) {
        this.element = element;
        this.play = true;
        this.particles = [];
        this.frames = 0;
        this.host = this.element.nativeElement;
        this.windowSize = {
            w: window.innerWidth,
            h: window.innerHeight
        };
    }
    InteractiveGlobeComponent.prototype.ngOnInit = function () {
        this.play = true;
        this.setupVariable();
        this.setupThreeMainObjects();
        this.setupParticleObjects();
        this.setupStaticObjects();
        this.setupThreeObjects();
    };
    // Setup
    InteractiveGlobeComponent.prototype.setupVariable = function () {
        var self = this;
        self.spec = {
            r: 50,
            mapR: 50.1,
            segments: 128,
            mapProjection: __WEBPACK_IMPORTED_MODULE_1_d3__["d" /* geoEquirectangular */]().translate([512, 256]).scale(163),
            rayR: 104 * Math.tan(Math.PI / 6)
        };
    };
    InteractiveGlobeComponent.prototype.setupThreeMainObjects = function () {
        var self = this;
        // Setup scene
        self.scene = new __WEBPACK_IMPORTED_MODULE_3_three__["Scene"]();
        // self.scene.background = new THREE.Color('#141414');
        // Setup camera
        self.camera = new __WEBPACK_IMPORTED_MODULE_3_three__["PerspectiveCamera"](60, window.innerWidth / window.innerHeight, 0.1, 1000);
        self.updateCameraPosition();
        self.scene.add(self.camera);
        var light1 = new __WEBPACK_IMPORTED_MODULE_3_three__["HemisphereLight"]('#ffffff', '#666666', 0.5);
        light1.position.set(40, 40, 100);
        self.camera.add(light1);
        var light2 = new __WEBPACK_IMPORTED_MODULE_3_three__["DirectionalLight"]('#fffff0', 1);
        light2.position.set(200, 200, 100);
        self.camera.add(light2);
        // Setup renderer
        self.renderer = new __WEBPACK_IMPORTED_MODULE_3_three__["WebGLRenderer"]({
            antialias: true
        });
        self.renderer.setSize(window.innerWidth, window.innerHeight, true);
        self.renderer.autoClear = false;
        self.renderer.clear();
        self.renderer.clearDepth();
        self.renderer.shadowMapEnabled = true;
        // self.renderer.setClearColor('black', 1);
        self.host.appendChild(self.renderer.domElement);
        // Control
        self.controls = new OrbitControls(self.camera, self.renderer.domElement);
        self.controls.enableZoom = false;
        self.controls.enableKeys = false;
        self.controls.enablePan = false;
        self.controls.enableDamping = true;
        self.controls.dampingFactor = 0.3;
        self.controls.autoRotate = true;
        self.controls.autoRotateSpeed = -0.4;
        self.controls.rotateSpeed = 0.125;
    };
    InteractiveGlobeComponent.prototype.setupParticleObjects = function () {
        var self = this;
        // Particle scene
        self.particleScene = new __WEBPACK_IMPORTED_MODULE_3_three__["Scene"]();
        self.particleScene.fog = new __WEBPACK_IMPORTED_MODULE_3_three__["FogExp2"]('#141414', 0.003);
        // Particle camera
        self.particleCamera = new __WEBPACK_IMPORTED_MODULE_3_three__["PerspectiveCamera"](60, window.innerWidth / window.innerHeight, 0.1, 1000);
        self.updateParticleCameraPosition();
        var light1 = new __WEBPACK_IMPORTED_MODULE_3_three__["HemisphereLight"]('#ffffff', '#666666', 0.5);
        light1.position.set(40, 40, 100);
        self.particleCamera.add(light1);
        var light2 = new __WEBPACK_IMPORTED_MODULE_3_three__["DirectionalLight"]('#fffff0', 1);
        light2.position.set(200, 200, 100);
        self.particleCamera.add(light2);
        self.particleScene.add(self.particleCamera);
        // Particle control
        self.particleControls = new OrbitControls(self.particleCamera, self.renderer.domElement);
        self.particleControls.enableZoom = false;
        self.particleControls.enableKeys = false;
        self.particleControls.enablePan = false;
        self.particleControls.enableDamping = true;
        self.particleControls.dampingFactor = 0.3;
        self.particleControls.autoRotate = true;
        self.particleControls.autoRotateSpeed = -0.1;
        self.particleControls.rotateSpeed = 0.125;
        // self.particleControls.enabled = false;
        // self.particleControls.rotate = false;
        var material = new __WEBPACK_IMPORTED_MODULE_3_three__["MeshBasicMaterial"]({
            color: '#67caed',
            transparent: true
        });
        var pi = Math.PI;
        // Near particles need animation update
        for (var i = 0; i < 250; i++) {
            var k = 0.25 * Math.random() + 0.01, geometry = new __WEBPACK_IMPORTED_MODULE_3_three__["BoxGeometry"](k, k, k);
            var tempMaterial = material.clone();
            tempMaterial.opacity = 0.8;
            var mesh = new __WEBPACK_IMPORTED_MODULE_3_three__["Mesh"](geometry, tempMaterial);
            var r = self.spec.r + 30 * Math.random(), a1 = 2 * Math.random() - 1, a2 = 2 * Math.random() - 1;
            mesh.position.x = r * Math.sin(a1 * pi) * Math.cos(a2 * pi);
            mesh.position.y = r * Math.sin(a1 * pi) * Math.sin(a2 * pi);
            mesh.position.z = r * Math.cos(a1 * pi);
            mesh.matrixAutoUpdate = true;
            mesh.updateMatrix();
            self.particleScene.add(mesh);
            if (Math.random() > 0.2)
                self.particles.push(mesh);
        }
        // Far particles static 
        for (var i = 0; i < 600; i++) {
            var k = 1.8 * Math.random() + 0.8, geometry = new __WEBPACK_IMPORTED_MODULE_3_three__["BoxGeometry"](k, k, k);
            var tempMaterial = material.clone();
            tempMaterial.opacity = 0.6 * Math.random() + 0.4;
            var mesh = new __WEBPACK_IMPORTED_MODULE_3_three__["Mesh"](geometry, tempMaterial);
            var rf = 300 + 200 * Math.random(), a1 = 2 * Math.random() - 1, a2 = 2 * Math.random() - 1;
            mesh.position.x = rf * Math.sin(a1 * pi) * Math.cos(a2 * pi);
            mesh.position.y = rf * Math.sin(a1 * pi) * Math.sin(a2 * pi);
            mesh.position.z = rf * Math.cos(a1 * pi);
            mesh.matrixAutoUpdate = false;
            mesh.updateMatrix();
            self.particleScene.add(mesh);
        }
    };
    InteractiveGlobeComponent.prototype.setupStaticObjects = function () {
        var self = this;
        var loader = new __WEBPACK_IMPORTED_MODULE_3_three__["TextureLoader"]();
        loader.load(self.globeResources.bg, function (bgTexture) {
            var bgMesh = new __WEBPACK_IMPORTED_MODULE_3_three__["Mesh"](new __WEBPACK_IMPORTED_MODULE_3_three__["PlaneGeometry"](2, 2, 0), new __WEBPACK_IMPORTED_MODULE_3_three__["MeshBasicMaterial"]({
                map: bgTexture
            }));
            bgMesh.material.depthTest = false;
            bgMesh.material.depthWrite = false;
            self.staticScene = new __WEBPACK_IMPORTED_MODULE_3_three__["Scene"]();
            self.staticCamera = new __WEBPACK_IMPORTED_MODULE_3_three__["Camera"]();
            self.staticScene.add(self.staticCamera);
            self.staticScene.add(bgMesh);
        });
    };
    InteractiveGlobeComponent.prototype.setupThreeObjects = function () {
        var self = this;
        var globeGeometry = new __WEBPACK_IMPORTED_MODULE_3_three__["SphereGeometry"](self.spec.r, self.spec.segments, self.spec.segments);
        var globeMaterial = new __WEBPACK_IMPORTED_MODULE_3_three__["MeshPhongMaterial"]({});
        globeMaterial.shininess = 8;
        // globeMaterial.side = THREE.FrontSide;
        globeMaterial.side = __WEBPACK_IMPORTED_MODULE_3_three__["DoubleSide"];
        globeMaterial.opacity = 1;
        globeMaterial.transparent = true;
        // Instantiate a loader for adding material detail
        var loader = new __WEBPACK_IMPORTED_MODULE_3_three__["TextureLoader"]();
        loader.crossOrigin = '';
        // Add texture
        loader.load(self.globeResources.texture, function (texture) {
            loader.load(self.globeResources.bump, function (bump) {
                loader.load(self.globeResources.light, function (lightmap) {
                    globeMaterial.map = texture;
                    globeMaterial.bumpMap = bump;
                    globeMaterial.bumpScale = 4;
                    globeMaterial.lightMap = lightmap;
                    // globeMaterial.wireframe = true;
                    // loader.load(self.globeResources.specular, specular=>{
                    //   globeMaterial.specularMap = specular;
                    //   globeMaterial.specular = new THREE.Color('grey');
                    // });
                    self.setupGlobe(globeGeometry, globeMaterial);
                });
            });
        });
    };
    InteractiveGlobeComponent.prototype.setupGlobe = function (globeGeometry, globeMaterial) {
        var self = this;
        var innerGlobe = new __WEBPACK_IMPORTED_MODULE_3_three__["Mesh"](globeGeometry, globeMaterial);
        innerGlobe.rotation.y = Math.PI;
        self.globe = new __WEBPACK_IMPORTED_MODULE_3_three__["Object3D"]();
        self.globe.add(innerGlobe);
        self.scene.add(self.globe);
        // self.globe.rotation.y = Math.PI*1.25;
        // self.globe.rotation.x += Math.PI/5;
        self.setupAtmosphere();
        // self.setupPopulationBarchart();
        self.setupGlobeSelectedCountry('United States');
        self.animate();
    };
    InteractiveGlobeComponent.prototype.setupGlobeSelectedCountry = function (country) {
        if (country === void 0) { country = null; }
        var self = this;
        // Add map information
        __WEBPACK_IMPORTED_MODULE_1_d3__["f" /* json */](self.globeResources.world, function (data) {
            var temp = __WEBPACK_IMPORTED_MODULE_2_topojson_client__["a" /* feature */](data, data.objects.countries);
            self.geoObject = self.geoDecoder(temp.features);
            self.countries = temp.features.map(function (d) { return d.id.trim(); }).sort();
            // Globe with map data
            var mapGlobeGeometry = new __WEBPACK_IMPORTED_MODULE_3_three__["SphereGeometry"](self.spec.mapR, self.spec.segments, self.spec.segments);
            var mapGlobeMaterial;
            if (country === null) {
                mapGlobeMaterial = new __WEBPACK_IMPORTED_MODULE_3_three__["MeshPhongMaterial"]({
                    map: self.allCountriesMap(),
                    transparent: true,
                    side: __WEBPACK_IMPORTED_MODULE_3_three__["DoubleSide"]
                });
            }
            else {
                mapGlobeMaterial = new __WEBPACK_IMPORTED_MODULE_3_three__["MeshPhongMaterial"]({
                    map: self.selectedCountryTexture(country, 'orange'),
                    transparent: true,
                    side: __WEBPACK_IMPORTED_MODULE_3_three__["DoubleSide"]
                });
            }
            var outterGlobe = new __WEBPACK_IMPORTED_MODULE_3_three__["Mesh"](mapGlobeGeometry, mapGlobeMaterial);
            outterGlobe.rotation.y = Math.pow(Math.PI, 0.996);
            outterGlobe.rotation.x = -Math.PI * 0.005;
            self.globe.add(outterGlobe);
        });
    };
    InteractiveGlobeComponent.prototype.setupAtmosphere = function () {
        var self = this;
        var loader = new __WEBPACK_IMPORTED_MODULE_3_three__["TextureLoader"]();
        loader.crossOrigin = '';
        loader.load(self.globeResources.cloud, function (cloudTexture) {
            var atGeometry = new __WEBPACK_IMPORTED_MODULE_3_three__["SphereGeometry"](self.spec.r * 1.3, self.spec.segments, self.spec.segments);
            var atMaterial = new __WEBPACK_IMPORTED_MODULE_3_three__["MeshPhongMaterial"]({
                map: cloudTexture,
                transparent: true,
                opacity: 0.04,
                side: __WEBPACK_IMPORTED_MODULE_3_three__["DoubleSide"]
            });
            var atmosphere = new __WEBPACK_IMPORTED_MODULE_3_three__["Mesh"](atGeometry, atMaterial);
            self.particleScene.add(atmosphere);
            // Add glowing effect
            var glowMaterial = new __WEBPACK_IMPORTED_MODULE_3_three__["ShaderMaterial"]({
                uniforms: {
                    'c': { type: 'f', value: 0.45 },
                    'p': { type: 'f', value: 5 },
                    glowColor: { type: 'c', value: new __WEBPACK_IMPORTED_MODULE_3_three__["Color"](0x38a4e2) },
                    viewVector: { type: "v3", value: self.camera.position }
                },
                vertexShader: "uniform vec3 viewVector;\n          uniform float c;\n          uniform float p;\n          varying float intensity;\n          void main() \n          {\n              vec3 vNormal = normalize( normalMatrix * normal );\n              vec3 vNormel = normalize( normalMatrix * viewVector );\n              intensity = pow( c - dot(vNormal, vNormel), p );\n              \n              gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n          }",
                fragmentShader: "uniform vec3 glowColor;\n          varying float intensity;\n          void main() \n          {\n              vec3 glow = glowColor * intensity;\n              gl_FragColor = vec4( glow, 1.0 );\n          }",
                side: __WEBPACK_IMPORTED_MODULE_3_three__["BackSide"],
                blending: __WEBPACK_IMPORTED_MODULE_3_three__["AdditiveBlending"],
                transparent: true
            });
            var glowGeometry = new __WEBPACK_IMPORTED_MODULE_3_three__["SphereGeometry"](self.spec.r * 1.4, self.spec.segments, self.spec.segments);
            var glowMesh = new __WEBPACK_IMPORTED_MODULE_3_three__["Mesh"](glowGeometry, glowMaterial);
            self.scene.add(glowMesh);
        });
    };
    InteractiveGlobeComponent.prototype.setupPopulationBarchart = function () {
        var self = this;
        self.capitalObj = [];
        __WEBPACK_IMPORTED_MODULE_1_d3__["f" /* json */](self.globeResources.worldCapitals, function (capitals) {
            var capitalArray = ['Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'China',
                'Denmark', 'France', 'Germany', 'Greece', 'Iceland', 'Ireland', 'Italy', 'Japan',
                'South Korea', 'Mexico', 'Norway', 'Portugal', 'Russia', 'Singapore', 'Spain',
                'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'United Arab Emirates',
                'United Kingdom', 'United States'];
            var focusCapitals = capitals.filter(function (d) {
                return capitalArray.indexOf(d.CountryName) > -1;
            });
            for (var i = 0; i < focusCapitals.length; i++) {
                self.addOneCapital(focusCapitals[i]);
            }
        });
    };
    InteractiveGlobeComponent.prototype.addOneCapital = function (d) {
        var self = this;
        var rScaleTemp = 1, position = self.latLongToVector3(Number(d.CapitalLatitude), Number(d.CapitalLongitude), rScaleTemp * self.spec.r);
        var material = new __WEBPACK_IMPORTED_MODULE_3_three__["MeshPhongMaterial"]({ color: 0x00ff00 }), geometry = new __WEBPACK_IMPORTED_MODULE_3_three__["BoxGeometry"](1, 1, 5);
        var capital = new __WEBPACK_IMPORTED_MODULE_3_three__["Mesh"](geometry, material);
        capital.position.set(position.x, position.y, position.z);
        capital.lookAt(new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"](0, 0, 0));
        // Add attributes
        capital.name = d.CountryName;
        self.globe.add(capital);
        self.capitalObj.push(capital);
    };
    // Animation update
    InteractiveGlobeComponent.prototype.animate = function () {
        var self = this;
        if (self.play) {
            requestAnimationFrame(function () { return self.animate(); });
            if (self.windowSize.w != window.innerWidth || self.windowSize.h != window.innerHeight) {
                self.windowSize.w = window.innerWidth;
                self.windowSize.h = window.innerHeight;
                self.updateOnResizing();
            }
            self.controls.update();
            self.particleControls.update();
            // self.frames += 1;
            // if (self.frames%5 == 0) {
            //   self.frames = 0;
            self.animateParticles();
            // }
            self.renderer.autoClear = false;
            self.renderer.clear();
            self.renderer.render(self.staticScene, self.staticCamera);
            self.renderer.render(self.scene, self.camera);
            self.renderer.render(self.particleScene, self.particleCamera);
        }
    };
    InteractiveGlobeComponent.prototype.animateParticles = function () {
        var self = this;
        for (var i = 0; i < self.particles.length; i++) {
            var k = 1.25 * Math.random() + 0.25, obj = self.particles[i];
            obj.scale.x = k;
            obj.scale.y = k;
            obj.scale.z = k;
        }
    };
    InteractiveGlobeComponent.prototype.updateOnResizing = function () {
        var self = this;
        self.updateCameraPosition();
        self.camera.updateProjectionMatrix();
        self.updateParticleCameraPosition();
        self.particleCamera.updateProjectionMatrix();
        self.renderer.setSize(window.innerWidth, window.innerHeight);
    };
    InteractiveGlobeComponent.prototype.updateCameraPosition = function () {
        var self = this;
        self.camera.aspect = window.innerWidth / window.innerHeight;
        if (window.innerWidth < 900) {
            self.camera.position.z = 104 + (900 - window.innerWidth) / 4;
        }
        else {
            self.camera.position.z = 104;
        }
    };
    InteractiveGlobeComponent.prototype.updateParticleCameraPosition = function () {
        var self = this;
        self.particleCamera.aspect = window.innerWidth / window.innerHeight;
        if (window.innerWidth < 900) {
            self.particleCamera.position.z = 104 + (900 - window.innerWidth) / 4;
        }
        else {
            self.particleCamera.position.z = 104;
        }
    };
    // Functions
    InteractiveGlobeComponent.prototype.geoDecoder = function (features) {
        var store = {};
        for (var i = 0; i < features.length; i++) {
            store[features[i].id] = features[i];
        }
        return {
            find: function (id) { return store[id]; },
            search: function (lat, lng) {
                var match = false, country, coords;
                for (var i_1 = 0; i_1 < features.length; i_1++) {
                    country = features[i_1];
                    if (country.geometry.type === 'Polygon') {
                        match = this.pointInPolygon(country.geometry.coordinates[0], [lng, lat]);
                        if (match) {
                            return {
                                code: features[i_1].id,
                                name: features[i_1].properties.name
                            };
                        }
                    }
                    else if (country.geometry.type === 'MultiPolygon') {
                        coords = country.geometry.coordinates;
                        for (var j = 0; j < coords.length; j++) {
                            match = this.pointInPolygon(coords[j][0], [lng, lat]);
                            if (match) {
                                return {
                                    code: features[i_1].id,
                                    name: features[i_1].properties.name
                                };
                            }
                        }
                    }
                }
                return null;
            }
        };
    };
    InteractiveGlobeComponent.prototype.pointInPolygon = function (poly, point) {
        var x = point[0];
        var y = point[1];
        var inside = false, xi, xj, yi, yj, xk;
        for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
            xi = poly[i][0];
            yi = poly[i][1];
            xj = poly[j][0];
            yj = poly[j][1];
            xk = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (xk) {
                inside = !inside;
            }
        }
        return inside;
    };
    InteractiveGlobeComponent.prototype.selectedCountryTexture = function (countryId, color) {
        var self = this;
        var countryPath = self.geoObject.find(countryId);
        return self.selectedCountryMap(countryPath, color);
    };
    InteractiveGlobeComponent.prototype.selectedCountryMap = function (countryPath, color) {
        var self = this;
        var canvasTemp = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](self.host).append('canvas')
            .style('display', 'none')
            .attr('width', 1024)
            .attr('height', 512);
        var contextTemp = canvasTemp.node().getContext('2d');
        var path = __WEBPACK_IMPORTED_MODULE_1_d3__["e" /* geoPath */]()
            .projection(self.spec.mapProjection)
            .context(contextTemp);
        contextTemp.strokeStyle = 'none';
        contextTemp.lineWidth = 0.25;
        contextTemp.fillStyle = color || 'orange';
        contextTemp.beginPath();
        path(countryPath);
        contextTemp.fill();
        contextTemp.stroke();
        var globeDataTexture = new __WEBPACK_IMPORTED_MODULE_3_three__["Texture"](canvasTemp.node());
        globeDataTexture.needsUpdate = true;
        canvasTemp.remove();
        return globeDataTexture;
    };
    InteractiveGlobeComponent.prototype.allCountriesMap = function () {
        var self = this;
        var canvasTemp = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](self.host).append('canvas')
            .style('display', 'none')
            .attr('width', 1024)
            .attr('height', 512);
        var contextTemp = canvasTemp.node().getContext('2d');
        var path = __WEBPACK_IMPORTED_MODULE_1_d3__["e" /* geoPath */]()
            .projection(self.spec.mapProjection)
            .context(contextTemp);
        contextTemp.strokeStyle = 'steelBlue';
        contextTemp.lineWidth = 1;
        contextTemp.fillStyle = 'rgba(0, 0, 200, 0)';
        contextTemp.beginPath();
        for (var i = 0; i < self.countries.length; i++) {
            path(self.geoObject.find(self.countries[i]));
        }
        contextTemp.fill();
        contextTemp.stroke();
        var globeDataTexture = new __WEBPACK_IMPORTED_MODULE_3_three__["Texture"](canvasTemp.node());
        globeDataTexture.needsUpdate = true;
        canvasTemp.remove();
        return globeDataTexture;
    };
    InteractiveGlobeComponent.prototype.latLongToVector3 = function (lat, lon, radius) {
        var phi = lat * Math.PI / 180;
        var theta = lon * Math.PI / 180 + Math.PI * 3 / 2;
        var x = radius * Math.cos(phi) * Math.cos(theta);
        var y = radius * Math.sin(phi);
        var z = radius * Math.cos(phi) * Math.sin(theta);
        return new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"](x, y, z);
    };
    // Destroy
    InteractiveGlobeComponent.prototype.destroy = function () {
        var self = this;
        self.play = false;
        self.capitalObj = [];
        self.scene = null;
        self.camera = null;
        self.controls = null;
        self.particleScene = null;
        self.particleCamera = null;
        self.particleControls = null;
        self.particles = [];
        self.staticScene = null;
        self.staticCamera = null;
        self.renderer = null;
        self.globe = null;
        self.frames = 0;
    };
    return InteractiveGlobeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], InteractiveGlobeComponent.prototype, "globeResources", void 0);
InteractiveGlobeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-interactive-globe',
        template: __webpack_require__("../../../../../src/app/interactive-globe/interactive-globe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/interactive-globe/interactive-globe.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], InteractiveGlobeComponent);

var _a;
//# sourceMappingURL=interactive-globe.component.js.map

/***/ }),

/***/ "../../../../../src/app/introduction-page/introduction-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#introduction-page {\r\n    position: absolute;\r\n    display: inline;\r\n    background: rgba(14, 14, 14, 0.9);\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 1;\r\n    transition: opacity 1.5s;\r\n}\r\n\r\n#introduction-page #slide-info {\r\n    position: absolute;\r\n    display: block;\r\n    right: 20px;\r\n    top: calc(50% - 11vw);\r\n    width: 55%;\r\n    color: #fffff0;    \r\n}\r\n\r\n#introduction-page #slide-info #slide-title {\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n}\r\n\r\n#introduction-page #slide-info #slide-author {\r\n    padding: 3vw 5vw 0 0;\r\n    font-size: 1.6vw;\r\n}\r\n\r\nspan.less-imp {\r\n    font-size: 1.3vw;\r\n    color: #8f8f8f;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/introduction-page/introduction-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"introduction-page\">\r\n  <div id=\"slide-info\">\r\n    <div id=\"slide-title\">\r\n      Personalized Assistant for Health-Conscious Grocery Shoppers\r\n    </div>\r\n    <div id=\"slide-author\" align=\"right\">\r\n      By <span style=\"color:orange;\">Sarun Seepun</span>\r\n      <br><span class=\"less-imp\">Applied Mathematics / Machine Learning</span>\r\n      <br><span class=\"less-imp\">At Claremont Graduate University</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/introduction-page/introduction-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntroductionPageComponent = (function () {
    function IntroductionPageComponent(element) {
        this.element = element;
        this.pageId = 0;
    }
    IntroductionPageComponent.prototype.ngOnInit = function () {
        var self = this;
        self.host = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](self.element.nativeElement);
        self.pageChange();
    };
    IntroductionPageComponent.prototype.pageChange = function () {
        var self = this;
        if (self.page == self.pageId) {
            self.host.select('#introduction-page').style('opacity', 1)
                .style('pointer-events', 'auto');
        }
        else {
            self.host.select('#introduction-page').style('opacity', 0)
                .style('pointer-events', 'none');
        }
    };
    return IntroductionPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], IntroductionPageComponent.prototype, "pageId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], IntroductionPageComponent.prototype, "page", void 0);
IntroductionPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-introduction-page',
        template: __webpack_require__("../../../../../src/app/introduction-page/introduction-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/introduction-page/introduction-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], IntroductionPageComponent);

var _a;
//# sourceMappingURL=introduction-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/persona-mana-page/persona-mana-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#smart-cart-page {\r\n    padding-top: 5vw;\r\n}\r\n\r\n#smart-cart-bg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    z-index: -20;\r\n    opacity: 0.6;\r\n}\r\n\r\n#dot-overlay-container {\r\n    position: absolute;\r\n    left: -5%;\r\n    top: -5%;\r\n    width: 110%;\r\n    height: 1000px;\r\n    z-index: -10;\r\n}\r\n\r\n#ipad-img-container {\r\n    padding-top: 0.2vw;\r\n    overflow: hidden;\r\n    padding-left: 15vw; \r\n}\r\n#ipad-img-container img {\r\n    width: calc(90% + 13vw);\r\n    height: auto;\r\n    pointer-events: none;\r\n}\r\n#smart-cart-app {\r\n    position: absolute;\r\n    left: 21%;\r\n    top: 8.2vw;\r\n    width: 78%;\r\n    height: 42.2vw;\r\n    background: #fffff0;\r\n    z-index: 5;\r\n}\r\n\r\n#persona-icon {\r\n    position: absolute;\r\n    left: 1.5vw;\r\n    top: 9vw;\r\n    width: 16.75vw;\r\n    height: auto;\r\n    z-index: 1000;\r\n}\r\n#persona-container {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 4vw 1vw 1vw 1vw;\r\n    width: 19.75vw;\r\n    height: 1500px;\r\n    background: #fffff0;\r\n    z-index: 900;\r\n    border: 0.3vw solid #0e0e0e;\r\n    color: #0e0e0e;\r\n    font-size: 1.7vw;\r\n    line-height: 2.8vw;\r\n    opacity: 0.65;\r\n}\r\n#persona-container span {\r\n    font-weight: 600;\r\n}\r\n#persona-container span.type1 {\r\n    color: orange;\r\n}\r\n#persona-container span.type2 {\r\n    color: red;\r\n}\r\n#persona-container div {\r\n    /* color: orange; */\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n    padding-bottom: 20vw;\r\n}\r\n\r\n#persona-video {\r\n    position: absolute;\r\n    display: inline;\r\n    top: -13vw;\r\n    left: 0;\r\n    z-index: -10;\r\n    opacity: 0.8;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/persona-mana-page/persona-mana-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <video id=\"persona-video\" width=\"110%\" height=\"auto\" autoplay loop>\r\n  <source src=\"assets/video/persona_footage1.mp4\" type=\"video/mp4\">\r\n</video> -->\r\n<img id=\"smart-cart-bg\" src=\"assets/img/bg/soccer_field.jpg\">\r\n<div id=\"dot-overlay-container\"></div>\r\n\r\n<div id=\"smart-cart-page\" class=\"wow fadeInLeft\">\r\n\r\n  <ng-container *ngIf=\"init == true\">\r\n    <div id=\"ipad-img-container\" align=\"middle\">\r\n      <img src=\"assets/img/misc/iphone.png\">    \r\n      <div id=\"smart-cart-app\">\r\n        <app-smart-cart-app #smartCartApp [appPage]=\"appPage\" \r\n        (appPageChange)=\"appPageChange($event)\"\r\n        [defaultPrefValues]=\"[5,5,5,5,8,6.5,10]\"\r\n        [defaultProduct]=\"'Ball Park Franks'\"\r\n        [defaultCheckout]=\"'CP Hotdog'\"></app-smart-cart-app>\r\n      </div>    \r\n    </div>\r\n  </ng-container>\r\n\r\n  <img id=\"persona-icon\" src=\"assets/img/icon/persona_1.png\">\r\n  <div id=\"persona-container\">\r\n    <div align=\"middle\">Persona</div>\r\n    <span>Mr. Mana</span> is a <span class=\"type1\">soccer player</span>. \r\n    He has <span class=\"type2\">no time to do grocery shopping</span> since he practice \r\n    soccer every day. He needs <span class=\"type1\">more fiber</span>, \r\n    <span class=\"type1\">sugar</span>, and <span class=\"type1\">protein</span> \r\n    to boost his stamina and muscle.\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/persona-mana-page/persona-mana-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonaManaPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonaManaPageComponent = (function () {
    function PersonaManaPageComponent() {
        this.appPageArray = ['Welcome', 'Preference', 'Shopping', 'Suggestion', 'Summary'];
        this.appPage = 'Welcome';
        // private appPage = 'Summary';
        this.init = false;
    }
    PersonaManaPageComponent.prototype.ngOnInit = function () {
    };
    PersonaManaPageComponent.prototype.appPageChange = function (page) {
        this.appPage = page;
    };
    PersonaManaPageComponent.prototype.appNextPage = function () {
        var index = this.appPageArray.indexOf(this.appPage);
        if (!this.init) {
            this.init = true;
        }
        else if (index < this.appPageArray.length - 1) {
            this.appPage = this.appPageArray[index + 1];
            this.smartCartApp.appNextPage();
        }
    };
    PersonaManaPageComponent.prototype.appPreviousPage = function () {
        var index = this.appPageArray.indexOf(this.appPage);
        if (index > 0) {
            this.appPage = this.appPageArray[index - 1];
            this.smartCartApp.appPreviousPage();
        }
    };
    PersonaManaPageComponent.prototype.appReset = function () {
        this.appPage = 'Welcome';
        this.smartCartApp.appPage = 'Welcome';
        this.smartCartApp.welcomeProcess();
    };
    return PersonaManaPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('smartCartApp'),
    __metadata("design:type", Object)
], PersonaManaPageComponent.prototype, "smartCartApp", void 0);
PersonaManaPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-persona-mana-page',
        template: __webpack_require__("../../../../../src/app/persona-mana-page/persona-mana-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/persona-mana-page/persona-mana-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PersonaManaPageComponent);

//# sourceMappingURL=persona-mana-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/persona-manee-page/persona-manee-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#smart-cart-page {\r\n    padding-top: 5vw;\r\n}\r\n\r\n#smart-cart-bg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: -10%;\r\n    width: 100%;\r\n    height: auto;\r\n    z-index: -20;\r\n    opacity: 0.55;\r\n}\r\n\r\n#dot-overlay-container {\r\n    position: absolute;\r\n    left: -5%;\r\n    top: -5%;\r\n    width: 110%;\r\n    height: 1000px;\r\n    z-index: -10;\r\n}\r\n\r\n#ipad-img-container {\r\n    padding-top: 0.2vw;\r\n    overflow: hidden;\r\n    padding-left: 15vw;\r\n}\r\n#ipad-img-container img {\r\n    width: calc(90% + 13vw);\r\n    height: auto;\r\n    pointer-events: none;\r\n}\r\n#smart-cart-app {\r\n    position: absolute;\r\n    left: 21%;\r\n    top: 8.2vw;\r\n    width: 78%;\r\n    height: 42.2vw;\r\n    background: #fffff0;\r\n    z-index: 5;\r\n}\r\n\r\n#persona-icon {\r\n    position: absolute;\r\n    left: 1.5vw;\r\n    top: 9vw;\r\n    width: 16.75vw;\r\n    height: auto;\r\n    z-index: 1000;\r\n}\r\n#persona-container {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 4vw 1vw 1vw 1vw;\r\n    width: 19.75vw;\r\n    height: 1500px;\r\n    background: #fffff0;\r\n    z-index: 900;\r\n    border: 0.3vw solid #0e0e0e;\r\n    color: #0e0e0e;\r\n    font-size: 1.7vw;\r\n    line-height: 2.8vw;\r\n    opacity: 0.8;\r\n}\r\n#persona-container span {\r\n    font-weight: 600;\r\n}\r\n#persona-container span.type1 {\r\n    color: orange;\r\n}\r\n#persona-container span.type2 {\r\n    color: red;\r\n}\r\n#persona-container div {\r\n    /* color: orange; */\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n    padding-bottom: 20vw;\r\n}\r\n\r\n#persona-video {\r\n    position: absolute;\r\n    display: inline;\r\n    top: -13vw;\r\n    left: 0;\r\n    z-index: -10;\r\n    opacity: 0.8;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/persona-manee-page/persona-manee-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <video id=\"persona-video\" width=\"110%\" height=\"auto\" autoplay loop>\r\n  <source src=\"assets/video/persona_footage2.mp4\" type=\"video/mp4\">\r\n</video> -->\r\n<img id=\"smart-cart-bg\" src=\"assets/img/bg/cgu_campus.jpg\">\r\n<div id=\"dot-overlay-container\"></div>\r\n\r\n<div id=\"smart-cart-page\" class=\"wow fadeInLeft\">\r\n\r\n  <ng-container *ngIf=\"init == true\">\r\n    <div id=\"ipad-img-container\" align=\"middle\">\r\n      <img src=\"assets/img/misc/iphone.png\">    \r\n      <div id=\"smart-cart-app\">\r\n        <app-smart-cart-app #smartCartApp [appPage]=\"appPage\" \r\n        (appPageChange)=\"appPageChange($event)\"\r\n        [defaultPrefValues]=\"[5,0,5,1,5,2.5,5]\"\r\n        [defaultProduct]=\"'Tomboy'\"\r\n        [defaultCheckout]=\"'Applegate Farms'\"></app-smart-cart-app>\r\n      </div>    \r\n    </div>\r\n  </ng-container>\r\n\r\n  <img id=\"persona-icon\" src=\"assets/img/icon/persona_2.png\">\r\n  <div id=\"persona-container\">\r\n    <div align=\"middle\">Persona</div>\r\n    <span>Miss Manee</span> is a <span class=\"type1\">PhD student</span>. \r\n    She has <span class=\"type2\">no time to do grocery shopping</span> since\r\n    she needs to <span class=\"type2\">graduate within 5 years</span>. \r\n    She needs <span class=\"type1\">less sugar</span>, \r\n    <span class=\"type1\">fat</span>, and <span class=\"type1\">sodium</span> \r\n    to stay healthy.\r\n  </div>\r\n\r\n</div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/persona-manee-page/persona-manee-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonaManeePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonaManeePageComponent = (function () {
    function PersonaManeePageComponent() {
        this.appPageArray = ['Welcome', 'Preference', 'Shopping', 'Suggestion', 'Summary'];
        this.appPage = 'Welcome';
        // private appPage = 'Summary';
        this.init = false;
    }
    PersonaManeePageComponent.prototype.ngOnInit = function () {
    };
    PersonaManeePageComponent.prototype.appPageChange = function (page) {
        this.appPage = page;
    };
    PersonaManeePageComponent.prototype.appNextPage = function () {
        var index = this.appPageArray.indexOf(this.appPage);
        if (!this.init) {
            this.init = true;
        }
        else if (index < this.appPageArray.length - 1) {
            this.appPage = this.appPageArray[index + 1];
            this.smartCartApp.appNextPage();
        }
    };
    PersonaManeePageComponent.prototype.appPreviousPage = function () {
        var index = this.appPageArray.indexOf(this.appPage);
        if (index > 0) {
            this.appPage = this.appPageArray[index - 1];
            this.smartCartApp.appPreviousPage();
        }
    };
    PersonaManeePageComponent.prototype.appReset = function () {
        this.appPage = 'Welcome';
        this.smartCartApp.appPage = 'Welcome';
        this.smartCartApp.welcomeProcess();
    };
    return PersonaManeePageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('smartCartApp'),
    __metadata("design:type", Object)
], PersonaManeePageComponent.prototype, "smartCartApp", void 0);
PersonaManeePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-persona-manee-page',
        template: __webpack_require__("../../../../../src/app/persona-manee-page/persona-manee-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/persona-manee-page/persona-manee-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PersonaManeePageComponent);

//# sourceMappingURL=persona-manee-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/problem-page/problem-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#problem-page {\r\n    padding-top: 5vw;\r\n    min-width: 100%;\r\n    min-height: 1000px;\r\n}\r\n\r\n.headline {\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n    color: orange;\r\n    pointer-events: none;\r\n}\r\n\r\n#problem-div {\r\n    position: absolute;\r\n    top: calc(50% - 9vw) !important;\r\n    right: 0;\r\n    padding-right: 3vw; \r\n    color: #fffff0;\r\n    pointer-events: none;\r\n}\r\n\r\n#problem-div .problem-header {\r\n    font-size: 3.5vw;\r\n    font-weight: 600;\r\n    opacity: 0;\r\n    transition: opacity 1.5s;\r\n}\r\n#problem-div .problem-info {\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n    color: orange;\r\n    opacity: 0;\r\n    transition: opacity 1.5s;\r\n}\r\n.problem-note {\r\n    font-size: 1.5vw;\r\n    color: #8f8f8f;\r\n    opacity: 0;\r\n    transition: opacity 1.5s;\r\n}\r\n\r\n.statistic-source {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 0;\r\n    padding-right: 3vw; \r\n    font-size: 1.5vw;\r\n    color: #8f8f8f;\r\n    opacity: 0;\r\n    transition: opacity 1.5s;\r\n}\r\n\r\n#confused-img {\r\n    position: absolute;\r\n    bottom: 40px;\r\n    left: 3vw;\r\n    width: 20%;\r\n    height: auto;\r\n    pointer-events: none;\r\n    opacity: 0;\r\n    transition: opacity 1.5s;\r\n}\r\n\r\n#grocery-video {\r\n    position: absolute;\r\n    display: inline;\r\n    top: -13vw;\r\n    left: 0;\r\n    z-index: -10;\r\n    opacity: 0.09;\r\n}\r\n\r\n#dot-overlay-container {\r\n    position: absolute;\r\n    left: -5%;\r\n    top: -5%;\r\n    width: 110%;\r\n    height: 1000px;\r\n    z-index: -5;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/problem-page/problem-page.component.html":
/***/ (function(module, exports) {

module.exports = "<video id=\"grocery-video\" width=\"110%\" height=\"auto\" autoplay loop>\r\n  <source src=\"assets/video/grocery_footage.mp4\" type=\"video/mp4\">\r\n</video>\r\n<div id=\"dot-overlay-container\"></div>\r\n\r\n<!-- <div id=\"problem-page\" class=\"wow fadeInLeft\" (click)=\"nextStage()\"> -->\r\n<div id=\"problem-page\" class=\"wow fadeInLeft\">\r\n\r\n  <div class=\"headline\" align=\"middle\">\r\n    Large Grocery Product Choices\r\n  </div>\r\n\r\n  <img class=\"stage\" id=\"confused-img\" src=\"assets/img/icon/confused_white.png\">\r\n\r\n  <div id=\"problem-div\">\r\n    <div class=\"problem-header stage-1\" align=\"right\">\r\n      Average items carried in a grocery in 2016\r\n    </div>\r\n    <div class=\"problem-info stage-1\" align=\"right\">38,900 items</div>\r\n\r\n    <br><br>\r\n    <div class=\"problem-note stage-2\" align=\"right\">*Brands found in the majority of grocery stores</div>\r\n    <div class=\"problem-header stage-2\" align=\"right\">Brand name hot dogs alone</div>\r\n    <div class=\"problem-info stage-2\" align=\"right\">14 brands</div>\r\n  </div>\r\n\r\n  <div class=\"statistic-source stage-1\">\r\n    Source: Food Marketing Institute\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/problem-page/problem-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProblemPageComponent = (function () {
    function ProblemPageComponent(element) {
        this.element = element;
        this.stage = 0;
    }
    ProblemPageComponent.prototype.ngOnInit = function () {
        this.host = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](this.element.nativeElement).select('#problem-page');
        // d3.timeout(()=>{this.nextStage()}, 2500);
        // d3.timeout(()=>{this.nextStage()}, 5000);
    };
    ProblemPageComponent.prototype.nextStage = function () {
        var self = this;
        self.stage += 1;
        self.host.selectAll('.stage-' + self.stage).style('opacity', 1);
        self.host.select('img.stage').style('opacity', 0.25);
    };
    ProblemPageComponent.prototype.previousStage = function () {
        var self = this;
        self.host.selectAll('.stage-' + self.stage).style('opacity', 0);
        if (self.stage == 1)
            self.host.select('img.stage').style('opacity', 0);
        self.stage -= 1;
    };
    ProblemPageComponent.prototype.initStagePage1 = function () {
        var self = this;
        self.stage = 0;
        self.host.selectAll('.stage-1').style('opacity', 0);
        self.host.selectAll('.stage-2').style('opacity', 0);
        self.host.select('img.stage').style('opacity', 0);
    };
    return ProblemPageComponent;
}());
ProblemPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-problem-page',
        template: __webpack_require__("../../../../../src/app/problem-page/problem-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/problem-page/problem-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], ProblemPageComponent);

var _a;
//# sourceMappingURL=problem-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/reference-page/reference-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#reference-page {\r\n    padding-top: 5vw;\r\n}\r\n\r\n.headline {\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n    pointer-events: none;\r\n    padding-bottom: 3vw;\r\n}\r\n\r\n.ref-container {\r\n    font-size: 1.5vw;\r\n    padding-bottom: 1.8vw;\r\n}\r\n\r\n.nav.nav-pills li a {\r\n    color: #fffff0;\r\n    font-size: 1.5vw;\r\n    padding-left: 3vw;\r\n    padding-right: 3vw;\r\n}\r\n.nav.nav-pills li.active a {\r\n    background: rgb(255, 166, 0);\r\n    font-weight: 600;\r\n}\r\n\r\n.tab-pane {\r\n    padding-top: 4vw;\r\n}\r\n\r\n.container {\r\n    width: 100% !important;\r\n    padding-left: 8vw;\r\n    padding-right: 8vw; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reference-page/reference-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"reference-page\" class=\"wow fadeInLeft\">\n  <div class=\"headline\" align=\"middle\">\n    References\n  </div>\n\n  <div id=\"exTab1\" class=\"container\">\t\n    <ul  class=\"nav nav-pills\">\n      <li class=\"active\">\n        <a  href=\"#1a\" data-toggle=\"tab\">Page 1</a>\n      </li>\n      <li><a href=\"#2a\" data-toggle=\"tab\">Page 2</a></li>\n      <li><a href=\"#3a\" data-toggle=\"tab\">Page 3</a></li>\n    </ul>\n\n    <div class=\"tab-content clearfix\">\n      <div class=\"tab-pane active\" id=\"1a\">\n        <div class=\"row ref-container\" *ngFor=\"let ref of references.slice(0,5); let i = index;\">\n          <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 ref-number\" align=\"middle\">[ {{i+1}} ]</div>\n          <div class=\"col-xs-11 col-sm-11 col-md-11 col-lg-11 ref-info\" [innerHTML]=\"ref\"></div>\n        </div>\n      </div>\n      <div class=\"tab-pane\" id=\"2a\">\n        <div class=\"row ref-container\" *ngFor=\"let ref of references.slice(5,10); let i = index;\">\n          <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 ref-number\" align=\"middle\">[ {{i+6}} ]</div>\n          <div class=\"col-xs-11 col-sm-11 col-md-11 col-lg-11 ref-info\" [innerHTML]=\"ref\"></div>\n        </div>\n      </div>\n      <div class=\"tab-pane\" id=\"3a\">\n        <div class=\"row ref-container\" *ngFor=\"let ref of references.slice(10,17); let i = index;\">\n          <div class=\"col-xs-1 col-sm-1 col-md-1 col-lg-1 ref-number\" align=\"middle\">[ {{i+11}} ]</div>\n          <div class=\"col-xs-11 col-sm-11 col-md-11 col-lg-11 ref-info\" [innerHTML]=\"ref\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/reference-page/reference-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferencePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReferencePageComponent = (function () {
    function ReferencePageComponent() {
        this.references = ['Hudson, E.: Health and Wellness the Trillion Dollar Industry in 2017: Key Research Highlights. Euromonitor International, November 2012. <a href="https://blog.euromonitor.com/" target="_blank">[Link]</a>',
            'What to Do When There Are Too Many Product Choices on the Store Shelves? Consumer Reports Magazine, March 2014. <a href="https://www.consumerreports.org/cro/magazine/2014/03/index.htm" target="_blank">[Link]</a>',
            'Nielsen Global Health and Wellness Report. The Neilsen Company, January 2015. <a href="https://www.nielsen.com/content/dam/nielsenglobal/eu/nielseninsights/pdfs/Nielsen%20Global%20Health%20and%20Wellness%20Report%20-%20January%202015.pdf" target="_blank">[Link]</a>',
            'Moore, G.A.: Crossing the Chasm: Marketing and Selling High-Tech Products to Mainstream Customers. Publisher Harper Collins (1991).',
            'Ahn, J., Williamson, J., Gartrell, M., Han, R., Lv, Q., Mishra, S.: Supporting Healthy Grocery Shopping via Mobile Augmented Reality. ACM Trans. Multimedia Comput. Commun. Appl. 12, 1s, Article 16 (October 2015), 24 pages. <a href="https://dl.acm.org/citation.cfm?doid=2837676.2808207" target="_blank">[Link]</a>',
            'Shekar, S., Nair, P., Helal, A.: iGrocer: A ubiquitous and pervasive smart grocery shopping system. In: Proceedings of the 2003 ACM Symposium on Applied Computing. (2003) 645–652.',
            'Rosenstock, I.: Historical Origins of the Health Belief Model. Health Education & Behavior. 2 (4): 328–335 (1974).',
            'Escoto, K.H., Laska, M.N., Larson, N., et al.: Work hours and perceived time barriers to healthful eating among young adults. American Journal of Health Behavior, 36, 786–796. (2012).',
            'Ross, A.C., Taylor, C.L., Yaktine, A.L., et al. (eds) Dietary Reference Intakes for Calcium and Vitamin D. Washington (DC), National Academies Press. (2011).',
            'Petty, R.E., Cacioppo, J.T.: The elaboration likelihood model of persuasion. Advances in Experimental Social Psychology: 125. doi:10.1016/s0065-2601(08)60214-2 (1986).',
            'Li, H., Chatterjee, S.: Designing effective persuasive systems utilizing the power of entanglement: communication channel, strategy and affect. Lecture notes in computer science, persuasive, vol 6137 (2010).',
            'Fogg, B.J.: Creating persuasive technologies: An eight-step design process. In: Proceedings of the 4th International Conference on Persuasive Technology, pp. 1–6. ACM, Claremont (2009).',
            'Fogg, B.J.: A Behavior Model for Persuasive Design. Persuasive Technology Lab, Stanford University. <a href="http://bjfogg.com/fbm_files/page4_1.pdf" target="_blank">[Link]</a>',
            'Fogg, B.J.: Persuasive technology: using computers to change what we think and do. Morgan Kaufmann, San Francisco (2003).',
            'Nutritional Scoring System. Nuval LLC, Massachusetts. <a href="www.nuval.com" target="_blank">[Link]</a>'];
    }
    ReferencePageComponent.prototype.ngOnInit = function () {
    };
    return ReferencePageComponent;
}());
ReferencePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-reference-page',
        template: __webpack_require__("../../../../../src/app/reference-page/reference-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reference-page/reference-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReferencePageComponent);

//# sourceMappingURL=reference-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/result-page/result-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#result-page {\r\n    padding-top: 5vw;\r\n}\r\n\r\n.headline {\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n    pointer-events: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/result-page/result-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"result-page\" class=\"wow fadeInLeft\">\n  <div class=\"headline\" align=\"middle\">\n    Result\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/result-page/result-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultPageComponent = (function () {
    function ResultPageComponent() {
    }
    ResultPageComponent.prototype.ngOnInit = function () {
    };
    return ResultPageComponent;
}());
ResultPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-result-page',
        template: __webpack_require__("../../../../../src/app/result-page/result-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/result-page/result-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ResultPageComponent);

//# sourceMappingURL=result-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/window-ref.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRefService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRefService = (function () {
    function WindowRefService() {
    }
    WindowRefService.prototype.nativeWindow = function () {
        return _window();
    };
    return WindowRefService;
}());
WindowRefService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WindowRefService);

//# sourceMappingURL=window-ref.service.js.map

/***/ }),

/***/ "../../../../../src/app/smart-cart-app/smart-cart-app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#smart-cart-app {\r\n    color: #0e0e0e;\r\n}\r\n\r\n#smart-cart-app a.btn {\r\n    font-size: 1.6vw;\r\n    margin-top: 0.4vw;\r\n    padding: 0.4vw 2vw 0.4vw 2vw;\r\n}\r\n\r\n#welcome-logo, #welcome-logo-temp {\r\n    color: orange;\r\n    font-size: 8vw;\r\n    -webkit-transform: scaleX(-1);\r\n    transform: scaleX(-1);\r\n}\r\n#welcome-logo-temp {\r\n    padding: 0 0.5vw 0 0.2vw;\r\n    opacity: 0;\r\n}\r\n#welcome-logo {\r\n    position: absolute;\r\n    left: 65.2%; \r\n    top: 32%;\r\n    -webkit-text-stroke: 0.3vw #0e0e0e;\r\n    transition: opacity 2s;\r\n}\r\n\r\n#welcome-line1 {\r\n    padding-top: 10vw; \r\n    color: #0e0e0e;\r\n    font-size: 10vw;\r\n    font-weight: 600;\r\n    opacity: 0;\r\n    transition: opacity 2s;\r\n}\r\n#welcome-line2 {\r\n    color: #3c3c3c;\r\n    font-size: 2.4vw;\r\n    opacity: 0;\r\n    transition: opacity 1s;\r\n}\r\n\r\n#preference-page {\r\n    margin: 2vw 2vw 2vw 2vw;\r\n}\r\n.pref-row {\r\n    padding: 0.9vw 0 0.9vw 0 !important;\r\n}\r\n.pref-label {\r\n    color: #0e0e0e;\r\n    font-size: 2vw;\r\n    font-weight: 600;\r\n    padding-top: 0.5vw;\r\n}\r\n#pref-left-side {\r\n    border: 0.2vw solid #0e0e0e;\r\n    padding: 1.5vw 1vw 1.5vw 1vw;\r\n    height: 38.5vw;\r\n    font-size: 2vw;\r\n    color: #0e0e0e;\r\n    background: #fffff0dc;\r\n}\r\n#pref-icon {\r\n    font-size: 18vw;\r\n    color: orange;\r\n    padding: 0.3vw 0 1.5vw 0;\r\n    -webkit-text-stroke: 0.5vw #0e0e0e;\r\n}\r\n\r\n.app-bg1 {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 42.2vw;\r\n    opacity: 0.22;\r\n    z-index: -10;\r\n    pointer-events: none;\r\n}\r\n\r\n#shopping-page, #suggestion-page, #summary-page {\r\n    margin: 2vw;\r\n    z-index: 15;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smart-cart-app/smart-cart-app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"smart-cart-app\">\r\n\r\n  <!-- Welcome page -->\r\n  <ng-container *ngIf=\"appPage == 'Welcome'\">\r\n    <i id=\"welcome-logo\" class=\"fa fa-shopping-cart\"></i>\r\n    <div id=\"welcome-line1\">\r\n      Smart C<i id=\"welcome-logo-temp\" class=\"fa fa-shopping-cart\"></i>rt\r\n    </div>\r\n    <div id=\"welcome-line2\">\r\n      Personalize Assistant for Grocery Shoppers\r\n    </div>\r\n  </ng-container>\r\n\r\n  <!-- Preference page -->\r\n  <ng-container *ngIf=\"appPage == 'Preference'\">\r\n    <img class=\"app-bg1\" src=\"assets/img/bg/mix_products.jpg\">\r\n\r\n    <div id=\"preference-page\" class=\"row wow fadeInLeft\">\r\n      <div id=\"pref-left-side\" class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\r\n        Each product contains different nutritions. Please rate each criteria\r\n        for your personal diet needs.\r\n        <br>\r\n        <i id=\"pref-icon\" class=\"fa fa-shopping-cart\"></i>\r\n        <br>\r\n        <a class=\"btn btn-info\" (click)=\"confirmPreferences()\">Confirm your setting</a>\r\n      </div>\r\n      <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\r\n        <ng-container *ngFor=\"let pref of preferenceArray; let i = index;\">\r\n          <div class=\"row pref-row\">\r\n            <div class=\"col-xs-4 col-sm-4 col-md-4 col-lg-4 pref-label\"\r\n            align=\"right\">\r\n              {{pref}}\r\n            </div>\r\n            <div class=\"col-xs-8 col-sm-8 col-md-8 col-lg-8\">\r\n              <app-smart-cart-slider #prefSlider [preference]=\"pref\"\r\n              [selectedValue]=\"preferences[i].value\"\r\n              (output)=\"changePreference($event)\"></app-smart-cart-slider>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <!-- Shopping page -->\r\n  <ng-container *ngIf=\"appPage == 'Shopping'\">\r\n    <img class=\"app-bg1\" src=\"assets/img/bg/mix_products.jpg\">\r\n\r\n    <div id=\"shopping-page\" class=\"row wow fadeInLeft\">\r\n      <svg></svg>\r\n      <br>\r\n      <a class=\"btn btn-primary\" (click)=\"appPreviousPage()\">Change your setting</a>\r\n\r\n      <ng-container *ngIf=\"selectedProduct != ''\">\r\n        <a class=\"btn btn-info\" style=\"margin-left:2vw;\"\r\n        (click)=\"appNextPage()\">Pick the product</a>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"selectedProduct == ''\">\r\n        <a class=\"btn btn-info\" style=\"margin-left:2vw;\"\r\n        disabled=\"disabled\">Pick the product</a>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <!-- Suggestion page -->\r\n  <ng-container *ngIf=\"appPage == 'Suggestion'\">\r\n    <img class=\"app-bg1\" src=\"assets/img/bg/mix_products.jpg\">\r\n\r\n    <div id=\"suggestion-page\" class=\"row wow fadeInLeft\">\r\n      <svg></svg>\r\n      <br>\r\n      <a class=\"btn btn-primary\" (click)=\"appPreviousPage()\">Back to shopping</a>\r\n      <ng-container *ngIf=\"selectedProduct != ''\">\r\n        <a class=\"btn btn-info\" style=\"margin-left:2vw;\"\r\n        (click)=\"confirmProduct()\">Continue with your product</a>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"selectedProduct != checkoutProduct\">\r\n        <a class=\"btn btn-danger\" style=\"margin-left:2vw;\"\r\n        (click)=\"changeProduct()\">Change product</a>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"selectedProduct == checkoutProduct\">\r\n        <a class=\"btn btn-danger\" style=\"margin-left:2vw;\"\r\n        disabled=\"disabled\">Change product</a>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <!-- Summary page -->\r\n  <ng-container *ngIf=\"appPage == 'Summary'\">\r\n    <img class=\"app-bg1\" src=\"assets/img/bg/mix_products.jpg\">\r\n\r\n    <div id=\"summary-page\" class=\"row wow fadeInLeft\">\r\n      <svg></svg>\r\n      <br>\r\n      <a class=\"btn btn-primary\" (click)=\"backToPreferencePage()\">Back to setting</a>      \r\n      <a class=\"btn btn-info\" style=\"margin-left:2vw;\"\r\n      (click)=\"backToShoppingPage()\">Back to shopping</a>\r\n    </div>\r\n  </ng-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/smart-cart-app/smart-cart-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartCartAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SmartCartAppComponent = (function () {
    function SmartCartAppComponent(element) {
        this.element = element;
        this.appPage = 'Welcome';
        this.appPageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.preferences = [{ desc: 'Calories', value: 5 }, { desc: 'Fat', value: 5 },
            { desc: 'Cholesterol', value: 5 }, { desc: 'Sodium', value: 5 }, { desc: 'Fiber', value: 5 },
            { desc: 'Sugar', value: 5 }, { desc: 'Protein', value: 5 }];
        this.defaultPrefValues = [2.5, 5, 5, 1, 5, 5, 9];
        this.initPref = false;
        this.products = [{ brand: 'Applegate Farms', size: '1 Frank', g: 56, num: 8, unit: 'g',
                cal: 110, fat: 8, chol: 30, sod: 330, fiber: 0, sugar: 0, pro: 7,
                cfat: 80, sfat: 3, tfat: 0, carb: 0, per: [12, 15, '-', 10, 14, 0, 0, '-', '-'] },
            { brand: 'Ball Park Franks', size: '1 Frank', g: 57, unit: 'g', num: 8,
                cal: 170, fat: 15, chol: 30, sod: 540, fiber: 0, sugar: 0, pro: 6,
                cfat: 130, sfat: 5, tfat: 1, carb: 3, per: [23, 26, '-', 11, 23, 1, 0, '-', '-'] },
            { brand: 'Hebrew National', size: '1 Frank', g: 49, unit: 'g', num: 7,
                cal: 150, fat: 14, chol: 25, sod: 450, fiber: 0, sugar: 0, pro: 6,
                cfat: 130, sfat: 6, tfat: 0.5, carb: 1, per: [22, 30, '-', 8, 19, 2, 0, '-', 10] },
            { brand: 'Tomboy', size: '1 Link', g: 75, unit: 'g', num: 6,
                cal: 210, fat: 18, chol: 35, sod: 760, fiber: 0, sugar: 3, pro: 9,
                cfat: 160, sfat: 7, tfat: 0, carb: 3, per: [28, 35, '-', 12, 32, 1, 0, '-', '-'] },
            { brand: 'Nathan', size: '1 Link', g: 57, unit: 'g', num: 8,
                cal: 170, fat: 33, chol: 35, sod: 470, fiber: 0, sugar: 0, pro: 7,
                cfat: 140, sfat: 6, tfat: 0, carb: 1, per: [23, 31, '-', 11, 20, 0, 0, '-', '-'] },
            { brand: 'CP Hotdog', size: '1 Link', g: 38, unit: 'g', num: 4,
                cal: 90, fat: 6, chol: 25, sod: 450, fiber: 0, sugar: 1, pro: 5,
                cfat: 54, sfat: 1, tfat: 0, carb: 2, per: ['-', '-', '-', '-', '-', '-', '-', '-', '-'] }];
        this.selectedProduct = '';
        this.defaultProduct = 'Hebrew National';
        this.checkoutProduct = '';
        this.defaultCheckout = 'Applegate Farms';
    }
    SmartCartAppComponent.prototype.ngOnInit = function () {
        var self = this;
        self.host = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](self.element.nativeElement).select('#smart-cart-app');
        self.preferenceArray = self.preferences.map(function (d) { return d.desc; });
        self.productArray = self.products.map(function (d) { return d.brand; });
        if (self.appPage == 'Welcome')
            self.welcomeProcess();
        else if (self.appPage == 'Shopping')
            self.setupShoppingPage();
        else if (self.appPage == 'Suggestion')
            self.setupSuggestionPage();
        else if (self.appPage == 'Summary')
            self.setupSummaryPage();
    };
    // Welcome page
    SmartCartAppComponent.prototype.welcomeProcess = function () {
        var _this = this;
        var self = this;
        __WEBPACK_IMPORTED_MODULE_1_d3__["l" /* timeout */](function () {
            if (_this.appPage == 'Welcome') {
                self.host.select('#welcome-line1').style('opacity', 1);
            }
        }, 1000);
        __WEBPACK_IMPORTED_MODULE_1_d3__["l" /* timeout */](function () {
            if (_this.appPage == 'Welcome') {
                self.host.select('#welcome-line2').style('opacity', 1);
            }
        }, 1500);
        __WEBPACK_IMPORTED_MODULE_1_d3__["l" /* timeout */](function () {
            if (_this.appPage == 'Welcome') {
                self.host.select('#welcome-line1').style('opacity', 0);
                self.host.select('#welcome-line2').style('opacity', 0);
                self.host.select('#welcome-logo').style('opacity', 0);
            }
        }, 3000);
        __WEBPACK_IMPORTED_MODULE_1_d3__["l" /* timeout */](function () {
            if (_this.appPage == 'Welcome') {
                self.appPage = 'Preference';
                self.appPageChange.emit(self.appPage);
            }
        }, 5000);
    };
    // Preference page
    SmartCartAppComponent.prototype.changePreference = function (change) {
        var self = this;
        var index = self.preferenceArray.indexOf(change.desc);
        self.preferences[index].value = change.value;
    };
    SmartCartAppComponent.prototype.confirmPreferences = function () {
        this.appPage = 'Shopping';
        this.setupShoppingPage();
        this.appPageChange.emit(this.appPage);
    };
    // Shopping page
    SmartCartAppComponent.prototype.setupShoppingPage = function () {
        var self = this;
        self.selectedProduct = '';
        __WEBPACK_IMPORTED_MODULE_1_d3__["l" /* timeout */](function () {
            var width = 1000, height = 470;
            var shoppingSpace = self.host.select('#shopping-page').select('svg')
                .attr('width', '100%').attr('opacity', 1)
                .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
                .attr('viewBox', '0 0 ' + width + ' ' + height);
            self.workSpace = shoppingSpace.append('g').attr('id', 'work-space')
                .attr('font-family', 'Prompt').style('fill', '#0e0e0e');
            self.workSpace.append('text')
                .attr('text-anchor', 'middle').attr('font-size', 26)
                .attr('x', width / 2).attr('y', 26)
                .html('Shop in this virtual shopping cart by picking a product. We will ' +
                '<tspan style="fill:orange; font-weight:bold;">assist you</tspan>');
            self.workSpace.append('text')
                .attr('text-anchor', 'middle').attr('font-size', 26)
                .attr('x', width / 2).attr('y', 58)
                .html('to get the best out of your shopping.');
            // Adding products for shopping
            var productSpace = self.workSpace.append('g').attr('id', 'product-space')
                .attr('transform', 'translate(2,' + (0.2 * height) + ')');
            var spaceW = 0.68 * width / 3, spaceH = (0.80 * height - 2) / 2;
            var pSlots = productSpace.selectAll('g').data(self.products).enter().append('g')
                .attr('id', function (d) { return self.brandToId(d.brand); })
                .attr('transform', function (d, i) {
                var xPos = (i % 3) * spaceW, yPos = Math.floor(i / 3) * spaceH;
                return 'translate(' + xPos + ',' + yPos + ')';
            });
            pSlots.append('rect').attr('class', 'product-border')
                .style('fill', '#fffff0').style('stroke', '#0e0e0e').attr('stroke-width', 4)
                .attr('width', spaceW).attr('height', spaceH).attr('opacity', 0.8)
                .attr('cursor', 'pointer')
                .on('click', function (d, i) {
                if (self.selectedProduct == d.brand) {
                    self.selectedProduct = '';
                    productSpace.selectAll('g').select('rect.product-border')
                        .transition().duration(200).style('fill', '#fffff0');
                    self.nutrSpace.transition().duration(200).attr('opacity', 0);
                }
                else {
                    self.selectedProduct = d.brand;
                    productSpace.selectAll('g').select('rect.product-border')
                        .transition().duration(200)
                        .style('fill', function (data) {
                        if (data.brand == d.brand)
                            return 'orange';
                        else
                            return '#fffff0';
                    });
                    self.nutrSpace.transition().duration(200).attr('opacity', 1);
                    self.makeNutritionFact();
                }
            });
            pSlots.append('text')
                .attr('text-anchor', 'middle').attr('font-size', 20)
                .attr('x', 0.5 * spaceW).attr('y', 0.93 * spaceH)
                .attr('pointer-events', 'none').attr('font-weight', 'bold')
                .text(function (d) { return d.brand; });
            pSlots.append('image')
                .attr('x', 0.12 * spaceW).attr('y', 0.07 * spaceH)
                .attr('width', 0.76 * spaceW).attr('height', 0.76 * spaceW * 22 / 30)
                .attr('pointer-events', 'none')
                .attr('href', function (d) { return 'assets/img/products/beef_hotdog/' + d.brand + '.jpg'; });
            // Nutrition fact area
            self.workSpace.insert('rect', ':first-child')
                .attr('x', 0.68 * width + 2).attr('y', 0.2 * height)
                .attr('width', 0.32 * width - 4).attr('height', 0.80 * height - 2)
                .attr('stroke-width', 4).style('stroke', '#0e0e0e')
                .style('fill', 'orange').attr('opacity', 0.8);
            self.workSpace.append('image')
                .attr('x', 0.75 * width).attr('y', 0.41 * height).attr('opacity', 0.8)
                .attr('width', 0.20 * width).attr('height', 404 / 476 * 0.20 * width)
                .attr('href', 'assets/img/icon/shopping_cart.png');
            // Nutrition fact space
            self.nutrSpace = self.workSpace.append('g').attr('id', 'nutrition-space')
                .attr('opacity', 0)
                .attr('transform', 'translate(' + (0.70 * width) + ',' + (0.2 * height + 0.02 * width) + ')');
            self.nutrSpace.append('rect')
                .attr('width', width * 0.28).attr('height', height * 0.8 - 0.04 * width)
                .style('fill', '#fffff0').style('stroke', '#0e0e0e')
                .attr('stroke-width', 3);
        }, 100);
    };
    SmartCartAppComponent.prototype.makeNutritionFact = function () {
        var self = this;
        var w = 1000 * 0.28, h = 470 * 0.780 - 0.04 * 1000;
        if (self.selectedProduct != '') {
            var d = self.products[self.productArray.indexOf(self.selectedProduct)];
            var facts = [d.size + ' (' + d.g + d.unit + ')', d.num, d.cal, d.cfat, d.fat, d.sfat,
                d.tfat, d.chol, d.sod, d.carb, d.fiber, d.sugar, d.pro];
            var per = d.per;
            // Generate text data
            var x1 = 0.05 * w, x2 = 0.12 * w, size1 = 12;
            var textData = [{ x: w / 2, y: 0.09 * h, weight: 'bold', size: 26, anchor: 'middle', text: 'Nutrition Facts' },
                { x: x1, y: 0.17 * h, weight: '', size: size1, anchor: 'start', text: 'Serving Size&emsp;' + facts[0] },
                { x: x1, y: 0.22 * h, weight: '', size: size1, anchor: 'start', text: 'Serving Per Container&emsp;' + facts[1] },
                { x: x1, y: 0.30 * h, weight: 'bold', size: size1, anchor: 'start', text: 'Amount Per Serving' },
                { x: x1, y: 0.35 * h, weight: '', size: size1, anchor: 'start', text: 'Calories ' + facts[2] },
                { x: w - x1, y: 0.35 * h, weight: '', size: size1, anchor: 'end', text: 'Calories From Fat ' + facts[3] },
                { x: w - x1, y: 0.41 * h, weight: 'bold', size: size1 - 1, anchor: 'end', text: '% Daily Value' },
                { x: x1, y: 0.48 * h, weight: 'bold', size: size1, anchor: 'start', text: 'Total Fat &nbsp;&nbsp;' + facts[4] + 'g' },
                { x: w - x1, y: 0.48 * h, weight: 'bold', size: size1, anchor: 'end', text: per[0] + '%' },
                { x: x2, y: 0.54 * h, weight: '', size: size1, anchor: 'start', text: 'Saturated Fat &nbsp;&nbsp;' + facts[5] + 'g' },
                { x: w - x1, y: 0.54 * h, weight: '', size: size1, anchor: 'end', text: per[1] + '%' },
                { x: x2, y: 0.60 * h, weight: '', size: size1, anchor: 'start', text: 'Trans Fat &nbsp;&nbsp;' + facts[6] + 'g' },
                // {x:w-x1, y:0.60*h, weight:'', size:size1, anchor:'end', text:per[2]+'%'},
                { x: x1, y: 0.66 * h, weight: 'bold', size: size1, anchor: 'start', text: 'Cholesterol &nbsp;&nbsp;' + facts[7] + 'mg' },
                { x: w - x1, y: 0.66 * h, weight: 'bold', size: size1, anchor: 'end', text: per[3] + '%' },
                { x: x1, y: 0.72 * h, weight: 'bold', size: size1, anchor: 'start', text: 'Sodium &nbsp;&nbsp;' + facts[8] + 'mg' },
                { x: w - x1, y: 0.72 * h, weight: 'bold', size: size1, anchor: 'end', text: per[4] + '%' },
                { x: x1, y: 0.78 * h, weight: 'bold', size: size1, anchor: 'start', text: 'Total Carbohydrate &nbsp;&nbsp;' + facts[9] + 'g' },
                { x: w - x1, y: 0.78 * h, weight: 'bold', size: size1, anchor: 'end', text: per[5] + '%' },
                { x: x2, y: 0.84 * h, weight: '', size: size1, anchor: 'start', text: 'Dietary Fiber &nbsp;&nbsp;' + facts[10] + 'g' },
                { x: w - x1, y: 0.84 * h, weight: '', size: size1, anchor: 'end', text: per[6] + '%' },
                { x: x2, y: 0.90 * h, weight: '', size: size1, anchor: 'start', text: 'Sugars &nbsp;&nbsp;' + facts[11] + 'g' },
                // {x:w-x1, y:0.90*h, weight:'', size:size1, anchor:'end', text:per[7]+'%'},
                { x: x1, y: 0.96 * h, weight: 'bold', size: size1, anchor: 'start', text: 'Protein &nbsp;&nbsp;' + facts[12] + 'g' }];
            // {x:w-x1, y:0.96*h, weight:'bold', size:size1, anchor:'end', text:per[8]+'%'}];
            // Add texts
            var texts = self.nutrSpace.selectAll('text').data(textData);
            texts.attr('text-anchor', function (d) { return d.anchor; })
                .attr('font-size', function (d) { return d.size; })
                .attr('font-weight', function (d) { return d.weight; })
                .attr('x', function (d) { return d.x; }).attr('y', function (d) { return d.y; })
                .html(function (d) { return d.text; });
            texts.enter().append('text')
                .attr('text-anchor', function (d) { return d.anchor; })
                .attr('font-size', function (d) { return d.size; })
                .attr('font-weight', function (d) { return d.weight; })
                .attr('x', function (d) { return d.x; }).attr('y', function (d) { return d.y; })
                .html(function (d) { return d.text; });
            // Add lines
            var lineData = [{ x1: x1, y: 0.245 * h, sw: 5 },
                { x1: x1, y: 0.370 * h, sw: 2.5 },
                { x1: x1, y: 0.430 * h, sw: 1 },
                { x1: x1, y: 0.495 * h, sw: 1 }, { x1: x1, y: 0.555 * h, sw: 1 }, { x1: x1, y: 0.615 * h, sw: 1 },
                { x1: x1, y: 0.675 * h, sw: 1 }, { x1: x1, y: 0.735 * h, sw: 1 }, { x1: x1, y: 0.795 * h, sw: 1 },
                { x1: x1, y: 0.855 * h, sw: 1 }, { x1: x1, y: 0.915 * h, sw: 1 }, { x1: x1, y: 0.975 * h, sw: 1 }];
            var lines = self.nutrSpace.selectAll('line').data(lineData);
            lines.attr('stroke-width', function (d) { return d.sw; })
                .attr('x1', function (d) { return d.x1; }).attr('x2', w - x1)
                .attr('y1', function (d) { return d.y; }).attr('y2', function (d) { return d.y; })
                .style('stroke', '#0e0e0e').attr('stroke-linecap', 'square');
            lines.enter().append('line')
                .attr('stroke-width', function (d) { return d.sw; })
                .attr('x1', function (d) { return d.x1; }).attr('x2', w - x1)
                .attr('y1', function (d) { return d.y; }).attr('y2', function (d) { return d.y; })
                .style('stroke', '#0e0e0e').attr('stroke-linecap', 'square');
        }
    };
    SmartCartAppComponent.prototype.brandToId = function (brand) {
        return brand.replace(/ /g, '-');
    };
    // Suggestion page
    SmartCartAppComponent.prototype.setupSuggestionPage = function () {
        var self = this;
        if (self.selectedProduct == '')
            self.selectedProduct = self.defaultProduct;
        self.checkoutProduct = self.selectedProduct;
        var smartCartStars = self.SmartCartStars(self.products), brandArray = smartCartStars.map(function (d) { return d.brand; });
        var notSmartCartStars = smartCartStars.filter(function (d) { return d.brand != self.selectedProduct; }), notBrandArray = notSmartCartStars.map(function (d) { return d.brand; });
        __WEBPACK_IMPORTED_MODULE_1_d3__["l" /* timeout */](function () {
            var width = 1000, height = 470;
            var suggestionSpace = self.host.select('#suggestion-page').select('svg')
                .attr('width', '100%').attr('opacity', 1)
                .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
                .attr('viewBox', '0 0 ' + width + ' ' + height);
            self.workSpace = suggestionSpace.append('g').attr('id', 'work-space')
                .attr('font-family', 'Prompt').style('fill', '#0e0e0e');
            // Selected product
            var selectedW = 0.30 * width, selectedH = height - 4;
            var selectSpace = self.workSpace.append('g').attr('class', 'selected-product')
                .attr('transform', 'translate(2,2)');
            selectSpace.append('rect')
                .style('fill', '#fffff0').attr('opacity', 0.8)
                .style('stroke', '#0e0e0e').attr('stroke-width', 4)
                .attr('width', selectedW).attr('height', selectedH);
            selectSpace.append('image')
                .attr('x', 0.15 * selectedW).attr('y', 0.26 * selectedH)
                .attr('width', 0.7 * selectedW).attr('height', 0.7 * selectedH * 22 / 30)
                .attr('href', 'assets/img/products/beef_hotdog/' + self.selectedProduct + '.jpg');
            selectSpace.append('image')
                .attr('x', 0.1 * selectedW).attr('y', 0.82 * selectedH)
                .attr('width', 0.8 * selectedW).attr('height', 0.8 * selectedH * 239 / 1280)
                .attr('href', function () {
                var star = smartCartStars[brandArray.indexOf(self.selectedProduct)].star;
                return self.starImage(star);
            });
            selectSpace.append('text')
                .attr('text-anchor', 'middle')
                .attr('x', 0.5 * selectedW).attr('y', 0.80 * selectedH)
                .attr('font-size', 24).attr('font-weight', 'bold')
                .text(self.selectedProduct);
            selectSpace.append('text')
                .style('fill', 'orange').attr('font-weight', 'bold')
                .attr('x', 0.5 * selectedW).attr('y', 0.085 * selectedH)
                .attr('font-size', 20).attr('text-anchor', 'middle')
                .text('This is your product choice,');
            selectSpace.append('text')
                .attr('x', 0.5 * selectedW).attr('y', 0.145 * selectedH)
                .attr('font-size', 20).attr('text-anchor', 'middle')
                .text('but please consider our');
            selectSpace.append('text')
                .attr('x', 0.5 * selectedW).attr('y', 0.205 * selectedH)
                .attr('font-size', 20).attr('text-anchor', 'middle')
                .text('suggestion on the side');
            selectSpace.append('text')
                .attr('x', 0.5 * selectedW).attr('y', 0.265 * selectedH)
                .attr('font-size', 20).attr('text-anchor', 'middle')
                .text('before you check out!');
            // Other products
            var nsW = (width - selectedW - 4) / 3, nsH = (0.85 * height - 2) / 2;
            self.workSpace.append('text')
                .attr('text-anchor', 'middle').attr('font-weight', 'bold')
                .attr('x', selectedW + nsW * 3 / 2).attr('y', 42)
                .attr('font-size', 42).style('fill', '#0e0e0e')
                .html('Smart Cart Suggestion');
            var nsSpace = self.workSpace.append('g').attr('class', 'not-selected-product')
                .attr('transform', 'translate(' + (selectedW + 2) + ',' + (0.15 * height) + ')');
            var nsProducts = nsSpace.selectAll('g').data(notSmartCartStars).enter().append('g')
                .attr('id', function (d) { return self.brandToId(d.brand); })
                .attr('transform', function (d, i) {
                var xPos = (i % 3) * nsW, yPos = Math.floor(i / 3) * nsH;
                return 'translate(' + xPos + ',' + yPos + ')';
            });
            nsProducts.append('rect').attr('class', 'product-border')
                .attr('width', nsW).attr('height', nsH).attr('opacity', 0.8)
                .style('fill', '#fffff0').style('stroke', '#0e0e0e').attr('stroke-width', 4)
                .on('click', function (d) {
                if (self.checkoutProduct == d.brand) {
                    self.checkoutProduct = self.selectedProduct;
                    nsSpace.selectAll('g').select('rect.product-border')
                        .transition().duration(200).style('fill', '#fffff0');
                }
                else {
                    self.checkoutProduct = d.brand;
                    nsSpace.selectAll('g').select('rect.product-border')
                        .transition().duration(200)
                        .style('fill', function (data) {
                        if (data.brand == d.brand)
                            return 'orange';
                        else
                            return '#fffff0';
                    });
                }
            });
            nsProducts.append('image')
                .attr('pointer-events', 'none')
                .attr('x', 0.15 * nsW).attr('y', 0.78 * nsH)
                .attr('width', 0.7 * nsW).attr('height', 0.7 * nsW * 239 / 1280)
                .attr('href', function (d) { return self.starImage(d.star); });
            nsProducts.append('text')
                .attr('pointer-events', 'none')
                .attr('text-anchor', 'middle').attr('font-weight', 'bold')
                .attr('x', 0.5 * nsW).attr('y', 0.74 * nsH).attr('font-size', 18)
                .text(function (d) { return d.brand; });
            nsProducts.append('image')
                .attr('pointer-events', 'none')
                .attr('x', 0.2 * nsW).attr('y', 0.07 * nsH)
                .attr('width', 0.6 * nsW).attr('height', 0.6 * nsW * 22 / 30)
                .attr('href', function (d) { return 'assets/img/products/beef_hotdog/' + d.brand + '.jpg'; });
            // Cart logo
            self.workSpace.append('image')
                .attr('x', 0.82 * width).attr('y', 0.67 * height).attr('opacity', 0.85)
                .attr('width', 0.15 * width).attr('height', 404 / 476 * 0.15 * width)
                .attr('href', 'assets/img/icon/shopping_cart.png');
        }, 100);
    };
    SmartCartAppComponent.prototype.SmartCartStars = function (allProducts) {
        var self = this;
        var cal = allProducts.map(function (d) { return d.cal / d.g; });
        var calScale = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */](cal)]).range([0, 1]);
        var fat = allProducts.map(function (d) { return d.fat / d.g; });
        var fatScale = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */](fat)]).range([0, 1]);
        var chol = allProducts.map(function (d) { return d.chol / d.g; });
        var cholScale = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */](chol)]).range([0, 1]);
        var sod = allProducts.map(function (d) { return d.sod / d.g; });
        var sodScale = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */](sod)]).range([0, 1]);
        var fiber = allProducts.map(function (d) { return d.fiber / d.g; });
        var fiberScale = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */](fiber)]).range([0, 1]);
        var sugar = allProducts.map(function (d) { return d.sugar / d.g; });
        var sugarScale = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */](sugar)]).range([0, 1]);
        var pro = allProducts.map(function (d) { return d.pro / d.g; });
        var proScale = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */](pro)]).range([0, 1]);
        var scoreArray = new Array(allProducts.length);
        for (var i = 0; i < allProducts.length; i++) {
            var d = allProducts[i];
            scoreArray[i] = {
                brand: d.brand,
                star: (self.preferences[self.preferenceArray.indexOf('Calories')].value - 5) * calScale(d.cal / d.g)
                    + (self.preferences[self.preferenceArray.indexOf('Fat')].value - 5) * fatScale(d.fat / d.g)
                    + (self.preferences[self.preferenceArray.indexOf('Cholesterol')].value - 5) * cholScale(d.chol / d.g)
                    + (self.preferences[self.preferenceArray.indexOf('Sodium')].value - 5) * sodScale(d.sod / d.g)
                    + (self.preferences[self.preferenceArray.indexOf('Fiber')].value - 5) * fiberScale(d.fiber / d.g)
                    + (self.preferences[self.preferenceArray.indexOf('Sugar')].value - 5) * sugarScale(d.sugar / d.g)
                    + (self.preferences[self.preferenceArray.indexOf('Protein')].value - 5) * proScale(d.pro / d.g)
            };
        }
        var sMin = __WEBPACK_IMPORTED_MODULE_1_d3__["h" /* min */](scoreArray.map(function (d) { return d.star; })), sMax = __WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */](scoreArray.map(function (d) { return d.star; }));
        if (sMin == sMax) {
            scoreArray.map(function (d) { d.star = 5; });
            return scoreArray;
        }
        else {
            var stareScale = __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().domain([sMin, sMax]).range([1, 5]);
            scoreArray.map(function (d) { d.star = stareScale(d.star); });
            scoreArray.sort(function (a, b) {
                if (a.star < b.star)
                    return 1;
                else
                    return 0;
            });
            return scoreArray;
        }
    };
    SmartCartAppComponent.prototype.starImage = function (star) {
        if (star < 1.25)
            return 'assets/img/icon/star10.png';
        else if (star < 1.75)
            return 'assets/img/icon/star15.png';
        else if (star < 2.25)
            return 'assets/img/icon/star20.png';
        else if (star < 2.75)
            return 'assets/img/icon/star25.png';
        else if (star < 3.25)
            return 'assets/img/icon/star30.png';
        else if (star < 3.75)
            return 'assets/img/icon/star35.png';
        else if (star < 4.25)
            return 'assets/img/icon/star40.png';
        else if (star < 4.75)
            return 'assets/img/icon/star45.png';
        else
            return 'assets/img/icon/star50.png';
    };
    SmartCartAppComponent.prototype.confirmProduct = function () {
        this.checkoutProduct = this.selectedProduct;
        this.appPage = 'Summary';
        this.setupSummaryPage();
        this.appPageChange.emit(this.appPage);
    };
    SmartCartAppComponent.prototype.changeProduct = function () {
        this.appPage = 'Summary';
        this.setupSummaryPage();
        this.appPageChange.emit(this.appPage);
    };
    // Summary page
    SmartCartAppComponent.prototype.setupSummaryPage = function () {
        var self = this;
        if (self.selectedProduct == '')
            self.selectedProduct = self.defaultProduct;
        if (self.checkoutProduct == '')
            self.checkoutProduct = self.defaultCheckout;
        var smartCartStars = self.SmartCartStars(self.products), brandArray = smartCartStars.map(function (d) { return d.brand; });
        var oldStar = smartCartStars[brandArray.indexOf(self.selectedProduct)].star, newStar = smartCartStars[brandArray.indexOf(self.checkoutProduct)].star;
        __WEBPACK_IMPORTED_MODULE_1_d3__["l" /* timeout */](function () {
            var width = 1000, height = 470;
            var summarySpace = self.host.select('#summary-page').select('svg')
                .attr('width', '100%').attr('opacity', 1)
                .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
                .attr('viewBox', '0 0 ' + width + ' ' + height);
            self.workSpace = summarySpace.append('g').attr('id', 'work-space')
                .attr('font-family', 'Prompt').style('fill', '#0e0e0e');
            // Left side information
            self.workSpace.append('text')
                .attr('text-anchor', 'middle').attr('font-weight', 'bold')
                .attr('font-size', 34)
                .attr('x', 0.26 * width).attr('y', 0.1 * height)
                .html('Your Shopping Choices');
            self.workSpace.append('image')
                .attr('x', 0.225 * width).attr('y', 0.275 * height)
                .attr('width', 0.08 * width).attr('height', 0.08 * width * 179 / 254)
                .attr('href', 'assets/img/icon/full_arrow_right.png');
            self.workSpace.append('rect')
                .attr('x', 0.04 * width).attr('y', 0.225 * height)
                .attr('width', 0.16 * width).attr('height', 0.16 * width * 22 / 30)
                .attr('stroke-width', 4).style('stroke', '#0e0e0e')
                .style('fill', 'white');
            self.workSpace.append('image')
                .attr('x', 0.04 * width).attr('y', 0.225 * height)
                .attr('width', 0.16 * width).attr('height', 0.16 * width * 22 / 30)
                .attr('href', 'assets/img/products/beef_hotdog/' + self.selectedProduct + '.jpg');
            self.workSpace.append('rect')
                .attr('x', 0.32 * width).attr('y', 0.225 * height)
                .attr('width', 0.16 * width).attr('height', 0.16 * width * 22 / 30)
                .attr('stroke-width', 4).style('stroke', '#0e0e0e')
                .style('fill', 'white');
            self.workSpace.append('image')
                .attr('x', 0.32 * width).attr('y', 0.225 * height)
                .attr('width', 0.16 * width).attr('height', 0.16 * width * 22 / 30)
                .attr('href', 'assets/img/products/beef_hotdog/' + self.checkoutProduct + '.jpg');
            self.workSpace.append('text')
                .attr('text-anchor', 'middle').attr('font-weight', 'bold')
                .attr('font-size', 42).style('fill', 'orange')
                .attr('x', 0.26 * width).attr('y', 0.94 * height)
                .html('Thank You!');
            var y0 = 0.68 * height, yyPad1 = 0.07 * height, ts1 = 26;
            if (self.selectedProduct == self.checkoutProduct && oldStar >= 4.75) {
                self.workSpace.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('font-size', ts1)
                    .attr('x', 0.26 * width).attr('y', y0)
                    .html('Your choice is already the best one');
                self.workSpace.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('font-size', ts1)
                    .attr('x', 0.26 * width).attr('y', y0 + yyPad1)
                    .html('for your personal need!');
            }
            else if (oldStar < newStar) {
                self.workSpace.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('font-size', ts1)
                    .attr('x', 0.26 * width).attr('y', y0)
                    .html('You improve your choice for your');
                self.workSpace.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('font-size', ts1)
                    .attr('x', 0.26 * width).attr('y', y0 + yyPad1)
                    .html('personal need with Smart Cart!');
            }
            else {
                self.workSpace.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('font-size', ts1)
                    .attr('x', 0.26 * width).attr('y', y0)
                    .html('You can still improve the shopping');
                self.workSpace.append('text')
                    .attr('text-anchor', 'middle')
                    .attr('font-size', ts1)
                    .attr('x', 0.26 * width).attr('y', y0 + yyPad1)
                    .html('choice for your personal needs');
            }
            self.workSpace.insert('rect', ':first-child')
                .attr('x', 2).attr('y', 0.58 * height)
                .attr('width', 0.52 * width - 4).attr('height', 0.42 * height - 2)
                .style('fill', '#fffff0').attr('opacity', 0.8)
                .style('stroke', '#0e0e0e').attr('stroke-width', 4);
            // Make summary chart
            self.makeSummaryChart(width, height);
        }, 100);
    };
    SmartCartAppComponent.prototype.makeSummaryChart = function (width, height) {
        var self = this;
        var ssW = 0.46 * width - 4, ssH = height - 4, pad1 = 0.05 * ssW;
        var sumSpace = self.workSpace.append('g').attr('id', 'summary-chart')
            .attr('transform', 'translate(' + (0.54 * width) + ', 2)')
            .attr('font-family', 'Prompt').style('fill', '#0e0e0e');
        sumSpace.append('rect')
            .attr('width', ssW).attr('height', ssH)
            .attr('stroke-width', 4).style('stroke', '#0e0e0e')
            .style('fill', '#fffff0').attr('opacity', 0.8);
        sumSpace.append('text')
            .attr('text-anchor', 'middle').attr('font-weight', 'bold')
            .attr('font-size', 32)
            .attr('x', 0.5 * ssW).attr('y', 0.10 * ssH)
            .text('Shopping Summary');
        sumSpace.append('text')
            .attr('font-size', 20)
            .attr('x', pad1).attr('y', 0.20 * ssH)
            .html('Base on your shopping choice, for every');
        sumSpace.append('text')
            .attr('font-size', 20)
            .attr('x', pad1).attr('y', 0.27 * ssH)
            .html('<tspan font-weight="bold" style="fill:orange;">100g</tspan>'
            + ' of products you consume, you can...');
        sumSpace.append('line')
            .attr('stroke-width', 8)
            .attr('x1', pad1).attr('x2', ssW - pad1)
            .attr('y1', 0.32 * ssH).attr('y2', 0.32 * ssH)
            .style('stroke', '#0e0e0e').attr('stroke-linecap', 'square');
        // Calculate nutrition changes
        var a = self.products.filter(function (d) { return d.brand == self.selectedProduct; })[0], b = self.products.filter(function (d) { return d.brand == self.checkoutProduct; })[0];
        var nutrChanges = [{ desc: 'Calories', unit: '', change: Math.round((b.cal / b.g - a.cal / a.g) * 1000) / 100 },
            { desc: 'Cholesterol', unit: 'mg', change: Math.round((b.chol / b.g - a.chol / a.g) * 1000) / 100 },
            { desc: 'Fat', unit: 'g', change: Math.round((b.fat / b.g - a.fat / a.g) * 1000) / 100 },
            { desc: 'Fiber', unit: 'g', change: Math.round((b.fiber / b.g - a.fiber / a.g) * 1000) / 100 },
            { desc: 'Sodium', unit: 'mg', change: Math.round((b.sod / b.g - a.sod / a.g) * 1000) / 100 },
            { desc: 'Sugar', unit: 'g', change: Math.round((b.sugar / b.g - a.sugar / a.g) * 1000) / 100 },
            { desc: 'Protein', unit: 'g', change: Math.round((b.pro / b.g - a.pro / a.g) * 1000) / 100 }];
        var nutrUp = nutrChanges.filter(function (d) { return d.change > 0; }), nutrDown = nutrChanges.filter(function (d) { return d.change < 0; });
        var upLength = nutrUp.length, downLength = nutrDown.length;
        // Printing nutrition changes
        var pos = 0, ts1 = 20, y1 = 0.40 * ssH, yPad1 = 0.065 * ssH, x1 = 0.13 * ssW, x2 = 0.23 * ssW, x3 = 0.72 * ssW, x4 = 0.75 * ssW;
        if (upLength > 0 && downLength > 0) {
            // Text headers
            sumSpace.append('text')
                .attr('font-size', ts1).attr('font-weight', 'bold')
                .attr('x', x1).attr('y', y1)
                .text('Increase');
            sumSpace.append('line')
                .attr('stroke-width', 3)
                .attr('x1', pad1).attr('x2', ssW - pad1)
                .attr('y1', y1 + yPad1 * upLength + 0.36 * yPad1)
                .attr('y2', y1 + yPad1 * upLength + 0.36 * yPad1)
                .style('stroke', '#0e0e0e').attr('stroke-linecap', 'square');
            sumSpace.append('text')
                .attr('font-size', ts1).attr('font-weight', 'bold')
                .attr('x', x1).attr('y', y1 + 1.2 * yPad1 + yPad1 * upLength)
                .text('Reduce');
            sumSpace.append('line')
                .attr('stroke-width', 3)
                .attr('x1', pad1).attr('x2', ssW - pad1)
                .attr('y1', y1 + 1.2 * yPad1 + yPad1 * (upLength + downLength) + 0.36 * yPad1)
                .attr('y2', y1 + 1.2 * yPad1 + yPad1 * (upLength + downLength) + 0.36 * yPad1)
                .style('stroke', '#0e0e0e').attr('stroke-linecap', 'square');
            // Change detail
            while (pos < upLength) {
                var color = '#0e0e0e', weight = 'normal';
                if (self.preferences[self.preferenceArray.indexOf(nutrUp[pos].desc)].value > 6) {
                    color = 'orange';
                    weight = 'bold';
                }
                sumSpace.append('text')
                    .style('fill', color).attr('font-weight', weight)
                    .attr('font-size', ts1).attr('x', x2).attr('y', y1 + yPad1 + yPad1 * pos)
                    .text(nutrUp[pos].desc);
                sumSpace.append('text')
                    .style('fill', color).attr('font-weight', weight)
                    .attr('font-size', ts1).attr('text-anchor', 'end')
                    .attr('x', x3).attr('y', y1 + yPad1 + yPad1 * pos)
                    .text(nutrUp[pos].change);
                sumSpace.append('text')
                    .style('fill', color).attr('font-weight', weight)
                    .attr('font-size', ts1).attr('x', x4).attr('y', y1 + yPad1 + yPad1 * pos)
                    .text(nutrUp[pos].unit);
                pos++;
            }
            while (pos - upLength < downLength) {
                var color = '#0e0e0e', weight = 'normal';
                if (self.preferences[self.preferenceArray.indexOf(nutrDown[pos - upLength].desc)].value < 3) {
                    color = 'orange';
                    weight = 'bold';
                }
                sumSpace.append('text')
                    .style('fill', color).attr('font-weight', weight)
                    .attr('font-size', ts1).attr('x', x2).attr('y', y1 + 2.2 * yPad1 + yPad1 * pos)
                    .text(nutrDown[pos - upLength].desc);
                sumSpace.append('text')
                    .style('fill', color).attr('font-weight', weight)
                    .attr('font-size', ts1).attr('text-anchor', 'end')
                    .attr('x', x3).attr('y', y1 + 2.2 * yPad1 + yPad1 * pos)
                    .text(-nutrDown[pos - upLength].change);
                sumSpace.append('text')
                    .style('fill', color).attr('font-weight', weight)
                    .attr('font-size', ts1).attr('x', x4).attr('y', y1 + 2.2 * yPad1 + yPad1 * pos)
                    .text(nutrDown[pos - upLength].unit);
                pos++;
            }
        }
        else if (upLength > 0) {
            sumSpace.append('text')
                .attr('font-size', ts1).attr('font-weight', 'bold')
                .attr('x', x1).attr('y', y1)
                .text('Increase');
            sumSpace.append('line')
                .attr('stroke-width', 3)
                .attr('x1', pad1).attr('x2', ssW - pad1)
                .attr('y1', y1 + yPad1 * upLength + 0.36 * yPad1)
                .attr('y2', y1 + yPad1 * upLength + 0.36 * yPad1)
                .style('stroke', '#0e0e0e').attr('stroke-linecap', 'square');
            while (pos < upLength) {
                var color = '#0e0e0e', weight = 'normal';
                if (self.preferences[self.preferenceArray.indexOf(nutrUp[pos].desc)].value > 6) {
                    color = 'orange';
                    weight = 'bold';
                }
                sumSpace.append('text')
                    .style('fill', color).attr('font-weight', weight)
                    .attr('font-size', ts1).attr('x', x2).attr('y', y1 + yPad1 + yPad1 * pos)
                    .text(nutrUp[pos].desc);
                sumSpace.append('text')
                    .style('fill', color).attr('font-weight', weight)
                    .attr('font-size', ts1).attr('text-anchor', 'end')
                    .attr('x', x3).attr('y', y1 + yPad1 + yPad1 * pos)
                    .text(nutrUp[pos].change);
                sumSpace.append('text')
                    .style('fill', color).attr('font-weight', weight)
                    .attr('font-size', ts1).attr('x', x4).attr('y', y1 + yPad1 + yPad1 * pos)
                    .text(nutrUp[pos].unit);
                pos++;
            }
        }
        else if (downLength > 0) {
            sumSpace.append('text')
                .attr('font-size', ts1).attr('font-weight', 'bold')
                .attr('x', x1).attr('y', y1)
                .text('Reduce');
            sumSpace.append('line')
                .attr('stroke-width', 3)
                .attr('x1', pad1).attr('x2', ssW - pad1)
                .attr('y1', y1 + 1.2 * yPad1 + yPad1 * (downLength - 1) + 0.36 * yPad1)
                .attr('y2', y1 + 1.2 * yPad1 + yPad1 * (downLength - 1) + 0.36 * yPad1)
                .style('stroke', '#0e0e0e').attr('stroke-linecap', 'square');
            while (pos < downLength) {
                var color = '#0e0e0e', weight = 'normal';
                if (self.preferences[self.preferenceArray.indexOf(nutrDown[pos])].value < 3) {
                    color = 'steelBlue';
                    weight = 'bold';
                }
                sumSpace.append('text')
                    .style('fill', color).attr('font-weight', weight)
                    .attr('font-size', ts1).attr('x', x2).attr('y', y1 + yPad1 + yPad1 * pos)
                    .text(nutrDown[pos].desc);
                sumSpace.append('text')
                    .style('fill', color).attr('font-weight', weight)
                    .attr('font-size', ts1).attr('text-anchor', 'end')
                    .attr('x', x3).attr('y', y1 + yPad1 + yPad1 * pos)
                    .text(-nutrDown[pos].change);
                sumSpace.append('text')
                    .style('fill', color).attr('font-weight', weight)
                    .attr('font-size', ts1).attr('x', x4).attr('y', y1 + yPad1 + yPad1 * pos)
                    .text(nutrDown[pos].unit);
                pos++;
            }
        }
        else {
            sumSpace.append('text')
                .attr('font-size', 24).attr('font-weight', 'bold')
                .attr('x', 0.5 * ssW).attr('y', y1 + 2 * yPad1).attr('text-anchor', 'middle')
                .text('Nothing Changes');
        }
    };
    SmartCartAppComponent.prototype.backToShoppingPage = function () {
        this.appPage = 'Shopping';
        this.setupShoppingPage();
        this.appPageChange.emit(this.appPage);
    };
    SmartCartAppComponent.prototype.backToPreferencePage = function () {
        this.appPage = 'Preference';
        this.appPageChange.emit(this.appPage);
    };
    // Page change functionalities
    SmartCartAppComponent.prototype.appNextPage = function () {
        var self = this;
        if (self.appPage == 'Preference') {
            if (!self.initPref) {
                self.initPref = true;
                self.preferences.map(function (d, i) { d.value = self.defaultPrefValues[i]; });
                var components = self.prefSliders.toArray();
                for (var i = 0; i < components.length; i++) {
                    components[i].selectedValue = self.defaultPrefValues[i];
                    components[i].updateSliderValue();
                }
            }
            else {
                self.appPage = 'Shopping';
                self.setupShoppingPage();
            }
        }
        else if (self.appPage == 'Shopping') {
            if (self.selectedProduct == '') {
                self.selectedProduct = self.defaultProduct;
                self.workSpace.select('g#product-space')
                    .select('g#' + self.brandToId(self.selectedProduct))
                    .select('rect.product-border')
                    .style('fill', function (d) {
                    self.nutrSpace.transition().duration(200).attr('opacity', 1);
                    self.makeNutritionFact();
                    return 'orange';
                });
            }
            else {
                self.appPage = 'Suggestion';
                self.setupSuggestionPage();
            }
        }
        else if (self.appPage == 'Suggestion') {
            if (self.checkoutProduct == self.selectedProduct) {
                self.checkoutProduct = self.defaultCheckout;
                self.workSpace.select('g.not-selected-product')
                    .select('g#' + self.brandToId(self.checkoutProduct))
                    .select('rect.product-border')
                    .style('fill', 'orange');
            }
            else {
                self.appPage = 'Summary';
                self.setupSummaryPage();
            }
        }
        self.appPageChange.emit(self.appPage);
    };
    SmartCartAppComponent.prototype.appPreviousPage = function () {
        var self = this;
        if (self.appPage == 'Preference') {
            self.appPage = 'Welcome';
            self.welcomeProcess();
        }
        else if (self.appPage == 'Shopping') {
            self.appPage = 'Preference';
        }
        else if (self.appPage == 'Suggestion') {
            self.appPage = 'Shopping';
            self.setupShoppingPage();
        }
        else if (self.appPage == 'Summary') {
            self.appPage = 'Suggestion';
            self.setupSuggestionPage();
        }
        self.appPageChange.emit(self.appPage);
    };
    return SmartCartAppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SmartCartAppComponent.prototype, "appPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], SmartCartAppComponent.prototype, "appPageChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SmartCartAppComponent.prototype, "preferences", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SmartCartAppComponent.prototype, "defaultPrefValues", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SmartCartAppComponent.prototype, "initPref", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SmartCartAppComponent.prototype, "defaultProduct", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SmartCartAppComponent.prototype, "defaultCheckout", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChildren */])('prefSlider'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* QueryList */]) === "function" && _b || Object)
], SmartCartAppComponent.prototype, "prefSliders", void 0);
SmartCartAppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-smart-cart-app',
        template: __webpack_require__("../../../../../src/app/smart-cart-app/smart-cart-app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/smart-cart-app/smart-cart-app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _c || Object])
], SmartCartAppComponent);

var _a, _b, _c;
//# sourceMappingURL=smart-cart-app.component.js.map

/***/ }),

/***/ "../../../../../src/app/smart-cart-page/smart-cart-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#smart-cart-page {\r\n    padding-top: 5vw;\r\n}\r\n\r\n#smart-cart-bg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    z-index: -20;\r\n    opacity: 0.5;\r\n}\r\n\r\n#dot-overlay-container {\r\n    position: absolute;\r\n    left: -5%;\r\n    top: -5%;\r\n    width: 110%;\r\n    height: 1000px;\r\n    z-index: -10;\r\n}\r\n\r\n#ipad-img-container {\r\n    padding-top: 0.2vw;\r\n}\r\n#ipad-img-container img {\r\n    width: 90%;\r\n    height: auto;\r\n    pointer-events: none;\r\n}\r\n#smart-cart-app {\r\n    position: absolute;\r\n    left: 11%;\r\n    top: 8.2vw;\r\n    width: 78%;\r\n    height: 42.2vw;\r\n    background: #fffff0;\r\n    z-index: 5;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smart-cart-page/smart-cart-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"smart-cart-page\" class=\"wow fadeInLeft\">\r\n\r\n  <img id=\"smart-cart-bg\" src=\"assets/img/bg/vegetable.jpg\">\r\n  <div id=\"dot-overlay-container\"></div>\r\n\r\n  <div id=\"ipad-img-container\" align=\"middle\">\r\n    <img src=\"assets/img/misc/iphone.png\">    \r\n    <div id=\"smart-cart-app\">\r\n      <app-smart-cart-app #smartCartApp [appPage]=\"appPage\" \r\n      (appPageChange)=\"appPageChange($event)\"></app-smart-cart-app>\r\n    </div>    \r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/smart-cart-page/smart-cart-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartCartPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartCartPageComponent = (function () {
    // private appPage = 'Summary';
    function SmartCartPageComponent() {
        this.appPageArray = ['Welcome', 'Preference', 'Shopping', 'Suggestion', 'Summary'];
        this.appPage = 'Welcome';
    }
    SmartCartPageComponent.prototype.ngOnInit = function () {
    };
    SmartCartPageComponent.prototype.appPageChange = function (page) {
        this.appPage = page;
    };
    SmartCartPageComponent.prototype.appNextPage = function () {
        var index = this.appPageArray.indexOf(this.appPage);
        if (index < this.appPageArray.length - 1) {
            this.appPage = this.appPageArray[index + 1];
            this.smartCartApp.appNextPage();
        }
    };
    SmartCartPageComponent.prototype.appPreviousPage = function () {
        var index = this.appPageArray.indexOf(this.appPage);
        if (index > 0) {
            this.appPage = this.appPageArray[index - 1];
            this.smartCartApp.appPreviousPage();
        }
    };
    SmartCartPageComponent.prototype.appReset = function () {
        this.appPage = 'Welcome';
        this.smartCartApp.appPage = 'Welcome';
        this.smartCartApp.welcomeProcess();
    };
    return SmartCartPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('smartCartApp'),
    __metadata("design:type", Object)
], SmartCartPageComponent.prototype, "smartCartApp", void 0);
SmartCartPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-smart-cart-page',
        template: __webpack_require__("../../../../../src/app/smart-cart-page/smart-cart-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/smart-cart-page/smart-cart-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SmartCartPageComponent);

//# sourceMappingURL=smart-cart-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/smart-cart-slider/smart-cart-slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smart-cart-slider/smart-cart-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<svg id=\"smart-cart-slider\">\r\n</svg>\r\n"

/***/ }),

/***/ "../../../../../src/app/smart-cart-slider/smart-cart-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartCartSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmartCartSliderComponent = (function () {
    function SmartCartSliderComponent(element) {
        this.element = element;
        this.width = 1000;
        this.height = 120;
        this.preference = 'Calories';
        this.min = 0;
        this.max = 10;
        this.selectedValue = 5;
        this.output = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    SmartCartSliderComponent.prototype.ngOnInit = function () {
        this.setupVariables();
        this.setupSlider();
    };
    SmartCartSliderComponent.prototype.setupVariables = function () {
        var self = this;
        self.spec = {
            animTime: 800,
            scale: __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().domain([self.min, self.max])
                .range([0, self.width]).clamp(true),
            colorScale: __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]()
                .domain([self.min, (self.min + self.max) / 2, self.max])
                .range(['#c4dbf0', '#65abd9', '#004da0']),
            greyScale: __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]()
                .domain([self.min, self.max])
                .range(['#0e0e0e', '#fffff0']),
            r: self.height * 0
        };
        self.svg = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](self.element.nativeElement).select('svg#smart-cart-slider')
            .attr('width', '100%').attr('opacity', 1)
            .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
            .attr('viewBox', '0 0 ' + self.width + ' ' + self.height);
        self.workSpace = self.svg.select('g#work-space');
        if (self.workSpace.empty()) {
            self.workSpace = self.svg.append('g').attr('id', 'work-space');
        }
    };
    SmartCartSliderComponent.prototype.setupSlider = function () {
        var self = this;
        self.workSpace.append('rect').attr('id', 'slider-border')
            .attr('width', self.width).attr('height', self.height)
            .attr('rx', self.spec.r).attr('ry', self.spec.r)
            .style('fill', 'none').style('stroke', '#0e0e0e')
            .attr('stroke-width', self.height * 0.1).attr('pointer-events', 'none');
        self.handle = self.workSpace.insert('rect', ':first-child').attr('id', 'handle')
            .attr('height', self.height).attr('width', 0).attr('pointer-events', 'none')
            .attr('rx', self.spec.r).attr('ry', self.spec.r)
            .style('fill', function () { return self.spec.colorScale(self.min); })
            .style('stroke', '#0e0e0e').attr('stroke-width', self.height * 0.03);
        self.handle.transition().duration(self.spec.animTime)
            .style('fill', function () { return self.spec.colorScale(self.selectedValue); })
            .attr('width', function () { return self.spec.scale(self.selectedValue); });
        self.slider = self.workSpace.append('rect').attr('id', 'slider')
            .attr('width', self.width).attr('height', self.height).attr('opacity', 0)
            .style('cursor', 'pointer')
            .call(__WEBPACK_IMPORTED_MODULE_1_d3__["b" /* drag */]()
            .on('start', function () {
            var x = __WEBPACK_IMPORTED_MODULE_1_d3__["h" /* min */]([__WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */]([0, __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* event */].x]), self.width]);
            self.sliderChange(x);
        })
            .on('drag', function () {
            var x = __WEBPACK_IMPORTED_MODULE_1_d3__["h" /* min */]([__WEBPACK_IMPORTED_MODULE_1_d3__["g" /* max */]([0, __WEBPACK_IMPORTED_MODULE_1_d3__["c" /* event */].x]), self.width]);
            self.sliderChange(x);
        })
            .on('end', function () { }));
        // .on('click', () => {
        //   d3.mouse(d3.event.currentTarget);
        // });
        self.textLabel = self.workSpace.append('text')
            .attr('text-anchor', 'middle').attr('pointer-events', 'none')
            .attr('font-size', self.height * 0.5).style('fill', 'white')
            .attr('font-weight', 'bold').attr('opacity', 0.8)
            .attr('x', self.width / 2).attr('y', self.height * 0.74)
            .style('fill', function () { return self.spec.greyScale(self.selectedValue); })
            .text(function () { return self.generateTextLabel(self.selectedValue); });
        self.workSpace.insert('rect', ':first-child').attr('id', 'slider-bg')
            .attr('width', self.width).attr('height', self.height)
            .attr('rx', self.spec.r).attr('ry', self.spec.r)
            .style('fill', '#fffff0').attr('pointer-events', 'none');
    };
    SmartCartSliderComponent.prototype.sliderChange = function (x) {
        var self = this;
        var output = self.spec.scale.invert(x);
        self.output.emit({ desc: self.preference, value: output });
        self.handle
            .style('fill', function () { return self.spec.colorScale(output); })
            .attr('width', function () { return x; });
        self.textLabel
            .style('fill', function () { return self.spec.greyScale(output); })
            .text(function () { return self.generateTextLabel(output); });
    };
    SmartCartSliderComponent.prototype.generateTextLabel = function (x) {
        var self = this;
        if (x < 4)
            return 'Prefer less';
        else if (x > 6)
            return 'Prefer more';
        else
            return 'Indifferent';
    };
    SmartCartSliderComponent.prototype.updateSliderValue = function () {
        var self = this;
        self.handle.transition().duration(self.spec.animTime)
            .style('fill', function () { return self.spec.colorScale(self.selectedValue); })
            .attr('width', function () { return self.spec.scale(self.selectedValue); });
        self.textLabel
            .style('fill', function () { return self.spec.greyScale(self.selectedValue); })
            .text(function () { return self.generateTextLabel(self.selectedValue); });
    };
    return SmartCartSliderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SmartCartSliderComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SmartCartSliderComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SmartCartSliderComponent.prototype, "preference", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SmartCartSliderComponent.prototype, "selectedValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], SmartCartSliderComponent.prototype, "output", void 0);
SmartCartSliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-smart-cart-slider',
        template: __webpack_require__("../../../../../src/app/smart-cart-slider/smart-cart-slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/smart-cart-slider/smart-cart-slider.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object])
], SmartCartSliderComponent);

var _a, _b;
//# sourceMappingURL=smart-cart-slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/solution-page/solution-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#solution-page {\r\n    padding-top: 5vw; \r\n}\r\n\r\n.headline {\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n    pointer-events: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/solution-page/solution-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"solution-page\" class=\"wow fadeInLeft\">\r\n  <div class=\"headline\" align=\"middle\">\r\n    Solution\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/solution-page/solution-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolutionPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolutionPageComponent = (function () {
    function SolutionPageComponent(element) {
        this.element = element;
    }
    SolutionPageComponent.prototype.ngOnInit = function () {
        this.host = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](this.element.nativeElement).select('#solution-page');
    };
    return SolutionPageComponent;
}());
SolutionPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-solution-page',
        template: __webpack_require__("../../../../../src/app/solution-page/solution-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/solution-page/solution-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], SolutionPageComponent);

var _a;
//# sourceMappingURL=solution-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/survey-page/survey-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#survey-page {\r\n    padding-top: 5vw;\r\n}\r\n\r\n#survey-selector-container {\r\n    padding-top: 1.8vw; \r\n}\r\n.survey-selector {\r\n    font-size: 3.2vw;\r\n    cursor: pointer;\r\n}\r\n.survey-selector span.active {\r\n    color: orange;\r\n    font-weight: 600;\r\n}\r\n\r\n.headline {\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n    /* color: orange; */\r\n    pointer-events: none;\r\n}\r\n\r\n#survey-scale {\r\n    padding-top: 4vw; \r\n}\r\n\r\n#survey-info-div {\r\n    position: absolute;\r\n    top: calc(50% - 4vw) !important;\r\n    right: 0;\r\n    padding-right: 3vw; \r\n    color: #fffff0;\r\n    pointer-events: none;\r\n}\r\n\r\n#survey-info-div .survey-header {\r\n    font-size: 3.5vw;\r\n    font-weight: 600;\r\n}\r\n#survey-info-div .survey-info {\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n    color: orange;\r\n}\r\n\r\n.statistic-source {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 0;\r\n    padding-right: 3vw; \r\n    font-size: 1.5vw;\r\n    color: #8f8f8f;\r\n}\r\n\r\n#usa-map-container {\r\n    z-index: -10;\r\n    position: absolute;\r\n    top: 12vw;\r\n    left: 0;\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/survey-page/survey-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"survey-page\" class=\"wow fadeInLeft\">\r\n\r\n    <div id=\"usa-map-container\">\r\n      <app-usa-map-static [resources]=\"resources\"></app-usa-map-static>\r\n    </div>\r\n\r\n    <div class=\"headline\" align=\"middle\">\r\n      Health-Conscious Consumers\r\n    </div>\r\n\r\n    <div id=\"survey-selector-container\" class=\"row\">\r\n      <div class=\"col-xs-4 col-sm-4 colr-md-4 col-lg-4 survey-selector\" align=\"middle\"\r\n      (click)=\"changeSurveyType(0)\">\r\n        <span [ngClass]=\"{'active':spanActive(0)}\">Too many</span>\r\n      </div>\r\n      <div class=\"col-xs-4 col-sm-4 colr-md-4 col-lg-4 survey-selector\" align=\"middle\"\r\n      (click)=\"changeSurveyType(1)\">\r\n        <span [ngClass]=\"{'active':spanActive(1)}\">Overwhelmed</span>\r\n      </div>\r\n      <div class=\"col-xs-4 col-sm-4 colr-md-4 col-lg-4 survey-selector\" align=\"middle\"\r\n      (click)=\"changeSurveyType(2)\">\r\n        <span [ngClass]=\"{'active':spanActive(2)}\">Willing to pay</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"survey-scale\"></div>\r\n\r\n    <div id=\"survey-info-div\">\r\n      <div class=\"survey-header\" align=\"right\">\r\n        Survey participants\r\n      </div>\r\n      <div class=\"survey-info\" align=\"right\">{{surveyInfo.from}}</div>\r\n  \r\n      <br><br>\r\n      <div class=\"survey-header\" align=\"right\">Criteria percent</div>\r\n      <div class=\"survey-info\" align=\"right\">{{surveyInfo.percent}} %</div>\r\n    </div>\r\n  \r\n    <div class=\"statistic-source\">\r\n      Source: {{surveyInfo.source}}\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/survey-page/survey-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyPageComponent = (function () {
    function SurveyPageComponent(element) {
        this.element = element;
        this.surveyType = 0;
        this.surveyInfo = { from: '2,800', percent: 80, source: 'Consumer Reports' };
        this.scaleReady = false;
    }
    SurveyPageComponent.prototype.ngOnInit = function () {
        this.host = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](this.element.nativeElement).select('#survey-page');
        this.setupVariables();
        this.setupSurveyScale();
    };
    SurveyPageComponent.prototype.setupVariables = function () {
        var self = this;
        var width = 1000, height = 324;
        self.spec = {
            animTime: 1000,
            width: width,
            height: height,
            scaleH: __WEBPACK_IMPORTED_MODULE_1_d3__["j" /* scaleLinear */]().domain([0, 100]).range([0, height]),
            manShopper: 'M416.7,72.8L416.7,72.8h-1.2h-11.3c-0.6,1-1.4,2.6-2.6,3.7c-2.4,2.4-5.6,3.6-8.8,3.6 s-6.3-1.1-8.8-3.5l-3.9-3.8h-11.5H340h-11.5l-3.9,3.7c-2.4,2.4-5.6,3.6-8.8,3.6c-3.2,0-6.3-1.2-8.7-3.7c-0.3-0.3-0.9-0.8-0.9-1.1 v-143l0.3-2.2l1.1-1.6l1.7-0.9l2-0.2l1.8,0.2l1.8,0.9l1.3,1.6l0.7,2.2l22.3,105.4l-26.7,26.7c-1.7,1.7-1.7,4.6,0,6.3 c0.9,0.9,2,1.3,3.1,1.3s2.3-0.4,3.1-1.3l23.6-23.6l0.4,0.7l2,2.5l2.2,1.8l2.7,1.6l2.7,0.9l3.4,0.4l2.9-0.4l3.1-0.9l2.5-1.6l2.7-1.8 l0.8-1.2l21.7,21.7c0.9,0.9,2,1.3,3.1,1.3c1.1,0,2.3-0.4,3.1-1.3c1.7-1.7,1.7-4.6,0-6.3l-24.3-24.3l0.2-1.4l-23-118.6l-2.5-8.9 l-3.1-8.1l-4.1-7.4l-5.4-6.1l-6.5-5.1l-7.4-3.8l-8.2-2.4l-9-0.6h-83.2l-9,0.6l-8.3,2.4l-7.4,3.8l-6.5,5.1l-5.4,6.1l-4.5,7.4 l-3.1,8.1l-2.5,8.9L149.6,38.8L150,42l0.9,3.1l1.6,2.4l1.8,2.7L157,52l2.5,1.6l3.1,0.9l2.9,0.4l3.3-0.4l2.7-0.9l2.7-1.6l2.3-1.8 l2-2.5l1.6-2.5l1.4-3.1l0.4-3.1l22.6-106.8l0.7-2.2l1.3-1.6l1.8-0.9l1.8-0.2l2,0.2l1.8,0.9l1.2,1.6l0.5,2.2V238l0.2,3.8l1.1,3.8 l1.8,3.4l2,3.1l2.7,2.4l3.1,1.8l3.8,1.1l3.8,0.7l4.3-0.7l3.8-1.1l3.6-1.8l2.7-2.4l2.5-3.1l1.8-3.4l1.4-3.8l0.3-3.8V65.7l0.6-3.3 l1.5-2.3l2.2-1.3l2.1-0.2l2.1,0.2l2.2,1.3l1.6,2.3l0.7,3.3v172.4l0.2,3.8l1.3,3.8l1.8,3.4l2.4,3.1l2.7,2.4l3.6,1.8l3.8,1.1l4.3,0.7 l3.8-0.7l3.8-1.1l3.1-1.8l2.7-2.4l2-3.1l1.8-3.4l1.2-3.8l0.6-3.8v-93.8l-0.1-0.4l0,0h16l0,0h16l0,0l0,0h16l0,0l0,0l48.1,0.2 c0.6,0,1.1,0,1.6-0.2c0.2-0.1,0.4-0.1,0.6-0.3h0.1c0.2-0.2,0.4-0.3,0.6-0.5l0.2-0.2c0.1-0.1,0.3-0.3,0.4-0.4l0.2-0.3 c0.1-0.1,0.2-0.3,0.2-0.4l0.1-0.3c0.1-0.2,0.1-0.3,0.2-0.5l0.1-0.3c0-0.2,0.1-0.3,0.1-0.5l5-50.6c0.1-0.6,0-1.3-0.2-1.8l0.1-0.9 h3.7c4,0,7.3-3,7.3-7.1C422.8,76.1,420.1,73.3,416.7,72.8z M306.2,90.2c2.8,1.2,5.8,1.9,8.7,2.1l0.9,13.5h-8.1L306.2,90.2z M310.4,135.4l-1.9-20.6h7.9l1.3,20.7L310.4,135.4z M323.8,90.9c2.6-0.8,5-2.1,7.2-4.1h1.3l0.6,19h-8.2L323.8,90.9z M326.5,135.4 l-1.3-20.6h7.9l0.6,20.7L326.5,135.4z M341.2,86.8h9.2v19h-8.6L341.2,86.8z M342.7,135.4l-0.6-20.6h7.9v20.7L342.7,135.4z M366.1,135.4l-7.3,0.1v-20.7h7.9L366.1,135.4z M367,105.8h-8.6v-19h9.2L367,105.8z M382.2,135.4l-7.3,0.1l0.6-20.6h7.9 L382.2,135.4z M384,105.8h-8.1l0.6-19h1.3c2.2,2,4.6,3.2,7.2,4.1L384,105.8z M398.4,135.4l-7.2,0.1l1.3-20.6h7.9L398.4,135.4z M401.1,105.8h-8.2l0.8-13.6c3-0.1,6-0.8,8.7-2L401.1,105.8z',
            womanShopper: 'M105,24.3L63.4-95.2l-2-4.3l-2.7-4.5l-3.6-4.7l-4-4.5l-5.2-4l-5.8-3.2l-6.7-1.9l-7.2-0.6 h-70.5l-7,0.4l-6,2l-5.2,2.9l-4.2,3.8l-3.8,4l-3.1,4.9l-2.7,4.7l-1.8,4.9l-41.5,119.6l-0.9,2.9l-0.2,3.1l0.4,3.1l0.3,0.9 l-30.3,30.4c-1.7,1.7-1.7,4.6,0,6.3c0.9,0.9,2,1.3,3.1,1.3s2.3-0.4,3.1-1.3l29.1-29.2l2.1,1.3l3.1,1.4l2.9,0.5h3.2l3.2-0.5l0.6-0.1 l13.6,13.8l-5.1,14.9h-2.9h-28.6h-11.6l-3.9,3.7c-2.4,2.4-5.6,3.6-8.8,3.6s-6.3-1.1-8.8-3.5c-1.1-1.1-2-2.8-2.6-3.8h-11.1h-1.2l0,0 c-3.5,0.6-6.1,3.3-6.1,7c0,4,3.3,7.1,7.3,7.1h3.7l0.1,0.9c-0.1,0.5-0.2,1.1-0.1,1.7l5,50.8c0,0.2,0.1,0.3,0.1,0.5l0.1,0.3 c0,0.1,0.1,0.3,0.1,0.4s0.1,0.3,0.2,0.4l0.2,0.2c0.1,0.2,0.2,0.3,0.3,0.4l0.2,0.3l0.3,0.3c0.4,0.4,0.9,0.5,1.4,0.7s1,0.1,1.6,0.1 l0,0h16l0,0h16l0,0l0,0h16l0,0l0,0l48,0.1c0.6,0,1.1,0,1.6-0.2c0.2-0.1,0.4-0.1,0.6-0.3h0.1c0.2-0.2,0.4-0.3,0.6-0.5l0.2-0.2 c0.1-0.1,0.3-0.3,0.4-0.4l0.2-0.3c0.1-0.1,0.2-0.3,0.2-0.4l0.1-0.3c0.1-0.2,0.1-0.3,0.2-0.5v-0.3c0-0.2,0.1-0.6,0.1-0.8l2.6-27.1 h3.2v128l0.3,3.3l0.9,3.6l1.6,2.9l2.5,2.7l2.5,2l3.1,1.8l3.2,1.1l3.8,0.4l3.4-0.4l3.6-1.1l2.9-1.8l2.7-2l2-2.7l1.8-2.9l1.2-3.6 l0.6-3.3V113.1h14v128v3.3l1,3.6l1.5,2.9l2.2,2.7l2.4,2l3.1,1.8l3.4,1.1l3.8,0.4l3.3-0.4l3.6-1.1l2.9-1.8l2.7-2l2-2.7l1.8-2.9 l0.9-3.6l0.2-3.3v-128h56.2L30.3-58.3l-0.9-3l0.6-2.2l1.1-1.8l1.8-0.9l2-0.4l2,0.7l1.8,1.6l1.6,2.7l34.3,96.4l1.1,2.7l2,2.5l2.2,2 l2.7,1.8l2.7,0.8l3.1,0.5h3.2l3.4-0.5l2.7-1.5l2.5-1.8l2-2.4l1.8-2.5l0.9-2.9l0.7-3.1v-3.1L105,24.3z M-156.8,90.5 c2.8,1.2,5.8,1.9,8.7,2.1l0.8,13.5h-8.1L-156.8,90.5z M-152.6,135.7l-1.9-20.6h7.9l1.3,20.7L-152.6,135.7z M-139.2,91.2 c2.6-0.8,5-2.1,7.2-4.1h1.3l0.6,19h-8.2L-139.2,91.2z M-136.5,135.7l-1.2-20.6h7.8l0.6,20.7L-136.5,135.7z M-121.8,87.1h8.5v19 h-7.9L-121.8,87.1z M-120.3,135.7l-0.7-20.6h7.9v20.7L-120.3,135.7z M-92.3,39.4l1.4-1.9l1.5-2.7l34-96.9l1.1-2.7l2-1.3l2-0.7 l2,0.7l1.6,1.1l1.1,2l0.5,2.5l-0.7,3.1L-83,48.8L-92.3,39.4z M-104.3,87.1h7.8l-6.5,19h-1.3V87.1z M-96.9,135.7l-7.3,0.1v-20.7h7.9 L-96.9,135.7z M-80.8,135.7l-7.3,0.1l0.6-20.6h7.9L-80.8,135.7z M-64.6,135.6l-7.2,0.1l1.3-20.6h7.9L-64.6,135.6z',
            manHead: '224.9,-155 228.5,-148.7 233,-142.9 238.5,-138.4 244.8,-134.9 251.9,-132.6    259.3,-131.7 267.2,-132.6 274.3,-134.9 280.8,-138.4 286.1,-142.9 291.1,-148.7 294.4,-155 296.4,-162.2 297.1,-169.5    296.4,-177.4 294.4,-184.6 291.1,-191 286.1,-196.4 280.8,-201.3 274.3,-204.7 267.2,-206.7 259.3,-207.4 251.9,-206.7    244.8,-204.7 238.5,-201.3 233,-196.4 228.5,-191 224.9,-184.6 222.7,-177.4 221.8,-169.5 222.7,-162.2',
            womanHead: '-40.6,-155.4 -37.2,-149.1 -32.5,-143.5 -27.1,-139 -20.4,-135.4 -13.5,-133.2    -5.6,-132.3 1.8,-133.2 8.9,-135.4 15.2,-139 21,-143.5 25.5,-149.1 29.1,-155.4 31.3,-162.5 32.2,-170 31.3,-177.8 29.1,-185    25.5,-191.5 21,-197.1 15.2,-201.8 8.9,-205.2 1.8,-207.4 -5.6,-208.1 -13.5,-207.4 -20.4,-205.2 -27.1,-201.8 -32.5,-197.1    -37.2,-191.5 -40.6,-185 -42.8,-177.8 -43.5,-170 -42.8,-162.5'
        };
        self.svg = self.host.select('#survey-scale').select('svg');
        if (self.svg.empty()) {
            self.svg = self.host.select('#survey-scale').append('svg')
                .attr('width', '100%').attr('opacity', 1)
                .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
                .attr('viewBox', '0 0 ' + width + ' ' + height);
            self.workSpace = self.svg.append('g').attr('id', 'work-space')
                .attr('clip-path', 'url(#work-space-clip)');
            // Clip-path
            var clipPath = self.svg.append('defs').append('clipPath').attr('id', 'work-space-clip')
                .style('fill', 'none')
                .attr('transform', 'scale(0.68)translate(' + (0.36 * self.spec.width) + ','
                + (0.66 * self.spec.height) + ')');
            clipPath.append('path')
                .attr('d', self.spec.manShopper + ' ' + self.spec.womanShopper);
            clipPath.append('polygon').attr('points', self.spec.manHead);
            clipPath.append('polygon').attr('points', self.spec.womanHead);
        }
        else {
            self.workSpace = self.svg.select('g#work-space');
        }
    };
    SurveyPageComponent.prototype.setupSurveyScale = function () {
        var self = this;
        self.workSpace.append('rect')
            .attr('width', self.spec.width).attr('height', self.spec.height)
            .style('fill', '#3e3e3e').attr('opacity', 1);
        var rectPercent = self.workSpace.append('rect').attr('id', 'percentage')
            .attr('y', self.spec.height)
            .attr('width', self.spec.width).attr('height', 0)
            .style('fill', 'orange');
        __WEBPACK_IMPORTED_MODULE_1_d3__["l" /* timeout */](function () {
            self.scaleReady = true;
            rectPercent.transition().duration(self.spec.animTime)
                .attr('y', self.spec.height - self.spec.scaleH(self.surveyInfo.percent))
                .attr('height', self.spec.scaleH(self.surveyInfo.percent));
        }, 500);
        var shopperSpace = self.svg.append('g').attr('id', 'shopper-space')
            .style('fill', 'none').style('stroke', '#fffff0').attr('stroke-width', 5)
            .attr('transform', 'scale(0.68)translate(' + (0.36 * self.spec.width) + ','
            + (0.66 * self.spec.height) + ')');
        shopperSpace.append('path')
            .attr('d', self.spec.manShopper + ' ' + self.spec.womanShopper);
        shopperSpace.append('polygon').attr('points', self.spec.manHead);
        shopperSpace.append('polygon').attr('points', self.spec.womanHead);
    };
    SurveyPageComponent.prototype.updateSurveyScale = function () {
        var self = this;
        if (self.scaleReady) {
            self.workSpace.select('rect#percentage')
                .transition().duration(self.spec.animTime)
                .attr('y', self.spec.height - self.spec.scaleH(self.surveyInfo.percent))
                .attr('height', self.spec.scaleH(self.surveyInfo.percent));
        }
    };
    SurveyPageComponent.prototype.spanActive = function (page) {
        if (this.surveyType == page)
            return true;
        else
            return false;
    };
    SurveyPageComponent.prototype.changeSurveyType = function (page) {
        var self = this;
        self.surveyType = page;
        if (page == 0)
            self.surveyInfo = { from: '2,800', percent: 80, source: 'Consumer Reports' };
        else if (page == 1)
            self.surveyInfo = { from: '2,800', percent: 36, source: 'Consumer Reports' };
        else if (page == 2)
            self.surveyInfo = { from: '30,000', percent: 80, source: 'Nielsen, Market Research Firm' };
        self.updateSurveyScale();
    };
    return SurveyPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SurveyPageComponent.prototype, "resources", void 0);
SurveyPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-survey-page',
        template: __webpack_require__("../../../../../src/app/survey-page/survey-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/survey-page/survey-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], SurveyPageComponent);

var _a;
//# sourceMappingURL=survey-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/thank-page/thank-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#thank-page {\r\n    padding-top: 5vw;\r\n}\r\n\r\n.headline {\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n    pointer-events: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/thank-page/thank-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"thank-page\" class=\"wow fadeInLeft\">\n  <div class=\"headline\" align=\"middle\">\n    Thank You\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/thank-page/thank-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThankPageComponent = (function () {
    function ThankPageComponent() {
    }
    ThankPageComponent.prototype.ngOnInit = function () {
    };
    return ThankPageComponent;
}());
ThankPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-thank-page',
        template: __webpack_require__("../../../../../src/app/thank-page/thank-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/thank-page/thank-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ThankPageComponent);

//# sourceMappingURL=thank-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/usa-map-static/usa-map-static.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/usa-map-static/usa-map-static.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"us-map-static\">\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/usa-map-static/usa-map-static.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsaMapStaticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_topojson_client__ = __webpack_require__("../../../../topojson-client/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsaMapStaticComponent = (function () {
    function UsaMapStaticComponent(element) {
        this.element = element;
        this.width = 1000;
        this.height = 410;
    }
    UsaMapStaticComponent.prototype.ngOnInit = function () {
        var self = this;
        self.host = __WEBPACK_IMPORTED_MODULE_2_d3__["k" /* select */](self.element.nativeElement).select('#us-map-static');
        self.setupVariables();
        self.initMapUSA();
    };
    UsaMapStaticComponent.prototype.setupVariables = function () {
        var self = this;
        // Setup internal spec
        self.spec = {
            animTime: 500,
            geoPath: __WEBPACK_IMPORTED_MODULE_2_d3__["e" /* geoPath */]()
        };
        self.svg = self.host.select('svg');
        if (self.svg.empty()) {
            self.svg = self.host.append('svg')
                .attr('width', '100%').attr('opacity', 1)
                .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
                .attr('viewBox', '0 0 ' + self.width + ' ' + self.height);
            self.workSpace = self.svg.append('g').attr('id', 'work-space');
        }
        else {
            self.workSpace = self.svg.select('g#work-space');
        }
    };
    UsaMapStaticComponent.prototype.initMapUSA = function () {
        var self = this;
        // self.svg.append('rect')
        //   .attr('width', self.width).attr('height', self.height)
        //   .style('fill', 'none').style('stroke', '#fffff0')
        //   .attr('stroke-width', 3);
        __WEBPACK_IMPORTED_MODULE_2_d3__["f" /* json */](self.resources.mapUSA, function (mapData) {
            self.states = __WEBPACK_IMPORTED_MODULE_1_topojson_client__["a" /* feature */](mapData, mapData.objects.states);
            self.lands = self.states.features.map(function (d) {
                return d.geometry.coordinates;
            });
            self.workSpace.selectAll('path')
                .data(self.states.features)
                .enter().append('path').attr('class', 'state')
                .attr('d', self.spec.geoPath)
                .style('stroke', '#0e0e0e').attr('stroke-width', 2)
                .style('fill', '#1b1b1b');
            self.workSpace
                .attr('transform', 'scale(0.95, 0.7)translate(' + (0.06 * self.width) + ',0)')
                .attr('opacity', 0.7);
        });
    };
    return UsaMapStaticComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UsaMapStaticComponent.prototype, "resources", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UsaMapStaticComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UsaMapStaticComponent.prototype, "height", void 0);
UsaMapStaticComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-usa-map-static',
        template: __webpack_require__("../../../../../src/app/usa-map-static/usa-map-static.component.html"),
        styles: [__webpack_require__("../../../../../src/app/usa-map-static/usa-map-static.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], UsaMapStaticComponent);

var _a;
//# sourceMappingURL=usa-map-static.component.js.map

/***/ }),

/***/ "../../../../../src/app/usa-map/usa-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/usa-map/usa-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"us-map\">\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/usa-map/usa-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsaMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_topojson_client__ = __webpack_require__("../../../../topojson-client/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsaMapComponent = (function () {
    function UsaMapComponent(element) {
        this.element = element;
        this.width = 1000;
        this.height = 410;
        this.play = true;
    }
    UsaMapComponent.prototype.ngOnInit = function () {
        var self = this;
        self.host = __WEBPACK_IMPORTED_MODULE_2_d3__["k" /* select */](self.element.nativeElement).select('#us-map');
        self.setupVariables();
        self.initMapUSA();
        for (var i = 0; i < 25; i++) {
            self.animation();
        }
    };
    UsaMapComponent.prototype.setupVariables = function () {
        var self = this;
        // Setup internal spec
        self.spec = {
            animTime: 500,
            geoPath: __WEBPACK_IMPORTED_MODULE_2_d3__["e" /* geoPath */]()
        };
        self.svg = self.host.select('svg');
        if (self.svg.empty()) {
            self.svg = self.host.append('svg')
                .attr('width', '100%').attr('opacity', 1)
                .attr('height', '100%').attr('preserveAspectRatio', 'xMidYMid')
                .attr('viewBox', '0 0 ' + self.width + ' ' + self.height);
            self.workSpace = self.svg.append('g').attr('id', 'work-space');
            self.animateSpace = self.svg.append('g').attr('id', 'animate-space');
        }
        else {
            self.workSpace = self.svg.select('g#work-space');
            self.animateSpace = self.svg.select('g#animate-space');
        }
    };
    UsaMapComponent.prototype.initMapUSA = function () {
        var self = this;
        // self.svg.append('rect')
        //   .attr('width', self.width).attr('height', self.height)
        //   .style('fill', 'none').style('stroke', '#fffff0')
        //   .attr('stroke-width', 3);
        __WEBPACK_IMPORTED_MODULE_2_d3__["f" /* json */](self.resources.mapUSA, function (mapData) {
            self.states = __WEBPACK_IMPORTED_MODULE_1_topojson_client__["a" /* feature */](mapData, mapData.objects.states);
            self.lands = self.states.features.map(function (d) {
                return d.geometry.coordinates;
            });
            self.workSpace.selectAll('path')
                .data(self.states.features)
                .enter().append('path').attr('class', 'state')
                .attr('d', self.spec.geoPath)
                .style('stroke', '#0e0e0e').attr('stroke-width', 2)
                .style('fill', '#1b1b1b');
            self.workSpace
                .attr('transform', 'scale(0.9, 0.7)translate(' + (0.075 * self.width) + ',0)');
        });
    };
    UsaMapComponent.prototype.animation = function () {
        var _this = this;
        var self = this;
        if (self.play) {
            var r = (Math.random() * 0.07 + 0.03) * self.height, offX = 0.075 * self.width;
            var time1 = Math.random() * 2000 + 500, time2 = Math.random() * 2000 + 500, point = [r + offX + Math.random() * (self.width - 2 * r - 2 * offX),
                r + Math.random() * (self.height - 2 * r)];
            __WEBPACK_IMPORTED_MODULE_2_d3__["l" /* timeout */](function () {
                self.animateSpace.append('circle')
                    .attr('cx', point[0]).attr('cy', point[1])
                    .style('fill', 'orange').attr('r', 0).attr('opacity', 0.6)
                    .transition().duration(time2)
                    .attr('r', r).attr('opacity', 0)
                    .on('end', function () {
                    __WEBPACK_IMPORTED_MODULE_2_d3__["k" /* select */](_this).remove();
                    self.animation();
                });
            }, time1);
        }
    };
    return UsaMapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UsaMapComponent.prototype, "resources", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UsaMapComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UsaMapComponent.prototype, "height", void 0);
UsaMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-usa-map',
        template: __webpack_require__("../../../../../src/app/usa-map/usa-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/usa-map/usa-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], UsaMapComponent);

var _a;
//# sourceMappingURL=usa-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/usa-statistic-page/usa-statistic-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#usa-statistic-page {\r\n    padding-top: 5vw;    \r\n}\r\n\r\n#year-selector-container {\r\n    font-size: 4vw;\r\n    font-weight: 600;  \r\n}\r\n\r\n.year-selector span {\r\n    cursor: pointer;\r\n}\r\n.year-selector span.active {\r\n    color: orange;\r\n}\r\n\r\n#map-container {\r\n    /* padding: 50px 6vw 20px 6vw;  */\r\n    padding: 2vw 0 0 0;\r\n}\r\n\r\n#statistic-div {\r\n    position: absolute;\r\n    top: calc(50% - 10vw) !important;\r\n    right: 0;\r\n    padding-right: 3vw; \r\n    color: #fffff0;\r\n}\r\n\r\n#statistic-div .statistic-header {\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n}\r\n#statistic-div .statistic-info {\r\n    font-size: 4vw;\r\n    font-weight: 600;\r\n    color: orange;\r\n}\r\n\r\n.statistic-note {\r\n    font-size: 1.5vw;\r\n    color: #8f8f8f;\r\n}\r\n\r\n.statistic-source {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 0;\r\n    padding-right: 3vw; \r\n    font-size: 1.5vw;\r\n    color: #8f8f8f;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/usa-statistic-page/usa-statistic-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"usa-statistic-page\" class=\"wow fadeInLeft\">\r\n  <div id=\"year-selector-container\" class=\"row\">\r\n    <div *ngFor=\"let y of [2014, 2015, 2016];\" align=\"middle\"\r\n    class=\"col-xs-4 col-sm-4 colr-md-4 col-lg-4 year-selector\"\r\n    (click)=\"changeYear(y)\">\r\n      <span [ngClass]=\"{'active':yearActive(y)}\">{{y}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"map-container\">\r\n    <app-usa-map [resources]=\"resources\"></app-usa-map>\r\n  </div>\r\n\r\n  <div id=\"statistic-div\">\r\n    <div class=\"statistic-note\" align=\"right\">*2 million or more in annual sales</div>\r\n    <div class=\"statistic-header\" align=\"right\">Total grocery stores in US</div>\r\n    <div class=\"statistic-info\" align=\"right\">{{info.stores}}</div>\r\n    <ng-container *ngIf=\"selectedYear > 2014\">\r\n      <div class=\"statistic-header\" align=\"right\"\r\n      style=\"padding-top:2vw;\">Percent increase</div>\r\n      <div class=\"statistic-info\" align=\"right\">{{info.percent}} %</div>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"statistic-source\">\r\n    Source: Progressive Grocer Magazine\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/usa-statistic-page/usa-statistic-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsaStatisticPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsaStatisticPageComponent = (function () {
    function UsaStatisticPageComponent(element) {
        this.element = element;
        this.selectedYear = 2014;
    }
    UsaStatisticPageComponent.prototype.ngOnInit = function () {
        this.host = __WEBPACK_IMPORTED_MODULE_1_d3__["k" /* select */](this.element.nativeElement).select('#us-statistic-page');
        if (this.selectedYear == 2014)
            this.info = { stores: '37,688', percent: '+0' };
        else if (this.selectedYear == 2015)
            this.info = { stores: '38,105', percent: '+1.11' };
        else if (this.selectedYear == 2016)
            this.info = { stores: '38,441', percent: '+0.88' };
    };
    UsaStatisticPageComponent.prototype.yearActive = function (year) {
        if (this.selectedYear == year)
            return true;
        else
            return false;
    };
    UsaStatisticPageComponent.prototype.changeYear = function (year) {
        this.selectedYear = year;
        if (year == 2014)
            this.info = { stores: '37,688', percent: '+0' };
        else if (year == 2015)
            this.info = { stores: '38,105', percent: '+1.11' };
        else if (year == 2016)
            this.info = { stores: '38,441', percent: '+0.88' };
    };
    return UsaStatisticPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], UsaStatisticPageComponent.prototype, "resources", void 0);
UsaStatisticPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-usa-statistic-page',
        template: __webpack_require__("../../../../../src/app/usa-statistic-page/usa-statistic-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/usa-statistic-page/usa-statistic-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], UsaStatisticPageComponent);

var _a;
//# sourceMappingURL=usa-statistic-page.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map