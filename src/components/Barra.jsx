function Barra(){
    return (
      <div className="barra">
        <input className='textarea' type="text" placeholder="Nombre de la tarea" />
        <div className='icon'>
            <button type="button" cursor="pointer">
            <span className="material-symbols-outlined search" >
add
</span>
            </button>
        </div>
        <div className='icon'>
            <button type="button" cursor="pointer">
            <span className="material-symbols-outlined add">
delete
</span>
            </button>
        </div>
    </div>
    );
  }

export {Barra}