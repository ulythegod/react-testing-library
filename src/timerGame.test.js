import timerGame from './timerGame';

jest.useFakeTimers();
//запуск всех таймеров
test('calls the callback after 1 second', () => {
    const callback = jest.fn();

    timerGame(callback);

    //в этот момент времени, колбэк не должен быть вызван 
    expect(callback).not.toBeCalled();

    //перемтка вперед пока все таймеры не выполнятся
    jest.runAllTimers();

    //теперь наш колбэк должен быть вызван
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
});