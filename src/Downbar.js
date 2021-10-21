import { useHistory } from 'react-router';

const Downbar = () => {

    const backpage = useHistory();

    const goBack = () => {
        backpage.go(-1);
    }

    return (
        <div className="navbar">
                <button className="BackButton" type="button" onClick={goBack}>
                    <h3 className="BackButton-Title">VOLTAR</h3>
                </button>
        </div>
        );
    }
    
    export default Downbar;