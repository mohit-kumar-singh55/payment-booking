import React, { useEffect, useState } from 'react';
import PaymentProfileContainer from './PaymentProfileContainer';
import PopUpContainer from './PopUpContainer';

const PaymentCheckOutContainer = () => {
    const [openPopUp, setOpenPopUp] = useState(false);
    const [couponOpen, setCouponOpen] = useState(false);
    const [karmaOpen, setKarmaOpen] = useState(false);
    const [totalSelectedTimes, setTotalSelectedTimes] = useState(0);

    useEffect(() => {
        if (openPopUp) {
            setCouponOpen(false);
            setKarmaOpen(false);
        }
        else if (couponOpen) {
            setOpenPopUp(false);
            setKarmaOpen(false);
        }
        else if (karmaOpen) {
            setCouponOpen(false);
            setOpenPopUp(false);
        }
    }, [openPopUp, karmaOpen, couponOpen])

    return (
        <div className='flex w-full min-h-fit h-full py-10 flex-wrap-reverse justify-center gap-10 mx-auto items-center bg-[#F8D3A87A]'>
            <PopUpContainer setCouponOpen={setCouponOpen} couponOpen={couponOpen} karmaOpen={karmaOpen} setKarmaOpen={setKarmaOpen} setTotalSelectedTimes={setTotalSelectedTimes} openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} />
            <PaymentProfileContainer setCouponOpen={setCouponOpen} setKarmaOpen={setKarmaOpen} totalSelectedTimes={totalSelectedTimes} openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} />
        </div>
    )
}

export default PaymentCheckOutContainer;