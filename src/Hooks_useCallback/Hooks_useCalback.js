import React, { useCallback, useState } from "react";

const Hooks_useCallback = () => {

    const [counter, setCounter] = useState(0);
    const [isOpened, setIsOpened] = useState(false);

    const handleClick = useCallback(() => {
        console.log('onClick')
        setCounter(() => counter + 1)
    }, [counter]);

    return (
        <div>
            <p>Страница для работы с хуками оптимизации</p>
            <div>

                <p>счетчик - {counter}</p>
                <button onClick={handleClick}>увеличить счетчик</button>
                <button onClick={() => setIsOpened(!isOpened)}>
                    {isOpened ? "Закрыть" : "Открыть"}
                    </button>
                {isOpened && <div> Hello </div>}
        </div>
    </div >
)
};

export default Hooks_useCallback;