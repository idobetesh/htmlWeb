function lenOfName() {
    var fName = "ido";
    var Lname = "betesh";
    return fName.length * Lname.length;
}

function initializeRectangles() {
    var articles = "";
    for (i = 0; i < lenOfName(); i++) {
        articles += "<article></article>";
    }
    var main = document.getElementsByTagName("main")[0];
    main.innerHTML = articles;

    var art = document.getElementsByTagName('article');
    art[0].onmousemove = function () {
        art[0].style.backgroundImage = "url('./images/IDO.png')";
    }

    art[0].onmouseout = function () {
        art[0].style.backgroundImage = 'none';
        art[0].style.backgroundColor = 'rgb(221, 163, 157)';
    }
}

function press() {
    var rects = document.getElementsByTagName('article');
    for (i = 0; i < "ido".length; i++) {
        rects[i].style.backgroundColor = '#2d3436';
        rects[i].style.transitionDuration = "1s"
        rects[i].style.borderRadius = "10px"
    }
}

function pressBack() {
    var rects = document.getElementsByTagName('article');
    for (i = 0; i < "ido".length; i++) {
        rects[i].style.backgroundColor = 'rgb(221, 163, 157)';
        rects[i].style.borderRadius = "0px"
    }
}