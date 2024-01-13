import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { StateContext } from '../../store/estimator/contexts'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const EWrapper = styled.div`
  position: relative;
  bottom: 20px;
  width: 130px;
  height: 130px;
  z-index: 222;
  @media (max-width: 900px) {
    display: none;
  }
`

const ETextWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ECaption = styled.div`
  font-size: 15px;
  letter-spacing: 0.6px;
  color: #333333;
`

const ESteps = styled.div`
  font-weight: 500;
  font-size: 25px;
  color: #333333;
  margin-top: 6px;
`

export const ProgressCircle = () => {
  const { state, dispatch } = useContext(StateContext)
  const stepsFilledCount = state.estimator.stepsFilledCount

  return (
    <EWrapper>
      <ETextWrapper>
        <ECaption>Completed</ECaption>
        <ESteps>{stepsFilledCount}/12</ESteps>
      </ETextWrapper>
      <CircularProgressbar
        value={stepsFilledCount}
        // text={`testi`}
        maxValue={12}
        strokeWidth={7}
        background={true}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          // rotation: 0.25,
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'butt',
          // Text size
          // textSize: "16px",
          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,
          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',
          // Colors
          pathColor: `#FD7114`,
          background: 'white',
          // textColor: "#f88",
          trailColor: '#E4E8EE',
          backgroundColor: '#fff',
        })}
      />
    </EWrapper>
  )
}
