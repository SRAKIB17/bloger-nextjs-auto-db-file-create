import React from 'react';
import { WarningSquareFilled, WarningTriangleFilled } from '../ReactRSIcon';

const WarningProfile = ({ user_details, size = 11 }) => {
    return (
        <div>
            {
                user_details?.warning === 'true' &&
                <div className="ml-[1px]" title='warning user'>
                    <WarningSquareFilled size={size} color="red" className="rounded-lg" />
                </div>
            }
        </div>
    );
};

export default WarningProfile;