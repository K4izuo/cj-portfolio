import { Routes, Route } from 'react-router-dom'
import NotFound from './NotFound/NotFound'
import MainPortfolio from './pages/MainPortfolio'

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<MainPortfolio />} />
    </Routes>
  )
}

export default App