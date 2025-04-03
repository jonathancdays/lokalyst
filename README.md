# SEO-Site

<!-- PROJECT SHIELDS -->

<a href="https://www.linkedin.com/in/johndays/">![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)</a>
<a href="https://www.jonathancdays.com/">![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7)</a>
<a href="https://github.com/jonathancdays">![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)</a>
<a href=" "> </a>
<a href=" "> </a>

<!-- PROJECT LOGO -->

<br />
<div align="center">
  <a href="https://jonathan-days-networking-site-project.netlify.app/">
    <img src="src/assets/logo.svg" alt="Logo" width="400" height="400">
  </a>

  <h3 align="center">Lokalyst</h3>

  <p align="center">
 I have taken inspiration and my experience from my previous employer to design and code a personal project for creative purposes. I do not own any Lokalyst assets.
    <br> 
    <a href="https://jonathan-days-seo-site-project.netlify.app/"><strong>View Live Site »</strong></a>
    <br />
    <br />
    ·
    <a href="https://www.behance.net/gallery/154552617/Lokalyst-Graphic-Design">View Print Graphics</a>
    .
    <a href="https://www.figma.com/proto/5Q7AzzdviT9H3Xi5JvcpQX/Lokalyst?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1">View UX & UI </a>
    ·
    <a href="https://www.behance.net/gallery/154553183/Lokalyst-Brand-Guide-Lines">View Brand Design</a> 
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### Built With

Major frameworks/libraries used to bootstrap your project. 

- [HTML](https://html.spec.whatwg.org/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [React.js](https://reactjs.org/)
- [Next,js](https://nextjs.org/)
- [Node.js](https://nodejs.org/en/)
- [JSON](https://www.json.org/json-en.html)
- [Git](https://git-scm.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

This project uses NPM as package manager

```bash
 npm install --global
```

### Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<h2>Index</h2>

```javascript
import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
```

<h2>App</h2>

```javascript
import "react-multi-carousel/lib/styles.css";
import "react-modal-video/css/modal-video.min.css";
import "rc-drawer/assets/index.css";
import "typeface-dm-sans";

export default function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

<h2>Component Example</h2>

```javascript
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import Sticky from "react-stickynode";
import Header from "./header/header";
import Footer from "./footer/footer";

export default function Layout({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <React.Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? "sticky" : "unSticky"}`} />
      </Sticky>
      <main id="content" sx={{ variant: "layout.main" }}>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Create sketch of site.
- [x] Construct sitemap.
- [x] Create wireframe.
- [x] Design prototype
- [x] Program live site.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Jonathan Days - jonathancdays@gmail.com

Linkedin - https://www.linkedin.com/in/johndays/

Project Link: [https://jonathan-days-seo-site-project.netlify.app/](https://jonathan-days-seo-site-project.netlify.app/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [MIT Liscence](https://opensource.org/licenses/MIT)
- [Material Componentas](https://github.com/material-components)
- [MongoDB](https://github.com/mongodb/mongo)
- [Express](https://github.com/expressjs/express)
- [React](https://github.com/facebook/react)
- [Next,js](https://nextjs.org/)
- [Node](https://github.com/nodejs/node)

<p align="right">(<a href="#top">back to top</a>)</p>
