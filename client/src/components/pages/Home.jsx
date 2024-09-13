import React from 'react'


import styles from './Home.module.css';

import Cabecalho from '../layout/Cabecalho'
import TabelaAulas from '../TabelasAulas/Tabela.Aulas'

function Home() {
  return (
   <>
    <Cabecalho/>
    <TabelaAulas/>
   </>
  )
}

export default Home
