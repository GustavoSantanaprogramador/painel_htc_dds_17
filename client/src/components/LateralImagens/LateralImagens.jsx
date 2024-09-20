import { useEffect, useReducer, useState } from "react"

function LateralImagens() {
    const [imagens, setImagens] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

    useEffect(()=>{

        carregarImagens();
    },[]);

    async function carregarImagens(){
        try{
            const resposta = await fetch ('http://localhost:5000/imagens',{
                method: "GET",
                headrs:{
                    'Content-Type':'application/json'
                }
            });
            if(!resposta){
                throw new Error ('Erro ao buscar aulas');
            }
            const consulta = await resposta.json();
            setImagens(consulta);
            setRemoveLoading(true);
        }catch(error){
            console.log('Error ao consultar aulas', error);
        }
    } 

  return (
    <div>
      {imagens.map((imagem)=>(
        <div key ={imagem.id}>
            <img src = {imagem.caminho} alt = {imagem.alts}/>
            </div>
      ))}
    </div>
  )
}

export default LateralImagens
