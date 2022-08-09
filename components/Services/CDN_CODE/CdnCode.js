import React, { useState } from 'react';
import CreateCdnCode from './CreateCdnCode';
import UserCdnCode from './UserCdnCode';

const CdnCode = () => {
    const [cdn, setCdn] = useState('list');
    return (
        <div className='pt-2'>
            <div>
                <div className='flex gap-2 items-center'>
                    <button
                        className={(cdn == 'list' ? 'btn-disabled bg-success text-white' : 'btn-outline') + ' btn btn-xs font-extralight btn-primary'}
                        onClick={() => setCdn('list')}
                    >
                        Code List
                    </button>
                    <button
                        className={(cdn == 'new' ? 'btn-disabled bg-success text-white' : 'btn-outline') + ' btn btn-xs font-extralight btn-primary'}
                        onClick={() => setCdn('new')}
                    >
                        New
                    </button>
                </div>
            </div>
            <div className='pt-4'>
                <div>
                    {
                        cdn === 'list' ? <UserCdnCode /> : <CreateCdnCode props={setCdn} />
                    }
                </div>
            </div>
        </div>
    );
};

export default CdnCode;