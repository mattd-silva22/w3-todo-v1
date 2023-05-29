import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --blue: #273FAD;
    --green: #3FAD27;
    --red: #ad273f;
    --background: #EBEBEB;
    --shapes: #FFFFFF;
    --text-title: #3D3D4D;
    --text: #1C1C29;
    --text-light: #A09CB1;
}
    * {
        margin: 0;
        padding: 0px;
        
    }

    body{
        background-color: #EBEBEB;
    }

    
`;
