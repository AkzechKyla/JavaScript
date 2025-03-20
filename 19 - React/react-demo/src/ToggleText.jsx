import { useState } from "react";

function ToggleText() {
    const [isVisible, setIsVisible] = useState(0)

    return <>
        {isVisible && <p>Hello world</p>}
        <button onClick={() => setIsVisible(!isVisible)}>Click Me!</button>
    </>
}

export default ToggleText;
