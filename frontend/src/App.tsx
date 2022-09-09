import Header from './Components/Header';
import SalesCard from './Components/SalesCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return(
    <>
      <ToastContainer />
      <Header />
      <main>
        <SalesCard />
      </main>
    </>
  )
}

export default App
