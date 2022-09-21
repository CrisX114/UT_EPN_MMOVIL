"use strict";
(self["webpackChunkmweb"] = self["webpackChunkmweb"] || []).push([["src_app_views_details-j_details-j_module_ts"],{

/***/ 8469:
/*!*************************************************************!*\
  !*** ./src/app/views/details-j/details-j-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsJRoutingModule": () => (/* binding */ DetailsJRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _details_j_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-j.component */ 9825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [{ path: '', component: _details_j_component__WEBPACK_IMPORTED_MODULE_0__.DetailsJComponent }];
class DetailsJRoutingModule {
}
DetailsJRoutingModule.ɵfac = function DetailsJRoutingModule_Factory(t) { return new (t || DetailsJRoutingModule)(); };
DetailsJRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DetailsJRoutingModule });
DetailsJRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DetailsJRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9825:
/*!********************************************************!*\
  !*** ./src/app/views/details-j/details-j.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsJComponent": () => (/* binding */ DetailsJComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _components_class_time_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../components/class/time-converter */ 3635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _components_services_justification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/services/justification.service */ 5987);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _components_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/services/auth.service */ 7414);
/* harmony import */ var _components_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/services/data.service */ 260);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);










function DetailsJComponent_div_0_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Trabajo fuera del horario laboral (horas extra). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailsJComponent_div_0_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Salida temprana.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailsJComponent_div_0_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Atraso.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailsJComponent_div_0_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Falta.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailsJComponent_div_0_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No haber registrado su hora de salida.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailsJComponent_div_0_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Trabajar un d\u00EDa extra.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailsJComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Advertencia! Debe generar justificaci\u00F3n por: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DetailsJComponent_div_0_p_4_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DetailsJComponent_div_0_p_5_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DetailsJComponent_div_0_p_6_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DetailsJComponent_div_0_p_7_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DetailsJComponent_div_0_p_8_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DetailsJComponent_div_0_p_9_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.esHorasExtra);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.esSalidaTemprana);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.esAtraso);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.esFalta);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.sinSalida);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.diaExtra);
} }
function DetailsJComponent_div_1_li_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Hora de Entrada: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function DetailsJComponent_div_1_li_21_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Hora de Salida:");
} }
function DetailsJComponent_div_1_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailsJComponent_div_1_li_21_ng_container_1_Template, 2, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DetailsJComponent_div_1_li_21_ng_template_2_Template, 1, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r16 = ctx.index;
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-index", i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r16 % 2 == 0)("ngIfElse", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r12.timeConverter(ctx_r12.data.hora[i_r16]["seconds"], 2), " ");
} }
function DetailsJComponent_div_1_li_22_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("/ ", ctx_r20.data.horario, ":00");
} }
function DetailsJComponent_div_1_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Horas Trabajadas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DetailsJComponent_div_1_li_22_ng_container_4_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r13.data.horasTrabajadas, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.data.horario != "00:00");
} }
function DetailsJComponent_div_1_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Horas Extra: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r14.data.horasExtra);
} }
function DetailsJComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Detalles de Registro");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Usuario: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Fecha de Registro: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Asistencia: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Temperatura: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, DetailsJComponent_div_1_li_21_Template, 6, 4, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, DetailsJComponent_div_1_li_22_Template, 5, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, DetailsJComponent_div_1_li_23_Template, 4, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.data.usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.timeConverter(ctx_r1.data.hora[0]["seconds"], 1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.data.asistencia);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.data.temperatura);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.data.hora);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.data.horasTrabajadas);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.data.horasExtra != "00:00:00" && ctx_r1.data.horasExtra);
} }
function DetailsJComponent_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailsJComponent_div_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r22.goOnEditJustification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Justificar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailsJComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailsJComponent_div_2_button_1_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.currentUserId == ctx_r2.data.idUsuario);
} }
function DetailsJComponent_div_3_div_1_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Horas Extra Justificadas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.horaJustificada);
} }
function DetailsJComponent_div_3_div_1_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Horas Trabajadas Justificadas: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.horaJustificada);
} }
function DetailsJComponent_div_3_div_1_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Archivo de Justificaci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Ver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", item_r24.urlLink, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function DetailsJComponent_div_3_div_1_div_20_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailsJComponent_div_3_div_1_div_20_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7); return ctx_r35.onClick(_r4, item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Aceptar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailsJComponent_div_3_div_1_div_20_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailsJComponent_div_3_div_1_div_20_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r38.onReject(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Rechazar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailsJComponent_div_3_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailsJComponent_div_3_div_1_div_20_button_1_Template, 2, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DetailsJComponent_div_3_div_1_div_20_button_2_Template, 2, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r24.status != "ACEPTADO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r24.status != "RECHAZADO");
} }
function DetailsJComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Justificaci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Tipo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Motivo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, DetailsJComponent_div_3_div_1_li_17_Template, 4, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, DetailsJComponent_div_3_div_1_li_18_Template, 4, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, DetailsJComponent_div_3_div_1_li_19_Template, 4, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, DetailsJComponent_div_3_div_1_div_20_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.mensaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r24.tipo == "HORAS_EXTRA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r24.tipo != "HORAS_EXTRA" && item_r24.tipo != "ATRASO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r24.urlLink != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r25.isAdmin && item_r24.idUsuario != ctx_r25.currentUserId);
} }
function DetailsJComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailsJComponent_div_3_div_1_Template, 21, 7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r24.idRegistro == ctx_r3.data.id);
} }
function DetailsJComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailsJComponent_ng_template_6_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45); const modal_r43 = restoredCtx.$implicit; return modal_r43.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Ingresar la cantidad de tiempo a registrar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "HORAS REGISTRADAS:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DetailsJComponent_ng_template_6_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r46.tiempo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Hora de Entrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailsJComponent_ng_template_6_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r47.print(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " ACEPTAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "div", 37);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.mensaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.horaExtra);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r5.tiempo);
} }
class DetailsJComponent extends _components_class_time_converter__WEBPACK_IMPORTED_MODULE_0__.TimeConverter {
    constructor(router, justSvc, modal, authSvc, dataSvc) {
        var _a, _b;
        super();
        this.router = router;
        this.justSvc = justSvc;
        this.modal = modal;
        this.authSvc = authSvc;
        this.dataSvc = dataSvc;
        //variable que recupera el usuario autenticado desde el servicio authService
        this.currentUser = null;
        this.currentUserId = null;
        //objeto que contendrá el registro relacionado con la justificación
        this.data = null;
        //objeto que contendrá una copia de los datos del observable.
        this.just = [];
        //objeto obtendrá los argumentos enviados(justificación a visualizar)
        this.navigationExtras = {
            state: {
                value: null,
            },
        };
        this.diaExtra = false;
        this.esHorasExtra = false;
        this.esSalidaTemprana = false;
        this.esAtraso = false;
        this.esFalta = false;
        this.ruta = 'data';
        //obtiene los argumentos que se han enviado (desde el componente 'data')
        const navigation = this.router.getCurrentNavigation();
        this.data = (_b = (_a = navigation === null || navigation === void 0 ? void 0 : navigation.extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.value;
        //this.isAdmin = currentUser;
        if (!this.data.asistencia) {
            this.dataSvc.getData(this.data.idRegistro);
            this.data$ = this.dataSvc.dataById$.subscribe((data) => {
                this.data = data[0];
                this.ruta = 'justific';
            });
        }
        else {
            this.getTypeJustification();
            this.setJustification();
        }
        this.getAdmin();
        this.getData();
    }
    ngOnDestroy() {
        try {
            this.dataSvc.dataById$ = null;
            this.data$.unsubscribe();
            this.just$.unsubscribe();
        }
        catch (error) { }
    }
    getData() {
        this.justSvc.getJustId(this.data.idUsuario);
        this.just$ = this.justSvc.justificationById$.subscribe((data) => {
            this.just = data;
            this.getTypeJustification();
            this.setJustification();
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //verifica si contiene una justificación para visualizar detalles
            //caso contrario regresa a la vista de los "data".
            if (typeof this.data == 'undefined') {
                this.router.navigate([this.ruta]);
            }
            else {
            }
        });
    }
    //función que se ejecuta cuando se da click en "atrás"
    goBack() {
        this.router.navigate([this.ruta]);
    }
    goOnEditJustification() {
        //toma el valor del item en el cual se dió click
        this.navigationExtras.state.value = this.data;
        //se redirige al componente "new-j" con el argumento que contiene el registro
        this.router.navigate(['new-j'], this.navigationExtras);
    }
    onClick(contenido, item) {
        this.tipo = item.tipo;
        this.getTimeJustification(item);
        this.modal.open(contenido, { size: 'lg' });
        this.justification = item;
    }
    getTimeJustification(item) {
        if (item.tipo == 'FALTA') {
            this.mensaje = 'JUSTIFICACIÓN POR FALTA';
            this.tiempo = '00:00';
        }
        else if (item.tipo == 'SIN_SALIDA') {
            this.mensaje = 'JUSTIFICACIÓN POR NO GENERAR SALIDA';
            this.tiempo = '00:00';
        }
        else if (item.tipo == 'ATRASO') {
            this.mensaje = 'JUSTIFICACIÓN POR ATRASO';
            this.tiempo =
                ('0' + item.horaJustificada.split(':')[0]).substr(-2) +
                    ':' +
                    item.horaJustificada.split(':')[1];
        }
        else if (item.tipo == 'SALIDA_TEMPR') {
            this.mensaje = 'JUSTIFICACIÓN POR SALIDA TEMPRANA';
            this.tiempo =
                ('0' + item.horaJustificada.split(':')[0]).substr(-2) +
                    ':' +
                    item.horaJustificada.split(':')[1];
        }
        else if (item.tipo == 'HORAS_EXTRA') {
            this.mensaje = 'JUSTIFICACIÓN POR HORAS EXTRA';
            this.tiempo =
                ('0' + item.horaJustificada.split(':')[0]).substr(-2) +
                    ':' +
                    item.horaJustificada.split(':')[1];
        }
    }
    print(contenido) {
        this.onAccept(this.justification, this.tiempo, this.flag);
        this.modal.dismissAll(contenido);
    }
    //en el caso de que se de click en el botón "Aceptar"
    //su status cambiará a ACEPTADO
    onAccept(item, horaE, flag) {
        try {
            this.justSvc.onAccept(item, horaE, flag);
        }
        catch (error) { }
    }
    //en el caso de que se de click en el botón "Rechazar"
    //su status cambiará a RECHAZADO
    onReject(item) {
        try {
            this.justSvc.onReject(item);
        }
        catch (error) { }
    }
    getAdmin() {
        //se obtiene el usuario autenticado mediante una suscripción al observable del servicio authService
        this.authSvc.currentUser$.subscribe((data) => {
            //asignación del usuario autenticado a "currentUser".
            this.currentUser = data[0].name;
            this.currentUserId = data[0].uid;
            //comprobación del rol del usuario autenticado mediante la funcion isAdmin
            //definida en la clase RoleValidator
            this.isAdmin = this.authSvc.isAdmin(data);
        });
    }
    getTypeJustification() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.data.asistencia) {
                if (this.data.asistencia > 1) {
                    if (this.data.asistencia[2] == 'SALIDA TEMPRANA' ||
                        this.data.asistencia[1] == 'SALIDA TEMPRANA') {
                        this.esSalidaTemprana = true;
                    }
                }
                if (this.data.hora) {
                    if (this.data.asistencia[1] == 'SIN SALIDA') {
                        this.sinSalida = true;
                    }
                }
                if (this.data.asistencia[0] == 'FALTA') {
                    this.esFalta = true;
                }
                //se selecciona el value del Radiobutton por defecto en 2
                if (this.data.horasExtra != '00:00:00' && this.data.horasExtra) {
                    this.esHorasExtra = true;
                }
                if (this.data.asistencia[0] == 'ATRASO') {
                    this.esAtraso = true;
                }
                if (this.data.asistencia[0] == 'DIA EXTRA') {
                    this.diaExtra = true;
                }
            }
        });
    }
    setJustification() {
        if (this.data.justificaciones) {
            this.data.justificaciones.forEach((just) => {
                if (just.indexOf('DIA_EXTRA') > 0)
                    this.diaExtra = false;
                if (just.indexOf('SIN_SALIDA') > 0)
                    this.sinSalida = false;
                if (just.indexOf('FALTA') > 0)
                    this.esFalta = false;
                if (just.indexOf('ATRASO') > 0)
                    this.esAtraso = false;
                if (just.indexOf('SALIDA_TEMPR') > 0)
                    this.esSalidaTemprana = false;
                if (just.indexOf('HORAS_EXTRA') > 0)
                    this.esHorasExtra = false;
            });
        }
    }
}
DetailsJComponent.ɵfac = function DetailsJComponent_Factory(t) { return new (t || DetailsJComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_components_services_justification_service__WEBPACK_IMPORTED_MODULE_1__.JustificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_components_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_components_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService)); };
DetailsJComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DetailsJComponent, selectors: [["app-details-j"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 4, consts: [["class", "alert alert-dismissible alert-warning", 4, "ngIf"], ["class", "card mt-2", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-warning", "m-1", "d-print-none", 3, "click"], ["contenido", ""], [1, "alert", "alert-dismissible", "alert-warning"], ["type", "button", "data-bs-dismiss", "alert", 1, "btn-close"], [1, "alert-heading"], ["class", "mb-0", 4, "ngIf"], [1, "mb-0"], [1, "card", "mt-2"], [1, "card-header"], [1, "card-body"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "text-center"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["class", "list-group-item", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["horaRegistro", ""], ["type", "button", "class", "btn btn-outline-warning m-1 d-print-none", 3, "click", 4, "ngIf"], ["class", "list-group-item text-center", 4, "ngIf"], [1, "list-group-item", "text-center"], ["target", "_blank", 3, "href"], ["type", "button", "class", "btn btn-outline-warning m-1", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-warning", "m-1", 3, "click"], [1, "modal-header"], [1, "modal-tittle"], ["aria-label", "close", "type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "form-group"], [1, "form-group", "col-md-6", "form-floating"], ["type", "time", "id", "floatingInput", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "floatingInput"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "modal"]], template: function DetailsJComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DetailsJComponent_div_0_Template, 10, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DetailsJComponent_div_1_Template, 24, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DetailsJComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DetailsJComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DetailsJComponent_Template_button_click_4_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Atr\u00E1s\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DetailsJComponent_ng_template_6_Template, 21, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.esHorasExtra || ctx.esSalidaTemprana || ctx.esAtraso || ctx.esFalta || ctx.sinSalida);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.asistencia);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.esHorasExtra || ctx.esSalidaTemprana || ctx.esAtraso || ctx.esFalta || ctx.sinSalida || ctx.diaExtra);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.just);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLWouY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3673:
/*!*****************************************************!*\
  !*** ./src/app/views/details-j/details-j.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsJModule": () => (/* binding */ DetailsJModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _details_j_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-j-routing.module */ 8469);
/* harmony import */ var _details_j_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-j.component */ 9825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class DetailsJModule {
}
DetailsJModule.ɵfac = function DetailsJModule_Factory(t) { return new (t || DetailsJModule)(); };
DetailsJModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DetailsJModule });
DetailsJModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _details_j_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsJRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DetailsJModule, { declarations: [_details_j_component__WEBPACK_IMPORTED_MODULE_1__.DetailsJComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _details_j_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsJRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_details-j_details-j_module_ts.js.map