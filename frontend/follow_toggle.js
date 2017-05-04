var APIUtil = require ('./api_util.js');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.attr("data-userid");
    this.initialFollowState = this.$el.attr("data-initial-follow-state");
    this.render();
    this.handleClick(this.$el);
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

FollowToggle.prototype.handleClick = function($el){
  event.preventDefault();
  var that = this;
  const renderTrue = function(){
    this.initialFollowState = "true";
    this.render();
  }.bind(this);

  const renderFalse = function(){
    this.initialFollowState = "false";
    this.render();
  }.bind(this);

  this.$el.on("click", ( event => {
    if (this.initialFollowState === "true"){
      APIUtil.unfollowUser(that.userId).then(renderFalse);
    }else {
      APIUtil.followUser(that.userId).then(renderTrue);
    }
}));
};

module.exports = FollowToggle;
