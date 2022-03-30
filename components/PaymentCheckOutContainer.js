import React, { useEffect, useState } from 'react';
import PaymentProfileContainer from './PaymentProfileContainer';
import PopUpContainer from './PopUpContainer';

const PaymentCheckOutContainer = () => {
    const [openPopUp, setOpenPopUp] = useState({
        calendarPopUp: false,
        couponPopUp: false,
        karmaPopUp: false,
    })
    const [totalSelectedTimes, setTotalSelectedTimes] = useState(0);

    return (
        <div className='flex w-full min-h-fit h-full py-10 flex-wrap-reverse justify-center gap-10 mx-auto items-center bg-[#F8D3A87A]'>
            <PopUpContainer setOpenPopUp={setOpenPopUp} openPopUp={openPopUp} setTotalSelectedTimes={setTotalSelectedTimes} />
            <PaymentProfileContainer setOpenPopUp={setOpenPopUp} totalSelectedTimes={totalSelectedTimes} openPopUp={openPopUp} />
        </div>
    )
}

export default PaymentCheckOutContainer;