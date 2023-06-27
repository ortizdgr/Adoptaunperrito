import Card from 'react-bootstrap/Card';
import {useState} from 'react'

const Formulario = ({image, title, descripcion}) => {
    const [nombre, setNombre] = useState("")
    const [error, setError] = useState(false)

    const validarInput = (e) => {
        e.preventDefault()
        if(nombre === '') { setError(true)
        return
    }
    setError(false)
    }

    return (
        <>
         <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image}/>
                 <Card.Body>
                     <Card.Title>{title} </Card.Title>
                     <Card.Text>{descripcion}</Card.Text>

                     <form onSubmit={validarInput}>
                     {error ? <p className="error">Debes ingresar tu nombre</p> :null}
                     <div className="form-group">
                     <label>Nombre</label>
                        <input className="form-control" name="Nombre" onChange={(e) => setNombre(e.target.value)}/>
                    </div> 
                    </form>
                   
                    <form onSubmit={validarInput}>
                     {error ? <p className="error">Debes ingresar tu email</p> :null}
                     <div className="form-group">
                     <label>Email</label>
                        <input className="form-control" name="Email" onChange={(e) => setNombre(e.target.value)}/>
                    </div> 
                    </form>

                    <form onSubmit={validarInput}>
                     {error ? <p className="error">Debes ingresar tu contraseña</p> :null}
                     <div className="form-group">
                     <label>Contraseña</label>
                        <input className="form-control" name="Nombre" onChange={(e) => setNombre(e.target.value)}/>
                    </div> 
                    </form>

                    <form onSubmit={validarInput}>
                     {error ? <p className="error">La contraseña ingresada no coincide</p> :null}
                     <div className="form-group">
                     <label>Repita su contraseña</label>
                        <input className="form-control" name="Nombre" onChange={(e) => setNombre(e.target.value)}/>
                        <button className="btn btn-dark mt-3" type="submit"> Enviar</button>
                    </div> 
                    </form>
                    

                 </Card.Body>
         </Card>
         </>
         );
        };
        export default Formulario;

