import loader from '../loader.png'

const Loader = () => { 
    return (
        <div className="loader">
            <div id="loader-glass-holder">
                <div id="loader-glass">
                    <img src={loader} alt=""/>
                </div>
                <div id="loader-water"></div>
            </div>
        </div>
    );
};



export default Loader;