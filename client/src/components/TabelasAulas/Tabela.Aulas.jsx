import React from 'react'
import { useEffect, useState } from 'react'
import AbreviaData from './AbreviaData';
import Abreviainstrutor from './Abreviainstrutor';
import AbriviaUC from './AbriviaUC';
import AbreviaAmbiente from './AbriviaAmbiente';

function TabelaAulas() {
    const [aulas, setAulas] = useState([]);

    useEffect(() => {
        carregarAulas();
        console.log(aulas);

    }, []) // isto é uma função anônima

    async function carregarAulas() {

        try {
            const resposta = await fetch('http://localhost:5000/aulas', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        if (!resposta) {
            throw new Error("Erro ao buscar aula")
        }

        const consulta = await resposta.json();
        setAulas(consulta);
        console.log(consulta);
    }catch(error) {
        console.log("Erro ao buscar aulas", error);
    }



}

return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Inicio</th>
                    <th>Fim</th>
                    <th>Turma</th>
                    <th>Instrutor</th>
                    <th>Unidade Curricular</th>
                    <th>Ambiente</th>
                </tr>
            </thead>
            <tbody>
                {aulas.map((aula) => (
                    <tr key={aula.id}>
                        <td>{<AbreviaData data={aula.data_hora_inicio} />}</td>
                        <td>{<AbreviaData data={aula.data_hora_fim} />}</td>
                        <td>{aula.turma}</td>
                        <td>{<Abreviainstrutor nomeCompleto={aula.instrutor} />}</td>
                        <td>{<AbriviaUC unidade_curricular={aula.unidade_curricular} />}</td>
                        <td>{<AbreviaAmbiente nomeAmbiente={aula.ambiente} />}</td> {/*</> é usado para chamar o react, já {} é usado para forçar um uso em js*/}
                    </tr>


                ))}
            </tbody>
        </table>
    </div>
)
}

export default TabelaAulas
