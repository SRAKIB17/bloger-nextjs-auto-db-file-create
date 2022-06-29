import React, { useState } from 'react';
import htmlTags from '../hooks/hooks/useHtmlTags';
import Attributes from '../hooks/hooks/useHtmlAttribute';

const Docs = () => {
    const [classEmmet, setClassEmmet] = useState(false)
    return (
        <div>
            <div className='flex mb-5'>
                <button className='btn btn-outline btn-primary btn-xs mr-1' onClick={() => setClassEmmet(true)}>
                    Class
                </button>
                <button className='btn btn-outline btn-primary btn-xs' onClick={() => setClassEmmet(false)}>
                    Html
                </button>
            </div>
            <table className="table table-zebra w-full overflow-x-auto" >
                <thead>
                    <tr>
                        <th>Shortcut</th>
                        <th>Details</th>
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