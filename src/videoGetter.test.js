import { videoGetter, audio } from "./videoGetter";

test('plays video', () => {
    const spy = jest.spyOn(videoGetter, 'play', 'get');
    const isPlaying = videoGetter.play;

    expect(spy).toHaveBeenCalled();
    expect(isPlaying).toBe(true);

    spy.mockRestore();
});

test('plays audio', () => {
    const spy = jest.spyOn(audio, 'volume', 'set');
    audio.volume = 100;

    expect(spy).toHaveBeenCalled();
    expect(audio.volume).toBe(100);

    spy.mockRestore();
});