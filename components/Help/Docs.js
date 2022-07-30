import React, { useState } from 'react';
import htmlTags from '../hooks/hooks/useHtmlTags';
import Attributes from '../hooks/hooks/useHtmlAttribute';

const Docs = () => {
    const [classEmmet, setClassEmmet] = useState(false)
    return (
        <div>
            <div className='flex mb-5'>
                <button
                    className={(classEmmet ? 'btn-disabled bg-primary text-white' : 'btn-primary ') + ' btn btn-outline btn-xs mr-1'}
                    onClick={() => setClassEmmet(true)}
                >
                    Attributes
                </button>
                <button
                    className={(!classEmmet ? 'btn-disabled bg-primary text-white' : 'btn-primary ') + ' btn btn-outline btn-xs mr-1'}
                    onClick={() => setClassEmmet(false)}
                >
                    Tag
                </button>
            </div>
            <table className="table table-zebra w-full overflow-auto" >
                <thead>
                    <tr>
                        <td>Shortcut</td>
                        <td>Details</td>
                    </tr>
                </thead>
                <tbody>


                    {
                        classEmmet || htmlTags.map((tag, index) => (
                            <tr key={index}>
                                <td>{tag.tagEmmet}</td>
                                <td className='w-full overflow-x-auto'>{tag.des}</td>
                            </tr>

                        ))
                    }
                    {
                        classEmmet && Attributes.map((attr, index) => (
                            <tr key={index}>
                                <td>{attr.attEmmet}</td>
                                <td>{attr.des}</td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div >
    );
};

export default Docs;