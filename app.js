AFRAME.registerComponent('cursor-listener', {
  init: function() {
    this.el.addEventListener('click', function(evt) {
      document.querySelector('.light').emit('fade');
      document.querySelector('.light').emit('fade2');
      document.querySelector(".black-sky").emit('fade');
      document.querySelector(".white-sky").emit('fade');
      document.querySelector('.collidable').removeEventListener('cursor-listener', evt);

    });

  }
});
