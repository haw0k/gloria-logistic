// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../../pages_/projects/[id]'
import ns0 from '../../locales/ru/common.json'

const namespaces = { 'common': ns0 }

export default function Page(p){
  return (
    <I18nProvider 
      lang="ru" 
      namespaces={namespaces}  
      internals={{"isStaticMode":true,"redirectToDefaultLang":false,"defaultLanguage":"ru"}}
    >
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

if(C && C.getInitialProps) {
  Page.getInitialProps = ctx => C.getInitialProps({ ...ctx, lang: 'ru'})
}





export * from '../../pages_/projects/[id]'
