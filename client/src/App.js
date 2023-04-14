
import './App.css';
import About from './components/home/About/About';
import Help from './components/home/Help/Help';
import Home from './components/home/Home';
import Instruction from './components/home/Instrution/Instruction';
import Quiz from './components/quiz/Quiz';
import Result from './components/result/Result';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Authenticaion/Register';
import Username from './components/Authenticaion/Username';



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route exact path="quiz" element={<Quiz />} />
          <Route exact path="result" element={<Result />} />
          <Route path="/instruction" element={<Instruction/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/help' element = {<Help/>}/>
          <Route path='/Username' element={<Username/>}/>
          <Route path='/Register' element={<Register/>}/>
          

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
