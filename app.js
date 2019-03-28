$(document).ready(function(){

  const momentTime = function() {
    return moment().fromNow()
  }
  
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
   const date = $('span.timeline')
      for (let i = date.length - 1; i >= 0; i--) {
        let inverse = date.length;
        $(date[i]).text(moment(streams.home[(inverse-1-i)].created_at).fromNow())
      }
      console.log(date)
    });
 });

    



  $(document).on('click', 'div.usersAndText span', function(){
    
  
      var userTexts = $(this).text();
      $(`li:not(:contains(${userTexts}))`).hide();

  });

});

