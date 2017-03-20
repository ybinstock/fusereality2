AFRAME.registerComponent('cursor-listener', {
  init: function() {
    function functionName(evt) {
      document.querySelector('.light').emit('fade');
      document.querySelector('.light').emit('fade2');
      document.querySelector(".black-sky").emit('fade');
      document.querySelector(".white-sky").emit('fade');
      document.querySelector('.collidable').removeEventListener('cursor-listener', evt);
      console.log('hi');
      document.querySelector('.collidable').removeEventListener('click', this);
    }

    document.querySelector('.collidable').addEventListener('click', functionName);
  }
});