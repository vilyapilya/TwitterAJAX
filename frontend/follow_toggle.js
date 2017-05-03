class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.attr("data-userid");
    this.initialFollowState = this.$el.attr("data-initial-follow-state");
    this.render();
  }
}
FollowToggle.prototype.render = function () {
  console.log(this.initialFollowState);
  if (this.initialFollowState === "true") {
    this.$el.text("Unfollow!");
  } else {
    this.$el.text("Follow!");
  }
};

FollowToggle.prototype.handleClick = function(){
  event.preventDefault();
};

module.exports = FollowToggle;
