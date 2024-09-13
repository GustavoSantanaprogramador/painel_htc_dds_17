function AbreviaAmbiente(props){
    const ambiante = props.nomeAmbiente.split('-');
    
    if(ambiente.lenght < 2){
        return ambiente
    }
    ambiente.splice(0,2);
    return(
        ambiente.join('-')
    )
}

export default AbreviaAmbiente;