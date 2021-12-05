import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
import Title from './components/title'
import Message from './components/message'
import Car from './components/car'
import LunctiononClick from './components/functiononClick'
import ClassClick from './components/classClick'
import EventBind from './components/EventBind'
import Parent from './components/Parent'
import Suu from './components/Suu';
import ConditionElement from './components/ConditionElement'
import TernaryCondition from './components/TernaryCondition'
import ShortCircuitCondition from './components/ShortCircuitCondition'
import NameList from './components/NameList'
import NameListMap from './components/NameListMap';
import ListExercise from './components/ListExercise';
import Stylesheet from './components/Stylesheet';
import Stylesheet2 from './components/Stylesheet2';
import Inline from './components/Inline';
import './appstyle.css'
import style from './appstyle.module.css'






function App() {
  return (
    <div className="App">
      <h1 className='error'>error</h1>
      <h1 className={style.success}>SUCCESS</h1>
      


       {/*<Stylesheet2 color />
    <Stylesheet color font />
    <Stylesheet color name="Endora." font/>
    <Stylesheet c2  name= "Darrin."/>
       <Stylesheet name="Samantha." font color/>*/}
    
   
    
     {/* 
     <Title season="One"/>
     <Greet name="Larry Tate" character="Darrin' Boss" />
     <Greet name="Darrin Stephens" character="Samantha' husband"  />
     <Welcome name="Samatha" character = " Darrin' wife" />
     <Welcome name="Endora" character = " Samatha'Mother" />
      */}
      
    </div>
  );
}

export default App;
