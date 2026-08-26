import { useEffect, useState } from "react";

function Lifecycle() {
    const [n, setN] = useState(0);

    //initial when gets born 
    //when n changes

    useEffect(() => {
        console.log("N has changed")
    }, [n]);

    return (
        <div>
            <div>
                <button onClick={() => setN(n - 1)}>-</button>
                <b>{n}</b>
                <button onClick={() => setN(n + 1)}>+</button>
            </div>
            <EvenOrOdd n={n} />
        </div>
    );
}

function EvenOrOdd(props) {
    const { n } = props;
    if (n % 2 === 0) {
        return <EvenComponent />;
    }
    return <OddComponent />;
}

function EvenComponent () {
    return (
        <div>
            <h1>Even</h1>
        </div>
    );
}

function OddComponent () {

    //empty dependancy
    useEffect(() => {
        return () => {
            console.log("Odd component is being removed");
        }//called when component is being removed
    }, []);

    return (
        <div>
            <h1>Odd</h1>
        </div>
    );
}

export default Lifecycle;