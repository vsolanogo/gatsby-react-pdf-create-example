import React, { useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import { StateContext } from '../../store/contactUs/contexts'
import Shared, { SharedDeleteCV } from '../../components/shared'

const E = {}

E.Wrapper = styled.div`
  display: grid;
  grid-row-gap: 4px;
  margin: ${(props) => props.margin};
  font-size: 14px;
`

E.ListItem = styled.div`
  display: grid;
  grid-template-columns: max-content 14px;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  align-items: center;
`

export const FileDisplay = () => {
  const { state, dispatch } = useContext(StateContext)
  const { clearFields } = state.contactUs

  useEffect(() => {
    if (clearFields) {
      dispatch({ type: 'CONTACTUS_REPLACE_FILES', newFiles: [] })
    }
  }, [clearFields])

  const removeFile = (id) => {
    const newFiles = state.contactUs.files.filter((i) => i.id !== id)
    dispatch({ type: 'CONTACTUS_REPLACE_FILES', newFiles })
  }

  return (
    <E.Wrapper margin={state.contactUs.files.length > 0 ? '10px 0' : '0'}>
      {state.contactUs.files.map((i, index) => (
        <E.ListItem key={i.id}>
          <div>{i.file.name}</div>
          <SharedDeleteCV
            onClick={() => {
              removeFile(i.id)
            }}
          />
        </E.ListItem>
      ))}
    </E.Wrapper>
  )
}
