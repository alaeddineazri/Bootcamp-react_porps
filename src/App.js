
import './App.css';
import Profilecomp from './profile/Profilecomp';
import  Image  from './profile/Image.png';
function App() {
  const handleName = (e, fullName) => {e.preventDefault();alert(fullName);};
  return (
    <div  style={{
      display: "flex",
      margin: "30px",
      marginTop:"10%",
      justifyContent:"center"}}>
    
      <Profilecomp
      img={Image}
      fullName={"Azri Alaeddine"}
      profession = {"electromechanical engineer"}
      bio={`(β βΏβ)γ‘π»
      π NEVER GIVE UPπ
      πΆππ²ππ¨βπΌβ»οΈ
      π¨βπ»Dream computer expert
      #loveprogramming
      Creative Web Developerπ»
      Graphic Designer
      π€π§πΆ`}
      onHandleName={handleName}
      ></Profilecomp>
    </div>
  );
}

export default App;



