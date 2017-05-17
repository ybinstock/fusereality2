AFRAME.registerComponent('cursor-listener', {
  init: function() {
    function functionName(evt) {
      document.querySelector('.light').emit('fade');
      document.querySelector('.light').emit('fade2');
      document.querySelector(".black-sky").emit('fade');
      document.querySelector(".white-sky").emit('fade');
      document.querySelector('.collidable').removeEventListener('cursor-listener', evt);
      console.log('hi');
      removeEventListeners();
    }

    document.querySelector('.collidable').addEventListener('click', functionName);
    function removeEventListeners(){
      document.querySelector('.collidable').removeEventListener('click', functionName);
    }
  }
});


AFRAME.registerComponent('turn-on-contact', {
  init: function () {
    var el = this.el;
    document.querySelector('.contact-icon').addEventListener('click', function (evt) {
      console.log('hi');
      document.querySelector('.contact').setAttribute('visible', !document.querySelector('.contact').getAttribute('visible'));
    });
  }
});


AFRAME.registerComponent('turn-on-about', {
  init: function () {
    var el = this.el;
    document.querySelector('.about-icon').addEventListener('click', function (evt) {
      console.log('hello');
      document.querySelector('.about').setAttribute('visible', !document.querySelector('.about').getAttribute('visible'));
    });
  }
});

