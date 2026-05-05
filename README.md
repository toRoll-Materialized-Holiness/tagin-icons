# Icon Pack for decorated hebrew letters

This icon pack provides images of unusually decorated hebrew letters with so called [tags/tagin](https://en.wikipedia.org/wiki/Tag_(Hebrew_writing)) and other decorations.

The package currently only contains unusual letter decorations, not standard decorations (known as BeDeQ-ChaYaH בדק חיה and Sha´ATNeZ-GaTz שעטנז גץ).
The vocabulary describing the letter terms used in the icon names can be found at 
https://toroll-materialized-holiness.github.io/skohub-pages/w3id.org/toRoll/vocs/taginOM

## Installation

## Usage

You may inspect all available variations in the latest version in the [icon gallery](https://toroll-materialized-holiness.github.io/tagin-icons/gallery).

### Server-side or bundled assets

importing a single icon directly

```js
import myDecoratedAlef from "@toroll/tagin-icons/svg/alef_1000.svg"
```

importing all icons to use them by their name

```js
import icons from "@toroll/tagin-icons";
...
img.src = icons["alef_1000"]
```

### Client-side

```html
<img width="32" src="https://<NPM CDN>/@toroll/tagin-icons/icons/svg/<letter variant>.svg" />
```

For example:

```html
<img width="100" src="https://unpkg.com/@toroll/tagin-icons/icons/svg/tsade_32p.svg" alt="tsade_32p" />
<img width="35" src="https://unpkg.com/@toroll/tagin-icons/icons/svg/alef_3312.svg" alt="alef_3312" />
<img width="80" src="https://unpkg.com/@toroll/tagin-icons/icons/svg/pe_w0000000.svg" alt="pe_w0000000" />
```
equals

<img width="100" src="https://unpkg.com/@toroll/tagin-icons/icons/svg/tsade_32p.svg" alt="tsade_32p" />
<img width="35" src="https://unpkg.com/@toroll/tagin-icons/icons/svg/alef_3312.svg" alt="alef_3312" />
<img width="80" src="https://unpkg.com/@toroll/tagin-icons/icons/svg/pe_w0000000.svg" alt="pe_w0000000" />

## Acknowledgements

Research that lead to discovery and definition of the letter decorations provided in this icon set has been conducted
in the project "[toRoll - Materialized Holiness](https://www.geschkult.fu-berlin.de/e/materialisierte-heiligkeit/index.html)"
funded by the Federal Ministry of Research, Technology and Space (01UL2202B).

The letters in this icon pack are based on the [Noto Serif Hebrew](https://fonts.google.com/noto/specimen/Noto+Serif+Hebrew/about) font.
