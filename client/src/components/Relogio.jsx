import {useEffect, useState} from 'react';

function Relogio() {
    const [hora, setHora] = useState(' ');
    //useEFECT ACIONANDO APÓS CARREGAMENTO DA PAGINA

    useEffect(()=>{
        atualizaHorario();

        const intervalo = setInterval(atualizaHorario,1000);
        //Interrompe a funcção ao desmontar o elemento
        return () => {
            clearInterval(intervalo);
        }

 });

function atualizaHorario(){
    //Declarando o Objeto do tipo Date
    const agora = new Date();

    //pegand ohora minutos e segundos
    const horaMinutosSegundos = agora.toLocaleDateString('pt-br',{hour:'2-digit',minute: '2-digit', second: '2-digit'});

    setHora(horaMinutosSegundos);
}


  return (
    //Chamando constante hora
    <div>{hora}</div>
  )
}

export default Relogio
