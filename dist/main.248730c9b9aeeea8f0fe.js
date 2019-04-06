(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_pi_viewer_pi_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pi-viewer/pi-viewer.component */ "./src/app/pages/pi-viewer/pi-viewer.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");







var routes = [
    //{ path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    // { path: 'samples', component: SamplesComponent },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'pi-viewer', component: _pages_pi_viewer_pi_viewer_component__WEBPACK_IMPORTED_MODULE_5__["PiViewerComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\"><img class=\"nav-logo\" src=\"/assets/img/Tuvo icon-03.svg\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"navbarToggle()\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div [ngClass]=\"navBarClass\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li *ngFor=\"let el of navItems\" [ngClass]=\"el.itemClass\">\r\n          <a class=\"nav-link\" [routerLink]=\"el.link\"> {{el.name}} </a>\r\n        </li>\r\n\r\n        <!-- <li [ngClass]=\"navItemClass\">\r\n              <a class=\"nav-link\" routerLink=\"\">Home </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"samples\">Samples</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"pi-viewer\">PI Viewer</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLink=\"contact\">Contact</a>\r\n            </li> -->\r\n\r\n        <!-- <li class=\"nav-item dropdown\">\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n              </div>\r\n            </li> -->\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.title = 'tuvo-homepage';
        this.navBarClass = ['collapse', 'navbar-collapse'];
        this.navItemClass = ['nav-item', 'active'];
        this.navItems = [
            {
                name: 'Home',
                link: '',
                itemClass: ['nav-item']
            },
            // {
            //   name: 'Samples',
            //   link: 'samples',
            //   itemClass: ['nav-item']
            // },
            {
                name: 'About',
                link: 'about',
                itemClass: ['nav-item']
            },
            {
                name: 'PI Viewer',
                link: 'pi-viewer',
                itemClass: ['nav-item']
            },
            {
                name: 'Contact',
                link: 'contact',
                itemClass: ['nav-item']
            }
        ];
        this.router.events.subscribe(function (el) {
            if (el instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.navItems.forEach(function (navEl) {
                    if ('/' + navEl.link === el.url) {
                        navEl.itemClass = ['nav-item active'];
                    }
                    else {
                        navEl.itemClass = ['nav-item'];
                    }
                });
            }
        });
    }
    AppComponent.prototype.navbarToggle = function () {
        var showClass = 'show';
        if (this.navBarClass.indexOf(showClass) > -1) {
            this.navBarClass = ['collapse', 'navbar-collapse'];
        }
        else {
            this.navBarClass = ['collapse', 'navbar-collapse', showClass];
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_samples_samples_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/samples/samples.component */ "./src/app/pages/samples/samples.component.ts");
/* harmony import */ var _pages_pi_viewer_pi_viewer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/pi-viewer/pi-viewer.component */ "./src/app/pages/pi-viewer/pi-viewer.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _subcomponents_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subcomponents/carousel/carousel.component */ "./src/app/subcomponents/carousel/carousel.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _pages_samples_samples_component__WEBPACK_IMPORTED_MODULE_8__["SamplesComponent"],
                _pages_pi_viewer_pi_viewer_component__WEBPACK_IMPORTED_MODULE_9__["PiViewerComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _subcomponents_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1 class=\"display-1\">\n        About\n      </h1>\n      <hr>\n    </div>\n\n    <div class=\"col-12 mt-3\">\n      Tuvo LLC has consulted for the <b> National Institutes of Health (NIH) Central Utility Plant </b> in Bethesda,\n      Maryland\n      for several years, providing software solutions tailored to the campus's needs.\n    </div>\n\n    <div class=\"col-12 mt-3\">\n      <h5>\n        Sample applications include:\n      </h5>\n\n      <ul>\n        <li>\n          Daily data reporting tools for upper management.\n        </li>\n        <li>\n          Mobile-friendly data entry forms for operators.\n        </li>\n        <li>\n          Interactive visualization websites for engineers and data scientists.\n        </li>\n\n      </ul>\n    </div>\n    <div class=\"col-12\">\n      <h5>\n        This work has been presented in several international conferences, including:\n      </h5>\n    </div>\n    <div class=\"col-12\">\n      <ul>\n        <li>\n          <a href=\"https://www.districtenergy.org/idea2019/viewdocument/informatics-driven-central-plant-op\">\n            CampusEnergy2019 Conference\n          </a>\n        </li>\n        <li>\n          <a\n            href=\"https://www.osisoft.com/Presentations/Data-Management-Platform-improves-NIH-Central-Utility-Plant-Operational-Excellence/\">\n            OSISoft PI World 2018,</a> where NIH <a\n            href=\" https://cdn.osisoft.com/osi/presentations/2018-uc-san-francisco/UC18NA-D1KY06-OSIsoft-Green-Customer-Awards-Presented-by-OSIsoft-CAB-Members.pdf\">\n            won an award for Digital Sustainability Improvements.\n          </a>\n        </li>\n        <li>\n          <a\n            href=\"https://cdn.osisoft.com/osi/presentations/2017-uc-san-francisco/UC1702NAFW07_NIH_DGuan_NIHTransformsCentralUtilitiesPlant.pdf?_ga=2.188821101.734440238.1554057014-1860839908.1549928373\">\n            OSISoft PI World 2017\n          </a>\n        </li>\n\n      </ul>\n      <hr>\n    </div>\n    <div class=\"col-12\">\n      <h5>\n        Technologies Used\n      </h5>\n    </div>\n    <div class=\"col-12\">\n      We handle application development from the database level all the way up to the user interface. We favor open\n      source software whenever possible. Some technologies we use regularly, including to build this webpage, are:\n    </div>\n\n\n    <ng-container *ngFor=\"let el of techArr; let i = index;\">\n      <div *ngIf=\"i%4==0\" class=\"col-12 tech-spacer\">\n\n      </div>\n\n      <div class=\"col-2\">\n        <div class=\"text-center\">\n          <h5>\n            {{el.name}}\n          </h5>\n        </div>\n        <div>\n          <img [src]=\"el.imgSrc\" class=\"imgfill\">\n        </div>\n      </div>\n      <div class=\"col-1\">\n      </div>\n      <div *ngIf=\"i%4==3\" class=\"col-12\">\n        <hr>\n      </div>\n    </ng-container>\n\n\n    <div class=\"col-12\">\n\n      Please <a routerLink=\"../contact\"> contact us</a> for more information or references.\n\n    </div>\n    <div class=\"col-12 tech-spacer\">\n\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.techArr = [
            {
                name: 'OSISoft PI',
                imgSrc: './assets/img/osipi.jpeg'
            },
            {
                name: 'IBM Maximo',
                imgSrc: './assets/img/ibm-maximo.png'
            },
            {
                name: 'Angular',
                imgSrc: './assets/img/angular.svg'
            },
            {
                name: 'Docker',
                imgSrc: './assets/img/docker.svg'
            },
            {
                name: 'Nginx',
                imgSrc: './assets/img/Nginx_logo.svg'
            },
            {
                name: 'Python',
                imgSrc: './assets/img/Python.svg'
            },
            {
                name: 'Mongo',
                imgSrc: './assets/img/mongodb.svg'
            },
            {
                name: 'Golang',
                imgSrc: './assets/img/Go_Logo.svg'
            },
        ];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h1 class=\"display-1\">\r\n        Contact\r\n      </h1>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12 mt-3\">\r\n    Tuvo LLC is owned and operated by Brendan John.\r\n  </div>\r\n  <div class=\"col-12 mt-3\">\r\n    <a href=\"mailto:brendan@tuvo.io\"> Email</a>\r\n  </div>\r\n  <div class=\"col-12 mt-3\">\r\n    <a href=\"https://www.linkedin.com/in/brendan-john-05a11446\"> Linkedin</a>\r\n  </div>\r\n  <div class=\"col-12 mt-3\">\r\n    <a href=\"https://github.com/bajohn/\"> Github</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"jumbotron-spacer\">\r\n\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <h1 class=\"display-1\">\r\n        Tuvo LLC\r\n      </h1>\r\n\r\n      <app-carousel>\r\n\r\n      </app-carousel>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <h1 class=\"display-4\">\r\n        Bring your data to life\r\n      </h1>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <h5>\r\n        We offer custom software development and solutions to fit your needs, particularly in data processing, analysis,\r\n        and visualization.\r\n      </h5>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      We specialize in realtime operational environments where engineers and operators need accurate, reliable data,\r\n      such as\r\n      in energy, logistics, and heavy industry. Please <a routerLink=\"../contact\"> contact us</a> to find out how we can\r\n      collaborate on your project.\r\n    </div>\r\n\r\n    <!-- <h3>\r\n      Design software that fits your real-world needs\r\n    </h3> -->\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-4 center-text\">\r\n\r\n      <div>\r\n        <fa name=\"connectdevelop\" class=\"icon-sized\"></fa>\r\n      </div>\r\n      <div>\r\n        <h5>\r\n          Interconnect complex systems\r\n        </h5>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-4 center-text\">\r\n      <fa name=\"pie-chart\" class=\"icon-sized\"></fa>\r\n      <div>\r\n        <h5>\r\n          View data efficiently\r\n        </h5>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-4 center-text\">\r\n\r\n\r\n      <fa name=\"tasks\" class=\"icon-sized\"></fa>\r\n      <div>\r\n        <h5>\r\n          Enable operational improvements\r\n        </h5>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-12 tech-spacer\">\r\n\r\n  </div>\r\n  <div class=\"col-12 tech-spacer\">\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/pi-viewer/pi-viewer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/pi-viewer/pi-viewer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BpLXZpZXdlci9waS12aWV3ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/pi-viewer/pi-viewer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/pi-viewer/pi-viewer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h1 class=\"display-1\">\r\n        PI Viewer\r\n      </h1>\r\n      <hr>\r\n    </div>\r\n    <div class=\"col-12 mt-3\">\r\n      PI Viewer is the name of a cloud-hosted data visualization tool being developed by Tuvo from the ground up. The\r\n      tool\r\n      will allow a user to view their organization's data stored in the OSISoft PI System in a mobile-friendly\r\n      web view, at no cost to the user. It will also allow the user to push data back into the PI system, such as\r\n      daily operational data and more.\r\n    </div>\r\n    <div class=\"col-12 mt-3\">\r\n      The tool is in the early stages of development and can be found below. As the project is open source,\r\n      please <a routerLink=\"../contact\"> contact us</a> if you would like to collaborate or provide\r\n      feedback.\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <a href=\"https://github.com/bajohn/pi-viewer\"> Link to PI Viewer Github</a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/pi-viewer/pi-viewer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/pi-viewer/pi-viewer.component.ts ***!
  \********************************************************/
/*! exports provided: PiViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiViewerComponent", function() { return PiViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PiViewerComponent = /** @class */ (function () {
    function PiViewerComponent() {
    }
    PiViewerComponent.prototype.ngOnInit = function () {
    };
    PiViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pi-viewer',
            template: __webpack_require__(/*! ./pi-viewer.component.html */ "./src/app/pages/pi-viewer/pi-viewer.component.html"),
            styles: [__webpack_require__(/*! ./pi-viewer.component.css */ "./src/app/pages/pi-viewer/pi-viewer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PiViewerComponent);
    return PiViewerComponent;
}());



/***/ }),

/***/ "./src/app/pages/samples/samples.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/samples/samples.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NhbXBsZXMvc2FtcGxlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/samples/samples.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/samples/samples.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  samples works!\r\n</p>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/samples/samples.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/samples/samples.component.ts ***!
  \****************************************************/
/*! exports provided: SamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplesComponent", function() { return SamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SamplesComponent = /** @class */ (function () {
    function SamplesComponent() {
    }
    SamplesComponent.prototype.ngOnInit = function () {
    };
    SamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-samples',
            template: __webpack_require__(/*! ./samples.component.html */ "./src/app/pages/samples/samples.component.html"),
            styles: [__webpack_require__(/*! ./samples.component.css */ "./src/app/pages/samples/samples.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SamplesComponent);
    return SamplesComponent;
}());



/***/ }),

/***/ "./src/app/subcomponents/carousel/carousel.component.css":
/*!***************************************************************!*\
  !*** ./src/app/subcomponents/carousel/carousel.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmNvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/subcomponents/carousel/carousel.component.html":
/*!****************************************************************!*\
  !*** ./src/app/subcomponents/carousel/carousel.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <!-- <h1 class=\"display-4 ml-3\">\r\n        Software\r\n      </h1> -->\r\n    <div class=\"hide-overflow\">\r\n        <div class=\"carousel-container\" [ngStyle]=\"containerStyle\">\r\n            <div *ngFor=\"let el of imgList\" class=\"carousel-mover\" [ngStyle]=\"getStyle()\">\r\n              <img [src]=\"el.imgSrc\" class=\"imgfill\">\r\n            </div>\r\n          </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/subcomponents/carousel/carousel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/subcomponents/carousel/carousel.component.ts ***!
  \**************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        // aspect ratio of all these images must match.
        // We used 1.77 width/height based on coolingtowers.jpg
        this.imgList = [
            {
                imgSrc: '/assets/img/coolingtowers.jpg',
            },
            {
                imgSrc: '/assets/img/refinery_adj.jpg',
            },
            {
                imgSrc: '/assets/img/steelmill_adj.jpg',
            },
            {
                imgSrc: '/assets/img/windturbines_adj.jpg',
            }
        ];
        this.intervalMs = 5000;
        this.whRatio = 1.77;
        this.idxShown = 0;
        this.offset = 0;
        this.movingForward = true;
        this.containerStyle = {
            display: 'flex',
            width: (this.imgList.length * 100) + '%',
            'max-height': (100 / this.whRatio) + 'vw' // fixes IE becoming way too tall.
        };
    }
    CarouselComponent.prototype.ngOnInit = function () {
        setInterval(this.incrementImgs.bind(this), this.intervalMs);
    };
    CarouselComponent.prototype.getStyle = function () {
        var ret = {
            left: this.offset + '%',
            width: (100 / this.imgList.length) + '%'
        };
        return ret;
    };
    CarouselComponent.prototype.incrementImgs = function () {
        var imgCnt = this.imgList.length;
        if (this.idxShown === imgCnt - 1) {
            this.movingForward = false;
        }
        else if (this.idxShown === 0) {
            this.movingForward = true;
        }
        var incrementer = this.movingForward ? -1 : 1;
        this.idxShown += -incrementer;
        this.offset = this.offset + incrementer * 100 / (imgCnt);
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/subcomponents/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/subcomponents/carousel/carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bjohn454\Documents\repos\tuvo-homepage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.248730c9b9aeeea8f0fe.js.map