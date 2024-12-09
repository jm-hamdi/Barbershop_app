import { ClockDropdown } from './HeaderComponents/DropdownMenus/ClockDropdown';
import { PhoneDropdown } from './HeaderComponents/DropdownMenus/PhoneDropdown';
import SLogoWhite from './HeaderComponents/images/S logo white.png';
import SLogoBlack from './HeaderComponents/images/S logo black.png';
import { useEffect, useRef, useState } from 'react';
import './HeaderComponents/Styles/BeforeAfter.css';
import './HeaderComponents/Styles/Responsive.css';
import './style.css'

export const HeaderSection =()=>{

    const [popup, setPopup] = useState(false)
    const [color, setcolor] = useState(false)
    const [dropdown, setDropDown] = useState(false)
    const [mouseover, setMouseover] = useState(null)
    const [clickChange, setClickChange] = useState(false)


    let menuRef = useRef();

        
    const handleMouseEnter = (num) => {
        setMouseover(num);
   };
   const handleMouseLeave = (num) => {
         setMouseover(num);
   };  

        const ChangeColor = () =>{
            if(window.scrollY >= 70){
                setcolor(true)
            }else{
                setcolor(false)
            }
        }

        window.addEventListener('scroll', ChangeColor)

        useEffect(() => {
            let handler = (e) =>{
               if(!menuRef.current.contains(e.target)){
                setPopup(false);
                setDropDown(false);
                setMouseover(null);
                setClickChange(false);
               }
            };
            document.addEventListener('mousedown', handler)
        })
    
        const buttonClickChanger =()=>{
            setClickChange(!clickChange)
            setDropDown(!dropdown)
        }
    
    return(
        <header className={color ? 'header ScrollColor ': 'header'}>
            <div className='logo'>
                <img id='ResponsiveHidden' src={SLogoWhite}/>
                <img id='ResponsiveShown' src={SLogoBlack}/>
                <h1>THE SHAVE</h1>
            </div>
            <div className='MainHeaderSide' ref={menuRef}>
                <svg id='ResponsiveHidden'  className='Phone' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15.5C19.67 15.5 18.4 15.28 17.2 14.86C16.77 14.7 16.29 14.82 16 15.16L14.06 17.1C11.26 15.75 8.73 13.23 7.39 10.43L9.34 8.5C9.68 8.15 9.79 7.67 9.63 7.24C9.21 6.04 9 4.77 9 3.5C9 3.22 8.78 3 8.5 3H4C3.72 3 3.5 3.22 3.5 3.5C3.5 12.39 11.11 20 20 20C20.28 20 20.5 19.78 20.5 19.5V15C20.5 14.72 20.28 14.5 20 14.5H18.5C18.22 14.5 18 14.72 18 15C18 15.93 18.07 16.86 18.2 17.79C18.34 18.73 18.52 19.66 18.75 20.57C19.29 19.43 19.93 18.34 20.68 17.29C20.9 16.99 21 16.62 21 16.25V15.5Z"/></svg>
                <div className='PhoneDropdown'>
                    <PhoneDropdown/>
                    <div className='PhoneX'></div>
                </div>
                <svg id='ResponsiveHidden'  className='Clock' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-9.414v6.414h2v-7.707l4.146-4.147-1.414-1.414-4.732 4.733z"/></svg>
                <div className='ClockDropdown'>
                    <ClockDropdown/>
                    <div className='HoursX'></div>
                </div>
                <span id='ResponsiveHidden' className='BookNow' onClick={()=>{setPopup(!popup)}}>BOOK NOW</span>
                <a onClick={buttonClickChanger} className={clickChange ? 'Menu clicked' : 'Menu'}>Menu</a>
                <ul className={`DropDownMenu ${dropdown? 'active' : 'inactive'}`}>
                    <div>
                        <h1 id='ResponsiveShown'>THE SHAVE</h1>
                        <div className='X' onClick={()=>{setDropDown(!dropdown)}}></div>
                    </div>
                    <input type="text" placeholder='Search. . .' /> 
                    <li id='ResponsiveShown' className='BookToday' onClick={()=>{setPopup(!popup)}}>Book Today</li>
                    <li className='OurServices' onMouseEnter={()=> setMouseover(1)} onMouseLeave={()=> setMouseover(null)}>Our Services</li>  
                    <li className='PricesOptions' onMouseEnter={()=> setMouseover(2)} onMouseLeave={()=> setMouseover(null)}>Prices & Options</li>
                    <li>Team</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <ul className={`OurServicesSideMenu ${mouseover === 1 ? 'hovered' : 'notHovered'}`} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                    <li className='OurServicesMainSide'>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 64 64" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve"><g><path d="M61.168 7.445A5.724 5.724 0 0 1 56.395 10h-.419c.009-.16.024-.32.024-.481A3.522 3.522 0 0 0 52.482 6a3.522 3.522 0 0 0-3.076 1.81c-.171.309-.361.608-.536.915l-4.777-1.061a27.982 27.982 0 0 0-10.286-.339A144.283 144.283 0 0 1 11.912 9H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v3c0 1.654 1.346 3 3 3h4.658c8.519 0 17.046-.937 25.37-2.767.055.23.191.437.387.579a1.004 1.004 0 0 0 .901.136l1.633-.544A2.995 2.995 0 0 0 40 14.559v-2.546c2.166.055 4.332.294 6.458.704a96.086 96.086 0 0 1-6.833 9.451 129.953 129.953 0 0 1-18.521 18.365l-9.048 7.325A5.526 5.526 0 0 0 10 52.168v.288A5.55 5.55 0 0 0 15.544 58a5.51 5.51 0 0 0 3.222-1.033l4.59-3.278A90.997 90.997 0 0 0 38.463 40.11a90.757 90.757 0 0 0 15.126-23.475l1.723-3.875a7.97 7.97 0 0 0 .291-.76h.791a7.724 7.724 0 0 0 6.438-3.445zM5 18c-.551 0-1-.448-1-1v-3h9.909C20.935 14 28 13.396 35 12.192v3A116.299 116.299 0 0 1 9.658 18zm42.119-7.196A41.533 41.533 0 0 0 39 10a1 1 0 0 0-1 1v3.559a1 1 0 0 1-.684.949l-.316.104V11c0-.297-.176-.57-.403-.76a1.085 1.085 0 0 0-.863-.208A122.32 122.32 0 0 1 13.909 12H3v-1h8.912c7.411 0 14.88-.571 22.211-1.699a25.975 25.975 0 0 1 9.537.315l4.148.922c-.072.12-.139.242-.212.362zm6.366 1.144-1.723 3.874a88.786 88.786 0 0 1-14.794 22.959 89.026 89.026 0 0 1-14.774 13.28l-4.59 3.278A3.547 3.547 0 0 1 12 52.456v-.288c0-1.074.479-2.078 1.314-2.755l9.048-7.325A132.012 132.012 0 0 0 41.168 23.44a97.96 97.96 0 0 0 9.985-14.658A1.52 1.52 0 0 1 54 9.519a5.95 5.95 0 0 1-.515 2.429z" fill="#000000" opacity="1"/><path d="M51 10h2v2h-2zM16 49c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2z" fill="#000000" opacity="1"/></g></svg>
                        <div className='Services'>
                            <p>the shave</p>
                            <span id='ResponsiveHidden'>fast and simple</span>
                        </div>
                    </li>
                    <li className='OurServicesMainSide'>
                        <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.999 511.999" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><path d="M365.637,358.545l-47.76-82.721l83.65-144.886c11.929-20.661,15.098-44.73,8.922-67.774c-6.176-23.044-20.954-42.303-41.615-54.232L353.366,0l-97.366,168.644L158.632,0l-15.469,8.931c-20.661,11.929-35.44,31.188-41.615,54.232c-6.176,23.046-3.006,47.114,8.922,67.774l83.65,144.886l-47.758,82.721c-35.837,6.759-63.037,38.278-63.037,76.047c0,42.682,34.724,77.406,77.406,77.406s77.406-34.724,77.406-77.406c0-5.931-0.693-11.699-1.963-17.251l19.826-34.34l19.824,34.34c-1.269,5.552-1.961,11.32-1.961,17.251c0,42.682,34.724,77.406,77.406,77.406s77.406-34.724,77.406-77.406C428.675,396.823,401.474,365.305,365.637,358.545z M364.925,51.431c5.14,6.001,8.911,13.125,11.017,20.981c3.705,13.826,1.805,28.268-5.352,40.664L297.253,240.1l-20.627-35.728L364.925,51.431z M141.409,113.075c-7.157-12.396-9.057-26.837-5.352-40.664c2.104-7.857,5.876-14.98,11.017-20.981l88.299,152.94l-20.627,35.728L141.409,113.075z M160.73,476.274c-22.982,0-41.68-18.698-41.68-41.68s18.698-41.68,41.68-41.68s41.68,18.698,41.68,41.68C202.411,457.575,183.713,476.274,160.73,476.274z M216.128,380.61c-8.344-8.562-18.647-15.195-30.18-19.182l28.797-49.878l20.627,35.728L216.128,380.61z M255.999,311.551l-20.627-35.727l20.627-35.728l20.627,35.728L255.999,311.551z M295.87,380.61l-19.244-33.332l20.627-35.728l28.797,49.878C314.517,365.414,304.214,372.047,295.87,380.61z M351.269,476.274c-22.982,0-41.68-18.698-41.68-41.68s18.698-41.68,41.68-41.68s41.68,18.698,41.68,41.68C392.949,457.575,374.251,476.274,351.269,476.274z"></path></g></g></g></svg>
                        <div className='Services'>
                            <p>Haircuts</p>
                            <span id='ResponsiveHidden'>check examples of hairstyles</span>
                        </div>
                    </li>
                    <li className='OurServicesMainSide'>
                        <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M24.776 23.023c-3.167 0-4.965-1.488-6.155-2.473-0.421-0.349-0.804-0.684-1.152-0.989-0.529-0.464-1.188-1.042-1.417-1.122-0.007 0-0.116-0.005-0.123-0.006-0.037 0.003-0.13 0.021-0.139 0.023-0.159 0.064-0.722 0.549-1.174 0.938-0.411 0.352-0.878 0.755-1.407 1.168l-0.097 0.074c-1.358 1.061-3.050 2.38-6.036 2.38-2.219 0-4.404-1.004-5.705-2.621-0.873-1.084-1.79-2.97-1.208-5.796 0.071-0.342 0.313-0.622 0.638-0.739 0.328-0.118 0.688-0.053 0.957 0.168 0.020 0.014 0.706 0.542 1.846 0.542 0.574 0 1.172-0.136 1.776-0.405 1.035-0.461 1.773-1.754 2.553-2.627 1.068-1.192 2.277-2.544 4.271-2.559 1.377 0 2.619 0.509 3.726 1.515 1.103-1.002 2.336-1.508 3.678-1.508 2.034 0.015 3.268 1.368 4.357 2.563 0.795 0.871 1.546 2.163 2.581 2.624 0.604 0.268 1.209 0.404 1.797 0.404 1.183 0 1.922-0.541 1.951-0.564 0.274-0.203 0.635-0.256 0.953-0.132 0.317 0.125 0.552 0.402 0.616 0.739 0.534 2.795-0.405 4.669-1.287 5.749-1.337 1.637-3.559 2.655-5.8 2.655zM15.96 16.434c0.031 0 0.115 0.003 0.145 0.006 0.001 0 0.146 0.011 0.146 0.012 0.011 0.001 0.094 0.012 0.103 0.014 0.724 0.102 1.395 0.692 2.413 1.584 0.334 0.294 0.703 0.617 1.108 0.953 1.087 0.901 2.441 2.021 4.901 2.021 1.666 0 3.304-0.738 4.274-1.927 0.637-0.78 0.969-1.71 0.99-2.774-0.47 0.146-1.040 0.256-1.698 0.256-0.864 0-1.736-0.194-2.593-0.574-1.414-0.628-2.384-2.16-3.24-3.098-1.079-1.184-1.796-1.909-2.878-1.918-1.442 0-2.373 0.908-2.951 1.591-0.189 0.223-0.463 0.351-0.753 0.351v0c-0.29 0-0.565-0.129-0.752-0.351-0.579-0.685-1.513-1.597-2.932-1.597-1.097 0.008-1.794 0.727-2.844 1.902-0.845 0.944-1.803 2.483-3.226 3.115-0.856 0.381-1.722 0.574-2.572 0.574-0.638 0-1.189-0.107-1.645-0.251-0.001 1.085 0.316 2.029 0.948 2.814 0.935 1.161 2.532 1.883 4.17 1.883 2.313 0 3.591-0.998 4.827-1.963l0.097-0.076c0.502-0.392 0.945-0.773 1.334-1.107 0.891-0.765 1.479-1.271 2.114-1.384v0c0.001 0 0.303-0.050 0.512-0.050z"></path></g></svg>
                        <div className='Services'>
                            <p> Beards And Mustaches </p>
                            <span id='ResponsiveHidden'>simple and cool detailed cuts</span>
                        </div>
                    </li>
                    <button>Why Choose Us?</button>
                </ul>
                <div className={`PricesOptionsSideMenu ${mouseover === 2 ? 'hovered' : 'notHovered'}`} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                    <div>
                        <ul className='DropdownMenu'>
                            <li><p>Get a Hairdcut</p></li>
                            <li id='ResponsiveChanged'>Mens Cuts</li>
                            <li id='ResponsiveChanged'>Kids Cuts</li>
                            <li id='ResponsiveChanged'>Get a Consultation</li>
                            <li id='ResponsiveChanged'>Find a barber</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><p>The Shave</p></li>
                            <li id='ResponsiveChanged'>The Signature Shave</li>
                            <li id='ResponsiveChanged'>The Royal Shave</li>
                            <li id='ResponsiveChanged'>Traditional Shave</li>
                            <li id='ResponsiveChanged'>Razor Edging</li>
                            <li id='ResponsiveChanged'>Head Shave</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><p>Mustaches</p></li>
                            <li id='ResponsiveChanged'>Mustache Trim</li>
                            <li id='ResponsiveChanged'>Mustache Wax</li>
                            <li id='ResponsiveChanged'>Style the Stash</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><p>Beards</p></li>
                            <li id='ResponsiveChanged'>Beard Trim</li>
                            <li  id='ResponsiveChanged'>Beard Waxing</li>
                            <li  id='ResponsiveChanged'>Beard Sculpt</li>
                            <li  id='ResponsiveChanged'>Beard Coloring</li>
                        </ul>
                    </div>
                    <button>View All Prices</button>
                </div>
            </div>
            <div className={`OutsideBookNow ${popup? 'fade-in' : 'fade-out'}`}>
                <div className={`BookNowContainer ${popup? 'active' : 'inactive'}`}>
                    <div className='BookNowHeader'>
                        <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.3 5.71a1 1 0 0 0-1.42-1.42L12 9.17 7.12 4.29a1 1 0 1 0-1.42 1.42L9.17 12l-4.29 4.88a1 1 0 0 0 1.42 1.42L12 14.83l4.88 4.29a1 1 0 0 0 1.42-1.42L14.83 12l4.29-4.88z"/></g></svg>
                        <h2>BOOK TODAY</h2>
                        <p>we are masters of the blade</p>
                    </div>
                    <ul className={`bookList ${popup? '' : 'slideDown'}`}>
                        <li>
                            <a>
                                <div className='listContent'>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15.5C19.67 15.5 18.4 15.28 17.2 14.86C16.77 14.7 16.29 14.82 16 15.16L14.06 17.1C11.26 15.75 8.73 13.23 7.39 10.43L9.34 8.5C9.68 8.15 9.79 7.67 9.63 7.24C9.21 6.04 9 4.77 9 3.5C9 3.22 8.78 3 8.5 3H4C3.72 3 3.5 3.22 3.5 3.5C3.5 12.39 11.11 20 20 20C20.28 20 20.5 19.78 20.5 19.5V15C20.5 14.72 20.28 14.5 20 14.5H18.5C18.22 14.5 18 14.72 18 15C18 15.93 18.07 16.86 18.2 17.79C18.34 18.73 18.52 19.66 18.75 20.57C19.29 19.43 19.93 18.34 20.68 17.29C20.9 16.99 21 16.62 21 16.25V15.5Z"/></svg>
                                    <span>Call ahead</span>
                                    <p>421-421-421</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className='listContent'>
                                    <svg viewBox="-4 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>map-marker</title><desc>Created with Sketch.</desc><defs></defs><g id="Vivid.JS" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Vivid-Icons" transform="translate(-125.000000, -643.000000)"><g id="Icons" transform="translate(37.000000, 169.000000)"><g id="map-marker" transform="translate(78.000000, 468.000000)"><g transform="translate(10.000000, 6.000000)"><path d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z" id="Shape" fill="#000000"></path><circle id="Oval" fill="#ffffff" fillRule="nonzero" cx="14" cy="14" r="7"></circle></g></g></g></g></g></g></svg>
                                    <span>Walk-ins welcome</span>
                                    <p>somewhere in earth :3</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a>
                                <div className='listContent'>
                                    <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>paper-plane</title><path d="M0 14.016l9.216 6.912 18.784-16.928-14.592 20.064 10.592 7.936 8-32zM8 32l6.016-4-6.016-4v8z"></path></g></svg>
                                    <span>Say Hello</span>
                                    <p>Franks@PortfolioSite.com</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}