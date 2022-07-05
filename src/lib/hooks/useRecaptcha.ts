import { useCallback } from 'react'

const ID = 'google-recaptcha-v3' // script タグのIDとして使用する任意の文字列
const SITE_KEY = import.meta.env.RECAPTCHA_SITE_KEY // reCAPTCHA の site key

export type UseReCaptcha = {
  /**
   * reCAPTCHA の読み込みを非同期で行う
   */
  load: () => void

  /**
   * reCAPTCHA の読み込みが完了するのを待つ
   */
  ready: () => Promise<ReCaptchaV2.ReCaptcha>

  /**
   * reCAPTCHA を実行する
   */
  execute: (action: ReCaptchaV2.Action) => Promise<string>
}

export const useRecaptcha = (): UseReCaptcha => {
  // reCaptchaのためのscriptタグを読み込む
  const load = useCallback(() => {
    if (document.getElementById(ID)) {
      return
    }

    const head = document.getElementsByTagName('head')[0]
    const script = document.createElement('script')
    script.async = true
    script.type = 'test/javascript'
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`
    script.id = ID
    head.appendChild(script)
  }, [])

  const reacy = useCallback(() => {}, [])
}
