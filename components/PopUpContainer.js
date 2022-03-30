import React from 'react';
import PopUp from '../components/PopUp';

const PopUpContainer = ({ openPopUp, setOpenPopUp, setTotalSelectedTimes }) => {
    return (
        <div className='w-[406px] h-[594px] sm:w-[521px] sm:h-[683px] bg-[#FFFFFF] rounded-3xl shadow-md'>
            {openPopUp && (
                <PopUp setOpenPopUp={setOpenPopUp} setTotalSelectedTimes={setTotalSelectedTimes} />
            )}
        </div>
    )
}

export default PopUpContainer;