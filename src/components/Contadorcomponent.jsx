import { Usecounter } from "../hooks/Usecounter"


export const Contadorcomponent = () => {

  const {contador, incrementar, decrementar, resetear } = Usecounter(100)

  return (
    <>
    <h1>Contador : {contador}</h1>
    <button classname="btn-primary" onClick={ ()=> incrementar(50)} >+1</button>
    <button classname="btn-danger" onClick={ ()=> resetear()} >reset</button>
    <button classname="btn-primary" onClick={ ()=>decrementar(30, false)} >-1</button>
    </>
  )      
 }


