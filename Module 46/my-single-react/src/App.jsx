import './App.css'
import Controlledaction from './Compounds/Controlledaction';
import Formaction from './Compounds/Formaction/Formaction';
import Uncontroled from './Compounds/Uncontroled/Uncontroled';
import HookFrom from './HookForm/HookFrom';



function App() {

  const onclick_work = (e) => {

    e.preventDefault();

    // console.log("clicked on the button is done");
    //here we  are using the e.target.[input field].value
    console.log(e.target.name.value);
    console.log(e.target.email.value);

  }



  return (
    <>
      <div>

        <form onSubmit={onclick_work}>

          <input type="text" placeholder='enter your name' name="name" />
          <input type="email" placeholder='enter your name' name="email" />
          <br />
          <input type="submit" value="submit" />
        </form>

        <br />

        {/* <Formaction></Formaction>
        <Controlledaction></Controlledaction>

        <Uncontroled></Uncontroled> */}
      
        <HookFrom></HookFrom>

      </div>
    </>
  )


}

export default App
