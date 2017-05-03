var FollowToggle = require('./follow_toggle.js');
window.FollowToggle = FollowToggle;

$( () => {
  const $followButtons = $('.follow-toggle');
  $followButtons.each((ind, el) => {
    new FollowToggle(el);
  });
}

);
