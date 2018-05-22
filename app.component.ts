import { Component } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'my-app',
  template:  `<p>{{msg}}</p>
            <p>{{book.title}}</p>
            <p>{{a}}{{b}}</p>
            <table border="1">
            <tr><td [attr.colspan]="len">1</td></tr>
            <tr><td>2</td><td>3</td></tr>
            <pre>{{ obj | json }}</pre>
            <ul>
              <li>変換前：{{name}}</li>
              <li>小文字：{{name|lowercase}}</li>
              <li>大文字：{{name|uppercase}}</li>
            </ul> 
            <ol>
              <li>元の値：{{value|number}}</li>
              <li>number(ディフォルト)：{{value|number}}</li>
              <li>number(桁数指定)：{{value|number:'5.1-2'}}</li>
            </ol>  
            <ol>
              <li>{{ data1 | slice:4:7 }} </li>
              <li>{{ data1 | slice:4}}</li>
              <li>{{ data1 | slice:10}}</li>
              <li>{{ data1 | slice:-3:-1}}</li>
              <li>{{ data1 | slice:-3:-2}}</li>
            </ol>  
            <a [href]="url">サポートサイトへ</a>
            <p>{{c}}{{b}}</p>
            <a bind-href="url">サポートサイトへ</a>
            <p>{{a}}{{c}}</p>
            <a href="{{url}}">サポートサイトへ</a>
            <button>OK</button>
            <p>-------------------------------------- </p>
            
            <p>{{msg2}}</p>
            <p [innerHtml]="msg2"></p>
            <p>-------------------------------------- </p>
            <p [innerHtml]="safeMsg"></p>
            <p>{{msg3}}</p>
            <p [innerHtml]="msg3"></p>
            <p [innerHtml]="safeMsg3"></p>
            <p>-------------------------------------- </p>
            
            <p>-------------------------------------- </p>
            <p>{{book?.title}}</p>`
})
export class AppComponent  { 
  book = {
    title: 'AngularJSアプリケーションプログラミング',
    price: 3700
  };
  obj:any={
    isbn:undefined,
    title:'Angularライブラリ　活用レシピ',
    authors:['山田賢浩','掛谷奈美'],
    price:1200,
    toString:function(){/* 任意処理 */}
  
  };
  name= 'Ｗｅｂデリ - Spicy Tools, Delicious Sites.';
  msg ='Hello world!!';
  data1='1234567890';
  //data = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
  a ='a!!';
  b ='b!!';
  c ='c!!';
  len = 2;
  value=123.5678;

  url = 'http://www.wings.msn.to/';
  safeMsg: SafeHtml;
  safeMsg3: SafeHtml;
  msg2 : string = `<script>window.alert("危険！");</script>
          <p>こんにちは、世界</p>
          <a href="#" onclick="alert('xxx')">危険なリンク</a>
          <p></P>
          <button>おっす</button>
          <font color="Red">こんにちは、世界</font>`;
  msg3 : string =    
          `<script>window.alert("危険！");</script>
          <button>OKNG</button>
           `  ;
          constructor(private sanitizer: DomSanitizer) {
            // msgプロパティの内容に信頼済みマークを付与
            this.safeMsg=sanitizer.bypassSecurityTrustHtml(this.msg2); 
            this.safeMsg3=sanitizer.bypassSecurityTrustHtml(this.msg3); 
          }
     
  
}
