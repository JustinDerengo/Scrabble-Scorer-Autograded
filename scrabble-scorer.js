// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let word = "";

function initialPrompt() {
   
   return word = input.question("Let's play some scrabble! \n Enter a word: ");
   
};

let simpleScorer = function(word) {

   let letterPoints = word.length;

   return letterPoints;
}

let vowelBonusScorer = function(word) {
   word = word.toUpperCase();
   let letterPoints = 0;
   let vowels = ['A', 'E', 'I', 'O', 'U'];

   for (i = 0; i < word.length; i ++) {

      if (vowels.includes(word[i])) {

         letterPoints += 3;
      } else {
         letterPoints += 1;
      }
   }
   return letterPoints;
}

let scrabbleScorer = function(word) {
   word = word.toLowerCase();
   let totalScore = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (item in newPointStructure) {
 
		 if (word[i].includes(item)) {
			
         totalScore += newPointStructure[item];
		 }
 
	  }
	}
	return totalScore;
};

const scoringAlgorithms = [
   {name: "Simple Score", description: "Each letter is worth 1 point.", scorerFunction: simpleScorer},
   {name: "Bonus Vowels", description: "Vowels ar 3 pts, consonants are 1 pt", scorerFunction: vowelBonusScorer},
   {name: "Scrabble", description: "The traditional scoring algorithm", scorerFunction: scrabbleScorer}
]

function scorerPrompt(word) {
   console.log(`Here are your scoring options:
   0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
   1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
   2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}`);
   let choice = Number(input.question("Please choose how you would like to score your word (0, 1, or 2): "));
   
   // while (choice != (0 || 1 || 2)) {
   //    Number(input.question("Invalid option. Please choose 0, 1, or 2 to score your word: "));
   // }
   if (choice == 0) {
      return scoringAlgorithms[0].scoringFunction(word);
   } else if (choice == 1) {
      return scoringAlgorithms[1].scoringFunction(word);
   } else {
      return scoringAlgorithms[2].scoringFunction(word);
   }
}

function transform(obj) {
   let newObj = {};
   for (item in obj) {
      for (i = 0; i < obj[item].length; i++) {
        newObj[obj[item][i].toLowerCase()]= Number(item);
      }
   }
   
   return newObj;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   let score = 0;
   // console.log(oldPointStructure)
   // console.log (newPointStructure);
   let answer = initialPrompt();
   score = console.log(scorerPrompt(answer));
   return score;
   

   
   // return console.log(oldScrabbleScorer(initialPrompt()));

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
