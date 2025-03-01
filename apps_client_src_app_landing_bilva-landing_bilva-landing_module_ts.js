"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["apps_client_src_app_landing_bilva-landing_bilva-landing_module_ts"],{

/***/ 5135:
/*!***********************************************************************************!*\
  !*** ./apps/client/src/app/landing/bilva-landing/bilva-landing-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BilvaLandingRoutingModule: () => (/* binding */ BilvaLandingRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4473);
/* harmony import */ var _bilva_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bilva-landing.component */ 1663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 965);




const routes = [{
  path: '',
  component: _bilva_landing_component__WEBPACK_IMPORTED_MODULE_0__.BilvaLandingComponent,
  children: [{
    path: '',
    loadComponent: () => __webpack_require__.e(/*! import() */ "apps_client_src_app_landing_bilva-landing_home_home_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.component */ 3960)).then(m => m.HomeComponent)
  }, {
    path: 'business',
    children: [{
      path: 'realtysolution',
      children: [{
        path: 'ownit',
        loadComponent: () => __webpack_require__.e(/*! import() */ "apps_client_src_app_landing_bilva-landing_business-vertical_own-it_own-it_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./business-vertical/own-it/own-it.component */ 6798)).then(m => m.OwnItComponent)
      }]
    }, {
      path: 'eventmanagement',
      children: [{
        path: 'thebigday',
        loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("apps_client_src_app_landing_bilva-landing_business-vertical_the-big-day_the-big-day_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./business-vertical/the-big-day/the-big-day.component */ 2768)).then(m => m.TheBigDayComponent)
      }]
    }]
  }, {
    path: 'about',
    loadComponent: () => __webpack_require__.e(/*! import() */ "apps_client_src_app_landing_bilva-landing_about_about_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.component */ 7272)).then(m => m.AboutComponent)
  }, {
    path: 'contact',
    loadComponent: () => __webpack_require__.e(/*! import() */ "apps_client_src_app_landing_bilva-landing_contact_contact_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contact/contact.component */ 3936)).then(m => m.ContactComponent)
  }, {
    path: 'career',
    loadComponent: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../../common/coming-soon/coming-soon.component */ 961)).then(m => m.ComingSoonComponent)
  }]
}];
class BilvaLandingRoutingModule {
  static {
    this.ɵfac = function BilvaLandingRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BilvaLandingRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: BilvaLandingRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BilvaLandingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1663:
/*!******************************************************************************!*\
  !*** ./apps/client/src/app/landing/bilva-landing/bilva-landing.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BilvaLandingComponent: () => (/* binding */ BilvaLandingComponent)
/* harmony export */ });
/* harmony import */ var _common_services_screen_size_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/services/screen-size-service */ 1224);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.routes */ 7500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 965);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 9441);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4473);







function BilvaLandingComponent_For_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", page_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", page_r1.title, " ");
  }
}
function BilvaLandingComponent_For_7_Conditional_1_ng_template_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("button", true)("detail", false)("routerLinkActive", "active")("routerLink", child_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", child_r2.title, " ");
  }
}
function BilvaLandingComponent_For_7_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content")(1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](2, BilvaLandingComponent_For_7_Conditional_1_ng_template_3_For_3_Template, 2, 5, "ion-item", 25, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](page_r1.child);
  }
}
function BilvaLandingComponent_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-popover", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BilvaLandingComponent_For_7_Conditional_1_ng_template_3_Template, 4, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "md-" + page_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", page_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trigger", "md-" + page_r1.title)("dismissOnSelect", true);
  }
}
function BilvaLandingComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BilvaLandingComponent_For_7_Conditional_0_Template, 2, 3, "ion-button", 22)(1, BilvaLandingComponent_For_7_Conditional_1_Template, 4, 4);
  }
  if (rf & 2) {
    const page_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](page_r1.url ? 0 : 1);
  }
}
function BilvaLandingComponent_For_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BilvaLandingComponent_For_16_Conditional_0_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", page_r5.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", page_r5.title, " ");
  }
}
function BilvaLandingComponent_For_16_Conditional_1_ng_template_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BilvaLandingComponent_For_16_Conditional_1_ng_template_3_For_3_Template_ion_item_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.closeMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("button", true)("detail", false)("routerLinkActive", "active")("routerLink", child_r7.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", child_r7.title, " ");
  }
}
function BilvaLandingComponent_For_16_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content")(1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](2, BilvaLandingComponent_For_16_Conditional_1_ng_template_3_For_3_Template, 2, 5, "ion-item", 25, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](page_r5.child);
  }
}
function BilvaLandingComponent_For_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-popover", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BilvaLandingComponent_For_16_Conditional_1_ng_template_3_Template, 4, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "ios-" + page_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", page_r5.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trigger", "ios-" + page_r5.title)("dismissOnSelect", true);
  }
}
function BilvaLandingComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BilvaLandingComponent_For_16_Conditional_0_Template, 2, 3, "ion-item", 26)(1, BilvaLandingComponent_For_16_Conditional_1_Template, 4, 4);
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](page_r5.url ? 0 : 1);
  }
}
class BilvaLandingComponent {
  constructor(menuCtrl, screenSizeService) {
    this.menuCtrl = menuCtrl;
    this.screenSizeService = screenSizeService;
    this.appRoutes = _app_routes__WEBPACK_IMPORTED_MODULE_1__.appRoutes;
    this.appPages = [{
      title: 'HOME',
      url: _app_routes__WEBPACK_IMPORTED_MODULE_1__.appRoutes.bilva.home
    }, {
      title: 'ABOUT US',
      url: _app_routes__WEBPACK_IMPORTED_MODULE_1__.appRoutes.bilva.about
    }, {
      title: 'BUSINESS',
      child: [{
        title: 'Realty Solutions',
        url: _app_routes__WEBPACK_IMPORTED_MODULE_1__.appRoutes.bilva.business.ownIt
      }, {
        title: 'Event Management',
        url: _app_routes__WEBPACK_IMPORTED_MODULE_1__.appRoutes.bilva.business.theBigDay
      }]
    }, {
      title: 'CAREER',
      url: _app_routes__WEBPACK_IMPORTED_MODULE_1__.appRoutes.bilva.career
    }, {
      title: 'CONTACT',
      url: _app_routes__WEBPACK_IMPORTED_MODULE_1__.appRoutes.bilva.contact
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
    this.ɵfac = function BilvaLandingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BilvaLandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_common_services_screen_size_service__WEBPACK_IMPORTED_MODULE_0__.ScreenSizeService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: BilvaLandingComponent,
      selectors: [["bilva-bilva-landing"]],
      hostBindings: function BilvaLandingComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function BilvaLandingComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        }
      },
      decls: 47,
      vars: 5,
      consts: [["mode", "md"], ["mode", "md", 3, "routerLink"], ["alt", "The Bilva Group", "src", "assets/images/thebilvagroup-h-removebg-preview.png", "loading", "lazy", 1, "left", "logo"], ["slot", "end"], ["mode", "md", "auto-hide", "false", 1, "ion-hide-lg-up"], ["side", "end", "contentId", "main-content"], [1, "ion-padding"], ["id", "main-content", 1, "ion-padding"], ["slot", "fixed", 3, "ionRefresh"], [1, "ion-no-padding"], ["size", "12", 1, "left", 3, "sizeLg"], ["size", "12", 1, "ion-text-center", 3, "sizeLg"], ["href", "https://www.instagram.com/bilva_groups", "target", "_blank"], ["name", "logo-instagram"], ["name", "logo-twitter"], ["href", "tel:9503688842", "target", "_blank"], ["name", "call-outline"], ["href", "mailto:info.thebilvagroup@gmail.com", "target", "_blank"], ["name", "mail-outline"], ["href", "https://api.whatsapp.com/send?phone=919503688842", "target", "_blank"], ["name", "logo-whatsapp"], ["size", "12", 1, "ion-text-center", "copyright", 3, "sizeLg"], [1, "ion-hide-lg-down", 3, "routerLinkActive", "routerLink"], [1, "ion-hide-lg-down", 3, "id"], ["triggerAction", "hover", 3, "trigger", "dismissOnSelect"], [3, "button", "detail", "routerLinkActive", "routerLink"], [3, "routerLinkActive", "routerLink"], [3, "click", "routerLinkActive", "routerLink"], [3, "id"], [3, "click", "button", "detail", "routerLinkActive", "routerLink"]],
      template: function BilvaLandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-app")(1, "ion-header", 0)(2, "ion-toolbar")(3, "ion-title", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-buttons", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](6, BilvaLandingComponent_For_7_Template, 2, 1, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-menu-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-menu", 5)(10, "ion-header", 0)(11, "ion-toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-content", 6)(14, "ion-list");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](15, BilvaLandingComponent_For_16_Template, 2, 1, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIndex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-content", 7)(18, "ion-refresher", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionRefresh", function BilvaLandingComponent_Template_ion_refresher_ionRefresh_18_listener($event) {
            return ctx.handleRefresh($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "ion-refresher-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "ion-router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-footer")(22, "ion-toolbar")(23, "ion-grid", 9)(24, "ion-row");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-col", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-col", 11)(27, "ion-grid")(28, "ion-row")(29, "ion-col")(30, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "ion-icon", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ion-col")(33, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "ion-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-col")(36, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "ion-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-col")(39, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "ion-icon", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "ion-col")(42, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "ion-icon", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "ion-col", 21)(45, "ion-text");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", ctx.appRoutes.bilva.home);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.appPages);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.appPages);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sizeLg", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sizeLg", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sizeLg", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Copyright\u00A9 ", ctx.currentYear, " The Bilva Group. All Rights Reserved ");
        }
      },
      dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRouterOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive],
      styles: [".copyright[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\n.address[_ngcontent-%COMP%] {\n  font-size: smaller;\n  padding-left: 2em;\n}\n\naddress[_ngcontent-%COMP%] {\n  justify-content: left;\n}\n\nion-title[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nion-button.active[_ngcontent-%COMP%], \nion-item.active[_ngcontent-%COMP%] {\n  color: burlywood;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 200px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvY2xpZW50L3NyYy9hcHAvbGFuZGluZy9iaWx2YS1sYW5kaW5nL2JpbHZhLWxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTs7RUFFRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmFkZHJlc3Mge1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIHBhZGRpbmctbGVmdDogMmVtO1xufVxuXG5hZGRyZXNzIHtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuXG5pb24tdGl0bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlvbi1idXR0b24uYWN0aXZlLFxuaW9uLWl0ZW0uYWN0aXZlIHtcbiAgY29sb3I6IGJ1cmx5d29vZDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMjAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5262:
/*!***************************************************************************!*\
  !*** ./apps/client/src/app/landing/bilva-landing/bilva-landing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BilvaLandingModule: () => (/* binding */ BilvaLandingModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 9441);
/* harmony import */ var _bilva_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bilva-landing.component */ 1663);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3556);
/* harmony import */ var _bilva_landing_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bilva-landing-routing.module */ 5135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 965);





class BilvaLandingModule {
  static {
    this.ɵfac = function BilvaLandingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BilvaLandingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: BilvaLandingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _bilva_landing_routing_module__WEBPACK_IMPORTED_MODULE_1__.BilvaLandingRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BilvaLandingModule, {
    declarations: [_bilva_landing_component__WEBPACK_IMPORTED_MODULE_0__.BilvaLandingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _bilva_landing_routing_module__WEBPACK_IMPORTED_MODULE_1__.BilvaLandingRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=apps_client_src_app_landing_bilva-landing_bilva-landing_module_ts.js.map