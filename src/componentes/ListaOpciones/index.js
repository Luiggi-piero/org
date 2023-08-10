import './ListaOpciones.css';

const ListaOpciones = (props) => {

    const manejarCambio = (e) => {
        console.log('cambio select', e.target.value);
        props.actualizarValor(e.target.value);
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option disabled 
                value='' 
                defaultValue='' 
                hidden>
                Seleccionar equipo
            </option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;