// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech = `I think that right here, I'm just going to write a whole bunch of text.
It shouldn't be too difficult nor frustrating to write that much, and so I'm just going to do it.
I'll write on, and on, and on... just to ensure that there'll be enough content for the assignment itself.
Hopefully this should turn out okay, and I won't have any major issues when it comes to individually sorting everything.
And if not... well, I guess that's just a part of the subject matter.
But hey, who's to say this won't ultimately turn out okay?`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}

function displayShortWords() {
  const shortWordsElement = document.getElementById('short-words');

  for(let i=0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if(word.length < 4) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      shortWordsElement.appendChild(wordElement);
    }
  }
}

function displayLetterWords() {
  const letterWordsElement = document.getElementById('letter-words');

  for(let i=0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if(wordsArray[i].startsWith('w')) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      letterWordsElement.appendChild(wordElement);
    }
  }
}

function displayLongestWord() {
  const longestWordElement = document.getElementById('longest-word');

  let longestWord = wordsArray[0];

  for(let i=1; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longestWordElement.appendChild(wordElement);
    }
  }
}

function displayThirdWords() {
  const thirdWordsElement = document.getElementById('third-words');

  for(let i=0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (wordsArray[i] % 3 == 0) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      thirdWordsElement.appendChild(wordElement);
    }
  }
}

function displayUncommonWords() {
  let uncommonWordsElement = document.getElementById('uncommon-words');

  for(let word of wordsArray) {
    if (word != 'the' && word !='be' && word !='to' && word != 'of' && word != 'and' && word != 'a' && word != 'in' && word != 'that' && word != 'have' && word != 'I') {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      uncommonWordsElement.appendChild(wordElement);
    }
  }
}

// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  //displayLongWords();//

  displayShortWords();

  displayLetterWords();

  displayLongestWord();

  displayThirdWords();

  displayUncommonWords();

  // TODO: Call your functions here!
}