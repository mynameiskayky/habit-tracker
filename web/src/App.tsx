import './styles/global.css'

import { Habit } from "./components/Habit";

export function App() {
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={7}/>
      <Habit completed={8}/>
      <Habit completed={10}/>
    </div>
  )
}