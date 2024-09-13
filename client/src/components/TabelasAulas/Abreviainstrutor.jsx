import React from 'react'

function Abreviainstrutor(props) {
const nomes = props.nomeCompleto.split('')

if (nomes.lenght == 1){
    return nomes[0]
}

  return (
  nomes[0] + ' ' + nomes.pop()
  )
}

export default Abreviainstrutor
