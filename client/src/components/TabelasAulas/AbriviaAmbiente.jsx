function AbreviaAmbiente(props){
    const ambiante = props.nomeAmbiente.split('-');
    
    if(ambiente.lenght < 2){
        return ambiente
    }
    return(
        ambiente.split(0,2).join('-')
    )
}

export default AbreviaAmbiente;