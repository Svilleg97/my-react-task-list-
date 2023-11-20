import './general.css';

function Task(props) {
  const { tarea } = props;

  if (tarea.estado === "completado") {
    return (
      <div className="tarea">
        <div className="icon">
          <span className="material-symbols-outlined check">check_circle</span>
        </div>
        <div className="descripcion">{tarea.descripcion}</div>
        <div></div>
        <div className="icon">
          <button type="button" cursor="pointer">
            <span className="material-symbols-outlined borrar">delete</span>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="tarea">
        <div className="icon">
          <span className="material-symbols-outlined uncheck">circle</span>
        </div>
        <div className="descripcion">{tarea.descripcion}</div>
        <div className="icon">
          <button type="button" cursor="pointer">
            <span className="material-symbols-outlined completar">
              task_alt
            </span>
          </button>
        </div>
        <div className="icon">
          <button type="button" cursor="pointer">
            <span className="material-symbols-outlined borrar">delete</span>
          </button>
        </div>
      </div>
    );
  }
}

export { Task };