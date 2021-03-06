﻿/*
参考サイト： https://nkmrkisk.com/archives/925

*/
/* ----- option ----- */
var id = ['title','p1','menu_drink','menu_food','menu_set','footer']; //指定するidを全て配列で渡す
var txSp = 50; // テキストの表示速度
var dly = 0; // 次の文章までの待ち時間
/* ----- option ----- */
var count = 0;
var tx = [];
var txCount = [];

window.onload = function(){
  /* ----- phone or pc -----*/
  if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
      // スマホ時に行う処理を書く（文字の大きさを変える処理を書く）
      for(n=0;n<id.length;n++){
        var temp = document.getElementById(id[n]);
        temp.className = 'hoge2';
      }
  } else {
      // PC・タブレット時に行う処理を書く
      /* 特にない */
  }
  kamikakushi();
  countSet();
  itimozi();
}

function countSet(){ // 文字数カウントの初期設定
  for(n=0;n<id.length;n++){
    txCount[n] = 0;
  }
}

function kamikakushi(){ // 要素をtx[i]に保持させ、非表示にする
  for(i=0;i<id.length;i++){
    id[i] = document.getElementById(id[i]);
    tx[i] = id[i].firstChild.nodeValue; // 初期の文字列
console.log(tx[i]);
    id[i].innerHTML = '';
  }
}

function itimozi(){ //　一文字ずつ表示させる
 id[count].innerHTML = (tx[count].substr( 0, ++txCount[count] )+"_").replace(/%n/g,"<br>").replace(/%/g,""); // テキストの指定した数の間の要素を表示
 if(tx[count].length != txCount[count]){ // Count が初期の文字列の文字数と同じになるまでループ
  setTimeout("itimozi();",txSp); // 次の文字へ進む
 }else{
  id[count].innerHTML = tx[count].substr( 0, ++txCount[count]).replace(/%n/g,"<br>"); // テキストの指定した数の間の要素を表示
  count++; // 次の段落に進む為のカウントアップ
  if(count != id.length){ // id数が最後なら終了
   setTimeout("itimozi();",dly); // 次の段落へ進む
  }
 }
}
