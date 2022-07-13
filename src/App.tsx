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
  const [isScript, setIsScript] = useState(false)
  const [captchaDom, setCaptchaDom] = useState(null)

  useEffect(() => {
    const head = document.getElementsByTagName('head')
    const config = { attributes: true, childList: true, subtree: true }
    const cb = () => {
      const ary = Array.from(head[0].children)
      if (ary.find((child) => child.id === 'google-recaptcha-v3')) {
        setIsScript(true)
      }
    }
    const observer = new MutationObserver(cb)
    observer.observe(head[0], config)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (isScript) {
      const btn = document.getElementById('button-verify')
      const captcha =
        document.querySelector<HTMLDivElement>('.grecaptcha-badge')
      if (captcha) {
        captcha.style.position = 'relative'
        console.log(captcha)
        btn?.after(captcha)
      }
    }
  }, [isScript])

  return (
    <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY} language='japanese'>
      <div className='App'>
        app
        <GoogleRecaptchaComponent />
        {/* <button onClick={handleSubmit}>クリック</button> */}
      </div>
    </GoogleReCaptchaProvider>
  )
}

export default App
