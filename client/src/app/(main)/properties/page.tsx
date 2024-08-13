import React from 'react'
import PropertiesHeader from './_components/PropertiesHeader'
import SuggestionSection from './_components/SuggestionSection'

export default function page() {
  return (
    <main className='relative max-w-[60rem] mx-auto'>
      <PropertiesHeader />
      <SuggestionSection />
    </main >
  )
}
