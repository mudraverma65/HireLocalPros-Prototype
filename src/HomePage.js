import Categories from './Categories';
import Banner from './Banner';
import './styles.css';

function HomePage(){
    return(
        <div class = 'Frame'>
            <Banner/>
            <Categories/>
        </div>
    );
}

export default HomePage;