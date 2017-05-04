var APIUtil = require ('./api_util.js');

class UsersSearch{
  constructor($el){
    this.$el = $el;
    this.$input = $($el).find("input");
    this.$button = $($el).find("button");
    this.$users = $($el).find("ul");
    this.handleInput();
  }
}


UsersSearch.prototype.handleInput = function(){
  event.preventDefault();
  const success = this.renderResults;
  this.$button.on("click", (event =>{
    console.log("clicked");
    APIUtil.searchUsers(this.$input, success) ;
  }));
};

UsersSearch.prototype.renderResults = function(users){
  $users = $('.users');
  $(this.$users).find("li").empty();

  $(this.$users).append(`<li>llll</li>`);

};

module.exports = UsersSearch;
