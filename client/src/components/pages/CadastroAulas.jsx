import React, {useState} from 'react';
import Navbar from '../layout/Navbar';
import { Link } from 'react-router-dom';

 function CadastroAulas() {
    const [dataAula,setDataAula] = useState(''); 
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFim, setHoraFim] =useState('');
    const [instrutor, setInstrutor] = useState('');
    const [unidadeCurricular, setUnidadeCurricular] =useState('');
    const [ambiente, setAmbiente] = useState('');
    const [infoAulas, setInfoAulas] = useState({});




    async function cadastrarAula(e){
        e.preventDefault();
        
    }

  return (
    <div>
      <Navbar/>
      <div className='container justify-content-center col-sm-12 col-md-6 col-lg-3'>
      <h1 className='text-center'>Adicionar de aulas</h1>
        <form OnSubmit={"cadastrarAula"}>
      <label className='form-label' htmlFor="">Data</label>
      <input className='form-control' type="date" name="" id=""  value = {dataAula} onChange={(e)=>setDataAula(e.target.value)}/>
      <label className='form-label' htmlFor="">Hora inicio</label>
      <input className='form-control' type="time" name="" id="" />
      <label className='form-label' htmlFor="">Hora Fim</label>
      <input className='form-control' type="time" name="" id="" />
      <label className='form-label' htmlFor="">Turma</label>
      <input className='form-control' type="text" name="" id="" />
      <label className='form-label' htmlFor="">Instrutor</label>
      <input className='form-control' type="text" name="" id="" />
      <label className='form-label' htmlFor="">Unidade Curricular</label>
      <input className='form-control' type="text" name="" id="" />
      <Link className='btn btn-danger' to='/login mt-2'>Cancelar</Link>
      <button className='btn btn-success mt-2 float-end'>Cadastrar</button>
      </form>
    </div>
</div>
  )
}

export default CadastroAulas;