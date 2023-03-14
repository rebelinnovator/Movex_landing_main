import React, {useState, useRef, useEffect } from "react";

export default function Slider() {
    const [isPressed,setIsPressed] = useState(false)
    const sliderRef = useRef(null)

    const mouseDown = (event)=>{
        setIsPressed(true)
    }
    const mouseUp = (event)=>{
        setIsPressed(false)
    }
    const mouseMove = (event)=>{
        if(isPressed){        
            sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - event.movementX
        }
    }

    return (
        <>
        <div className='content-body'
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
            onMouseMove={mouseMove}
            ref={sliderRef}
         >
            <div className='content-panel'>
            {/* <Carousel responsive={responsive}> */}
                <div className='content_item'>
                <svg width="88" height="91" viewBox="0 0 88 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 40.5)" fill="url(#paint0_linear_3522_9537)"/>
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 30.5)" fill="url(#paint1_linear_3522_9537)"/>
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 20.5)" fill="url(#paint2_linear_3522_9537)"/>
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 10.5)" fill="url(#paint3_linear_3522_9537)"/>
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 0.5)" fill="url(#paint4_linear_3522_9537)"/>
                    <defs>
                    <linearGradient id="paint0_linear_3522_9537" x1="55.8841" y1="55.3659" x2="10.8841" y2="55.3659" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F7F7F7" stopOpacity="0.85"/>
                    <stop offset="1" stopColor="#3F3F3F" stopOpacity="0.83"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_3522_9537" x1="55.2591" y1="54.7409" x2="3.21317" y2="56.8196" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#3F3F3F"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_3522_9537" x1="54.0091" y1="53.4909" x2="3.21301" y2="55.5676" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#3F3F3F"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_3522_9537" x1="55.1624" y1="56.0876" x2="1.77312" y2="56.7997" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#3F3F3F"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_3522_9537" x1="50.2591" y1="49.7409" x2="-0.00520887" y2="50.4524" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#3F3F3F"/>
                    </linearGradient>
                    </defs>
                </svg>
                <div>Open API</div>
                <p>Our unparalleled mechanism brings liquidity on par with fungible token to NFT investment market. Our protocol can be seamlessly composed with any existing Defi infrastructure to create derivative products.</p>
                
                </div>
                <div className='content_item'>
                <svg width="88" height="91" viewBox="0 0 88 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 40.5)" fill="url(#paint0_linear_3522_9537)"/>
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 30.5)" fill="url(#paint1_linear_3522_9537)"/>
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 20.5)" fill="url(#paint2_linear_3522_9537)"/>
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 10.5)" fill="url(#paint3_linear_3522_9537)"/>
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 0.5)" fill="url(#paint4_linear_3522_9537)"/>
                    <defs>
                    <linearGradient id="paint0_linear_3522_9537" x1="55.8841" y1="55.3659" x2="10.8841" y2="55.3659" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F7F7F7" stopOpacity="0.85"/>
                    <stop offset="1" stopColor="#3F3F3F" stopOpacity="0.83"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_3522_9537" x1="55.2591" y1="54.7409" x2="3.21317" y2="56.8196" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#3F3F3F"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_3522_9537" x1="54.0091" y1="53.4909" x2="3.21301" y2="55.5676" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#3F3F3F"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_3522_9537" x1="55.1624" y1="56.0876" x2="1.77312" y2="56.7997" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#3F3F3F"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_3522_9537" x1="50.2591" y1="49.7409" x2="-0.00520887" y2="50.4524" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#3F3F3F"/>
                    </linearGradient>
                    </defs>
                </svg>
                <div>Open API</div>
                <p>Our unparalleled mechanism brings liquidity on par with fungible token to NFT investment market. Our protocol can be seamlessly composed with any existing Defi infrastructure to create derivative products.</p>
                
                </div>
                <div className='content_item'>
                <svg width="88" height="91" viewBox="0 0 88 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 40.5)" fill="url(#paint0_linear_3522_9537)"/>
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 30.5)" fill="url(#paint1_linear_3522_9537)"/>
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 20.5)" fill="url(#paint2_linear_3522_9537)"/>
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 10.5)" fill="url(#paint3_linear_3522_9537)"/>
                    <rect width="50" height="50" transform="matrix(0.866025 0.5 -0.866025 0.5 43.8013 0.5)" fill="url(#paint4_linear_3522_9537)"/>
                    <defs>
                    <linearGradient id="paint0_linear_3522_9537" x1="55.8841" y1="55.3659" x2="10.8841" y2="55.3659" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F7F7F7" stopOpacity="0.85"/>
                    <stop offset="1" stopColor="#3F3F3F" stopOpacity="0.83"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_3522_9537" x1="55.2591" y1="54.7409" x2="3.21317" y2="56.8196" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#3F3F3F"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_3522_9537" x1="54.0091" y1="53.4909" x2="3.21301" y2="55.5676" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#3F3F3F"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_3522_9537" x1="55.1624" y1="56.0876" x2="1.77312" y2="56.7997" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#3F3F3F"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_3522_9537" x1="50.2591" y1="49.7409" x2="-0.00520887" y2="50.4524" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#3F3F3F"/>
                    </linearGradient>
                    </defs>
                </svg>
                <div>Open API</div>
                <p>Our unparalleled mechanism brings liquidity on par with fungible token to NFT investment market. Our protocol can be seamlessly composed with any existing Defi infrastructure to create derivative products.</p>
                
                </div>
            {/* </Carousel> */}
            </div>
            </div>
        </>
    )
}