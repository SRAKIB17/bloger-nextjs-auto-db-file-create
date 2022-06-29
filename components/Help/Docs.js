import React from 'react';
import htmlTags from '../hooks/hooks/useHtmlTags';

const Docs = () => {

    return (
        <div>
            <table className="table table-zebra max-w-md w-full mx-auto m-10 border rounded-md" >
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        htmlTags.map((tag, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{tag.tagEmmet}</td>
                                <td>➱</td>
                                <td>{tag.des}</td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div >
    );
};

export default Docs;