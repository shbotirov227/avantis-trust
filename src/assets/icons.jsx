import { Link } from "react-router-dom";

const PlayMarketIcon = () => {
    return (
        <a href="www.playmarket.com">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.2483 20.983L14.9028 10.6097L28.0653 18.166L25.2483 20.983ZM12.2035 10C11.5938 10.3187 11.1865 10.9 11.1865 11.6545V32.3402C11.1865 33.0947 11.5945 33.676 12.2035 33.9947L24.232 21.9947L12.2035 10ZM32.134 20.575L29.3733 18.9767L26.2938 22L29.3733 25.0232L32.1903 23.425C33.034 22.7552 33.034 21.2455 32.134 20.575ZM14.9035 33.391L28.066 25.8347L25.249 23.0177L14.9035 33.391Z" fill="white"/>
                <rect x="0.5" y="0.5" width="43" height="43" rx="4.5" stroke="url(#paint0_linear_22_80)"/>
                <defs>
                    <linearGradient id="paint0_linear_22_80" x1="-8.5" y1="-8" x2="40.5" y2="40.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </a>
    )
}

const AppStoreIcon = () => {
    return (
        <Link to="#">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.497 27.5998C33.0661 28.613 32.5561 29.5456 31.9651 30.4031C31.1596 31.572 30.5001 32.3811 29.9918 32.8304C29.2039 33.5679 28.3597 33.9456 27.4557 33.9671C26.8067 33.9671 26.024 33.7791 25.113 33.3978C24.199 33.0183 23.359 32.8304 22.591 32.8304C21.7854 32.8304 20.9215 33.0183 19.9975 33.3978C19.072 33.7791 18.3265 33.9778 17.7565 33.9975C16.8896 34.0351 16.0255 33.6466 15.163 32.8304C14.6125 32.3417 13.924 31.5039 13.0991 30.3171C12.2141 29.0497 11.4865 27.5801 10.9165 25.9046C10.306 24.0949 10 22.3424 10 20.6458C10 18.7023 10.4126 17.0261 11.239 15.6214C11.8886 14.4931 12.7526 13.6031 13.8341 12.9497C14.9155 12.2964 16.0841 11.9634 17.3425 11.9421C18.031 11.9421 18.934 12.1589 20.056 12.5849C21.175 13.0124 21.8934 13.2292 22.2084 13.2292C22.4439 13.2292 23.242 12.9757 24.595 12.4703C25.8746 12.0017 26.9544 11.8076 27.8391 11.8841C30.2363 12.081 32.0372 13.0428 33.235 14.7756C31.091 16.0977 30.0305 17.9496 30.0516 20.3252C30.0709 22.1755 30.7305 23.7154 32.0267 24.938C32.6141 25.5054 33.2701 25.944 34 26.2555C33.8417 26.7227 33.6746 27.1702 33.497 27.5998V27.5998ZM27.9991 5.58017C27.9991 7.03049 27.4785 8.38467 26.4409 9.63808C25.1886 11.1281 23.674 11.9892 22.0315 11.8533C22.0095 11.671 21.9984 11.4874 21.9984 11.3037C21.9984 9.91142 22.5939 8.42136 23.6515 7.20305C24.1795 6.58618 24.851 6.07329 25.6653 5.66413C26.4778 5.26108 27.2464 5.03818 27.9692 5C27.9904 5.19388 27.9991 5.38778 27.9991 5.58015V5.58017Z" fill="white"/>
            <rect x="0.5" y="0.5" width="43" height="43" rx="4.5" stroke="url(#paint0_linear_22_92)"/>
                <defs>
                    <linearGradient id="paint0_linear_22_92" x1="-8" y1="-4.5" x2="39" y2="41" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </Link>
    )
}

export {
    PlayMarketIcon,
    AppStoreIcon
}