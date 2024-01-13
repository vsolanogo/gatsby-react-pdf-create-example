import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { StateContext } from '../../store/contactUs/contexts'
import { SharedSVGClip } from '../../shared/icons'
import { v4 } from 'uuid'

const E = {}

E.Button = styled.div`
  color: #fd7114;
  cursor: pointer;
  font-weight: 600;

  border: 1px solid #fd7114;
  border-radius: 15px;
  display: grid;
  font-size: 14px;
  grid-template-columns: min-content 1fr;
  padding: 4px 8px;
  align-items: center;
`

export const FileSelect = () => {
  const { state, dispatch } = useContext(StateContext)

  const fileInputRef = React.createRef()

  const handleFileExplorerOpen = (e) => {
    e.preventDefault()
    e.stopPropagation()

    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    if (e.target.files.length === 0) {
      return
    }
    dispatch({
      type: 'CONTACTUS_ADD_FILE',
      file: e.target.files[0],
      id: v4(),
    })
  }

  return (
    <>
      <E.Button onClick={handleFileExplorerOpen}>
        <div>
          <SharedSVGClip width='20' height='20' color='#f7a425' />
        </div>
        <div>Select a file</div>
      </E.Button>
      <input
        id='my-file'
        type='file'
        name='attachment'
        accept='image/*, application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, .odp, .ods, .odt, .xlsx, .xls, .doc, .docx, .ppt, .pptx, .txt, .pdf, .rtf'
        multiple=''
        data-parsley-id='14'
        css={css`
          display: none;
        `}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </>
  )
}
