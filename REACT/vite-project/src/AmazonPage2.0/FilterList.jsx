function FilterList(props) {
  //props ->
  //title
  //array of options[new,Renewed,user]
  //options[Adjustable Length,TangleFree,Anti-chev]
  const { title, options } = props;
  //props and mapping
  // Dynamic
  return (
    <div>
      <b>{title}</b>
      <div>
        {options.map((option, index) => {
          return (
            <div key={index}>
              <input type="checkbox" />
              <span>{option}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilterList;