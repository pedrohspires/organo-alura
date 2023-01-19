import './ListaSuspensa.css';

const ListaSuspensa = ({label, itens}) => {
  return (
    <div className='lista-suspensa'>
      <label>{label}</label>
      <select>
        {itens.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
  );
}

export default ListaSuspensa;