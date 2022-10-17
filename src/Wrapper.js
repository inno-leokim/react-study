import React from "react";

function Wrapper({ children }) {
    const style = {
        border: '1px solid black',
        padding: '16px'
    };

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper;