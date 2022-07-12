import React, { useState } from 'react';

const useUserCheck = () => {
    const [user, setUser] = useState({ user: false })
    return { user }
};

export default useUserCheck;