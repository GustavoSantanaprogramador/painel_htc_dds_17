import { useEffect,useState } from "react";
import styles from './Saudacao.module.css'

function Saudacao(){
    //Criando estado da saudação
    const [saudacaoPeriodo,setSaudacaoPeriodo] = useState(' ');

    useEffect(()=> {
        atualizaSaudacao();

        const intervalo = setInterval(atualizaSaudacao,1000);

        //Interrompe a funcao o desmontar o elemento
        clearInterval(intervalo);
    });
        
    //criando texto da saudacao
    function atualizaSaudacao(){
        const agora = new Date();

        //obtendo hora em inteiro exemplo 21:15 retorna 21
        const hora = agora.getHours();

        //Obtendo dia dda semana em interiro iniciando em domingo como 0 e sabado como  6
        const dia = agora.getDay();

        //Declarando variavel txto saudacao
        let textoSaudacao = '';

        //Definindo array dias da semana
        const diaSemana = [
            'Domingo', 'Segunda', 'Terça','Quarta','Quinta','Sexta', 'Sabado'
        ];

        //Adicionando o dia da semana ao textSaudacao
        textoSaudacao += diaSemana[dia];

        if(hora>=18){
            textoSaudacao += ' - Boa noite -'
        }else if (hora >= 12){
            textoSaudacao += '- Boa tarde -'
        }else if(hora >=6){
            textoSaudacao += '- Bom dia -'
        }else {
            textoSaudacao += '- Boa Madrugada -'
        }
        setSaudacaoPeriodo(textoSaudacao);



    }

    return(
        <div className={styles.saudacao}>{saudacaoPeriodo}</div>
    )
}

export default Saudacao;