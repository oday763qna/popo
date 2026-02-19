
import React from 'react';

export interface Feature {
  title: string;
  shortDesc: string;
  detailedDesc: string;
  icon: React.ReactNode;
  highlights: string[];
}

export interface Developer {
  name: string;
  role: string;
  bio: string;
  email: string;
  avatar: string;
}
