import React, { useMemo, useState } from "react";

const Hooks = () => {

    const [counter, setCounter] = useState(0);
    let total = useMemo(() => {
        let result = 0;
        for(let i=0; i <= 10; i++){
            result += i;
            
        }
        return result;
        
    }, [counter]);

return (
    <div>
    <p>Страница для работы с хуками оптимизации</p>
    <div>
        <p>Total - {total}</p>
        <p>счетчик - {counter}</p>
        <button onClick={() => setCounter(() => counter + 1)}>увеличить счетчик</button>
    </div>
    </div>
)
};

export default Hooks;