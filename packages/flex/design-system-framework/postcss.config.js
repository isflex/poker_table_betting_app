/* eslint-disable max-len */
module.exports = {
  syntax: 'postcss-scss',
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},

    /////////// NEXTJS Defaults ////////////
    // https://nextjs.org/docs/advanced-features/customizing-postcss-config
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    ////////////////////////////////////////

    autoprefixer: {
      grid: true
    },
    cssnano: {
      preset: 'default'
    },
    'css-byebye': {
      rulesToRemove: [
        '.accordions .accordion a:not(.button):not(.tag)',
        '.notification a:not(.button)',
        '.button .icon.is-medium',
        '.button.is-medium',
        '.button:hover',
        '.button.is-hovered',
        '.button:focus',
        '.button.is-focused',
        '.button:active',
        '.button.is-active',
        '.control.is-medium',
        '.control.has-icon .input.is-medium',
        '.control.has-icons-left .input.is-medium ~ .icon',
        '.control.has-icons-left .select.is-medium ~ .icon',
        '.control.has-icons-right .input.is-medium ~ .icon',
        '.control.has-icons-right .select.is-medium ~ .icon',
        '.field-label.is-medium',
        '.input.is-medium',
        '.label.is-medium',
        '.menu.is-medium',
        '.navbar.has-shadow',
        '.navbar.is-transparent',
        '.navbar a.navbar-item.is-active',
        '.navbar-link.is-active',
        '.select.is-medium',
        '.select.is-loading.is-medium',
        '.subtitle strong',
        '.textarea.is-medium',
        '.title strong',
        /.*\.tabs.*\.is-(boxed|rounded|toggle).*/,
        /.*\.button.*\.is-(medium|large).*/,
        /.*\.input.*\.is-(medium|large).*/,
        /.*\.switch.*\.is-thin.*/,
        /.*\.switch.*\.is-outlined.*/,
        /.*\.switch.*\.is-(medium|large).*/,
        /.*\.is-checkradio.*\.is-circle.*/,
        /.*\.is-checkradio.*\.is-block.*/,
        /.*\.is-checkradio.*\.has-no-border.*/,
        /.*\.is-checkradio.*\.is-(small|medium|large).*/,
        /.*\.is-checkradio.hero.*/,
        /.*\.accordion\.is-(primary|success|danger|info|instit|warning|blue-dark|white).*/,
        /.*\.timeline-marker\.is-(primary|success|danger|info|instit|warning|blue-dark|white).*/,
        /.*\.navbar-item(.+)\.is-(primary|danger|warning|white).*/,
        /.*\.file\.is-(primary|success|danger|info|instit|warning|blue-dark|white).*/,
        /.*\.is-tooltip-(primary|success|danger|info|instit|warning|blue-dark|white).*/,
        /.*\.is-tooltip-(left|top|right|bottom)-(mobile|desktop|tablet|fullhd|widescreen|desktop-only|widescreen-only|tablet-only).*/,
        /.*\.file\.is-(boxed|medium).*/,
        /.*\.file\.has-(name).*/,
        /.*\.file-(label|input|name|cta|icon)\.*/,
        /.*\.hero\.is-fullheight.*/,
        /.*\.hero\.is-halfheight.*/,
        /.*\.table (td|th).is-(primary|success|danger|info|instit|warning|blue-dark|white).*/,
        /.*\.is-rtl.*/,
        /.*\.hero-buttons.*/,
        /.*\.hero(.+)\.navbar.*/,
        /.*\.is-checkradio(.+)\.has-background-color.*/,
        /.*\.is-checkradio(.+)\.is-primary.*/,
        /.*\.is-checkradio(.+)\.is-danger.*/,
        /.*\.is-checkradio(.+)\.is-warning.*/,
        /.*\.is-checkradio(.+)\.is-blue-dark.*/
      ],
      map: false
    }
  }
}
