import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

interface buttonProps {
    url: string;
}

const RedirectButton = (props:buttonProps) =>{
    let navigate = useNavigate();
    const routeChange = ()=>{
        navigate(props.url);
    }

    return(
        <div className='p-2'>
            <Button variant='success' size='lg' onClick={routeChange}>
                Get Started
            </Button>
        </div>
    )

}

export default RedirectButton;