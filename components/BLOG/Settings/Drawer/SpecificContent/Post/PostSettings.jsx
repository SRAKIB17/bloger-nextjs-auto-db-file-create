import React from 'react';

const PostSettings = () => {
    return (
        <div>
            <div className="w-64 p-4">
                <label className="label cursor-pointer">
                    <span className="label-text">Remember me</span>
                    <input type="checkbox" className="toggle toggle-primary" />
                </label>
            </div>
        </div>
    );
};

export default PostSettings;