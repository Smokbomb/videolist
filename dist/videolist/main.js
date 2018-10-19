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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-list/video-list.component */ "./src/app/video-list/video-list.component.ts");
/* harmony import */ var _video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-detail/video-detail.component */ "./src/app/video-detail/video-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        redirectTo: '/videoList',
        pathMatch: 'full'
    },
    {
        path: 'videoList', component: _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_2__["VideoListComponent"],
    },
    {
        path: 'videoDetail/:index', component: _video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_3__["VideoDetailComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n</div>\n\n<router-outlet ></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'videolist';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-list/video-list.component */ "./src/app/video-list/video-list.component.ts");
/* harmony import */ var _video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-detail/video-detail.component */ "./src/app/video-detail/video-detail.component.ts");
/* harmony import */ var _service_video_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/video.service */ "./src/app/service/video.service.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/esm5/mat-video.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var config = { url: 'localhost:3000', options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _video_list_video_list_component__WEBPACK_IMPORTED_MODULE_5__["VideoListComponent"],
                _video_detail_video_detail_component__WEBPACK_IMPORTED_MODULE_6__["VideoDetailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                mat_video__WEBPACK_IMPORTED_MODULE_9__["MatVideoModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__["SocketIoModule"].forRoot(config),
            ],
            providers: [_service_video_service__WEBPACK_IMPORTED_MODULE_7__["VideoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/service/video.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/video.service.ts ***!
  \******************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideoService = /** @class */ (function () {
    function VideoService(router, http, socket) {
        this.router = router;
        this.http = http;
        this.socket = socket;
    }
    VideoService.prototype.getVideo = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + '/video').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    VideoService.prototype.getVideoDetail = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + '/video/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.json(); }));
    };
    VideoService.prototype.addView = function (body) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + '/video/', body);
    };
    VideoService.prototype.addLike = function (body) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiurl + '/video/', body);
    };
    VideoService.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
    VideoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"]])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/app/video-detail/video-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/video-detail/video-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n   \r\n    max-width: 800px;\r\n    min-width: 400px;\r\n    display: inline-table;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }"

/***/ }),

/***/ "./src/app/video-detail/video-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/video-detail/video-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n<div style=\"\" >\n\n\n    <div *ngIf=\"videoDetail[0]\"  style=\"\n    padding: 5%;\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    box-sizing: border-box;\n    justify-content: center;\n\" >\n        <mat-card class=\"example-card\">\n            <mat-card-header>\n             \n              <mat-card-title>{{videoDetail[0].title}}</mat-card-title>\n              <mat-card-subtitle>{{videoDetail[0].subtitle}}</mat-card-subtitle>\n            </mat-card-header>\n             <mat-video src=\"{{videoDetail[0].sources[0]}}\"  [autoplay]=\"true\" [preload]=\"true\" [fullscreen]=\"true\" [download]=\"false\" color=\"accent\" spinner=\"spin\" poster=\"{{videoDetail[0].thumb}}\"></mat-video>\n            <mat-card-content>\n                <span style=\"display: flex;align-items:center\">\n                  <img src=\"../../assets/icon/view.png\" width=\"32px\" > &nbsp;&nbsp;  {{view}} \n                  <img src=\"../../assets/icon/like.png\" width=\"48px\" style=\"cursor: pointer;\" (click)=\"addLike();\" > {{like}} \n                </span>\n                \n              <p>\n                  {{videoDetail[0].description}}\n              </p>\n\n              \n            </mat-card-content>\n           \n          </mat-card>\n      \n     </div>\n    \n    \n\n</div>\n  \n"

/***/ }),

/***/ "./src/app/video-detail/video-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/video-detail/video-detail.component.ts ***!
  \********************************************************/
/*! exports provided: VideoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetailComponent", function() { return VideoDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/video.service */ "./src/app/service/video.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoDetailComponent = /** @class */ (function () {
    function VideoDetailComponent(route, router, videoService, socket) {
        this.route = route;
        this.router = router;
        this.videoService = videoService;
        this.socket = socket;
        this.index = '';
        this.videoDetail = '';
        this.view = 0;
        this.like = 0;
    }
    VideoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.index = params['index'];
        });
        this.videoService.addView({ id: this.index, scort: '1', view: '1' }).subscribe(function (data) {
            _this.videoService.getVideoDetail(_this.index).subscribe(function (datas) {
                _this.videoDetail = datas;
                _this.view = datas[0].view;
                _this.like = datas[0].like;
                console.log(_this.videoDetail[0]);
            });
        });
    };
    VideoDetailComponent.prototype.addLike = function () {
        var _this = this;
        this.videoService.addLike({ id: this.index, scort: '1', like: '1' }).subscribe(function (e) {
            _this.videoService.getVideoDetail(_this.index).subscribe(function (data) {
                _this.like = data[0].like;
            });
        });
    };
    VideoDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-detail',
            template: __webpack_require__(/*! ./video-detail.component.html */ "./src/app/video-detail/video-detail.component.html"),
            styles: [__webpack_require__(/*! ./video-detail.component.css */ "./src/app/video-detail/video-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]])
    ], VideoDetailComponent);
    return VideoDetailComponent;
}());



/***/ }),

/***/ "./src/app/video-list/video-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/video-list/video-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    font-family: 'Open Sans', Arial;\r\n  }\r\n  ul {\r\n\r\n    padding: 0 1%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    box-sizing: border-box;\r\n    justify-content: center;\r\n  }\r\n  ul li {\r\n    display: block;\r\n    position: relative;\r\n    overflow: hidden;\r\n    width: 340px;\r\n    margin: 8px 1%;\r\n    box-sizing: border-box;\r\n  }\r\n  ul li img {\r\n    width: 340px;\r\n  }\r\n  ul li span {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    background: rgba(0,0,0,0.7);\r\n    width: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    line-height: 0;\r\n    transition: all 0.5s ease;\r\n  }\r\n  ul li:hover span {\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 50% 0;\r\n  }\r\n  ul li h2 {\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    position: absolute;\r\n    top: 999px;\r\n    left: 0;\r\n    padding: 40% 2%;\r\n    text-align: center;\r\n    width: 96%;\r\n    transition: all 0.5s ease;\r\n  }\r\n  ul li:hover h2 {\r\n    top: 0;\r\n  }\r\n  ul li  {\r\n    cursor: pointer;\r\n    color: #fff;\r\n    text-decoration: none;\r\n  }\r\n  ul li.navigation div {\r\n    background: #ddd;\r\n    text-align: center;\r\n    padding: 39% 0;\r\n    font-size: 30px;\r\n  }\r\n  ul li.navigation .fa {\r\n    color: #aaa;\r\n    text-shadow: 1px 1px 1px #fff;\r\n  }\r\n  ul li.navigation a .fa {\r\n      color: #888;\r\n    transition: all 0.5s ease;\r\n  }\r\n  ul li.navigation a:hover .fa {\r\n    color: #78AB46;\r\n  }"

/***/ }),

/***/ "./src/app/video-list/video-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/video-list/video-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-grid-list cols=\"3\" rowHeight=\"2:1\">\n  <mat-grid-tile *ngFor=\"let item of videoList; let i = index\"  >\n      <figure>\n          <img src = \"{{item.thumb}}\">\n          <figcaption><span style=\"float:left\">{{item.title}}</span> <span style=\"float:right\"> View : {{item.view}}  Like :{{item.like}} </span></figcaption>\n      </figure>\n  </mat-grid-tile>\n</mat-grid-list> -->\n\n\n<div>\n    <ul>\n        \n        <li *ngFor=\"let item of videoList; let i = index \" >\n        <div [routerLink]=\"['/videoDetail/'+item.id]\" >\n            <img src=\"{{item.thumb}}\">\n            <span></span>\n            <h2>\n                {{item.title}} <br> View : {{item.view}}  Like :{{item.like}} \n            </h2>\n        </div>\n            \n   \n        </li>\n       \n      </ul>\t\n</div>\n  "

/***/ }),

/***/ "./src/app/video-list/video-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-list/video-list.component.ts ***!
  \****************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/video.service */ "./src/app/service/video.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoListComponent = /** @class */ (function () {
    function VideoListComponent(videoService, router, route) {
        this.videoService = videoService;
        this.router = router;
        this.route = route;
    }
    VideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.videoService.getVideo().subscribe(function (data) {
            _this.videoList = data.sort(function (obj1, obj2) {
                // Ascending: first age less than the previous
                return obj2.score - obj1.score;
            });
        });
    };
    VideoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-list',
            template: __webpack_require__(/*! ./video-list.component.html */ "./src/app/video-list/video-list.component.html"),
            styles: [__webpack_require__(/*! ./video-list.component.css */ "./src/app/video-list/video-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_video_service__WEBPACK_IMPORTED_MODULE_1__["VideoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VideoListComponent);
    return VideoListComponent;
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
    apiurl: 'http://localhost:3000',
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

module.exports = __webpack_require__(/*! C:\Users\VerBack-TobTab\Documents\server-nestjs\videolist\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map