// Array of objects representing a todo list.
// Modify this array to contain your own list.
const gameArray = [
  {name: 'Halo: Combat Evolved', dev: 'Bungie', year: 2001},
  {name: 'Halo Infinite', dev: '343 Industries', year: 2021},
  {name: 'Team Fortress 2', dev: 'Valve', year: 2007},
  {name: 'Portal', dev: 'Valve', year: 2007},
  {name: 'Portal 2', dev: 'Valve', year: 2011},
  {name: 'UNDERTALE', dev: 'Toby Fox', year: 2015},
  {name: 'DELTARUNE', dev: 'Toby Fox', year: 2018},
  {name: 'Dishonored', dev: 'Arkane Studios', year: 2012},
  {name: 'Half-Life', dev: 'Valve', year: 1998},
  {name: 'Half-Life 2', dev: 'Valve', year: 2004},
  {name: 'Black Mesa', dev: 'Crowbar Collective', year: 2020},
];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.
  // Modify this to sort your data by a different field, or just delete it.
  gameArray.sort((a, b) => compare(a.name, b.name));

  loadTable();
  loadOldestGame();
  loadLatestGame();
  loadAverageYear();
}

// Adds a game to the array and reloads the page content.
function addNewGame() {
  const newGameName = document.getElementById('game-input').value;
  const newDev = document.getElementById('dev-input').value;
  const newYear = document.getElementById('year-input').value;
  const newGame = {name: newGameName, dev: newDev, year: newYear };
  gameArray.push(newGame);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Index'));
  headerRowElement.appendChild(createElement('th', 'Game'));
  headerRowElement.appendChild(createElement('th', 'Developer'));
  headerRowElement.appendChild(createElement('th', 'Year'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < gameArray.length; i++) {
    const game = gameArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', game.name));
    rowElement.appendChild(createElement('td', game.dev));
    rowElement.appendChild(createElement('td', game.year));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest task.
function loadShortestTask(){
  // Assume the first task is shortest
  let shortestTask = gameArray[0];

  // Starting with the second task, look for a shorter task
  for (let i = 1; i < gameArray.length; i++) {
    const task = gameArray[i];
    // If this task is shorter than the previous shortest, it's now the shortest
    if(game.year < shortestTask.time) {
      shortestTask = game;
    }
  }
  document.getElementById('shortest-task').innerText = shortestTask.label;
}

// Displays the name of the oldest game.
function loadOldestGame(){
  let oldestGame = gameArray[0];

  for (let i = 1; i < gameArray.length; i++) {
    const game = gameArray[i];
    if(game.year < oldestGame.year) {
      oldestGame = game;
    }
  }
  document.getElementById('oldest-game').innerText = oldestGame.name;
}

// Displays the name of the latest game.
function loadLatestGame(){
  let latestGame = gameArray[0];

  for (let i = 1; i < gameArray.length; i++) {
    const game = gameArray[i];
    if(game.year > latestGame.year) {
      latestGame = game;
    }
  }
  document.getElementById('latest-game').innerText = latestGame.name;
}

// Displays the average year.
function loadAverageYear(){
  let total = 0;
  for (let i = 0; i < gameArray.length; i++) {
    const game = gameArray[i];
    total += Number(game.year);
  }
  let average = Math.round(total / gameArray.length);
  document.getElementById('average-year').innerText = average;
}

// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}


//- 10 favorite video games -- name, developer, genre

//- Array with 10 objects, at least 3 fields in each object
//- Foor loop that builds page HTML based on values in the array
//- For loop that picks the "best" object and displays it
//- For loop that calculates a total or average
//- Input fields that let user add a new item to the array -- item should be displayed in page along with first 10 items, and any calculated sections