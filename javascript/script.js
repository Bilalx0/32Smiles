document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.body.classList.toggle('menu-open');
    document.querySelector('.nav-list').classList.toggle('active');
  });