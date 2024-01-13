import styled from '@emotion/styled'

const E = {}

E.Caption = styled.div`
  font-size: 17px;
  line-height: 21px;
  color: #333333;
  font-weight: 500;
  min-width: 0;
  text-align: start;
`

E.CaptionHighlight = styled.span`
  display: contents;
  font-weight: 600;
`

E.B = styled.span`
  display: contents;
  font-weight: 600;
`

E.CubicleCheckmark = styled.div`
  height: 25px;
  width: 25px;
  background-repeat: no-repeat;
  background-position: center;
  transition: ${(props) => (props.enableTransition ? 'all 0.2s' : 'unset')};
  background-image: ${(props) =>
    props.active
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 25 25'%3E%3Cuse xlink:href='%23B' fill='%23fff'/%3E%3Cuse xlink:href='%23B' fill='none' stroke='%2397a3b4'/%3E%3Cg fill-rule='evenodd'%3E%3Cpath d='M97.1 7.1h1.75l3.92 10.08L106.7 7.1h1.72L103.58 19h-1.7L97.1 7.1zm12.94 2.9h1.6v9h-1.6v-9zm.8-3.6c.28 0 .5.1.7.3.2.2.3.44.3.73s-.1.54-.3.73c-.18.2-.4.3-.7.3-.3 0-.52-.1-.72-.3-.18-.2-.27-.44-.27-.73s.1-.54.27-.73c.2-.2.43-.3.72-.3zm12.26-.03V19h-1.58v-1.78c-.34.6-.8 1.06-1.38 1.4-.56.32-1.23.48-2 .48-.85 0-1.6-.2-2.26-.58-.64-.4-1.15-.94-1.5-1.63-.36-.7-.54-1.5-.54-2.4s.18-1.67.54-2.35c.36-.7.87-1.23 1.5-1.6.66-.4 1.4-.58 2.25-.58.77 0 1.44.16 2.02.47a3.41 3.41 0 0 1 1.36 1.38V6.4h1.58zm-4.62 11.34c.6 0 1.1-.14 1.56-.4.47-.27.83-.65 1.1-1.14s.4-1.04.4-1.65c0-.62-.13-1.18-.4-1.67-.26-.48-.62-.86-1.1-1.14-.45-.27-.97-.4-1.56-.4s-1.12.14-1.58.42c-.46.27-.8.65-1.07 1.14-.27.5-.4 1.04-.4 1.65s.13 1.16.4 1.65c.26.5.6.87 1.07 1.14s1 .4 1.58.4zm11.4-7.77c1.4 0 2.45.4 3.16 1.24.72.8 1.07 1.95 1.07 3.4l-.02.5h-7.1c.12.8.46 1.45 1 1.93.56.47 1.24.7 2.04.7.53 0 1.03-.1 1.48-.3.47-.2.87-.46 1.2-.82l.86.9c-.44.48-.97.85-1.6 1.1-.63.26-1.32.4-2.08.4-.88 0-1.67-.2-2.36-.56-.68-.4-1.2-.92-1.6-1.6-.37-.7-.56-1.48-.56-2.37 0-.88.2-1.66.56-2.34.4-.7.92-1.23 1.6-1.62.68-.4 1.46-.6 2.33-.6zm2.8 3.94c-.04-.82-.3-1.46-.8-1.92-.5-.48-1.16-.7-1.97-.7-.8 0-1.46.23-2 .7-.52.47-.84 1.12-.94 1.92h5.7zM140 9.96c.9 0 1.7.2 2.38.57.7.4 1.25.93 1.63 1.62.4.68.6 1.46.6 2.34 0 .9-.2 1.68-.6 2.37a4.01 4.01 0 0 1-1.63 1.61c-.7.4-1.5.58-2.38.58-.9 0-1.7-.2-2.42-.58a4.29 4.29 0 0 1-1.63-1.59c-.38-.7-.57-1.5-.57-2.4 0-.88.2-1.66.57-2.34.4-.7.94-1.23 1.63-1.62.7-.38 1.5-.57 2.42-.57zm0 1.37c-.6 0-1.12.14-1.58.4-.45.27-.8.65-1.07 1.14-.25.48-.38 1.02-.38 1.63 0 .63.13 1.18.38 1.67.26.5.62.87 1.07 1.14.46.26 1 .4 1.58.4.58 0 1.1-.13 1.55-.4a2.74 2.74 0 0 0 1.07-1.14c.26-.5.4-1.04.4-1.67 0-.6-.13-1.15-.4-1.63a2.74 2.74 0 0 0-1.07-1.14 2.99 2.99 0 0 0-1.55-.41zm11.73.67c-.37-.23-.8-.4-1.24-.55-.44-.13-.87-.2-1.27-.2-.48 0-.87.1-1.16.27-.3.17-.43.44-.43.8s.16.64.48.83c.33.18.82.37 1.48.56.62.18 1.13.37 1.53.55.4.18.73.44 1 .8.3.35.43.8.43 1.4 0 .85-.33 1.5-.97 1.94s-1.43.66-2.38.66a6.24 6.24 0 0 1-1.96-.32c-.62-.22-1.15-.52-1.58-.92l.6-1.16a4.13 4.13 0 0 0 1.37.82c.56.2 1.1.3 1.62.3s.94-.1 1.26-.3c.3-.2.47-.5.47-.9s-.17-.7-.5-.9c-.33-.2-.83-.4-1.5-.62-.6-.17-1.1-.34-1.48-.5a2.79 2.79 0 0 1-.97-.78c-.26-.34-.4-.78-.4-1.33 0-.83.3-1.46.92-1.88s1.38-.63 2.3-.63c.55 0 1.08.08 1.6.24.53.14 1 .35 1.38.6l-.58 1.2z' fill='%23333'/%3E%3Cpath d='M79 4.84c.2.53.32 1.1.32 1.66v18.17c0 .8-.15 1.57-.45 2.3-.3.73-.75 1.4-1.3 1.95a5.95 5.95 0 0 1-1.95 1.3 6.05 6.05 0 0 1-2.3.46H56.67a6.05 6.05 0 0 1-2.3-.46 5.95 5.95 0 0 1-1.95-1.3c-.55-.56-1-1.22-1.3-1.95-.3-.72-.45-1.5-.45-2.3V1.33a6.02 6.02 0 0 1 1.75-4.24c1.13-1.12 2.66-1.76 4.25-1.76h11.5c.57 0 1.13.1 1.66.33a4.42 4.42 0 0 1 1.4.94l6.83 6.83a4.33 4.33 0 0 1 .95 1.41zM77.33 6.5a2.43 2.43 0 0 0-.17-.89 2.31 2.31 0 0 0-.51-.76l-6.83-6.83c-.44-.44-1.04-.68-1.65-.7h-11.5c-1.06 0-2.08.43-2.83 1.18a3.98 3.98 0 0 0-1.17 2.82v23.34c0 1.06.42 2.08 1.17 2.83s1.77 1.17 2.83 1.17h16.66c1.06 0 2.08-.42 2.83-1.17s1.17-1.77 1.17-2.83V6.5zm-7.7 5.2a2.3 2.3 0 0 1 .82.82c.2.33.3.72.3 1.1a2.27 2.27 0 0 1-.29 1.11c-.2.34-.48.62-.82.8l-6.22 3.6a2.28 2.28 0 0 1-1.11.3c-.4 0-.78-.1-1.12-.3-.33-.2-.62-.48-.8-.8-.2-.34-.3-.73-.3-1.12v-7.18a2.31 2.31 0 0 1 .29-1.12c.2-.33.48-.6.82-.8a2.25 2.25 0 0 1 1.11-.3 2.28 2.28 0 0 1 1.11.3l6.22 3.6h0zm-1 2.12c.03-.02.06-.05.08-.08s.03-.07.03-.1-.01-.08-.03-.1c-.02-.04-.05-.06-.08-.08l-6.22-3.6c-.04-.02-.07-.03-.1-.03s-.08.01-.1.03c-.04.02-.07.05-.1.08-.02.04-.03.08-.02.12v7.18c-.01.04 0 .08.02.12.02.03.05.06.1.08.03.02.07.03.1.03s.07-.01.1-.03l6.22-3.6z' fill='%23fd7114'/%3E%3C/g%3E%3Cpath d='M5 0h15a4.99 4.99 0 0 1 5 5v15a4.99 4.99 0 0 1-5 5H5a4.99 4.99 0 0 1-5-5V5a4.99 4.99 0 0 1 5-5z' fill='%2300d983'/%3E%3Cpath d='M9.63 16.65l-4.2-4.2L4 13.87l5.63 5.63L21.7 7.42 20.3 6 9.63 16.65z' fill='%23fff'/%3E%3Cdefs %3E%3Cpath id='B' d='M-13-31h234c2.76 0 5 2.23 5 5v77c0 2.77-2.24 5-5 5H-13a4.99 4.99 0 0 1-5-5v-77a4.99 4.99 0 0 1 5-5z'/%3E%3C/defs%3E%3C/svg%3E");`
      : `url("data:image/svg+xml,%3Csvg viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='1' y='1' width='25' height='25' rx='5' fill='white' stroke='%2397A3B4' stroke-width='0.85'/%3E%3C/svg%3E%0A");`};
`

E.RoundCheckmark = styled.div`
  height: 25px;
  width: 25px;
  transition: all 0.2s;
  background-repeat: no-repeat;
  background-position: center;
  transition: ${(props) => (props.enableTransition ? 'all 0.2s' : 'unset')};
  background-image: ${(props) =>
    props.active
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 27'%3E%3Cdefs%3E%3Cimage width='17' height='17' id='A' href='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMSIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiByeD0iNy41IiBmaWxsPSIjMDBEOTgzIiBzdHJva2U9IiMwMEQ5ODMiIHN0cm9rZS13aWR0aD0iMC44NSIvPgo8L3N2Zz4K'/%3E%3C/defs%3E%3Cpath d='M13.5 1h0C20.4 1 26 6.6 26 13.5h0C26 20.4 20.4 26 13.5 26h0C6.6 26 1 20.4 1 13.5h0C1 6.6 6.6 1 13.5 1z' fill='%23fff' stroke='%2300d983' stroke-width='.85'/%3E%3Cuse href='%23A' x='5' y='5'/%3E%3C/svg%3E");`
      : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 27' fill='none'%3E%3Crect x='1' y='1' width='25' height='25' rx='12.5' fill='%23fff' stroke='%2397a3b4' stroke-width='.85'/%3E%3C/svg%3E");`};
`

E.H2 = `
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

E.MailErrorLabel = styled.div`
  position: absolute;
  pointer-events: none;
  top: -7px;
  margin-left: 44px;
  color: #e75254;
  z-index: 10;
  background: #fcfcfc;
  font-weight: 700;
  padding: 0 2px;
  font-size: 10px;
  transition: all 0.3s;
  visibility: ${(props) => (props.enabled === true ? 'visible' : 'hidden')};
`

E.MailWrapper = styled.div`
  position: relative;
  min-height: 48px;
  display: flex;
  align-items: center;
  margin-top: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.focused ? '#ffa423' : '#dedede')};
  transition: all 0.2s;
  path {
    transition: all 0.2s;
    fill: ${(props) => (props.focused ? '#ffa423' : '#dedede')};
  }
`

export default E
