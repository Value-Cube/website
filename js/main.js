document.addEventListener('DOMContentLoaded', (event) => {
  // grab an element
  var header = document.querySelector("header");
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(header);
  // initialise
  headroom.init();

  //AOS.init();
  AOS.init({
    disable: window.innerWidth < 700
  });
}, false);
