
export const ClockDropdown = ()=>{
    return(
        <>
          <div className='HoursTitle'>
                <h1>THE SHOP HOURS</h1>
                <p>We're open</p>
            </div>
            <div>
                <ul>
                    <li>
                        <span>Monday:</span>
                        1:00am-10:00pm
                    </li>
                    <li>
                        <span>Tuesday:</span>
                        7:00am-8:30pm
                    </li>
                    <li>
                        <span>Wednesday:</span>
                        Closed
                    </li>
                    <li>
                        <span>Thursday:</span>
                        Closed
                    </li>
                    <li>
                        <span>Friday:</span>
                        12:00am-12:00pm
                    </li>
                    <li>
                        <span>Saturday:</span>
                        7:00am-10:30pm
                    </li>
                    <li>
                        <span>Sunday:</span>
                        8:00am-10:30pm
                    </li>
                </ul>
            </div>
        </>
    )
}