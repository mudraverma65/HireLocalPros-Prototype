import './styles.css';
import electricians from './electrician.png';
import plumber from './plumber.png';
import writer from './writer.png';
import finance from './finance.png';
import architect from './architect.png';
import it from './it.png';

function Categories(){
    
    return(
        <div class = 'Frame'>
            <div class = 'Categories'><h2>Categories</h2></div> 
            <div class = 'CategoryRow'>
                <div class = 'CategoryCard'>
                    <div class = 'CategoryIcon'>
                        <img src={electricians} class="category-logo" alt="logo"/>
                    </div>
                    <div class = 'CategoryTitle'><h3>Electricians</h3></div>
                    <div class = 'CategoryButton'>
                        <div class = 'ButtonS'>View all</div>
                    </div>
                </div>
                <div class = 'CategoryCard'>
                    <div class = 'CategoryIcon'>
                        <img src={plumber} class="category-logo" alt="logo"/>
                    </div>
                    <div class = 'CategoryTitle'><h3>Plumber</h3></div>
                    <div class = 'CategoryButton'>
                        <div class = 'ButtonS'>View all</div>
                    </div>
                </div>
                <div class = 'CategoryCard'>
                    <div class = 'CategoryIcon'>
                        <img src={it} class="category-logo" alt="logo"/>
                    </div>
                    <div class = 'CategoryTitle'><h3>IT & Software</h3></div>
                    <div class = 'CategoryButton'>
                        <div class = 'ButtonS'>View all</div>
                    </div>
                </div>
            </div>
            <div class = 'CategoryRow'>
                <div class = 'CategoryCard'>
                    <div class = 'CategoryIcon'>
                        <img src={writer} class="category-logo" alt="logo"/>
                    </div>
                    <div class = 'CategoryTitle'><h3>Writer</h3></div>
                    <div class = 'CategoryButton'>
                        <div class = 'ButtonS'>View all</div>
                    </div>
                </div>
                <div class = 'CategoryCard'>
                    <div class = 'CategoryIcon'>
                        <img src={architect} class="category-logo" alt="logo"/>
                    </div>
                    <div class = 'CategoryTitle'><h3>Architect</h3></div>
                    <div class = 'CategoryButton'>
                        <div class = 'ButtonS'>View all</div>
                    </div>
                </div>
                <div class = 'CategoryCard'>
                    <div class = 'CategoryIcon'>
                        <img src={finance} class="category-logo" alt="logo"/>
                    </div>
                    <div class = 'CategoryTitle'><h3>Finance</h3></div>
                    <div class = 'CategoryButton'>
                        <div class = 'ButtonS'>View all</div>
                    </div>
                    
                </div>
            </div>
            <div class = 'DisplayAll'>
                <div class = 'ButtonP'>View All Listings</div>
            </div>  
        </div>
    );
}

export default Categories;