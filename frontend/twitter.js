var FollowToggle = require('./follow_toggle.js');
var UsersSearch= require('./users_search.js');
window.FollowToggle = FollowToggle;

$( () => {
  const $followButtons = $('.follow-toggle');
  $followButtons.each((ind, el) => {
    new FollowToggle(el);
  });

  const $searchUsers = $('.user-search');
  $searchUsers.each((ind, el) => {
    console.log(el);
    new UsersSearch(el);
  });
}

);
