var responses = ["Rock", "Paper", "Scissors"]
var myScore = 0
var opponentScore = 0
var computerPlay = responses[Math.floor(Math.random()*responses.length)]

$("#Rock").on('click', function() {
  var computerPlay = responses[Math.floor(Math.random()*responses.length)]
   if (computerPlay === "Rock") {
  return $("#computer-text").html("Tie.");
} else if (computerPlay === "Scissors") {
   return [ $("#computer-text").html("Your rock beat scissors."), $("#my-score").html(myScore += 1) ]
 } else if (computerPlay === "Paper") {
   return [ $("#computer-text").html("Opponent\'s paper beat your Rock."), $("#opponent-score").html(opponentScore += 1) ]
  } else {
  return $("#computer-text").html("error")
  }
})

$("#Paper").on('click', function() {
  var computerPlay = responses[Math.floor(Math.random()*responses.length)]
   if (computerPlay === "Paper") {
  return $("#computer-text").html("Tie.");
} else if (computerPlay === "Scissors") {
   return [ $("#computer-text").html("Opponent\'s scissors beat your paper."), $("#opponent-score").html(opponentScore += 1) ]
 } else if (computerPlay === "Rock") {
   return [ $("#computer-text").html("Your paper beat rock."), $("#my-score").html(myScore += 1) ]
  } else {
  return $("#computer-text").html("error")
  }
})

$("#Scissors").on('click', function() {
  var computerPlay = responses[Math.floor(Math.random()*responses.length)]
   if (computerPlay === "Scissors") {
  return $("#computer-text").html("Tie.");
} else if (computerPlay === "Paper") {
   return [ $("#computer-text").html("Your scissors beat paper."), $("#my-score").html(myScore += 1) ]
 } else if (computerPlay === "Rock") {
   return [ $("#computer-text").html("Opponent\'s rock beat your scissors."), $("#opponent-score").html(opponentScore += 1) ]
  } else {
  return $("#computer-text").html("error")
  }
})


$("#new-game").on('click', function(){
  return [ $("#my-score").html(myScore = 0), $("#opponent-score").html(opponentScore = 0), $("#computer-text").html('')]
})
