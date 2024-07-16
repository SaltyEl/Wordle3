import {WordleRow} from './wordleRow.js';
import * as Helpers from './helpers.js';
import {generateRandWord} from './generateWord.js';
import {User} from './user.js';

var wordOfTheDay = generateRandWord();
$('.header').text(wordOfTheDay);

var user1 = new User("Blake", "04/16/1988", "SaltyEl", "Password!");
$('#First-place').text(user1.getName);

var allBlocks = Array.from($(".wordle-block"));

let row1 = new WordleRow(allBlocks.slice(0, 5));
let row2 = new WordleRow(allBlocks.slice(5, 10));
let row3 = new WordleRow(allBlocks.slice(10, 15));
let row4 = new WordleRow(allBlocks.slice(15, 20));
let row5 = new WordleRow(allBlocks.slice(20, 25));
let row6 = new WordleRow(allBlocks.slice(25, 30));

var blockListRow1 = row1.blockList;
var blockListRow2 = row2.blockList;
var blockListRow3 = row3.blockList;
var blockListRow4 = row4.blockList;
var blockListRow5 = row5.blockList;
var blockListRow6 = row6.blockList;

var blockListRows = [blockListRow1, blockListRow2, blockListRow3, blockListRow4, blockListRow5, blockListRow6];


var currentLetterIndex = 0;
var currentRow = blockListRows[0];
var currentRowIndex = 0;
var gameOver = false;
var title = $('.header');

document.addEventListener("keydown", (event) => {
    Helpers.handleKeyDown(event, {
        currentLetterIndex,
        currentRow,
        currentRowIndex,
        blockListRows,
        wordOfTheDay,
        gameOver,
        setCurrentLetterIndex: (value) => currentLetterIndex = value,
        setCurrentRow: (value) => currentRow = value,
        setCurrentRowIndex: (value) => currentRowIndex = value,
        setGameOver: (value) => gameOver = value,
        setTitle: (value) => title.text(value)
    })
});