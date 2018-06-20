/**
 * Created by Viktorija on 19.6.2018.
 */
var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
    var span = document.createElement("SPAN");
    var tekst = document.createTextNode("delete");
    span.className = "close";
    span.appendChild(tekst);
    mylist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var j;
for (j = 0; j < close.length; j++) {
    close[j].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function newAdd() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Empty string!");
    } else {
        document.getElementById("myULList").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("delete");
    var k;
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (k = 0; k < close.length; k++) {
        close[k].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}