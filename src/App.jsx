
import { RouterProvider} from "react-router";
import { Routes } from './routes/index.jsx';
import { Provider } from "react-redux";
import store from './redux/store.js';
import './App.css'

function App() {
  

  return (
    <div className='app'>
      <Provider store = {store}>
        <RouterProvider router={Routes}/>
      </Provider>
     
    </div>
  )
}

export default App
