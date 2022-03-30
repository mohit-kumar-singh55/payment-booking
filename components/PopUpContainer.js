import React from 'react';
import PopUp from '../components/PopUp';
import CouponPopUp from './CouponPopUp';
import KarmaPopUp from './KarmaPopUp';

const PopUpContainer = ({ openPopUp, setOpenPopUp, setTotalSelectedTimes }) => {
    return (
        <div className='w-[406px] h-[594px] sm:w-[521px] sm:h-[683px] bg-[#FFFFFF] rounded-3xl shadow-md'>
            {openPopUp.calendarPopUp && (
                <PopUp setOpenPopUp={setOpenPopUp} setTotalSelectedTimes={setTotalSelectedTimes} />
            )}

            {openPopUp.couponPopUp && (
                <CouponPopUp setOpenPopUp={setOpenPopUp} />
            )}

            {openPopUp.karmaPopUp && (
                <KarmaPopUp setOpenPopUp={setOpenPopUp} />
            )}
        </div>
    )
}

export default PopUpContainer;