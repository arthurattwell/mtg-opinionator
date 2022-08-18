let opinions = [
  "Fascinating! Go for it.",
  "That's a cool take.",
  "Hah, don't you love MTG? All of us enjoying it.",
  "Hah, okay, cool. Shuffle up!",
  "Yeah, you're awesome. You're also awesome. Everyone is awesome!",
  "Sounds fun! Maybe I'll try that one day.",
  "Let's play ALL the cards!",
  "What a lovely bunch of wierdos we are.",
  "So anyway. FNM?",
  "Dunno how that'll go in my meta but we're up for anything!",
  "Love how there's space for everything in this game!",
  "Yup, yup, yup, cool.",
  "You do what you gotta do.",
  "That's fair :-)"
]

let usedOpinions = []

function showOpinion() {
  'use strict'

  // Get a random number from the opinions array
  let randomNumberFromOpinions = Math.floor(Math.random() * opinions.length)

  // Reset and retry if no opinions are left
  if (opinions.length === 0) {
    opinions = usedOpinions
    usedOpinions = []
    showOpinion()
  }

  // Get that numbered opinion and move it to usedOpinions
  let randomOpinion = opinions.splice(randomNumberFromOpinions, 1)[0]
  usedOpinions.push(randomOpinion)

  // Show the opinion text
  const box = document.getElementById('opinion')
  box.classList.add('opinion')
  box.innerHTML = randomOpinion
}

function opinionate() {
  'use strict'

  const button = document.getElementById('opinionate')
  button.addEventListener('click', function () {
    showOpinion()
  })
}

// Go
opinionate()
