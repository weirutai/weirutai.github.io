/*!
* Start Bootstrap - Grayscale v7.0.3 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


//go to top

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//make rabbit swim

document.querySelector('.walk').setAttribute('class', 'walk end')

/*
//申明全局變數
var timeStart, timeEnd, time;

//獲取此刻時間
function getTimeNow() {
    var now = new Date();
    return now.getTime();
}

//滑鼠按下時觸發
function holdDown() {
    //獲取滑鼠按下時的時間
    timeStart = getTimeNow();

    //setInterval會每100毫秒執行一次，也就是每100毫秒獲取一次時間
    time = setInterval(function () {
        timeEnd = getTimeNow();

        //如果此時檢測到的時間與第一次獲取的時間差有1000毫秒
        if (timeEnd - timeStart > 1000) {
            //便不再繼續重復此函數 （clearInterval取消周期性執行）
            clearInterval(time);
            //字體變紅
            var moveMe = document.getElementById("moveMe");
            moveMe.setAttribute('class', 'walk end');
        }
    }, 100);
}
function holdUp() {
    //如果按下時間不到1000毫秒便彈起，
    clearInterval(time);
}




let moveMe = document.getElementById("moveMe");
let clickMe = document.getElementById("clickMe");
function Go(){
    moveMe.onclick();
}

*/



/*
var button = document.querySelector(".swim");
button.addEventListener(
  "click",
  function () {
    alert("HELLO WORLD!");
  },
  false
);
*/