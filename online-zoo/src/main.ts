import './style.css'
import './index'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ``
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
