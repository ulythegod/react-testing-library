import infiniteTimerGame from './infiniteTimerGame';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
//запуск отложенных таймеров
describe('infiniteTimerGame', () => {
    test('shedules a 10-second timer after 1 second', () => {
        const callback = jest.fn();
    
        infiniteTimerGame(callback);
    
        // At this point in time, there should have been a single call to
        // setTimeout to schedule the end of the game in 1 second.
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    
        // Fast forward and exhaust only currently pending timers
        // (but not any new timers that get created during that process)
        jest.runOnlyPendingTimers();
    
        // At this point, our 1-second timer should have fired its callback
        // expect(callback).toBeCalled();
    
        // // And it should have created a new timer to start the game over in
        // // 10 seconds
        // expect(setTimeout).toHaveBeenCalledTimes(2);
        // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
    });
});