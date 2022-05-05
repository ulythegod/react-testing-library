import timerGame2 from './timerGame2';

//advance timers by time
jest.useFakeTimers();
it('calls the callback after 1 second via advanceTimersByTime', () => {
    const callback = jest.fn();

    timerGame2(callback);

    //в это время коллбэк не должен быть вызван
    expect(callback).not.toBeCalled();

    //перемотка пока все таймеры не выполнятся
    jest.advanceTimersByTime(1000);

    //теперь коллбэк должен быть вызван
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
});