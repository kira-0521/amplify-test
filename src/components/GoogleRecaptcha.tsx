import axios from 'axios'
import React, { useCallback, useEffect } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { BASE_URL } from '../const'

export const GoogleRecaptchaComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available')
      return
    }

    const token = await executeRecaptcha('yourAction')
    // await axios
    //   .post(`${BASE_URL}/token`, {
    //     token,
    //   })
    //   .then((res) => console.log(res.data))
    await axios.post('http://127.0.0.1:8000/token', {
      token,
      action: 'yourAction',
    })
  }, [executeRecaptcha])

  // useEffect(() => {
  //   handleReCaptchaVerify()
  // }, [handleReCaptchaVerify])
  return (
    <button id='button-verify' onClick={handleReCaptchaVerify}>
      Verify recaptcha
    </button>
  )
}
