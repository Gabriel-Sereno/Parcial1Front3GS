function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [userName, setUserName] = useState("");
  const [animal, setAnimal] = useState("");

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeAnimal = (e) => setAnimal(e.target.value);
  
  const onSubmitForm = (e) => {
    e.preventDefault();
    
    alert(`Bienvenido: ${userName}`);
    };
  return (
    <div className="App">
      <h1>Elige un animal</h1>
      <form onSubmit={onSubmitForm}>
{

  
}
<input
type="text"
placeholder="Tu Nombre"
value={userName}
onChange={onChangeUserName}
/>
<input
type="text"
placeholder="Elige un Animal"
value={animal}
onChange={onChangeAnimal}
/>
{


}
<button type="submit">Enviar</button>



</form>
    </div>
  );
}

export default App;
