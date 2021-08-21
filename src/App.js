
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
      bio={`(◠‿◕)メ👻
      🙂 NEVER GIVE UP😉
      🎶🔋📲🍗👨‍💼♻️
      👨‍💻Dream computer expert
      #loveprogramming
      Creative Web Developer💻
      Graphic Designer
      🖤🎧🎶`}
      onHandleName={handleName}
      ></Profilecomp>
    </div>
  );
}

export default App;



