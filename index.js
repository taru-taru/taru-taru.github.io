function mySort() {
    // (1) ノードリストを取得
    var myUL = document.getElementById("test");
    var myNodeList = myUL.querySelectorAll("li");
    // (2) 配列を得る
    var myArray = Array.prototype.slice.call(myNodeList);
    // (3) 配列をソート
    function compareText (a,b) {
        if (a.innerHTML < b.innerHTML)
            return 1;
        else if (a.innerHTML > b.innerHTML)
            return -1;
        return 0;
        }
    myArray.sort(compareText);
    // (4) 新しい順番を DOM ツリーに反映
    for (var i=0; i<myArray.length; i++) {
        myUL.appendChild(myUL.removeChild(myArray[i]))
    }
 console.log(myArray[0])
}

window.onload = function() {
 mySort();
};






var Zero = function(event) {
  var id = event.target.id;
  console.log(id);
  return id;
}