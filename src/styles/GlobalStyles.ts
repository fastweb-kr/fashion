import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`

/** reset */
${reset}
*{box-sizing: border-box}
body{  }
button{ background: inherit ; border:none; box-shadow:none; border-radius:0; padding:0; overflow:visible; cursor:pointer}
a, a:hover{cursor: pointer; text-decoration: none; outline: none; color: inherit}
/** system */
:root{
    --max-width : 840px;
    --app-width : 428px;

    --color-bk : #000;
    --color-wh : #fff;
    --color-gray : #eaeaea;
    --color-gray-01 : #efefef;
    --color-gray-02 : #9C9C9C;
    --color-gray-03 : #D9D9D9;
    --color-gray-04 : #B4B4B4;
    --color-black-10 : #2D3035;
    --color-black-20 : #5d5d5d;


    --global-padding : 16px;

    --header-height : 48px;
    --nav-height: 40px;
    --top-appBar-height: calc(var(--header-height) + var(--nav-height));
    --bottom-appBar-height: 66px;
}

`;

export default GlobalStyles;
