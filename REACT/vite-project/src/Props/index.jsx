function Parent() {
    
    const str = "Hello";
    const amount =20000;
    const isOk = true;
    const notSet= null;
    //object
    const car = {
        model: "Toyota Yaris",
        manufacture: "Toyota",
        engine:{
            type: "2.0L inline 3",
            cc: 2000,
        },
    };

    const colors = ["blue", "green", "yellow"];

    return(
        <div>
            <h1> I am the parent component</h1>
            <Child str={str} amountInNumber= {amount} isOk= {isOk} notSet= {notSet}/>
            <Child2
                str={str}
                amountInNumber={amount}
                isOk={isOk}
                notSet={notSet}
                car={car}
                colors={colors}
                obj={{ name: "", value: "" }} //forget ensure double brackets
            />
            <Child3 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
        </div>
    );
}

function Child(props) {
    console.log(props);
    return (
        <div>
            <h1> I am the child component</h1>
            <ul>
                <li>
                    Favourite string <b>{props.str}</b>
                 </li>
                <li>
                    Amount <b>{props.amountInNumber}</b>
                 </li>
                 <li>
                     isOk <b>{props.isOk}</b>
                </li>
                 <li>
                    isOk <b>{String(props.isOk)}</b>{" "}
            {/*
            for booleans convert them to string before displaying
          */}
                </li>
                 <li>
                    Not set <b>{props.notSet}</b>
                </li>
            </ul>
        </div>
    );
}

function Child3(props) {
  return (
    <div>
      <h1>I am the child 3 component</h1>
    </div>
  );
}

// using destructing
function child2(props) {
     /*
    key:value
    const str=props.str
    const amountInNumber=props.amountInNumber
    const amount=props.amountInNumber
    key:number<>
    key:<string variable naming> "hi boss":34
    const {str,amountInNumber}=props
  */
    const { str, amountInNumber, isOk, notSet } = props;
  return (
    <div>
      <h1>I am the child 2 component</h1>
      <ul>
        <li>
          Favourite string <b>{str}</b>
        </li>
        <li>
          Amount <b>{amountInNumber}</b>
        </li>
        <li>
          isOk <b>{isOk}</b>
        </li>
        <li>
          isOk <b>{String(isOk)}</b>{" "}
          {/*
            for booleans convert them to string before displaying
          */}
        </li>
        <li>
          Not set <b>{notSet}</b>
        </li>
      </ul>
    </div>
  );
}

// display props using prop keyword
//direct destructuring
function Child2({ str, amountInNumber, isOk, notSet, car, colors, obj }) {
  return (
    <div>
      <h1>I am the child 2 component</h1>
      <ul>
        <li>
          Favourite string <b>{str}</b>
        </li>
        <li>
          Amount <b>{amountInNumber}</b>
        </li>
        <li>
          isOk <b>{isOk}</b>
        </li>
        <li>
          isOk <b>{String(isOk)}</b>{" "}
        </li>
        <li>
          Not set <b>{notSet}</b>
        </li>
        <li>
          Car model <b>{car.model}</b>
        </li>
        <li>
          Car manufacturer <b>{car.manufacture}</b>
        </li>
        <li>
          Engine type <b>{car.engine.type}</b>
        </li>
        <li>
          Engine cc <b>{car.engine.cc}</b>
        </li>
        <li>
          Colors <b>{colors.join(", ")}</b>
        </li>
      </ul>
    </div>
  );
}

export default Parent