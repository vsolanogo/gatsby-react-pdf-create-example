import styled from '@emotion/styled'

const E = {}

E.InputWrapper = styled.div`
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.error ? 'rgb(244, 69, 69)' : props.active ? '#ffa423' : '#dedede')};
  height: 50px;
  transition: all 0.3s;
  margin-bottom: 15px;
  path {
    transition: all 0.3s;
    fill: ${(props) => (props.error ? 'rgb(244, 69, 69)' : props.active ? '#ffa423' : '#dedede')};
  }
`

E.Input = styled.input`
  border: none;
  padding: ${(props) => (props.padding ? props.padding : 'none')};
  width: 100%;
  height: 100%;

  font-size: 14px;
  font-weight: 400;
`

E.FieldIconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  display: flex;
  align-items: center;
`

E.InputLabel = styled.label`
  position: absolute;
  pointer-events: none;
  top: -7px;
  filter: ${(props) => (props.active ? 'opacity(1)' : 'opacity(0)')};
  margin-left: 44px;
  color: ${(props) => (props.error ? 'rgb(244, 69, 69)' : '#fd7114')};
  z-index: 10;
  background: #fcfcfc;
  font-weight: 700;
  padding: 0 2px;
  font-size: 10px;
  transition: all 0.3s;
`

E.DropDownButton = styled.button`
  background: #fff;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border: none;
  display: flex;
  padding-left: 15px;
  color: ${(props) => (props.active ? '#000' : '#757575')};

  font-size: 14px;
  font-weight: 400;
  -webkit-tap-highlight-color: rgba(253, 115, 23, 0.34);
  border-radius: 5px;
`

E.DropDownButtonContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

E.DropDownArrow = styled.div`
  position: absolute;
  display: block;
  width: 0px;
  height: 0px;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 3px solid black;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  right: 14px;
`

E.DropDown = styled.div`
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  border-bottom: 1px solid #ffa423;
  border-left: 1px solid #ffa423;
  border-right: 1px solid #ffa423;
  transform: translateX(-1px);
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  filter: ${(props) => (props.open ? 'opacity(1)' : 'opacity(0)')};
  position: absolute;
  top: 100%;
  width: calc(100% + 2px);
  background: #fff;
  display: flex;
  flex-direction: column;
  z-index: 66666;
  transition: all 0.3s;
  button {
    height: 38px;
    color: rgb(51, 51, 51);
    cursor: pointer;
    border: none;
    background: #fff;

    :hover {
      background: #f1f1f1;
    }
  }
`

export default E
