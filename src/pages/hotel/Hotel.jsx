import React, { useState } from "react"
import './hotel.css'
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Hotel = () => {
    const [sliderNumber, setSliderNumber] = useState(0)
    const [open, setOpen] = useState(false)

    const photos = [
        { src: "https://tse3.mm.bing.net/th?id=OIP.8Z8G7Hauk3lizpi0n_rLvQHaE4&pid=Api&P=0&w=300&h=300" },

        { src: "https://photos.mandarinoriental.com/is/image/MandarinOriental/dmo-The-worlds-most-romantic-hotel-suites-dubai-royal-penthouse-bedroom " },

        { src: "https://photos.mandarinoriental.com/is/image/MandarinOriental/dmo-The-worlds-most-romantic-hotel-suites-dubai-royal-penthouse-bedroom" },
        { src: "https://tse1.mm.bing.net/th?id=OIP.uBZzLNUexdwwV7S-lX3o0QHaFj&pid=Api&P=0&w=300&h=300" },
        { src: "https://sofyanhotel.com/wp-content/uploads/2018/04/Sofyan-Hotel-Soepomo-02-Room.jpg" },

        { src: "https://tse2.mm.bing.net/th?id=OIP.6NLV16bzAw5tAwKdmk8JmgHaE8&pid=Api&P=0" },

        { src: "https://tse4.mm.bing.net/th?id=OIP.PMZljopywg93Kk0s-M2uqQHaE8&pid=Api&P=0" },
        { src: "https://tse2.mm.bing.net/th?id=OIP.6NLV16bzAw5tAwKdmk8JmgHaE8&pid=Api&P=0" },

    ];
    const handleOpen = (i) => {
        setSliderNumber(i)
        setOpen(true)
    }
    const handleMove = (direction) => {
        let newSliderNumber;
        if (direction === "l") {
            newSliderNumber = sliderNumber === 0 ? 7 : sliderNumber - 1
        }
        else {
            newSliderNumber = sliderNumber === 7 ? 0 : sliderNumber + 1
        }
        setSliderNumber(newSliderNumber)
    }
    return (
        <div>
            <Navbar />
            {/* <Header type="list" /> */}
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => { setOpen(false) }} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={photos[sliderNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("l")} />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserver or Book Now</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New York</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 500m center </span>
                    <span className="hotelPriceHighlight">Book a stay over $143 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper">
                                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle ">Stay in the heart of krakow</h1>
                            <p className="hotelDesc
                            ">Hotel Detals paragrpah</p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Location in the real heart Krakow, this property has an excellent location socre of 9.8!
                            </span>
                            <h2>
                                <b>$945</b>(9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>


        </div>
    )
};

export default Hotel;
