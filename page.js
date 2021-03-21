var inputElem = document.getElementById('page'); // input要素
var currentValueElem = document.getElementById('bar'); // 埋め込む先のspan要素
var img = document.getElementById('ill');
let menu = document.getElementById("menu")
let Q=""

let query = decodeURIComponent(location.search);
let quary1 = query.split('=');
let quary2 = "book/"+quary1[1]+"/";
let item = (quary1[3]||quary1[3]+"-").split('-');



//quaryからページ作成
function startWindow(){
  img.setAttribute('src', quary2+"001.jpg");
  inputElem.setAttribute('max', Number(quary1[2]));
  for (let i = 0; i < quary1.length-1; i++) {
    Q=Q+"<li onclick=OnButtonClick("+item[i]+")>"+item[i]+"</li>"
  }
  menu.innerHTML="<ul>"+Q+"</ul>"
}
window.onload = function(){
  inputElem.addEventListener('input', rangeOnChange); // スライダー変化時にイベントを発火
  OnButtonClick(inputElem.value); // ページ読み込み時に値をセット
  setSwipe('#ill');
  startWindow()
};


//"pp"にページ数を入れる。
function OnButtonClick(pp) {
  let pNumber= ( '000' + Number(pp) ).slice( -3 );
  img.setAttribute('src', quary2+pNumber+".jpg");
  img.setAttribute('class', Number(pp));
  page.value=Number(pp);
  currentValueElem.innerText = Number(pp);
}


//バーの値をページ数に
function rangeOnChange(e){
  OnButtonClick(e.target.value);
}



//タッチスワイプによるページ移動
var chang,change;
function setSwipe(elem) {
    var t = document.querySelector(elem);
    var startX;        // タッチ開始 x座標
    var startY;        // タッチ開始 y座標
    var moveX;    // スワイプ中の x座標
    var moveY;    // スワイプ中の y座標
    var dist = 30;    // スワイプを感知する最低距離（ピクセル単位）
     
    // タッチ開始時： xy座標を取得
    t.addEventListener("touchstart", function(e) {
        e.preventDefault();
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
    });
     
    // スワイプ中： xy座標を取得
    t.addEventListener("touchmove", function(e) {
        e.preventDefault();
        moveX = e.changedTouches[0].pageX;
        moveY = e.changedTouches[0].pageY;
    });
     
    // タッチ終了時： スワイプした距離から左右どちらにスワイプしたかを判定する/距離が短い場合何もしない
    t.addEventListener("touchend", function(e) {
        var img = document.getElementById('ill');
        var src = img.getAttribute('src');
        var num = Number(img.className);
        
        
        if (startX > moveX && startX > moveX + dist) {        // unからupにスワイプ
            if(num<Number(inputElem.getAttribute('max'))){
              var num= num+1;
            }
        }else if (startX < moveX && startX + dist < moveX) {    // upからunにスワイプ
            if(num>1){
              var num=num-1;
            }
        };
        OnButtonClick(num);
    });
};




//キー入力でページ移動
window.addEventListener('keydown',function(event) {
        var img = document.getElementById('ill');
        var src = img.getAttribute('src');
        var num = Number(img.className);
        if (event.keyCode==39) {        // unからupにスワイプ
            if(num<Number(inputElem.getAttribute('max'))){
              var num= num+1;
            }
        }else if (event.keyCode==37) {    // upからunにスワイプ
            if(num>1){
              var num=num-1;
            }
        };
        OnButtonClick(num);
});




//menuBar
function openMenu(){
 if(menu.classList.contains("open")==true){
  menu.classList.remove("open");
 }else{
  menu.classList.add("open");
 }
}