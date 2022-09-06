"use strict";
(self["webpackChunkmweb"] = self["webpackChunkmweb"] || []).push([["src_app_views_pages_modals_data-mes_data-mes_module_ts"],{

/***/ 6452:
/*!************************************************************************!*\
  !*** ./src/app/views/pages/modals/data-mes/data-mes-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataMesPageRoutingModule": () => (/* binding */ DataMesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _data_mes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-mes.page */ 2826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _data_mes_page__WEBPACK_IMPORTED_MODULE_0__.DataMesPage
    }
];
class DataMesPageRoutingModule {
}
DataMesPageRoutingModule.ɵfac = function DataMesPageRoutingModule_Factory(t) { return new (t || DataMesPageRoutingModule)(); };
DataMesPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DataMesPageRoutingModule });
DataMesPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DataMesPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6344:
/*!****************************************************************!*\
  !*** ./src/app/views/pages/modals/data-mes/data-mes.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataMesPageModule": () => (/* binding */ DataMesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _data_mes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-mes-routing.module */ 6452);
/* harmony import */ var _data_mes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-mes.page */ 2826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class DataMesPageModule {
}
DataMesPageModule.ɵfac = function DataMesPageModule_Factory(t) { return new (t || DataMesPageModule)(); };
DataMesPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DataMesPageModule });
DataMesPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _data_mes_routing_module__WEBPACK_IMPORTED_MODULE_0__.DataMesPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DataMesPageModule, { declarations: [_data_mes_page__WEBPACK_IMPORTED_MODULE_1__.DataMesPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _data_mes_routing_module__WEBPACK_IMPORTED_MODULE_0__.DataMesPageRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_modals_data-mes_data-mes_module_ts.js.map