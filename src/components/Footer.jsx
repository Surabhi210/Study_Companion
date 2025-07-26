import './Footer.css';

function Footer(){
    return (
        <footer className='footer'>
            <p>&copy; {new Date().getFullYear()} FocusForge. All rights reserved.</p>
            <div className="footer-links">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Help</a>
            </div>
        </footer>
    );
}

export default Footer;