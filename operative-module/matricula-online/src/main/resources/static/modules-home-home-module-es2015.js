(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/feed/feed.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/feed/feed.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-3\">\r\n    <div>\r\n        <span class=\"title-module\" style=\"font-size: 22px;\">\r\n            <i class=\"mdi mdi-hand mr-1\"></i><b>Bienvenido</b>,\r\n            <span>Duvan Saenz Falcón</span>\r\n        </span>\r\n        <hr />\r\n    </div>\r\n\r\n    <div class=\"my-3 p-3 bg-white rounded box-shadow\">\r\n        <h6 class=\"border-bottom border-gray pb-2 mb-0\">Últimas actualizaciones</h6>\r\n        <div class=\"media text-muted pt-3\">\r\n          <img data-src=\"holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1\" alt=\"\" class=\"mr-2 rounded\">\r\n          <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n            <strong class=\"d-block text-gray-dark\">Solicitar habilitación de curso</strong>\r\n            Ahora puedes realizar la solicitud de apertura de algún curso que no se encuentre disponible en la programación de cursos.\r\n          </p>\r\n        </div>\r\n        <div class=\"media text-muted pt-3\">\r\n          <img data-src=\"holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1\" alt=\"\" class=\"mr-2 rounded\">\r\n          <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n            <strong class=\"d-block text-gray-dark\">Matricula Online</strong>\r\n            Matricula Online disponible desde el 31 de enero de 2020.\r\n          </p>\r\n        </div>\r\n        <div class=\"media text-muted pt-3\">\r\n          <img data-src=\"holder.js/32x32?theme=thumb&bg=6f42c1&fg=6f42c1&size=1\" alt=\"\" class=\"mr-2 rounded\">\r\n          <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n            <strong class=\"d-block text-gray-dark\">Programación de cursos</strong>\r\n            Cursos disponibles del Ciclo Febrero 2020.\r\n          </p>\r\n        </div>\r\n        <small class=\"d-block text-right mt-3\">\r\n          <a href=\"#\">Más noticias</a>\r\n        </small>\r\n      </div>\r\n</div>");

/***/ }),

/***/ "./src/app/modules/home/feed/feed.component.css":
/*!******************************************************!*\
  !*** ./src/app/modules/home/feed/feed.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9mZWVkL2ZlZWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/home/feed/feed.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/feed/feed.component.ts ***!
  \*****************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeedComponent = class FeedComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/feed/feed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed.component.css */ "./src/app/modules/home/feed/feed.component.css")).default]
    })
], FeedComponent);



/***/ }),

/***/ "./src/app/modules/home/home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/modules/home/feed/feed.component.ts");




const routes = [
    {
        path: '',
        component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_3__["FeedComponent"],
    },
    {
        path: '**',
        redirectTo: ''
    },
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/modules/home/feed/feed.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/home/home-routing.module.ts");





let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_feed_feed_component__WEBPACK_IMPORTED_MODULE_3__["FeedComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"]
        ]
    })
], HomeModule);



/***/ })

}]);
//# sourceMappingURL=modules-home-home-module-es2015.js.map