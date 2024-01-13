import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { StateContext } from '../../store/estimator/contexts'
import { css } from '@emotion/react'
import { AppDesign } from './1AppDesign'
import { SignUpLogin } from './2SignUpLogin'
import { MapFunction } from './3MapFunction'
import { PhotosVideos } from './4PhotosVideos'
import { LiveChat } from './5LiveChat'
import { Payment } from './6Payment'
import { Notifications } from './7Notifications'
import { List } from './8List'
import { SearchBar } from './9SearchBar'
import { AvailableOffline } from './10AvailableOffline'
import { Advertising } from './11Advertising'
import { Admin } from './12Admin'
import { Submit } from './Submit'
import { PdfPrepareValues } from './PdfPrepareValues'
import { StepCaption } from './StepCaption'
import { Element } from 'react-scroll'
import { SuggestedNextPlatformLink } from './SuggestedNextPlatformLink'
import Shared from './shared'

const EH1 = styled.div`
  font-weight: 600;
  font-size: 36px;
  color: #333333;
  letter-spacing: 0.02em;
  margin: auto;
  text-align: center;
`

const EOrangeText = styled.div`
  display: contents;
  color: #fd7114;
`

const EBoldText = styled.div`
  font-weight: 600;
  display: contents;
`

const EH2 = styled.div`
  max-width: 688px;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.3px;
  color: #333333;
  margin: auto;
  font-weight: 500;
  margin-top: 20px;
  @media (max-width: 640px) {
    line-height: unset;
    letter-spacing: unset;
    letter-spacing: -0.04em;
  }
`

const EB = styled.span`
  display: contents;
  font-weight: 600;
`

const EDivider = styled.div`
  width: 100%;
  border-top: 1px solid #e9ebf2;
  margin-top: 34px;
  @media (max-width: 640px) {
    margin-top: 12px;
  }
`

const EButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`

const stepCaption1 = () => (
  <>
    1. Would you like Mulhollandbot to take care of your <EB>app design</EB>?
  </>
)
const stepCaption2 = () => (
  <>
    2. How will the users <EB>sign up</EB> and <EB>log in</EB> to your app?
  </>
)
const stepCaption3 = () => (
  <>
    3. Would you like to add a <EB>map function</EB> in your app?
  </>
)
const stepCaption4 = () => (
  <>
    4. Would you like to have a system for <EB>sending photos/videos</EB> in your app?
  </>
)
const stepCaption5 = () => (
  <>
    5. Should your app contain the <EB>live chat features</EB>?
  </>
)
const stepCaption6 = () => (
  <>
    6. Would you like to have a <EB>payment system</EB> integrated into your app?
  </>
)
const stepCaption7 = () => (
  <>
    7. Do you need to send <EB>notifications</EB> through your app?
  </>
)
const stepCaption8 = () => <>8. Would you like to manage the lists of products, services, options, etc in your app?</>
const stepCaption9 = () => (
  <>
    9. Are you planning to have a <EB>search bar and/or category filters</EB> in your app for better performance?
  </>
)
const stepCaption10 = () => (
  <>
    10. Should any features of the app be <EB>available offline</EB>?
  </>
)
const stepCaption11 = () => (
  <>
    11. Are you considering to <EB>integrate the advertising/analytics</EB> services into your app?
  </>
)
const stepCaption12 = () => (
  <>
    12. Do you need an <EB>admin panel</EB> to manage all the data on your own?
  </>
)

export const EstimatorSteps = ({ locale = 'en' }) => {
  const { state, dispatch } = useContext(StateContext)

  return (
    <>
      <Element name='EstimatorStepsTop' />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding: 0 20px;
          @media (max-width: 640px) {
            br {
              display: none;
            }
          }
        `}
      >
        <EH1>
          Estimate your <EOrangeText>{state.estimator.platform}</EOrangeText>
        </EH1>
        <h2 css={css(Shared.H2)}>
          Use our App Development Cost Calculator and find out how much it costs to make an app and how long it takes.
          Just pick all the required features and we'll help you to calculate the budget needed to develop your
          application from scratch.
        </h2>

        <div
          css={css`
            max-width: 600px;
            width: 500px;
            margin: auto;
            transform: scale(0.9);
            margin-top: 2em;
            @media (max-width: 700px) {
              max-width: 100%;
            }
          `}
        >
          <SuggestedNextPlatformLink locale={locale} />
        </div>

        <div
          css={css`
            max-width: 1050px;
            margin: auto;
            @media (max-width: 640px) {
              display: flex;
              flex-direction: column;
            }
          `}
        >
          <EDivider />
          <Element name='1AppDesign' />
          <StepCaption reducerKey='1AppDesign' caption={stepCaption1} />
          <EButtons>
            <AppDesign />
          </EButtons>

          <EDivider />
          <Element name='2SignUpLogin' />
          <StepCaption reducerKey='2SignUpLogin' caption={stepCaption2} />
          <EButtons>
            <SignUpLogin />
          </EButtons>

          <EDivider />
          <Element name='3MapFunction' />
          <StepCaption reducerKey='3MapFunction' caption={stepCaption3} />
          <EButtons>
            <MapFunction />
          </EButtons>

          <EDivider />
          <Element name='4PhotosVideos' />
          <StepCaption reducerKey='4PhotosVideos' caption={stepCaption4} />
          <EButtons>
            <PhotosVideos />
          </EButtons>

          <EDivider />
          <Element name='5LiveChat' />
          <StepCaption reducerKey='5LiveChat' caption={stepCaption5} />
          <EButtons>
            <LiveChat />
          </EButtons>

          <EDivider />
          <Element name='6Payment' />
          <StepCaption reducerKey='6Payment' caption={stepCaption6} />
          <EButtons>
            <Payment />
          </EButtons>

          <EDivider />
          <Element name='7Notifications' />
          <StepCaption reducerKey='7Notifications' caption={stepCaption7} />
          <EButtons>
            <Notifications />
          </EButtons>

          <EDivider />
          <Element name='8List' />
          <StepCaption reducerKey='8List' caption={stepCaption8} />
          <EButtons>
            <List />
          </EButtons>

          <EDivider />
          <Element name='9SearchBar' />
          <StepCaption reducerKey='9SearchBar' caption={stepCaption9} />
          <EButtons>
            <SearchBar />
          </EButtons>

          <EDivider />
          <Element name='10AvailableOffline' />
          <StepCaption reducerKey='10AvailableOffline' caption={stepCaption10} />
          <EButtons>
            <AvailableOffline />
          </EButtons>

          <EDivider />
          <Element name='11Advertising' />
          <StepCaption reducerKey='11Advertising' caption={stepCaption11} />
          <EButtons>
            <Advertising />
          </EButtons>

          <EDivider />
          <Element name='12Admin' />
          <StepCaption reducerKey='12Admin' caption={stepCaption12} />
          <EButtons>
            <Admin />
          </EButtons>

          <EDivider />

          <PdfPrepareValues />

          <Submit locale={locale} />
        </div>
      </div>
    </>
  )
}
