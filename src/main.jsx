import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './components/footer.jsx'
import MainContainer from './components/mainContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainContainer />
    <Footer />
  </React.StrictMode>,
)
