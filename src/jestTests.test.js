import rerender from 'react-test-renderer';
import Hello from './hello';
import timerGame from './timerGame';

it('renders correctly', () => {
    const tree = rerender
        .create(<Hello name="Sierra" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

//enable fake timers
test('waits 1 second before ending the game', () => {
    timerGame();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
