export const GlowingHighlightOnFocus = `
    transition: all 0.30s ease-in-out;
    :focus {
        box-shadow: 0 0 5px #FDA469;
        border: 1px solid #FDA469;
   }
`

export const HoistOnHover = `
    transition: all 0.2s ease-in-out;
    &:hover {
        text-decoration: none;
        transform: translateY(-5px);
        box-shadow: 12.3px 11.8px 23px 0 rgba(0, 0, 0, 0.05);
    }
`

export const ButtonStyle1 = `
    border: 1px solid #fd7114;
    background: 0 0;
    color: #fd7114;
    box-shadow: 0 0 1px 0 #fd7114 inset, 0 0 1px 0 #fd7114;
    align-self: center;
    min-width: 140px;
    padding-left: 20px;
    padding-right: 20px;
    min-height: 36px;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    font-size: 16px;
    text-decoration: none;
    white-space: nowrap;
    text-transform: capitalize;
    transition: all 0.2s ease-in-out;
    margin-top: auto;
    cursor: pointer;
    :hover {
    border-color: #fd7114;
    background: #fd7114;
    color: #fff;
    }
`
