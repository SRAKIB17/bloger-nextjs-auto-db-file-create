import React, { useState } from 'react';
import { SearchIcon } from '../ReactRSIcon/index'

const SearchForm = () => {
    const [showFormMobile, setShowFormMobile] = useState(false);
    const focusSearchBoxHandle = () => {
        setShowFormMobile(true)
    }
    return (
        <div>
            <ul className="menu menu-horizontal p-0 flex md:hidden">
                <li>
                    <button onClick={() => setShowFormMobile(!showFormMobile)}><SearchIcon color='grey' size='30' /></button>
                </li>
            </ul>

            {/* ---------------------------------for mobile section -------------------------------*/}
            {showFormMobile &&
                <div className='fixed flex top-[60px] w-full bg-base-100 left-0 h-full border-b-2'>
                    <div className='absolute top-[15px] left-[40px] flex md:hidden'>
                        <form>
                            <input type="search" name="" placeholder='🔍' className='input h-[30px] pl-1 w-[250px] input-ghost bg-base-300' id="" />
                        </form>
                    </div>
                    {/*---------------------- for recent search result-------------------------*/}
                    <div className='mt-[60px] md:ml-[70px] md:mt-0 m-4'>

                        {/* ----------------for close search  ---------------*/}

                        <div className='absolute right-3 md:right-20 top-5'>
                            <button className='btn btn-xs btn-outline btn-warning ' onClick={() => setShowFormMobile(false)}>
                                X
                            </button>
                        </div>
                        <div className='p-4'>
                            <h1 className='underline text-xl font-medium'>Your recent search</h1>
                            <div className='flex gap-2 flex-wrap mt-2'>
                                <button className='btn btn-xs btn-outline btn-info'>
                                    mamun
                                </button>
                                <button className='btn btn-xs btn-outline btn-info'>
                                    mamun
                                </button>
                                <button className='btn btn-xs btn-outline btn-info'>
                                    mamun
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className='hidden md:block fixed left-[30px] top-[15px]'>
                <form>
                    <input type="search" name="" placeholder='🔍' className='input h-[30px] pl-1 input-ghost bg-base-300' id="" onKeyUp={focusSearchBoxHandle} />
                </form>
            </div>
        </div>
    );
};

export default SearchForm;