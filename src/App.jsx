import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Spinner
import { Spinner } from "@material-tailwind/react";


function App() {

  // Lazy loading
  const Home = lazy(() => import('./pages/Home'))
  const Console = lazy(() => import('./pages/Browser'))

  return (
    <Routes>
      <Route path='/'
        element={
          <Suspense fallback={
            <div className='flex items-center justify-center h-screen'>
              <Spinner color='blue' className='w-12 h-12' />
            </div>
          }>
            <Home />
          </Suspense>
        }
      />
      <Route path='/browser'
        element={
          <Suspense fallback={
            <div className='flex items-center justify-center h-screen'>
              <Spinner color='blue' className='w-12 h-12' />
            </div>
          }>
            <Console />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default App
