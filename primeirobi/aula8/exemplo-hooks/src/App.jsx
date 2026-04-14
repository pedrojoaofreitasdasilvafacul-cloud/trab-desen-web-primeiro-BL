import { useState } from "react"
import Button from "./components/Button"

export default function App() {
  const [contador, setContador] = useState(0);

  function incrementar(){
    setContador(contador + 1);
  }

  return (
    <main>
      <h1>Exemplo de Hooks</h1>
    <p>{contador}</p>
    <Button function= {incrementar}
    texto="Incrementar"/>

    </main>
  )
}