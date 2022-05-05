function infiniteTimerGame(callback) {
    console.log('Ready infiniteTimerGame....go!');

    console.log("callback", callback);
    setTimeout(() => {
      console.log("Time's up! 10 seconds before the next game starts...");
      callback && callback();
  
      // Schedule the next game in 10 seconds
      setTimeout(() => {
        infiniteTimerGame(callback);
      }, 10000);
    }, 1000);
}

export default infiniteTimerGame;