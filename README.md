# Icon Pack for decorated hebrew letters

This icon pack provides images of unusually decorated hebrew letters with so called [tags/tagin](https://en.wikipedia.org/wiki/Tag_(Hebrew_writing)) and other decorations.

The package currently only contains unusual letter decorations, not standard decorations (known as BeDeQ-ChaYaH בדק חיה and Sha´ATNeZ-GaTz שעטנז גץ).
The vocabulary describing the letter terms used in the icon names can be found at 
https://toroll-materialized-holiness.github.io/skohub-pages/w3id.org/toRoll/vocs/taginOM

The package currently only provides png files. The size of the original files may vary,
it is recommended to use them with 

## Installation

## Usage

### Server-side

importing a single icon directly

```js
import myDecoratedAlef from "@toroll/tagin-icons/png/alef_1000.png"
```

importing all icons to use them by their name

```js
import icons from "@toroll/tagin-icons";
...
img.src = icons["alef_1000"]
```

### Client-side

```html
<img width="32" src="https://<NPM CDN>/npm/@toroll/tagin-icons/icons/png/alef_1000.png" />
```

## Acknowledgements

Research that lead to discovery and definition of the letter decorations provided in this icon set has been conducted
in the project "[toRoll - Materialized Holiness](https://www.geschkult.fu-berlin.de/e/materialisierte-heiligkeit/index.html)"
funded by the Federal Ministry of Research, Technology and Space (01UL2202B).

The letters in this icon pack are based on the [Noto Serif Hebrew](https://fonts.google.com/noto/specimen/Noto+Serif+Hebrew/about) font.
