import React, { useState } from 'react';

const useUserCheck = () => {
    const [user, setUser] = useState({ user: true })
    return { user }
};

export default useUserCheck;