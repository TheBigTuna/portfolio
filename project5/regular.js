
setTimeout(function() {
   var elm = document.getElementsByClassName('loader')[0];
   elm.classList.add('fadeOutRightBig');
}, 4000);

setTimeout(function() {
    document.getElementsByClassName('loader')[0].style.display = 'none';
}, 4100);

setTimeout(function() {
    location.assign("home.html")
}, 4200);