import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, ProductDetail, Login, Purchases,} from './pages'
import { LoadingScreen, NavBar } from './components'
import { useSelector } from 'react-redux/es/exports'
import './App.css'

function App() {
  const isLoading = useSelector((state) => state.isLoading)

  return (
      <HashRouter>
        <NavBar/>
        {isLoading && <LoadingScreen/>}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<ProductDetail/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/purchases' element={<Purchases/>} />
        </Routes>
      </HashRouter>
  )
}

export default App
