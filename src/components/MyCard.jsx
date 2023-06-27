import Card from 'react-bootstrap/Card';
import Boton from './Boton';

const MyCard = ({image, title, descripcion, colorButton, textButton}) => {
    return (
        <>
         <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image}/>
                 <Card.Body>
                     <Card.Title>{title} </Card.Title>
                     <Card.Text>{descripcion}</Card.Text>
                     <Boton colorButton={colorButton} textButton={textButton} />
                 </Card.Body>
         </Card>
         </>
         );
        };
        export default MyCard;