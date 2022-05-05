const mockPerformanceMark = jest.fn();

test('allows mocking `performance.mark()`', () => {
    jest.useFakeTimers({doNotFake: ['performance']});

    window.performance.mark = mockPerformanceMark;
    expect(window.performance.mark).toBe(mockPerformanceMark);
});