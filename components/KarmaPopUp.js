import React from 'react';
import CrossIcon from '../Icons/CrossIcon';

const KarmaPopUp = ({ setKarmaOpen }) => {
    return (
        <div className='w-[406px] h-[594px] sm:w-[521px] sm:h-[683px] text-[#FC4D6D] rounded-3xl bg-white'>
            {/* top */}
            <div className='flex w-full h-10 justify-between items-center px-5 py-7 border-b border-[#DCDCDC]'>
                <p className='font-bold text-xl'>Apply Loyalty Coupons</p>
                <span onClick={() => setKarmaOpen(false)}>
                    <CrossIcon />
                </span>
            </div>
        </div>
    )
}

export default KarmaPopUp;