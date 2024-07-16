export function handleKeyDown(event, {
    currentLetterIndex,
    currentRow,
    currentRowIndex,
    blockListRows,
    wordOfTheDay,
    gameOver,
    setCurrentLetterIndex,
    setCurrentRow,
    setCurrentRowIndex,
    setGameOver,
    setTitle
}) {
    if (gameOver){
        return;
    }
    var letterRegex = /^[a-zA-Z]$/;
    if (letterRegex.test(event.key)) {
        if (currentLetterIndex < 5){
            currentRow[currentLetterIndex].textContent = event.key.toUpperCase();
            setCurrentLetterIndex(currentLetterIndex + 1);
        }
    }
    if (event.key === 'Enter' && currentLetterIndex === 5){
        var isWin = compareWordsAndAddColor(currentRow, wordOfTheDay);
        if (isWin){
            setGameOver(true);
            setTitle("WINNER WINNER, CHICKEN DINNER");
        }
        if (currentRowIndex < blockListRows.length - 1){
            setCurrentRowIndex(currentRowIndex + 1);
            setCurrentRow(blockListRows[currentRowIndex + 1]);
            setCurrentLetterIndex(0);
        }
        else {
            setGameOver(true);
            setTitle("Game Over, the word was " + wordOfTheDay);
        }
    }
    if (event.key === 'Backspace' && currentLetterIndex > 0) {
        setCurrentLetterIndex(currentLetterIndex - 1);
        currentRow[currentLetterIndex - 1].textContent = '';
    }
}

function compareWordsAndAddColor(currentRow, wordOfTheDay){
    var totalGreens = 0;
    for (let i = 0; i < wordOfTheDay.length; i++){
        var currLetterID = '#' + currentRow[i].textContent;
        if (currentRow[i].textContent === wordOfTheDay[i]){
            currentRow[i].classList.add('background-green');
            if ($(currLetterID).hasClass('background-yellow')){
                $(currLetterID).removeClass('background-yellow');
            }
            $(currLetterID).addClass('background-green');
            totalGreens++;
            if (totalGreens === 5){
                return true;
            }
        }
        else if (wordOfTheDay.includes(currentRow[i].textContent)){
            currentRow[i].classList.add('background-yellow');
            if (!$(currLetterID).hasClass('background-green')){
                $(currLetterID).addClass('background-yellow');
            }
        }
        else {
            $(currLetterID).addClass('background-black white-letter');
        }
    }
    return false;
}