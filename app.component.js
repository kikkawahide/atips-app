"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var AppComponent = (function () {
    function AppComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.book = {
            title: 'AngularJSアプリケーションプログラミング',
            price: 3700
        };
        this.obj = {
            isbn: undefined,
            title: 'Angularライブラリ　活用レシピ',
            authors: ['山田賢浩', '掛谷奈美'],
            price: 1200,
            toString: function () { }
        };
        this.name = 'Ｗｅｂデリ - Spicy Tools, Delicious Sites.';
        this.msg = 'Hello world!!';
        this.data1 = '1234567890';
        //data = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
        this.a = 'a!!';
        this.b = 'b!!';
        this.c = 'c!!';
        this.len = 2;
        this.value = 123.5678;
        this.url = 'http://www.wings.msn.to/';
        this.msg2 = "<script>window.alert(\"\u5371\u967A\uFF01\");</script>\n          <p>\u3053\u3093\u306B\u3061\u306F\u3001\u4E16\u754C</p>\n          <a href=\"#\" onclick=\"alert('xxx')\">\u5371\u967A\u306A\u30EA\u30F3\u30AF</a>\n          <p></P>\n          <button>\u304A\u3063\u3059</button>\n          <font color=\"Red\">\u3053\u3093\u306B\u3061\u306F\u3001\u4E16\u754C</font>";
        this.msg3 = "<script>window.alert(\"\u5371\u967A\uFF01\");</script>\n          <button>OKNG</button>\n           ";
        // msgプロパティの内容に信頼済みマークを付与
        this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.msg2);
        this.safeMsg3 = sanitizer.bypassSecurityTrustHtml(this.msg3);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<p>{{msg}}</p>\n            <p>{{book.title}}</p>\n            <p>{{a}}{{b}}</p>\n            <table border=\"1\">\n            <tr><td [attr.colspan]=\"len\">1</td></tr>\n            <tr><td>2</td><td>3</td></tr>\n            <pre>{{ obj | json }}</pre>\n            <ul>\n              <li>\u5909\u63DB\u524D\uFF1A{{name}}</li>\n              <li>\u5C0F\u6587\u5B57\uFF1A{{name|lowercase}}</li>\n              <li>\u5927\u6587\u5B57\uFF1A{{name|uppercase}}</li>\n            </ul> \n            <ol>\n              <li>\u5143\u306E\u5024\uFF1A{{value|number}}</li>\n              <li>number(\u30C7\u30A3\u30D5\u30A9\u30EB\u30C8)\uFF1A{{value|number}}</li>\n              <li>number(\u6841\u6570\u6307\u5B9A)\uFF1A{{value|number:'5.1-2'}}</li>\n            </ol>  \n            <ol>\n              <li>{{ data1 | slice:4:7 }} </li>\n              <li>{{ data1 | slice:4}}</li>\n              <li>{{ data1 | slice:10}}</li>\n              <li>{{ data1 | slice:-3:-1}}</li>\n              <li>{{ data1 | slice:-3:-2}}</li>\n            </ol>  \n            <a [href]=\"url\">\u30B5\u30DD\u30FC\u30C8\u30B5\u30A4\u30C8\u3078</a>\n            <p>{{c}}{{b}}</p>\n            <a bind-href=\"url\">\u30B5\u30DD\u30FC\u30C8\u30B5\u30A4\u30C8\u3078</a>\n            <p>{{a}}{{c}}</p>\n            <a href=\"{{url}}\">\u30B5\u30DD\u30FC\u30C8\u30B5\u30A4\u30C8\u3078</a>\n            <button>OK</button>\n            <p>-------------------------------------- </p>\n            \n            <p>{{msg2}}</p>\n            <p [innerHtml]=\"msg2\"></p>\n            <p>-------------------------------------- </p>\n            <p [innerHtml]=\"safeMsg\"></p>\n            <p>{{msg3}}</p>\n            <p [innerHtml]=\"msg3\"></p>\n            <p [innerHtml]=\"safeMsg3\"></p>\n            <p>-------------------------------------- </p>\n            \n            <p>-------------------------------------- </p>\n            <p>{{book?.title}}</p>"
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map