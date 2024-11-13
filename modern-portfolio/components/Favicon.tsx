import React from 'react'

const Favicon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="32"
      height="32"
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="url(#grad)" />
      <text
        x="50"
        y="70"
        fontFamily="Arial, sans-serif"
        fontSize="60"
        fontWeight="bold"
        textAnchor="middle"
        fill="white"
      >
        SV
      </text>
    </svg>
  )
}

export default Favicon