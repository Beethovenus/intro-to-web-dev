// QUESTION ONE
function submitAnswerOne() {
  const answerOneInput = document.getElementById('answer-one-input');
  const answerOne = answerOneInput.value;

  if(answerOne == 'deltarune') {
    alert("That's right!");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'undertale') {
    alert('Not quite! That released in 2015.');
  } else if(answerOne == 'homestuck') {
    alert('no');
  } else if(answerOne == 'megalovania') {
    alert('no');
  } else {
    alert('Wrong! Hint: it is an anagram of "Undertale."')
  }
}

// QUESTION TWO
function submitAnswerTwo() {
  const answerTwoInput = document.getElementById('answer-two-input');
  const answerTwo = answerTwoInput.value;

  if(answerTwo == "Wendy's") {
    alert("That's right!");
    hide('question-two');
    show('question-three');
  } else if (answerTwo == "Wendys") {
    alert("That's right!");
    hide('question-two');
    show('question-three');
  } else if (answerTwo == "wendy's") {
    alert("That's right!");
    hide('question-two');
    show('question-three');
  } else if (answerTwo == "wendys") {
    alert("That's right!");
    hide('question-two');
    show('question-three');
  } else if(answerTwo == "Burger King") {
    alert('Not quite! Try again.');
  } else if(answerTwo == "burger king") {
    alert('Not quite! Try again.');
  } else if(answerTwo == "McDonald's") {
    alert('Not quite! Try again.');
  } else if(answerTwo == "McDonalds") {
    alert('Not quite! Try again.');
  } else if(answerTwo == "mcdonald's") {
    alert('Not quite! Try again.');
  } else if(answerTwo == "mcdonalds") {
    alert('Not quite! Try again.');
  } else {
    alert("That's not one of the choices!")
  }
}

//QUESTION THREE
function submitAnswerThree() {
  const answerThreeInput = document.getElementById('answer-three-input');
  const answerThree = answerThreeInput.value;

  if(answerThree == 'halo infinite') {
    alert("That's right!");
    hide('question-three');
    show('question-four');
  } else if(answerThree == 'Halo Infinite') {
    alert("That's right!");
    hide('question-three');
    show('question-four');
  } else if(answerThree == 'halo 6') {
    alert('Close, but not quite! It does not have a number.');
  } else if(answerThree == 'Halo 6') {
    alert('Close, but not quite! It does not have a number.');
  } else if(answerThree == 'halo 5') {
    alert('Not quite! Another came after that.');
  } else if(answerThree == 'Halo 5') {
    alert('Not quite! Another came after that.');
  } else if(answerThree == 'halo 4') {
    alert('Not quite! Two more came after.');
  } else if(answerThree == 'Halo 4') {
    alert('Not quite! Two more came after.');
  } else if(answerThree == 'halo reach') {
    alert("Not quite! That was Bungie's last Halo game.");
  } else if(answerThree == 'Halo Reach') {
    alert("Not quite! That was Bungie's last Halo game.");
  } else if(answerThree == 'halo 3 odst') {
    alert('Not quite! Bungie made that.');
  } else if(answerThree == 'Halo 3 ODST') {
    alert('Not quite! Bungie made that.');
  } else if(answerThree == 'halo odst') {
    alert('Not quite! Bungie made that.');
  } else if(answerThree == 'Halo ODST') {
    alert('Not quite! Bungie made that.');
  } else if(answerThree == 'halo 3') {
    alert('Not quite! Bungie made that.');
  } else if(answerThree == 'Halo 3') {
    alert('Not quite! Bungie made that.');
  } else if(answerThree == 'halo 2') {
    alert('Not quite! Bungie made that.');
  } else if(answerThree == 'Halo 2') {
    alert('Not quite! Bungie made that.');
  } else if(answerThree == 'halo ce') {
    alert("Not quite! That was Bungie's first Halo game.");
  } else if(answerThree == 'Halo CE') {
    alert("Not quite! That was Bungie's first Halo game.");
  } else if(answerThree == 'halo combat evolved') {
    alert("Not quite! That was Bungie's first Halo game.");
  } else if(answerThree == 'Halo Combat Evolved') {
    alert("Not quite! That was Bungie's first Halo game.");
  } else if(answerThree == 'halo 1') {
    alert("Not quite! That was Bungie's first Halo game.");
  } else if(answerThree == 'Halo 1') {
    alert("Not quite! That was Bungie's first Halo game.");
  } else if(answerThree == 'halo') {
    alert('You need to be more specific than that!');
  } else if(answerThree == 'Halo') {
    alert('You need to be more specific than that!');
  } else {
    alert('Not quite! Try again.')
  }
}

//QUESTION FOUR
function submitAnswerFour() {
  const answerFourInput = document.getElementById('answer-four-input');
  const answerFour = answerFourInput.value;

  if(answerFour == 'Dr. Pepper') {
    alert("That's right!");
    hide('question-four');
    show('question-five');
  } else if(answerFour == 'Dr Pepper') {
    alert("That's right!");
    hide('question-four');
    show('question-five');
  } else if(answerFour == 'dr pepper') {
    alert("That's right!");
    hide('question-four');
    show('question-five');
  } else if(answerFour == 'dr. pepper') {
    alert("That's right!");
    hide('question-four');
    show('question-five');
  } else if(answerFour == 'Dr. Offbrand') {
    alert("Eh, I'll take it.");
    hide('question-four');
    show('question-five');
  } else if(answerFour == 'dr. offbrand') {
    alert("Eh, I'll take it.");
    hide('question-four');
    show('question-five');
  } else if(answerFour == 'Dr Offbrand') {
    alert("Eh, I'll take it.");
    hide('question-four');
    show('question-five');
  } else if(answerFour == 'dr offbrand') {
    alert("Eh, I'll take it.");
    hide('question-four');
    show('question-five');
  } else if(answerFour == 'Coca Cola') {
    alert('Not quite! Try again.');
  } else if(answerFour == 'coca cola') {
    alert('Not quite! Try again.');
  } else if(answerFour == 'Sprite') {
    alert('Not quite! Try again.');
  } else if(answerFour == 'sprite') {
    alert('Not quite! Try again.');
  } else if(answerFour == 'Pepsi') {
    alert("That wasn't a choice, but it's funny. Try again!");
  } else if(answerFour == 'pepsi') {
    alert("That wasn't a choice, but it's funny. Try again!");
  } else {
    alert("That's not one of the choices!")
  }
}

//QUESTION FIVE
function submitAnswerFive() {
  const answerFiveInput = document.getElementById('answer-five-input');
  const answerFive = answerFiveInput.value;

  if(answerFive == 'yes') {
    alert("Oh! Thank you!");
    hide('question-five');
    show('done');
  } else if(answerFive == 'Yes') {
    alert("Oh! Thank you!");
    hide('question-five');
    show('done');
  } else if(answerFive == 'YES') {
    alert("That's enthusiastic! Thanks!");
    hide('question-five');
    show('done');
  } else if(answerFive == 'no') {
    alert("That's fine, no worries! Thanks for being honest.");
    hide('question-five');
    show('done');
  } else if(answerFive == 'No') {
    alert("That's fine, no worries! Thanks for being honest.");
    hide('question-five');
    show('done');
  } else if(answerFive == 'NO') {
    alert("Thanks for the honesty, I guess?");
    hide('question-five');
    show('done');
  } else if(answerFive == 'maybe') {
    alert("Thanks...?");
    hide('question-five');
    show('done');
  } else if(answerFive == 'i have completed this quiz several times and I LOVE IT!!!!!!') {
    alert("YEAH!!!!!!!!!!!!!!!!!!!!");
    hide('question-five');
    show('done');
  } else if(answerFive == 'dog') {
    alert('This was a placeholder left over from the template. I kept it because it was funny.');
  } else {
    alert("I'm not sure what that means, can you try again?")
  }
}


// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}