$(document).ready(function(){
  
  $('.btn').on('click', function(){
    // var $maindiv = $('.main-div');
    var $tweetList = $('.tweetContainer');
        $tweetList.html('');

    // var $tweetList = $('.    tweetContainer');

    var index = 0 ;
    while(index < streams.home.length) {
      let tweet = streams.home[index];
      let timestamp = streams.home[index].created_at;
      // console.log("tweet.user: " , tweet.user);
      const $tweet = $(
        `<li class="tweetHolder">
           <div class="usersAndText">
             <span class="user">${tweet.user}</span>
             <span class="timeline">${timestamp}</span>
           </div>
           <div class="textMessage">${tweet.message}<div> 
        </li>`);
      // // const $user1 =$(`<button class="user-button">${tweet.user}</button>`);
      //       // $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' +  timestamp);
      //       $user1.prependTo($maindiv)
        $tweet.prependTo($tweetList);
        index ++;
      }

  });

     // console.log($tweet);
  $(document).on('click', 'div.usersAndText span', function(){
    // var $timeline = $('.timeline');
    //   $timeline.html('');
      // console.log( name, $(this).text());
  
      var userTexts = $(this).text();
      $(`li:not(:contains(${userTexts}))`).hide();
      // if($('ul' )hide()''
// 

  });

});
   // const $tweet = $('<div></div>');
   //  //       let button = $('<button></button>'); 
   //  //         button.text(${tweet.user}) 
    //         $tweet.text(tweet.user + ': ' + tweet.message + ' ' +  timestamp);
    //         button.prependTo($maindiv)
    //         $tweet.prependTo($maindiv);
    //       index ++;

      //     const $tweet = $('<div></div>');
      // const $user1 =$('<div><span>${tweet.user}</span><div>');
      //       $tweet.text('@' + $user1 + ': ' + tweet.message + ' ' +  timestamp);
      //       $tweet.prependTo($maindiv);
      //     index ++;