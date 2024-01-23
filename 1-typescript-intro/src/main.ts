import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
//import './topics/1-basic-types';
//import './topics/2-object-interface'
//import './topics/3-funtions'
//import './topics/4-homework-types'
//import './topics/5-basis-destructuring'
//import './topics/6-funtion-destructuring'
//import './topics/7-import-export'
//import './topics/8-class-basic'
//import './topics/9-generics'
//import './topics/10-Decoration.ts'
import './topics/11-optional-chaining.ts' 

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
