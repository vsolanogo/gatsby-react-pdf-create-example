import styled from '@emotion/styled'

const E = {}

E.Divider = styled.div`
  width: 100%;
  height: ${(props) => (props.count ? `${props.count * 5}em` : '5em')};
  @media (max-width: 1300px) {
    height: ${(props) => (props.count ? `${props.count * 3.75}em` : '3.75em')};
  }
  @media (max-width: 900px) {
    height: ${(props) => (props.count ? `${props.count * 2.5}em` : '2.5em')};
  }

  min-height: ${(props) => (props.count ? `${props.count * 25}px` : '25px')};
`

E.H3 = styled.h3`
  font-size: 3em;
  font-weight: 400;
  letter-spacing: -0.025em;
  text-align: center;
  max-width: 70em;
  padding: 0 0.8em;
  margin: auto;
  font-family: 'Montserrat', Arial, sans-serif;

  @media (max-width: 640px) {
    font-size: 2.5em;
    max-width: calc(100vw - 50px);
    padding: 0;
  }
`

E.H3Description = styled.p`
  font-size: 15.4px;
  letter-spacing: 0.6px;
  color: #212121;
  margin: 1.25em auto auto;
  padding: 0 2em;
  max-width: 77em;
  text-align: center;
  font-family: 'Montserrat', Arial, sans-serif;

  @media (max-width: 640px) {
    max-width: calc(100vw - 50px);
    padding: 0;
  }
`

E.H3Heebo = styled.h3`
  margin: 0 auto;
  font-family: 'Heebo', Arial, sans-serif;
  font-weight: 700;
  font-size: 2.922em;
  line-height: 1.322;
  text-align: center;
  letter-spacing: 1.5px;
  color: #333;
  padding: 0 1.25em;
  max-width: 37em;

  @media (max-width: 40em) {
    letter-spacing: 1px;
  }

  @media (max-width: 640px) {
    max-width: calc(100vw - 50px);
    padding: 0;
  }
`

E.Text = styled.p`
  margin: 0;
  letter-spacing: 1px;
  color: #333;
  font-family: 'Heebo', Arial, sans-serif;
  font-weight: 400;
  font-size: 1.375em;
  padding: 0;

  @media (max-width: 640px) {
    font-size: 1.622em;
  }
`

export default E
