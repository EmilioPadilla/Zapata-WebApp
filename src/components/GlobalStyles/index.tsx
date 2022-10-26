import { FunctionComponent } from 'react';
import css from 'styled-jsx/css';

export const styles = css.global`
  :root {
    --aqua_darkest: #004d77;
    --aqua_dark: #00698d;
    --aqua: #0078aa;
    --aqua_light: #009fcb;
    --aqua_lighter: #00cbed;
    --aqua_lightest: #5ee8ff;
    --white: #ffffff;
    --gray15: #f3f3f3;
    --gray14: #58575d;
    --gray13: #f8f8f8;
    --gray12: #f4f4f4;
    --gray11: #e7e7e7;
    --gray10: #dddddd;
    --gray9: #cccccc;
    --gray8: #a2aaad;
    --gray7: #999999;
    --gray6: #888888;
    --gray5: #707070;
    --gray4: #444444;
    --gray3: #333333;
    --gray2: #222222;
    /* New colors */
    --iris_blue: #00bbb4;
    --teal-blue: #00788c;
    --teal: #008480;
    --teal2: #008580;
    --persian_green: #00a39e;
    --plascon_sea: #005c58;
    --tenne: #cc4b00;
    --blue_fb: #295ca9;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    /* 10px */
    font-size: 62.5%;
  }

  body {
    background-color: var(--gray12);
    font-family: 'SF Pro Display';
    /* 16px */
    font-size: 1.6rem;
    line-height: 2.5rem;
    margin: 0;
  }

  html,
  body {
    box-sizing: border-box;
    height: 100%;
  }

  body {
    display: block;
  }

  main {
    overflow-x: hidden;
  }

  section {
    grid-column: 1 / -1;
  }

  .section-padding {
    padding: 1.6rem;
  }

  .highlight-section-padding {
    padding: 0 1.6rem 1.2rem 1.6rem;
  }

  .white-background {
    background-color: var(--white);
  }

  .gray-background {
    background-color: var(--gray12);
  }

  .persian_green-backgound {
    background-color: var(--persian_green);
  }

  hr {
    border: 0;
    height: 1px;
    border-top: 1px solid var(--gray10);
    margin: 0 1.6rem;
  }

  .bold {
    font-weight: bold;
  }

  .teal-txt {
    color: var(--teal);
  }

  .back-button {
    background-color: var(--gray9);
    border-radius: 50%;
    height: 30px;
    margin-left: 16px;
    margin-top: 70px;
    position: absolute;
    top: 0;
    width: 30px;
  }

  .header-container {
    padding-top: 100px;
    text-align: center;
  }

  .header-title {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 30px;
  }

  .header-content {
    font-size: 16px;
    line-height: 24px;
    padding: 24px 16px;
    text-align: center;
  }

  .header-content-text {
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    padding-bottom: 32px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: inherit;
  }

  h1 {
    font-size: 3.2rem;
    line-height: 4.8rem;
  }

  h2 {
    font-size: 1.8rem;
    line-height: 3.2rem;
  }
  .slider-container {
    overflow-y: scroll !important;
  }
  .swiper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 0;
  }
`;

export function getFonts(assetsUrl = '/'): JSX.Element {
  return css.global`
    /* ---- SF Pro ---- */
    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-BoldItalic.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-BoldItalic.woff') format('woff');
      font-weight: bold;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-BlackItalic.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-BlackItalic.woff') format('woff');
      font-weight: 900;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-Heavy.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-Heavy.woff') format('woff');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-Bold.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-Black.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-Black.woff') format('woff');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-Medium.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-LightItalic.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-LightItalic.woff') format('woff');
      font-weight: 300;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-Light.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-HeavyItalic.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-HeavyItalic.woff') format('woff');
      font-weight: 900;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-Regular.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-RegularItalic.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-RegularItalic.woff') format('woff');
      font-weight: normal;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-Semibold.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-Semibold.woff') format('woff');
      font-weight: 600;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-SemiboldItalic.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-SemiboldItalic.woff') format('woff');
      font-weight: 600;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-MediumItalic.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-MediumItalic.woff') format('woff');
      font-weight: 500;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-ThinItalic.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-ThinItalic.woff') format('woff');
      font-weight: 100;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-Ultralight.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-Ultralight.woff') format('woff');
      font-weight: 100;
      font-style: normal;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-UltralightItalic.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-UltralightItalic.woff') format('woff');
      font-weight: 100;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: 'SF Pro Display';
      src: url('${assetsUrl}assets/webfonts/SFProDisplay-Thin.woff2') format('woff2'),
        url('${assetsUrl}assets/webfonts/SFProDisplay-Thin.woff') format('woff');
      font-weight: 100;
      font-style: normal;
      font-display: swap;
    }
  `;
}

export const GlobalStyles: FunctionComponent = () => {
  const fonts = getFonts();
  return (
    <>
      <style global jsx>
        {styles}
      </style>
      <style global jsx>
        {fonts}
      </style>
    </>
  );
};
