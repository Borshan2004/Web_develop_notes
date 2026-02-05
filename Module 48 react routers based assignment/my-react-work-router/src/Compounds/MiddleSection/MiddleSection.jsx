import React from 'react';
import Banner from './Banner/Banner';
import LayerMember from './LayerMember/LayerMember';
import Countdown from './Countdown/Countdown';

const MiddleSection = () => {
    return (
        <div>
            <Banner></Banner>
            <LayerMember></LayerMember>
            <Countdown></Countdown>
        </div>
    );
};

export default MiddleSection;