$('.section-loop').infiniteScroll({
  path: '.older-posts',
  append: '.post',
  status: '.status',
  hideNav: '.infinite-hidden'
});

$('.section-loop').on('append.infiniteScroll', function(event, response, path, items) {
  window.reinitEmerge();
  addClickHandlers();
});