import Button from 'react-bootstrap/Button';

const Boton = ({colorButton, textButton}) => {
    return (
        <>
        <Button>{colorButton}{textButton}</Button>
        </>
        );
    };
    export default Boton;