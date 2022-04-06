//Basic Example

import * as React from 'react';

//React testing library хорошо работает с реакт хуками и классами
//тесты будут одинаковыми вне зависимости от типа компонента
function HiddenMessage({children}) {
    const [showMessage, setShowMessage] = React.useState(false);

    return (
        <div>
            <label htmlFor='toggle'>Show message</label>
            <input 
                id='toggle'
                type="checkbox"
                onChange={e => setShowMessage(e.target.checked)}
                checked={showMessage}
            />
            {showMessage ? children : null}
        </div>
    )
}

export default HiddenMessage;