import './App.css'
import { Banner } from "./components/Banner/Banner";
import { NavBar } from "./components/NavBar/NavBar";
import { RowPost } from './components/RowPost/RowPost';
import { originals, actions, ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from './urls';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={actions} title='Accion' isSmall/>
      <RowPost url={ComedyMovies} title='Comedy Movies' isSmall/>
      <RowPost url={HorrorMovies} title='Horror Movies' isSmall/>
      <RowPost url={RomanceMovies} title='Romance Movies' isSmall/>
      <RowPost url={Documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
