import React, { useState } from 'react';
import { SearchIcon } from '../ReactRSIcon/index'

const SearchForm = () => {
    const [showFormMobile, setShowFormMobile] = useState(false)
    return (
        <div>
            <ul className="menu menu-horizontal p-0 flex md:hidden">
                <li>
                    <button onClick={() => setShowFormMobile(!showFormMobile)}><SearchIcon color='grey' size='28' /></button>
                </li>
            </ul>

            {showFormMobile &&
                <div className='fixed flex md:hidden top-[60px] w-full bg-base-100 left-0 h-[60px] border-b-2'>
                    <div className='absolute top-[15px] left-[40px]'>
                        <form>
                            <input type="search" name="" placeholder='🔍' className='input h-[30px] pl-1 w-[250px] input-ghost bg-base-300' id="" />
                        </form>
                    </div>
                </div>
            }
            <div className='hidden md:block fixed left-[30px] top-[15px]'>
                <form>
                    <input type="search" name="" placeholder='🔍' className='input h-[30px] pl-1 input-ghost bg-base-300' id="" />
                </form>
            </div>
        </div>
    );
};

export default SearchForm;