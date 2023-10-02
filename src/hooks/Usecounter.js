import { useState } from "react"


export const Usecounter = (valorinicial=0) => {

const [contador,setcontador]= useState(valorinicial)

const incrementar = (valor=1)=>{
    setcontador(contador+valor)
}

const decrementar = (valor=1,negativo)=>{
    if(!negativo && contador -valor<0){
    setcontador(0)
    return}
    setcontador(contador-valor)
}
const resetear = ()=>{
    setcontador(0)
}

  return{
      contador,
      incrementar,
      decrementar,
      resetear


  }
}


