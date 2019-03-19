$(document).ready(function(){
  
  $('.btn').on('click', function(){
    var $maindiv = $('.main-div');
        $maindiv.html('');

    var index = 0 ;
    while(index < streams.home.length) {
      let tweet = streams.home[index];
      let timestamp = streams.home[index].created_at;
      
      const $tweet = $('<div></div>');
      const $user1 =$(`<button class='ti'>${tweet.user}</button>`);
            $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' +  timestamp);
            $user1.prependTo($maindiv)
            $tweet.prependTo($maindiv);
          index ++;
      }

  });

});
   // const $tweet = $('<div></div>');
    //       let button = $('<button></button>'); 
    //         button.text(${tweet.user}) 
    //         $tweet.text(tweet.user + ': ' + tweet.message + ' ' +  timestamp);
    //         button.prependTo($maindiv)
    //         $tweet.prependTo($maindiv);
    //       index ++;

      //     const $tweet = $('<div></div>');
      // const $user1 =$('<div><span>${tweet.user}</span><div>');
      //       $tweet.text('@' + $user1 + ': ' + tweet.message + ' ' +  timestamp);
      //       $tweet.prependTo($maindiv);
      //     index ++;