import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
import App from './app/App'
// import { store } from './app/store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}>*/}
    <Router>
      <App />
    </Router>

    {/* </Provider>*/}
  </React.StrictMode>,
  document.getElementById('root')
)
