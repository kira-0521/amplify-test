import React, { useCallback, useEffect } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export const GoogleRecaptchaComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available')
      return
    }

    const token = await executeRecaptcha('yourAction')
    console.log('token', token)
  }, [executeRecaptcha])

  useEffect(() => {
    handleReCaptchaVerify()
  }, [handleReCaptchaVerify])
  return <button onClick={handleReCaptchaVerify}>Verify recaptcha</button>
}
