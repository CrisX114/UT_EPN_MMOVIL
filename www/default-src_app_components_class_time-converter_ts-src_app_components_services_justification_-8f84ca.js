"use strict";
(self["webpackChunkmweb"] = self["webpackChunkmweb"] || []).push([["default-src_app_components_class_time-converter_ts-src_app_components_services_justification_-8f84ca"],{

/***/ 3635:
/*!****************************************************!*\
  !*** ./src/app/components/class/time-converter.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeConverter": () => (/* binding */ TimeConverter)
/* harmony export */ });
class TimeConverter {
    //Convierte fecha y hora de formato Timestamp a String
    //el idFecha indica si la funcion deve devolver:
    //0: hora y fecha
    //1: solo fecha
    //2: solo hora
    timeConverter(UNIX_timestamp, idFecha) {
        //var { seconds } = UNIX_timestamp;
        var a = new Date(UNIX_timestamp * 1000);
        var months = [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
        ];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = '0' + a.getMinutes();
        var sec = '0' + a.getSeconds();
        if (idFecha == 1) {
            var time = date + '/' + month + '/' + year;
            return time;
        }
        if (idFecha == 2) {
            var time = hour + ':' + min.substr(-2) + ':' + sec.substr(-2);
            return time;
        }
        var time = date +
            '/' +
            month +
            '/' +
            year +
            ' ' +
            hour +
            ':' +
            min.substr(-2) +
            ':' +
            sec.substr(-2);
        return time;
    }
    //función para sumar 2 horas (hora1+hora2)
    addHoras(hora1, hora2) {
        const hora1S = hora1.split(':');
        const hora2S = hora2.split(':');
        let segundoR = parseInt(hora1S[2]) + parseInt(hora2S[2]);
        let horaR = parseInt(hora1S[0]) + parseInt(hora2S[0]);
        let minutoR = parseInt(hora1S[1]) + parseInt(hora2S[1]);
        while (segundoR >= 60) {
            minutoR++;
            segundoR = segundoR - 60;
        }
        while (minutoR >= 60) {
            horaR++;
            minutoR = minutoR - 60;
        }
        return (horaR +
            ':' +
            ('0' + minutoR).substr(-2) +
            ':' +
            ('0' + segundoR).substr(-2));
    }
    //función para restar 2 horas (hora1-hora2)
    subtractHoras(hora1, hora2) {
        const hora1S = hora1.split(':');
        const hora2S = hora2.split(':');
        let horaR = parseInt(hora1S[0]) - parseInt(hora2S[0]);
        let segundoR = parseInt(hora1S[2]) - parseInt(hora2S[2]);
        let minutoR = parseInt(hora1S[1]) - parseInt(hora2S[1]);
        while (segundoR < 0) {
            minutoR--;
            segundoR = 60 + segundoR;
        }
        while (minutoR < 0) {
            horaR--;
            minutoR = 60 + minutoR;
        }
        return (horaR +
            ':' +
            ('0' + minutoR).substr(-2) +
            ':' +
            ('0' + segundoR).substr(-2));
    }
    compareH(hora1, hora2) {
        const hora1S = hora1.split(':');
        const hora2S = hora2.split(':');
        const horas1 = parseInt(hora1S[0]) * 10000 +
            parseInt(hora1S[1]) * 100 +
            parseInt(hora1S[2]);
        const horas2 = parseInt(hora2S[0]) * 10000 +
            parseInt(hora2S[1]) * 100 +
            parseInt(hora2S[2]);
        if (horas1 > horas2) {
            return 1;
        }
        if (horas1 < horas2) {
            return -1;
        }
        if (horas1 == horas2) {
            return 0;
        }
    }
    convertString(time) {
        return String(time).substr(-6, 2) + ':' + String(time).substr(-4, 2);
    }
    convertNumber(time) {
        return parseInt(String(time).substr(-5, 2) + String(time).substr(-2) + '00');
    }
}


/***/ }),

/***/ 260:
/*!*****************************************************!*\
  !*** ./src/app/components/services/data.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ 3789);




class DataService {
    //Constructor: se declara el servicio AngularFirestore para acceder a
    //las caracteristicas de Cloud Firestore
    constructor(afs) {
        this.afs = afs;
        //observable en donde estarán los datos obtenidos por CloudFirestore
        //Se almacenarán todos los registros de usuarios (para rol Administrador)
        this.data$ = null;
        //observable en donde estarán los datos obtenidos por CloudFirestore
        //Se almacenarán los registros del usuario autorizado (para rol Empleado)
        this.dataById$ = null;
        //se define el nombre de la colección que se leerá en el Cloud Firestore
        //se aplica un filtro de orden por fecha
        this.datasCollection = this.afs.collection('registros', (ref) => ref.orderBy('hora', 'desc').limit(300));
    }
    //funcion que editará el campo justificaciones del registro cuando se crea una justificación
    onEditDataJust(edit, idJust) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const id = edit.id;
                const data = Object.assign({ id }, edit);
                if (!edit.justificaciones) {
                    edit.justificaciones = [];
                }
                edit.justificaciones.push(idJust);
                const result = this.datasCollection.doc(id).set(data);
                const result2 = this.datasCollection.doc(id).update({
                    justificaciones: edit.justificaciones,
                });
                resolve(result);
            }
            catch (error) {
                reject(error.message);
            }
        }));
    }
    //funcion que editará el campo horasExtra y HorasTrabajadas del registro cuando se acepte
    // o se rechace una justificación
    onUpdateDataJust(edit) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const id = edit.id;
                const data = Object.assign({ id }, edit);
                const result = this.datasCollection.doc(edit.id).update(data);
                resolve(result);
            }
            catch (error) {
                reject(error.message);
            }
        }));
    }
    //función para obtener todos los campos de la colección "registros"
    getDatas() {
        //se obtiene el observable de data
        this.data$ = this.datasCollection
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((actions) => actions.map((a) => a.payload.doc.data())));
    }
    //Se obtienen los documentos que coincidan con el argumento "userId" de la colección "registros"
    getDataId(userId) {
        this.datasCollectionById = this.afs.collection('registros', (ref) => {
            return ref
                .orderBy('hora', 'desc')
                .where('idUsuario', '==', userId)
                .limit(300);
        });
        //Se obtienen todos los usuarios
        this.dataById$ = this.datasCollectionById
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((actions) => actions.map((a) => a.payload.doc.data())));
    }
    getData(Id) {
        this.datasCollectionById = this.afs.collection('registros', (ref) => {
            return ref.orderBy('hora', 'desc').where('id', '==', Id).limit(300);
        });
        //Se obtienen todos los usuarios
        this.dataById$ = this.datasCollectionById
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((actions) => actions.map((a) => a.payload.doc.data())));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5987:
/*!**************************************************************!*\
  !*** ./src/app/components/services/justification.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JustificationService": () => (/* binding */ JustificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 3789);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 260);





class JustificationService {
    //Constructor: se declara el servicio AngularFirestore para acceder a las características de
    //Cloud Firestore y el servicio Data para actualizar la informacion de registros
    constructor(afs, dataSvc) {
        this.afs = afs;
        this.dataSvc = dataSvc;
        this.justificationsCollection = this.afs.collection('justificaciones', (ref) => ref.orderBy('fecha', 'desc'));
    }
    //función para editar el campo "horaJustificada"
    editJustification(just, justId, state, horaE) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const id = justId;
                const status = state;
                just.status = state;
                const data = Object.assign(Object.assign({ id }, just), { horaJustificada: horaE + ':00' });
                const result = this.justificationsCollection.doc(id).set(data);
                resolve(result);
            }
            catch (error) {
                reject(error.message);
            }
        }));
    }
    //función para crear una nueva justificación.
    onSaveJustification(justificacion, dataEdit) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const id = this.afs.createId() + justificacion.tipo;
                const { usuario } = dataEdit;
                const dataJustific = Object.assign(Object.assign({ id }, justificacion), { usuario });
                const result = this.justificationsCollection.doc(id).set(dataJustific);
                this.dataSvc.onEditDataJust(dataEdit, id);
                resolve(result);
            }
            catch (error) {
                reject(error.message);
            }
        }));
    }
    //en el caso de que se de click en el botón "Aceptar" su status será a ACEPTADO
    onAccept(item, horaE, flag) {
        try {
            const justificationId = (item === null || item === void 0 ? void 0 : item.id) || null;
            this.editJustification(item, justificationId, 'ACEPTADO', horaE);
            if (horaE != '') {
                if (flag) {
                    const data = {
                        id: item.idRegistro,
                        horasExtra: horaE + ':00',
                    };
                    this.dataSvc.onUpdateDataJust(data);
                }
            }
        }
        catch (error) { }
    }
    //en el caso de que se de click en el botón "Rechazar" su status será a RECHAZADO
    onReject(item) {
        try {
            if (item.tipo == 'FALTA') {
                const data = {
                    id: item.idRegistro,
                    horasTrabajadas: '00:00:00',
                };
                this.dataSvc.onUpdateDataJust(data);
            }
            if (item.tipo == 'HORAS_EXTRA') {
                const data = {
                    id: item.idRegistro,
                    horasExtra: '00:00:00',
                };
                this.dataSvc.onUpdateDataJust(data);
            }
            const justificationId = (item === null || item === void 0 ? void 0 : item.id) || null;
            this.editJustification(item, justificationId, 'RECHAZADO', '0:00');
        }
        catch (error) { }
    }
    //función para obtener todos los campos de la colección "justificaciones"
    getJustifications() {
        //se define el nombre de la colección que se leerá en el Cloud Firestore
        this.justification$ = this.justificationsCollection
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((actions) => actions.map((a) => a.payload.doc.data())));
    }
    //Se obtienen los documentos que coincidan con el argumento "userId"
    getJustId(userId) {
        this.justificationsCollectionById = this.afs.collection('justificaciones', (ref) => {
            return ref.where('idUsuario', '==', userId).orderBy('fecha', 'desc');
        });
        //Se obtienen todos los usuarios
        this.justificationById$ = this.justificationsCollectionById
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((actions) => actions.map((a) => a.payload.doc.data())));
    }
}
JustificationService.ɵfac = function JustificationService_Factory(t) { return new (t || JustificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
JustificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: JustificationService, factory: JustificationService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_components_class_time-converter_ts-src_app_components_services_justification_-8f84ca.js.map