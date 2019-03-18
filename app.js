$(document).ready(function(){
  
  $('.btn').on('click', function(){
    var $maindiv = $('.main-div');
        $maindiv.html('');

    var index = 0 ;
    while(index < streams.home.length) {
      let tweet = streams.home[index];
      const $tweet = $('<div></div>');
            $tweet.text('@' + tweet.user + ': ' + tweet.message);
            $tweet.prependTo($maindiv);
          index ++;
      }

  });

});