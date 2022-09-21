"use strict";
(self["webpackChunkmweb"] = self["webpackChunkmweb"] || []).push([["src_app_views_data_data_module_ts"],{

/***/ 7945:
/*!***************************************************!*\
  !*** ./src/app/views/data/data-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataRoutingModule": () => (/* binding */ DataRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.component */ 7295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _data_component__WEBPACK_IMPORTED_MODULE_0__.DataComponent }];
class DataRoutingModule {
}
DataRoutingModule.ɵfac = function DataRoutingModule_Factory(t) { return new (t || DataRoutingModule)(); };
DataRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DataRoutingModule });
DataRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DataRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7295:
/*!**********************************************!*\
  !*** ./src/app/views/data/data.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataComponent": () => (/* binding */ DataComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _components_class_time_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/class/time-converter */ 3635);
/* harmony import */ var _pages_modals_data_mes_data_mes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/modals/data-mes/data-mes.page */ 2826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/services/user.service */ 8692);
/* harmony import */ var _components_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/services/data.service */ 260);
/* harmony import */ var _components_services_justification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/services/justification.service */ 5987);
/* harmony import */ var src_app_components_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/services/auth.service */ 7414);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var src_app_components_services_preference_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/services/preference.service */ 7177);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _components_pipe_pagination_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/pipe/pagination.pipe */ 6151);
/* harmony import */ var src_app_components_pipe_filter_status_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/pipe/filter-status.pipe */ 7060);
/* harmony import */ var src_app_components_pipe_filter_date_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/pipe/filter-date.pipe */ 9409);
/* harmony import */ var src_app_components_pipe_filter_user_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/pipe/filter-user.pipe */ 4595);

















function DataComponent_div_0_div_4_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DataComponent_div_0_div_4_input_1_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return ctx_r6.filter1 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r5.filter1);
} }
function DataComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DataComponent_div_0_div_4_input_1_Template, 1, 1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", true);
} }
function DataComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DataComponent_div_0_div_12_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r8.filter3 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "Asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r2.filter3);
} }
function DataComponent_div_0_div_23_tr_13_ng_container_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " , ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} }
function DataComponent_div_0_div_23_tr_13_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, DataComponent_div_0_div_23_tr_13_ng_container_1_ng_container_6_ng_container_2_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const asistencia_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", asistencia_r15, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", i_r16 != item_r12.asistencia.length - 1);
} }
function DataComponent_div_0_div_23_tr_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, DataComponent_div_0_div_23_tr_13_ng_container_1_ng_container_6_Template, 3, 2, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DataComponent_div_0_div_23_tr_13_ng_container_1_Template_ion_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return ctx_r19.seeJustification(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "M\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r12.usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r13.timeConverter(item_r12.hora[0]["seconds"], 1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", item_r12.asistencia);
} }
function DataComponent_div_0_div_23_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DataComponent_div_0_div_23_tr_13_ng_container_1_Template, 10, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r12.usuario == ctx_r10.currentUser || ctx_r10.isAdmin);
} }
function DataComponent_div_0_div_23_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DataComponent_div_0_div_23_ng_container_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return ctx_r23.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Anteriores ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DataComponent_div_0_div_23_ng_container_18_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return ctx_r25.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "pagination");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "filterStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "filterDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "filterUser");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, " Siguiente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r11.page == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](4, 2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](6, 8, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](7, 11, ctx_r11.data, ctx_r11.filter1), ctx_r11.filter2), ctx_r11.filter3), ctx_r11.page).length < ctx_r11.numPerPage);
} }
function DataComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "Asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, DataComponent_div_0_div_23_tr_13_Template, 2, 1, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "pagination");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "filterStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "filterDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "filterUser");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, DataComponent_div_0_div_23_ng_container_18_Template, 9, 14, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](19, "pagination");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "filterStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](21, "filterDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](22, "filterUser");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](14, 2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](15, 5, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](16, 8, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](17, 11, ctx_r3.data, ctx_r3.filter1), ctx_r3.filter2), ctx_r3.filter3), ctx_r3.page));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](19, 14, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](20, 17, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](21, 20, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](22, 23, ctx_r3.data, ctx_r3.filter1), ctx_r3.filter2), ctx_r3.filter3), ctx_r3.page));
} }
function DataComponent_div_0_div_24_tr_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DataComponent_div_0_div_24_tr_11_ng_container_1_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r32); const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return ctx_r30.generatePageDataMes(item_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "M\u00E1s");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r28.usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r28.fecha);
} }
function DataComponent_div_0_div_24_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DataComponent_div_0_div_24_tr_11_ng_container_1_Template, 8, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r28.idUsuario == ctx_r26.currentUserId || ctx_r26.isAdmin);
} }
function DataComponent_div_0_div_24_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DataComponent_div_0_div_24_ng_container_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return ctx_r34.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, " Anteriores ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DataComponent_div_0_div_24_ng_container_15_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return ctx_r36.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "pagination");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "filterDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "filterUser");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Siguiente ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r27.page == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](4, 2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](6, 8, ctx_r27.dataMes, ctx_r27.filter1), ctx_r27.filter2), ctx_r27.page).length < ctx_r27.numPerPage);
} }
function DataComponent_div_0_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " Acciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, DataComponent_div_0_div_24_tr_11_Template, 2, 1, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "pagination");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](13, "filterDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "filterUser");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, DataComponent_div_0_div_24_ng_container_15_Template, 8, 11, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "pagination");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "filterDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "filterUser");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](12, 2, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](13, 5, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](14, 8, ctx_r4.dataMes, ctx_r4.filter1), ctx_r4.filter2), ctx_r4.page));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](16, 11, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](17, 14, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](18, 17, ctx_r4.data, ctx_r4.filter1), ctx_r4.filter2), ctx_r4.page));
} }
function DataComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, DataComponent_div_0_div_4_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DataComponent_div_0_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r37.filter2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, DataComponent_div_0_div_12_Template, 5, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DataComponent_div_0_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r39.selected = $event; })("click", function DataComponent_div_0_Template_input_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r40.set(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Registro de Asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function DataComponent_div_0_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r41.selected = $event; })("click", function DataComponent_div_0_Template_input_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r42.set(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "Resumen HorasExtra/HorasTrabajadas Por Mes");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](23, DataComponent_div_0_div_23_Template, 23, 26, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, DataComponent_div_0_div_24_Template, 19, 20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r0.filter2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.selected != "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r0.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r0.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.selected == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.selected == "2");
} }
class DataComponent extends _components_class_time_converter__WEBPACK_IMPORTED_MODULE_0__.TimeConverter {
    constructor(router, userSvc, dataSvc, justSvc, authSvc, modalControler, prefSvc) {
        super();
        this.router = router;
        this.userSvc = userSvc;
        this.dataSvc = dataSvc;
        this.justSvc = justSvc;
        this.authSvc = authSvc;
        this.modalControler = modalControler;
        this.prefSvc = prefSvc;
        //variable para almacenar el filtro 1: filtro de nombre
        this.filter1 = '';
        //variable para almacenar el filtro 2: filtro de fecha y estado de asistencia
        this.filter2 = '';
        //variable para almacenar el filtro 3: filtro de estado de asistencia
        this.filter3 = '';
        //variable para almacenar el value del Radiobutton que permite seleccionar:
        //1: resumen de asistencia, 2:resumen completo(todos los datos del registro)
        //y 3: resumen por mes.
        this.selected = '';
        this.numPerPage = 10;
        this.date = this.timeConverter((Date.now() / 1000).toFixed(), 1);
        //users$ = this.userSvc.user$;
        //arreglo de objetos para almacenar los datos por mes que se van a mostrar
        this.dataMes = [];
        //arreglo de objetos tipo Data (registros) que se almacenarán de forma temporal
        //para asociarlos con su respectivo usuario
        //se almacenarán los registros de los usuarios
        this.data = [];
        //se almacenarán los usuarios registrados en el sistema
        this.user = [];
        //se almacenarán las justificaciones generadas
        this.just = [];
        //variable para controlar si es Admin o Empleado(restringe la visualización de registros)
        this.isAdmin = false;
        //variable para controlar si es Admin o Empleado(restringe la visualización de registros)
        this.isLogged = false;
        //variable que recupera el usuario autenticado desde el servicio authService
        this.currentUser = null;
        this.currentUserId = null;
        //objeto para almacenar los registros que se desea enviar a otro componente
        this.navigationExtras = { state: { value: null } };
        this.page = 0;
        //se inicializa la variable "selected" en 1 ya que se desplegará la primera ventana
        this.selected = '1';
        //crea una llamada a la función getAdmin();
        this.getDataAdmin();
    }
    ngOnDestroy() {
        this.data$.unsubscribe();
        this.user$.unsubscribe();
        this.just$.unsubscribe();
    }
    //Función que se ejecutará al inicir el componente
    ngOnInit() { }
    //función que determinará el rol del usuario autenticado
    //y se guardará en la variable isAdmin
    getDataAdmin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            //Se llama al documento preferencias para obtener los valores de las tolerancias de entrada y salida
            this.pref$ = this.prefSvc.preference$.subscribe((data) => {
                this.pref = data;
            });
            //se obtiene el usuario autenticado mediante una suscripción al observable del servicio authService
            this.authSvc.currentUser$.subscribe((data) => {
                if (data.toString()) {
                    //asignación del usuario autenticado a "currentUser".
                    this.currentUser = data[0].name;
                    this.currentUserId = data[0].uid;
                    //comprobación del rol del usuario autenticado mediante la funcion isAdmin
                    //definida en la clase RoleValidator
                    this.isAdmin = this.authSvc.isAdmin(data);
                    this.isLogged = true;
                }
                //se obtiene una copia del observable de los registros a un objeto Data[]
                if (this.isAdmin) {
                    //se obtiene una copia del observable de los usuarios a un objeto User[]
                    this.userSvc.getUsers();
                    this.dataSvc.getDatas();
                    this.justSvc.getJustifications();
                    this.user$ = this.userSvc.user$.subscribe((data) => {
                        this.user = data;
                    });
                    //se obtiene una copia del observable de las justificaciones a un objeto Justification[]
                    this.just$ = this.justSvc.justification$.subscribe((data) => {
                        this.just = data;
                    });
                    this.data$ = this.dataSvc.data$.subscribe((data) => {
                        this.data = data;
                        this.set();
                    });
                }
                else {
                    this.dataSvc.getDataId(this.currentUserId);
                    this.justSvc.getJustId(this.currentUserId);
                    this.userSvc.getUserId(this.currentUserId);
                    this.user$ = this.userSvc.userById$.subscribe((data) => (this.user = data));
                    this.just$ = this.justSvc.justificationById$.subscribe((data) => (this.just = data));
                    this.data$ = this.dataSvc.dataById$.subscribe((data) => {
                        this.data = data;
                        this.set();
                    });
                }
            });
        });
    }
    //función que se ejecuta al dar click en el botón "Justificar"
    createJustification(item) {
        //toma el valor del item en el cual se dió click
        this.navigationExtras.state.value = item;
        //se redirige al componente "new-j" con el argumento que contiene el registro
        this.router.navigate(['new-j'], this.navigationExtras);
    }
    //función que se ejecuta al dar click en el botón "Ver Justificación"
    seeJustification(item) {
        //toma el valor del item en el cual se dió click
        this.navigationExtras.state.value = item;
        //se redirige al componente "details-j" con el argumento que contiene el registro
        this.router.navigate(['details-j'], this.navigationExtras);
    }
    generatePageDataMes(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalControler.create({
                component: _pages_modals_data_mes_data_mes_page__WEBPACK_IMPORTED_MODULE_1__.DataMesPage,
                componentProps: {
                    dataMes: item,
                },
            });
            return yield modal.present();
        });
    }
    setHorasExtra() {
        this.data.forEach((item) => {
            if (!item.horasExtra) {
                item.horasExtra = '00:00:00';
                if (item.hora[1] && item.horario != '00:00') {
                    if (this.compareH(item.horasTrabajadas, this.addHoras(item.horario + ':00', '00:' + this.pref.toleranciaOut + ':00')) > 0) {
                        item.horasExtra = this.subtractHoras(item.horasTrabajadas, item.horario + ':00');
                    }
                    if (this.compareH(item.horasTrabajadas, this.subtractHoras(item.horario + ':00', '00:' + this.pref.toleranciaIn + ':00')) < 0 &&
                        item.asistencia[0] != 'DIA EXTRA') {
                        item.asistencia.push('SALIDA TEMPRANA');
                    }
                }
            }
        });
    }
    setHorasTrabajadas() {
        var _a;
        const tiempoActual = (Date.now() / 1000).toFixed();
        (_a = this.data) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
            if (this.timeConverter(tiempoActual, 1) ==
                this.timeConverter(item.hora[0]['seconds'], 1) &&
                item.horasTrabajadas == '00:00:00' &&
                item.asistencia[0] != 'FALTA') {
                var seconds = parseInt(tiempoActual) - item.hora[0]['seconds'] + 18000;
                item.horasTrabajadas = this.timeConverter(seconds, 2);
            }
            if (this.timeConverter(tiempoActual, 1) !=
                this.timeConverter(item.hora[0]['seconds'], 1) &&
                item.horasTrabajadas == '00:00:00' &&
                item.asistencia[0] != 'FALTA' &&
                item.hora.length % 2 != 0) {
                item.asistencia[1] = 'SIN SALIDA';
            }
        });
    }
    setDataMes() {
        var _a;
        try {
            if (!this.dataMes || this.dataMes.length == 0) {
                let temp;
                var existe;
                this.dataMes = [];
                let idUsuarios = [];
                let fechaGuardando;
                (_a = this.data) === null || _a === void 0 ? void 0 : _a.forEach((data) => {
                    var _a;
                    temp = {
                        fecha: '',
                        idUsuario: '',
                        usuario: '',
                        data: [],
                        horasTrabajadas: '00:00:00',
                        horasExtra: '00:00:00',
                        horasTotalesTrabajo: '00:00:00',
                        horasDiaExtra: '00:00:00',
                        horasExtraJustificadas: '00:00:00',
                        numAtrasos: 0,
                        numFaltas: 0,
                        numSalidasTempranas: 0,
                        numSinSalidas: 0,
                        numDiaExtra: 0,
                    };
                    existe = false;
                    const fechaD = this.timeConverter(data.hora[0]['seconds'], 1).split('/');
                    const fechadata = fechaD[1] + '/' + fechaD[2];
                    if (fechaGuardando != fechadata) {
                        fechaGuardando = fechadata;
                        idUsuarios = [];
                    }
                    idUsuarios === null || idUsuarios === void 0 ? void 0 : idUsuarios.forEach((user) => {
                        if (user == data.idUsuario) {
                            existe = true;
                        }
                    });
                    if (!existe) {
                        idUsuarios.push(data.idUsuario);
                        temp.usuario = data.usuario;
                        temp.fecha = fechaGuardando;
                        temp.idUsuario = data.idUsuario;
                        this.dataMes.push(temp);
                    }
                    (_a = this.dataMes) === null || _a === void 0 ? void 0 : _a.forEach((datames) => {
                        var _a, _b, _c;
                        if (datames.fecha == fechaGuardando &&
                            datames.idUsuario == data.idUsuario) {
                            datames.data.push(data);
                            if (data.horario != '00:00') {
                                //cambio
                                if (((_a = data.asistencia) === null || _a === void 0 ? void 0 : _a.indexOf('ATRASO')) >= 0) {
                                    datames.numAtrasos++;
                                }
                                if (data.asistencia.indexOf('SIN SALIDA') >= 0) {
                                    datames.numSinSalidas++;
                                }
                                if (data.asistencia.indexOf('FALTA') >= 0) {
                                    datames.numFaltas++;
                                }
                                if (data.asistencia[0] != 'DIA EXTRA') {
                                    if (this.compareH(data.horasTrabajadas, data.horario + ':00') >=
                                        0 ||
                                        this.compareH(this.addHoras('00:' + this.pref.toleranciaIn + ':00', data.horasTrabajadas), data.horario + ':00') >= 0) {
                                        datames.horasTrabajadas = this.addHoras(datames.horasTrabajadas, data.horario + ':00');
                                        if (this.compareH(data.horasTrabajadas, data.horario + ':00') >= 0) {
                                            datames.horasExtra = this.addHoras(datames.horasExtra, this.subtractHoras(data.horasTrabajadas, data.horario + ':00'));
                                        }
                                    }
                                    else {
                                        if (data.asistencia.indexOf('FALTA') < 0 &&
                                            data.horasTrabajadas != '00:00:00') {
                                            const tiempoActual = (Date.now() / 1000).toFixed();
                                            if (this.timeConverter(tiempoActual, 1) !=
                                                this.timeConverter(data.hora[0]['seconds'], 1)) {
                                                datames.numSalidasTempranas++;
                                            }
                                            if (data.justificaciones) {
                                                (_b = data.justificaciones) === null || _b === void 0 ? void 0 : _b.forEach((justificacion) => {
                                                    const justific = this.just.filter((just) => just.id == justificacion);
                                                    if (justific[0].tipo == 'SALIDA_TEMPR' &&
                                                        justific[0].status == 'ACEPTADO' &&
                                                        justific[0].tipo) {
                                                        datames.numSalidasTempranas -= 1;
                                                        datames.horasTrabajadas = this.addHoras(datames.horasTrabajadas, justific[0].horaJustificada).toString();
                                                    }
                                                    else {
                                                        datames.horasTrabajadas = this.addHoras(datames.horasTrabajadas, data.horasTrabajadas).toString();
                                                    }
                                                });
                                            }
                                            else {
                                                datames.horasTrabajadas = this.addHoras(datames.horasTrabajadas, data.horasTrabajadas);
                                            }
                                        }
                                    }
                                }
                                else {
                                    datames.numDiaExtra++;
                                }
                            }
                            else {
                                datames.horasTrabajadas = this.addHoras(datames.horasTrabajadas, data.horasTrabajadas);
                            }
                            datames.horasTotalesTrabajo = this.addHoras(datames.horasTotalesTrabajo, data.horario + ':00');
                            if (data.asistencia[0] != 'DIA EXTRA') {
                            }
                            //gestion de justificaciones
                            (_c = data.justificaciones) === null || _c === void 0 ? void 0 : _c.forEach((justificacion) => {
                                const justific = this.just.filter((just) => just.id == justificacion);
                                if (justific.length > 0) {
                                    if (justific[0].tipo == 'DIA_EXTRA' &&
                                        justific[0].status == 'ACEPTADO') {
                                        datames.horasDiaExtra = this.addHoras(datames.horasDiaExtra, justific[0].horaJustificada).toString();
                                    }
                                    if (justific[0].tipo == 'ATRASO' &&
                                        justific[0].status == 'ACEPTADO') {
                                        datames.numAtrasos -= 1;
                                    }
                                    if (justific[0].tipo == 'HORAS_EXTRA' &&
                                        justific[0].status == 'ACEPTADO') {
                                        datames.horasExtraJustificadas = this.addHoras(datames.horasExtraJustificadas, justific[0].horaJustificada).toString();
                                    }
                                    if (justific[0].tipo == 'FALTA' &&
                                        justific[0].status == 'ACEPTADO') {
                                        datames.horasTrabajadas = this.addHoras(datames.horasTrabajadas, justific[0].horaJustificada).toString();
                                        datames.numFaltas -= 1;
                                    }
                                    if (justific[0].tipo == 'SIN_SALIDA' &&
                                        justific[0].status == 'ACEPTADO') {
                                        datames.horasTrabajadas = this.addHoras(datames.horasTrabajadas, justific[0].horaJustificada).toString();
                                        datames.numSinSalidas -= 1;
                                    }
                                }
                            });
                        }
                    });
                });
            }
        }
        catch (error) {
            console.log(error);
        }
        return this.dataMes;
    }
    set() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.setHorasTrabajadas();
            this.setHorasExtra();
            this.dataMes = this.setDataMes();
            this.page = 0;
        });
    }
    nextPage() {
        this.page += this.numPerPage;
    }
    prevPage() {
        if (this.page > 0)
            this.page -= this.numPerPage;
    }
}
DataComponent.ɵfac = function DataComponent_Factory(t) { return new (t || DataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_components_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_components_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_components_services_justification_service__WEBPACK_IMPORTED_MODULE_4__.JustificationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_components_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_components_services_preference_service__WEBPACK_IMPORTED_MODULE_6__.PreferenceService)); };
DataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: DataComponent, selectors: [["app-data"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "row"], [1, "col"], [1, "form-group"], ["class", "form-floating m-1 d-print-none", 4, "ngIf"], [1, "input-group"], [1, "form-floating", "m-1", "d-print-none"], ["type", "text", "id", "floatingInput", "name", "filter2", "placeholder", "Buscar por Fecha...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingInput"], ["class", "col", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["type", "radio", "id", "inlineRadio1", "value", "1", 1, "form-check-input", 3, "ngModel", "ngModelChange", "click"], ["for", "inlineRadio1", 1, "form-check-label"], ["type", "radio", "id", "inlineRadio3", "value", "2", 1, "form-check-input", 3, "ngModel", "ngModelChange", "click"], ["for", "inlineRadio3", 1, "form-check-label"], [1, "col-xs-16"], ["class", "table-responsive", 4, "ngIf"], ["type", "text", "class", "form-control", "name", "filter1", "id", "floatingInput", "placeholder", "Buscar por Nombre...", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "name", "filter1", "id", "floatingInput", "placeholder", "Buscar por Nombre...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "floatingInput", "name", "filter3", "placeholder", "Buscar por estado Asistencia...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table-responsive"], [1, "table", "table-hover", "table-bordered"], ["scope", "col", 1, "text-center"], ["scope", "col", 1, "text-center", "d-print-none"], ["class", "table-info", 4, "ngFor", "ngForOf"], [1, "table-info"], ["scope", "row"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["role", "group", 1, "bnt-group", "text-center", "d-print-none"], ["color", "secondary", "size", "small", 3, "click"], [1, "btn", "btn-primary", "d-print-none", "m-2", 3, "disabled", "click"], ["scope", "col", 1, "col-3", "text-center", "d-print-none"], ["scope", "row", 1, "text-center"]], template: function DataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, DataComponent_div_0_Template, 25, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isLogged && ctx.data && ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RadioControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf], pipes: [_components_pipe_pagination_pipe__WEBPACK_IMPORTED_MODULE_7__.PaginationPipe, src_app_components_pipe_filter_status_pipe__WEBPACK_IMPORTED_MODULE_8__.FilterStatusPipe, src_app_components_pipe_filter_date_pipe__WEBPACK_IMPORTED_MODULE_9__.FilterDatePipe, src_app_components_pipe_filter_user_pipe__WEBPACK_IMPORTED_MODULE_10__.FilterUserPipe], styles: ["table[_ngcontent-%COMP%] {\r\n  table-layout: fixed;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJkYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4686:
/*!*******************************************!*\
  !*** ./src/app/views/data/data.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataModule": () => (/* binding */ DataModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _data_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-routing.module */ 7945);
/* harmony import */ var _data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.component */ 7295);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _components_pipe_pipes_module_pipes_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pipe/pipes-module/pipes-module.module */ 8520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






class DataModule {
}
DataModule.ɵfac = function DataModule_Factory(t) { return new (t || DataModule)(); };
DataModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DataModule });
DataModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _data_routing_module__WEBPACK_IMPORTED_MODULE_0__.DataRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _components_pipe_pipes_module_pipes_module_module__WEBPACK_IMPORTED_MODULE_2__.PipesModuleModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DataModule, { declarations: [_data_component__WEBPACK_IMPORTED_MODULE_1__.DataComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _data_routing_module__WEBPACK_IMPORTED_MODULE_0__.DataRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _components_pipe_pipes_module_pipes_module_module__WEBPACK_IMPORTED_MODULE_2__.PipesModuleModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_data_data_module_ts.js.map