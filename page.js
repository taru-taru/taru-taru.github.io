var inputElem = document.getElementById('page'); // input要素
var currentValueElem = document.getElementById('bar'); // 埋め込む先のspan要素

  var img = document.getElementById('ill');

function OnButtonClick(pp) {
  var pNumber= ( '000' + Number(pp) ).slice( -3 );
  img.setAttribute('src', pNumber+".jpg");
  img.setAttribute('class', pNumber);
  page.value=pNumber;
  currentValueElem.innerText = Number(pp);
}

// 現在の値をspanに埋め込む関数
function setCurrentValue(val){
  var chang= ( '000' + Number(val) ).slice( -3 );
  currentValueElem.innerText = val;
  var change= chang+".jpg";
  img.setAttribute('src', change);
  img.setAttribute('class', chang);
}
// inputイベント時に値をセットする関数
function rangeOnChange(e){
  setCurrentValue(e.target.value);
}
window.onload = function(){
  inputElem.addEventListener('input', rangeOnChange); // スライダー変化時にイベントを発火
  setCurrentValue(inputElem.value); // ページ読み込み時に値をセット
}


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
        var chang= ( '000' + num ).slice( -3 );
        var change= "book/"+qu+"/"+chang+".jpg";
        img.setAttribute('src', change);
        img.setAttribute('class', chang);
        page.value=num;
        currentValueElem.innerText = num;
    });
};

function startWindow(){
  let query = decodeURIComponent(location.search);
  let quary1 = query.split('=');
  console.log(quary1[1]);
  img.setAttribute('src', "book/"+quary1[1]+"/001.jpg");
  currentValueElem.setAttribute('max', Number(quary1[2]));
}


 window.addEventListener("load", function(){
   setSwipe('#ill');
   startWindow()
 });




window.addEventListener('keydown',key);

function key(event) {
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
        var chang= ( '000' + num ).slice( -3 );
        var change= chang+".jpg";
        img.setAttribute('src', change);
        img.setAttribute('class', chang);
        page.value=num;
        currentValueElem.innerText = num;
};