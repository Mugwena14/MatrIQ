import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";

const BeatLoad = () => {

let override = {
    display: "block",
    color: "hsl(0, 0%, 10%)",
    zIndex: 9999,
    position: "relative",
    top: "50%",
    margin: "50px auto",
}

    return (
        <BeatLoader
        cssOverride={override}
        size={20}
        />
    )
}

export default BeatLoad;