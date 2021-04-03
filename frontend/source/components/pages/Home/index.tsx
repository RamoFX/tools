import React, { MouseEventHandler } from 'react'
import { useHistory } from 'react-router-dom'
import TitlesContainer from '@containers/Titles'
import PageContainer from '@containers/Page'
import ButtonElement, { ButtonType, ButtonSize } from '@elements/Button'

const Home = () => {
  const history = useHistory()

  const clickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    history.push('/tools')
  }

  return (
    <PageContainer className='page-home text-center rows ai-c jc-c'>
      <TitlesContainer>
        <h1 className='font-weight-bold'>Tools for development</h1>
        <h2>Fast &amp; easy!</h2>
      </TitlesContainer>
      <ButtonElement text="Let's start" type={ ButtonType.Elevatable } clickHandler={ clickHandler } />
    </PageContainer>
  )
}

export default Home
