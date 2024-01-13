import styled from '@emotion/styled'

const E = {}

E.InputWrapper = styled.div`
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.error ? 'rgb(244, 69, 69)' : props.active ? '#cacaca' : '#E6E6E6')};
  height: 50px;
  transition: all 0.3s;
  border-radius: 4px;

  path {
    transition: all 0.3s;
    fill: ${(props) => (props.error ? 'rgb(244, 69, 69)' : props.active ? '#cacaca' : '#E6E6E6')};
  }
`

E.Input = styled.input`
  border: none;
  padding: ${(props) => (props.padding ? props.padding : 'none')};
  width: 100%;
  height: 100%;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.06em;
  color: #000;
  border-radius: 5px;

  ::placeholder {
    color: #a8a8a8;
    letter-spacing: 0.06em;
  }
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
`

E.DropDownButtonContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  letter-spacing: 0.06em;
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

E.DropDownArrowWrapper = styled.div`
  position: absolute;
  display: block;
  height: 20px;
  width: 14px;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  right: 14px;
  transform: ${(props) => (props.open ? 'rotate(180deg) translatey(-4px)' : 'rotate(0deg) translatey(0px)')};
  transition: all 0.2s;
`

E.DropDown = styled.div`
  transform: translateX(-1px) translatey(-2px);
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
  border: 1px solid #e6e6e6;
  box-shadow: -10px 10px 25px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  button {
    display: flex;
    align-items: center;
    height: 38px;
    color: #333;
    cursor: pointer;
    border: none;
    background: #fff;

    letter-spacing: 0.06em;
    padding: 0 15px;
    font-size: 14px;

    :hover {
      background: #f1f1f1;
    }
  }
`

E.FieldCaption = styled.div`
  color: #5a5d5e;
  font-size: 14px;
  margin-bottom: 2px;
`

export default E
