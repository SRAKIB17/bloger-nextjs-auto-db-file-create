import React, { useState } from 'react';

const useAdminCheck = () => {
    const [admin, setAdmin] = useState({ admin: true })
    return { admin }
};

export default useAdminCheck;