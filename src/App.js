import './App.css';
import './index.css';
import Home from './components/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import ProjectInfo from './components/ProjectInfo';
function App() {
  return (

    <>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/projectinfopage/:PName' element={<ProjectInfo />} />

      </Routes>

    </>
  );
}

export default App;
