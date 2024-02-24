import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import '../assets/css/slider.css';
export default function Slide(){
    // const handleOnDragStart = e => e.preventDefault()
    // render(){
    return(
        <div className="grid grid-cols-3"> 
            <p>
            <AliceCarousel autoPlay={true}
            autoplayInterval={7000}
            disableButtonsControls
            disableDotsControls
            mouseTracking
            infinite={true}
            >
                <p>
                <img src="https://chessklub.com/wp-content/uploads/2023/04/USCF-Classic.png" alt='see' className='img1'/>
            </p>
            <p>
                <img src="https://globalgreenews.com/wp-content/uploads/2024/01/chess-2.jpg"alt='see' className='img1'/>
            </p>
            <p>
                <img src="https://karnatakachess.com/wp-content/uploads/2023/10/BLR-GM-Open.png" alt='see' className='img1'/>
            </p>
        
                {/* <p>

                <img src="https://c1.wallpaperflare.com/preview/104/546/334/home-residential-house-residence.jpg" alt='see' className='img1'/>
                </p> */}
            </AliceCarousel>
            </p>
         </div>
    );
}
// }