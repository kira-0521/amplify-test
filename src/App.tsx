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
  const onClickPutTest = async () => {
    const result = await axios.put('http://127.0.0.1:8000/put', {
      data: 'put',
    })
    console.log('result', result)
  }

  const onClickPostTest = async () => {
    const result = await axios.post('http://127.0.0.1:8000/post', {
      data: 'post',
    })
    console.log('result', result)
  }

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
        <button onClick={onClickPutTest}>PUTテスト</button>
        <button onClick={onClickPostTest}>POSTテスト</button>
      </div>
    </GoogleReCaptchaProvider>
  )
}

export default App
