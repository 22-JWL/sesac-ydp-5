import { useState } from "react";

export default useToggle(initValue = false) {
    //value: 토글의 상채
    const [value, setValue] = useState(initValue)

    const toggleValue =() => {
        setValue(!value);
    }

    return [value, toggleValue];
}