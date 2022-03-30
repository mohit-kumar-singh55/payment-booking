import React, { useState } from 'react';
import PaymentProfileContainer from './PaymentProfileContainer';
import PopUpContainer from './PopUpContainer';

const PaymentCheckOutContainer = () => {
    const [openPopUp, setOpenPopUp] = useState(false);
    const [totalSelectedTimes, setTotalSelectedTimes] = useState(0);

    return (
        <div className='flex w-full min-h-fit h-full py-10 flex-wrap-reverse justify-center gap-10 mx-auto items-center bg-[#F8D3A87A]'>
            <PopUpContainer setTotalSelectedTimes={setTotalSelectedTimes} openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} />
            <PaymentProfileContainer totalSelectedTimes={totalSelectedTimes} openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} />
        </div>
    )
}

export default PaymentCheckOutContainer;