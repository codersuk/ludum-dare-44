/*
This is a utility page to update and bank the score.
 */

var start, end;

function startTimer(){

//    Start timer
    start = new Date();
    console.log('Start Timer')

}

function stopTimer(){

    end = new Date();
    let output = end.getTime()-start.getTime();
    //Bank the time
    GAME_TIME += output;
    console.log(`Totle Time ${GAME_TIME}`);

}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * max) + min;
}

function isObjectNotNull(object) {
	return typeof object !== 'undefined';
}