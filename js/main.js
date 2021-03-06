//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };

    //Change login to user info on click event
    $("#login-btn").click(function() {
      //this needs to be more elegant
        //can you use moveUp or moveDown?
      $(".navbar-form").hide();
      $(".user-fullname").text(userInfo.firstName + " " + userInfo.lastName);
      $(".user-info").show();
    });

    //Change back to login for by clicking logout button
    $("#js-logout-btn").click(function() {
      $(".navbar-form").show();
      $(".user-info").hide();
    });

    //Hide and show details, update text of buttons accordingly
    $(".view-details").click(function() {
      var button = $(this);
      var parent = $(this).parent().parent();
      $(parent).children(".details").toggle();
      if (button.text() === "Hide details »") {
        if (button.parent().attr('class') === "js-learn-more") {
          button.text("Learn more »");
        }
        else {
          $(this).text("View details »");
        }
      }

        else {
        button.text("Hide details »");
      }
    });

    //Add to vote counts and update bars
    $('.vote').click(function(event) {
      var button = $(event.target);
      var dataVote = button.data('vote');
      voteCounts[dataVote] += 1;
      voteCounts.total += 1;
      updateBars();
    });

    function updateBars() {
      $(".great-progress").css("width", (voteCounts.great/voteCounts.total) * 100 + "%");
      $(".greatest-progress").css("width", (voteCounts.greatest/voteCounts.total) * 100 + "%");
    };
});
