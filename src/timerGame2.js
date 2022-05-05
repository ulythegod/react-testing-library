function timerGame2(callback) {
    console.log('Ready timerGame2 ... go!');
    setTimeout(() => {
        console.log("Time's up -- stop!");
        callback && callback();
    }, 1000);
}

export default timerGame2;