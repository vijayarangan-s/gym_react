import Routes  from './components/Routes';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function App() {
 
  return (
    <div>
      <Routes/>
    </div>
  );
}

export default App;
