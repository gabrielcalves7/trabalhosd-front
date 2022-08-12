import './styles.css';

export function Card({name, data, description}){
  
  return(
    <div className="card">
      <div className="wrapPokemonInformations">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Tarefa: {name}</h2>
          <h4>Data {data}</h4>
        </div>
  
        <p>Descrição: {description}</p>
      </div>
    </div>
  )
}
