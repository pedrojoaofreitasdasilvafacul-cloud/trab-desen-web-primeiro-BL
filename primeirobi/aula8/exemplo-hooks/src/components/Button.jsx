export default function Button(props){ // sempre letra maiúscula para componentes funcionais
  return (
   <button onClick={props.function}>

    {props.texto}
   </button>
  )


}