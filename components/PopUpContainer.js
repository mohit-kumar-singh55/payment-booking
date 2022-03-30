import React from 'react';
import PopUp from '../components/PopUp';
import CouponPopUp from './CouponPopUp';
import KarmaPopUp from './KarmaPopUp';

const PopUpContainer = ({ openPopUp, setOpenPopUp, setTotalSelectedTimes, setCouponOpen, couponOpen, karmaOpen, setKarmaOpen }) => {
    return (
        <div className='w-[406px] h-[594px] sm:w-[521px] sm:h-[683px] bg-[#FFFFFF] rounded-3xl shadow-md'>
            {openPopUp && (
                <PopUp setOpenPopUp={setOpenPopUp} setTotalSelectedTimes={setTotalSelectedTimes} />
            )}

            {couponOpen && (
                <CouponPopUp setCouponOpen={setCouponOpen} />
            )}

            {karmaOpen && (
                <KarmaPopUp setKarmaOpen={setKarmaOpen} />
            )}
        </div>
    )
}

export default PopUpContainer;