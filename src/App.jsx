import { useState } from 'react'
import { useLocation } from "react-router-dom";
import Page from './components/Page';
import './App.css'

function App() {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <>
     <main>
        <Page currentPage={currentPage} />
      </main>
    </>
  )
}

export default App
