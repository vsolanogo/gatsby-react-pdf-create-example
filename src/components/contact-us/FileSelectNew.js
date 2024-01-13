import React, { useContext, useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { StateContext } from '../../store/contactUs/contexts'
import { v4 } from 'uuid'
import Clip from '../../images/icons/ClipOrange.svg'
import SweetAlert from 'react-bootstrap-sweetalert'
import { AlertFix } from '../shared'

const EButton = styled.div`
  color: #fd7114;
  cursor: pointer;
  font-weight: 600;

  border: 0;
  display: grid;
  font-size: 15px;
  grid-template-columns: min-content max-content;
  padding: 4px 8px;
  align-items: center;
`

export const FileSelect = ({ setFileselectKeyRerender, fileselectKeyRerender }) => {
  const { state, dispatch } = useContext(StateContext)
  const [fileValidationError, setFileValidationError] = useState(null)

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

    try {
      if (e.target.files[0].size > 50000000) {
        setFileValidationError(true)

        return
      }
    } catch (e) {
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
      {fileValidationError && (
        <AlertFix>
          <SweetAlert
            type='warning'
            title=''
            onConfirm={() => {
              setFileValidationError(null)

              setFileselectKeyRerender(1 + fileselectKeyRerender)
            }}
            btnSize='sm'
          >
            <p
              css={css`
                font-size: 15px;
              `}
            >
              File is too large (max 50 MB)
            </p>
          </SweetAlert>
        </AlertFix>
      )}

      <EButton onClick={handleFileExplorerOpen}>
        <div
          css={css`
            display: grid;
            grid-template-columns: max-content max-content;
            grid-column-gap: 14px;
          `}
        >
          <img
            src={Clip}
            alt='clip img'
            css={css`
              width: 20px;
            `}
          />

          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              pointer-events: none;
              color: #fd7114;
              font-size: 1.2em;
              letter-spacing: 0.03em;
            `}
          >
            Attach file
          </div>
        </div>
      </EButton>
      <input
        id='my-file'
        type='file'
        name='attachment'
        accept='image/*, video/*, audio/*, application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, .odp, .ods, .odt, .txt, .rtf, .doc, .docx'
        multiple=''
        css={css`
          display: none;
        `}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </>
  )
}
