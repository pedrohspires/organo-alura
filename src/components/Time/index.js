import './Time.css';

const Time = (props) => {
  const { nome } = props;
  const cssSection = {
    backgroundColor: props.corSecundaria
  }
  const cssNome = {
    borderColor: props.corPrimaria
  }

  return (
    <section className='time' style={ cssSection }>
      <h3 style={ cssNome }>{nome}</h3>
    </section>
  );
}

export default Time;