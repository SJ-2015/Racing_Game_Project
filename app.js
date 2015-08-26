
console.log("Sanity Check: JS is working!");

var playerOneLocation =0;
var playerTwoLocation =0;
var trackLength =8;
var player1Position;
var player2Position;

var winner; 
   
$(document).ready(function() {
   
   //Setting up the players via css classes 
   $('#sendPlayer1').on('click', function(e) {
                  //get player avatar
          var player1Avatar=document.getElementById('field1').value;
                  //get the corresponding css class for each avartor
          if ((player1Avatar=="Pikachu")||(player1Avatar=="Kirby")) {
            player1Position=player1Avatar+"Position";
            //set character to starting line, by updating css class
          $(".player1Border:eq(0)").removeClass(player1Position);
          $(".player1Border:eq(0)").addClass(player1Position);

          } else {
            alert("Invalid Character!");
          }
    });

    $('#sendPlayer2').on('click', function(e) {
                  //get player avatar
          var player2Avatar=document.getElementById('field2').value;
                  //get the corresponding css class for each avartor
          if ((player2Avatar=="Kirby")||(player2Avatar=="Pikachu")) {
              player2Position=player2Avatar+"Position";
            //set character to starting line, by updating css class
          $(".player2Border:eq(0)").removeClass(player2Position);
          $(".player2Border:eq(0)").addClass(player2Position);
          } else {
            alert("Invalid Character!");
          }
    });

          //moving the characters
    $(document).on('keypress',function(e){  
        var key =e.which;

        if (key===102) {              //f = 102, if f is pressed
          $(".player1Border:eq("+playerOneLocation+")").removeClass(player1Position);
          $(".player1Border:eq("+(playerOneLocation+1)+")").addClass(player1Position);
          playerOneLocation=playerOneLocation+1;
        }
        if (key===108) {              //l = 108, sif f is pressed
          $(".player2Border:eq("+playerTwoLocation+")").removeClass(player2Position);
          $(".player2Border:eq("+(playerTwoLocation+1)+")").addClass(player2Position);
          playerTwoLocation=playerTwoLocation+1;
          
        }
        console.log("player1 location:"+playerOneLocation);
        console.log("player2 location:"+playerTwoLocation);
        
        if (((playerOneLocation === trackLength)&&(playerTwoLocation<trackLength)) 
          || (playerTwoLocation === trackLength)&&(playerOneLocation<trackLength)) {
        return announceWinner(playerOneLocation,playerTwoLocation,trackLength);
      }
    })

    //restart
    $("#restart").on('click',function(e){
    console.log('clicked!');
    document.location.reload(true);
    });

}) // end of document ready
  
function announceWinner(playerOneLocation,playerTwoLocation,trackLength) {
    if (playerOneLocation===trackLength) {
      winner = "Player1";
    } else if (playerTwoLocation===trackLength) {
      winner = "player2";
    }

    alert(winner + " won the game!");
    return winner;
}



/* original plans --> steps (not used/unable to follow through)
I) Creating Object Constructors for characters
Character 1:
1. generate avatars and put them on track
  - grab value from player input boxs
  - put avator onto track

2. move players: 
  - update current position by one until reaching the key

II) Reaching finishing line ==> send alert

III) resets game 
  - Wnat to start over? create reset botton
  - resets by redirecting --> document.location.reload(true);

IV) extra credit: 
  - tally's up the scores; up to five times
      - ends each round by removing class from all squares
  - updates scores



*/
/*
// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  //
};

// A starter Player constructor.
function Player(name, avatar) {
  this.name = name;
  if ((avatar='Kirby')||(avatar='Pikachu')){
      this.avator=avatar
  } else {
      alert("INVALID CHARACTER!");
  };
  this.render = function(){
    
  };
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
  //update player's position
};


// A starter Track constructor.
function Track() {
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};

// Start the game!
var game = new Game();
game.init();
*/
