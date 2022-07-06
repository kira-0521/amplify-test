import { useCallback, useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useRecaptcha } from './lib/hooks/useRecaptcha'
import axios from 'axios'
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3'
import { SITE_KEY } from './const'
import { GoogleRecaptchaComponent } from './components/GoogleRecaptcha'

function App() {
  // const [load, ready, execute] = useRecaptcha()

  // useEffect(() => load(), [])

  // const handleSubmit = () => {
  //   execute({ action: 'click' }).then((token) => {
  //     axios.get('http://127.0.0.1:8000').then((res) => {
  //       console.log(res.data)
  //     })
  //   })
  // }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={SITE_KEY}
      scriptProps={{
        async: true, // optional, default to false,
        defer: false, // optional, default to false
        appendTo: 'head', // optional, default to "head", can be "head" or "body",
      }}>
      <div className='App'>
        app
        <GoogleRecaptchaComponent />
        {/* <button onClick={handleSubmit}>クリック</button> */}
      </div>
    </GoogleReCaptchaProvider>
  )
}

export default App
