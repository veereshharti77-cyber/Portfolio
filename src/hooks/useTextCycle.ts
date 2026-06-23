import { useState, useEffect } from 'react';

interface Role {
  text: string;
  color: string;
}

const useTextCycle = (roles: Role[], delay: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, delay);

    return () => clearInterval(interval);
  }, [roles.length, delay]);

  return roles[currentIndex];
};

export default useTextCycle;
