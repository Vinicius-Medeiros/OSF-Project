import { useHistory } from 'react-router';

const Downbar = () => {

    const backpage = useHistory();

    const goBack = () => {
        backpage.go(-1);
    }

    return (
        <nav className="navbar">
            <div className = "imgNavbar">
            </div>
            <form>
                <button className="BackButton" type="button" onClick={goBack}>
                    <h3 className="BackButton-Title">VOLTAR</h3>
                </button>
            </form>
        </nav>
        );
    }
    
    export default Downbar;