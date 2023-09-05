/* eslint-disable @typescript-eslint/no-unused-vars */

// import React from 'react'
// import ReactDOM from 'react-dom'
// const { FlexBrowserRouter } = await import('@flexiness/domain-lib-mobx-react-router')
// // import App from './App'
// import Modules from './Modules'

// ReactDOM.render(
//   <React.StrictMode>
//     <FlexBrowserRouter>
//       <Modules />
//       {/* <App /> */}
//     </FlexBrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

/////////////////////// REACT 18 /////////////////////////

import React from 'react'
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container) if not using TypeScript

const { FlexBrowserRouter } = await import('@flexiness/domain-lib-mobx-react-router')
// import App from './App'
import Modules from './Modules'

root.render(
  <React.StrictMode>
    <FlexBrowserRouter>
      <Modules />
      {/* <App /> */}
    </FlexBrowserRouter>
  </React.StrictMode>
)
