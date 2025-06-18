'use client'
import React, { useState, useEffect } from 'react';

interface HeroClientProps {
  children: (isVisible: boolean) => React.ReactNode;
}

const HeroClient: React.FC<HeroClientProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return <>{children(isVisible)}</>;
};

export default HeroClient;