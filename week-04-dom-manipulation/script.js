
// When this function is called, it takes the values from the inputs and adds
// them to the outputs.
function fillOutputs() {

  // Get the adjective input element
  const adjectiveOneInput = document.getElementById('adjective-one-input');
  // Get the text from the input element
  const adjectiveOne = adjectiveOneInput.value;

  // Get the adjective output element
  const adjectiveOneOutput = document.getElementById('adjective-one-output');
  // Set the text of the input element
  adjectiveOneOutput.innerText = adjectiveOne;

    //Adjective2 input
  const adjectiveTwoInput = document.getElementById('adjective-two-input');
  const adjectiveTwo = adjectiveTwoInput.value;
    //Adjective2 output
  const adjectiveTwoOutput = document.getElementById('adjective-two-output');
  adjectiveTwoOutput.innerText = adjectiveTwo;

   //Adjective3 input
  const adjectiveThreeInput = document.getElementById('adjective-three-input');
  const adjectiveThree = adjectiveThreeInput.value;
    //Adjective3 output
  const adjectiveThreeOutput = document.getElementById('adjective-three-output');
  adjectiveThreeOutput.innerText = adjectiveThree;

    //Noun1 input
  const nounOneInput = document.getElementById('noun-one-input');
  const nounOne = nounOneInput.value;
    //Noun1 output
  const nounOneOutput = document.getElementById('noun-one-output');
  nounOneOutput.innerText = nounOne;

    //Noun2 input
  const nounTwoInput = document.getElementById('noun-two-input');
  const nounTwo = nounTwoInput.value;
    //Noun2 output
  const nounTwoOutput = document.getElementById('noun-two-output');
  nounTwoOutput.innerText = nounTwo;

    //Noun3 input
  const nounThreeInput = document.getElementById('noun-three-input');
  const nounThree = nounThreeInput.value;
    //Noun3 output
  const nounThreeOutput = document.getElementById('noun-three-output');
  nounThreeOutput.innerText = nounThree;

    //Verb input
  const verbInput = document.getElementById('verb-input');
  const verb = verbInput.value;
    //Verb output
  const verbOutput = document.getElementById('verb-output');
  verbOutput.innerText = verb;

  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';
}