const Demo = () => {
  const clickHandler = async () => {
    const response = await fetch(
      "https://delighted-meals-default-rtdb.firebaseio.com/Mocktails.json"
    );
    const data = await response.json();
    for (let item of Object.entries(data)) {
      console.log(item);
    }
  };
  return <button onClick={clickHandler}>Click me !</button>;
};

export default Demo;
