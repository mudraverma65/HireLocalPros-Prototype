import './styles.css';

function Footer(){
    return(
        <div class = 'Frame'>
            <div class = 'Footer'>
                <div class = 'FooterCol'>
                    <div class = 'FooterTitle'>For Clients</div>
                    <div class = 'FooterList'>
                        Categories<br/>How to Book<br/>Book
                    </div>
                </div>
                <div class = 'FooterCol'>
                    <div class = 'FooterTitle'>For Talent</div>
                    <div class = 'FooterList'>
                        Join Us<br/>Past Bookings<br/>Edit Profile<br/>Schedule<br/>Requests
                    </div>
                </div>
                <div class = 'FooterCol'>
                    <div class = 'FooterTitle'>Company</div>
                    <div class = 'FooterList'>
                        About Us<br/>Contact Us
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;