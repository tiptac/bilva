(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 6259:
/*!***************************************************!*\
  !*** ./apps/client/src/app/app-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 965);



const routes = [{
  path: '',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_client_src_app_landing_bilva-landing_bilva-landing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./landing/bilva-landing/bilva-landing.module */ 5262)).then(m => m.BilvaLandingModule)
}, {
  path: 'ownit',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_client_src_app_landing_own-it-landing_own-it-landing_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./landing/own-it-landing/own-it-landing.component */ 397)).then(m => m.OwnItLandingComponent)
}, {
  path: 'thebigday',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_client_src_app_landing_the-big-day-landing_the-big-day-landing_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./landing/the-big-day-landing/the-big-day-landing.component */ 1431)).then(m => m.TheBigDayLandingComponent)
}, {
  path: 'page-not-found',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_client_src_app_common_page-not-found_page-not-found_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./common/page-not-found/page-not-found.component */ 7903)).then(m => m.PageNotFoundComponent)
}, {
  path: 'under-construction',
  loadComponent: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./common/coming-soon/coming-soon.component */ 961)).then(m => m.ComingSoonComponent)
}, {
  path: '**',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_client_src_app_common_page-not-found_page-not-found_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./common/page-not-found/page-not-found.component */ 7903)).then(m => m.PageNotFoundComponent)
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 9107:
/*!**********************************************!*\
  !*** ./apps/client/src/app/app.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _common_services_screen_size_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/services/screen-size-service */ 1224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 965);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 9441);





class AppComponent {
  constructor(menuCtrl, screenSizeService) {
    this.menuCtrl = menuCtrl;
    this.screenSizeService = screenSizeService;
    this.appPages = [{
      title: 'HOME',
      url: ['/']
    }, {
      title: 'ABOUT US',
      url: ['/about']
    }, {
      title: 'BUSINESS VERTICALS',
      child: [{
        title: 'Realty Solutions',
        url: ['/business', 'own-it']
      }, {
        title: 'Event Management',
        url: ['/business', 'the-big-day']
      }]
    }, {
      title: 'CAREER',
      url: ['/career']
    }, {
      title: 'CONTACT US',
      url: ['/contact']
    }];
    this.currentYear = new Date().getFullYear();
  }
  onResize() {
    this.screenSizeService.onResize();
  }
  handleRefresh(event) {
    window.location.reload();
    event.target.complete();
  }
  closeMenu() {
    this.menuCtrl.close();
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_services_screen_size_service__WEBPACK_IMPORTED_MODULE_0__.ScreenSizeService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["bilva"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-router-outlet");
        }
      },
      dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 50:
/*!*******************************************!*\
  !*** ./apps/client/src/app/app.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4931);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 877);
/* harmony import */ var _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations/async */ 667);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4473);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 7221);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 9441);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 6259);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 9107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 965);









class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouteReuseStrategy,
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicRouteStrategy
      }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.provideHttpClient)(), (0,_angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_6__.provideAnimationsAsync)()],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot({
        mode: 'md',
        rippleEffect: true
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 6012:
/*!******************************************************!*\
  !*** ./apps/client/src/common/models/screen-size.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenSize: () => (/* binding */ ScreenSize),
/* harmony export */   screenSizeBreakpoints: () => (/* binding */ screenSizeBreakpoints)
/* harmony export */ });
var ScreenSize;
(function (ScreenSize) {
  ScreenSize["sm"] = "sm";
  ScreenSize["md"] = "md";
  ScreenSize["lg"] = "lg";
  ScreenSize["xl"] = "xl";
})(ScreenSize || (ScreenSize = {}));
const screenSizeBreakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

/***/ }),

/***/ 1224:
/*!****************************************************************!*\
  !*** ./apps/client/src/common/services/screen-size-service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenSizeService: () => (/* binding */ ScreenSizeService)
/* harmony export */ });
/* harmony import */ var _models_screen_size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/screen-size */ 6012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 965);


class ScreenSizeService {
  constructor() {
    this.innerWidth = window.innerWidth;
  }
  onResize() {
    this.innerWidth = window.innerWidth;
  }
  get screenSize() {
    if (this.innerWidth <= _models_screen_size__WEBPACK_IMPORTED_MODULE_0__.screenSizeBreakpoints.sm) {
      return _models_screen_size__WEBPACK_IMPORTED_MODULE_0__.ScreenSize.sm;
    } else if (this.innerWidth <= _models_screen_size__WEBPACK_IMPORTED_MODULE_0__.screenSizeBreakpoints.md) {
      return _models_screen_size__WEBPACK_IMPORTED_MODULE_0__.ScreenSize.md;
    } else if (this.innerWidth <= _models_screen_size__WEBPACK_IMPORTED_MODULE_0__.screenSizeBreakpoints.lg) {
      return _models_screen_size__WEBPACK_IMPORTED_MODULE_0__.ScreenSize.lg;
    }
    return _models_screen_size__WEBPACK_IMPORTED_MODULE_0__.ScreenSize.xl;
  }
  get isSmall() {
    return this.screenSize === _models_screen_size__WEBPACK_IMPORTED_MODULE_0__.ScreenSize.sm;
  }
  get isMedium() {
    return this.screenSize === _models_screen_size__WEBPACK_IMPORTED_MODULE_0__.ScreenSize.md;
  }
  get isLarge() {
    return this.screenSize === _models_screen_size__WEBPACK_IMPORTED_MODULE_0__.ScreenSize.lg;
  }
  get isExtraLarge() {
    return this.screenSize === _models_screen_size__WEBPACK_IMPORTED_MODULE_0__.ScreenSize.xl;
  }
  static {
    this.ɵfac = function ScreenSizeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ScreenSizeService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ScreenSizeService,
      factory: ScreenSizeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5104:
/*!*********************************!*\
  !*** ./apps/client/src/main.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 877);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, {
  ngZoneEventCoalescing: true
}).catch(err => console.error(err));

/***/ }),

/***/ 3845:
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@ionic+core@7.8.6/node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		374,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		1429,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		2859,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		8633,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		2418,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		8711,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		8631,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		3445,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		3640,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		2895,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		8416,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4479,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6001,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		6641,
		"default-node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_data-bb424ba8_js",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		5646,
		"default-node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_data-bb424ba8_js",
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		7498,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6374,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9402,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		1041,
		"default-node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_form-controller-2-a194cf",
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		3188,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		493,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		761,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		2040,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		7248,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		1153,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		8202,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-picker-column-interna-65fc80"
	],
	"./ion-picker-internal.entry.js": [
		8429,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9420,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4690,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9063,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		4844,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		8652,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2111,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		9081,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		6091,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		2552,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		4477,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		6367,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		5084,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		8608,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		2979,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		2251,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		3550,
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		8191,
		"default-node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_form-controller-2-a194cf",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		62,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7417,
		"common",
		"node_modules_pnpm_ionic_core_7_8_6_node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 3845;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4376:
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@stencil+core@4.22.2/node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 4376;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5104)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map