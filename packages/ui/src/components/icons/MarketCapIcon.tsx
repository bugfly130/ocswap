import React from 'react'

import { IconComponent } from '../../types'

export const MarketCapIcon: IconComponent = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 56 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1_6942)">
        <rect
          x="14"
          y="24"
          width="28"
          height="8"
          rx="4"
          fill="url(#paint0_linear_1_6942)"
        />
      </g>
      <rect
        x="12"
        width="32"
        height="32"
        rx="4"
        fill="url(#paint1_linear_1_6942)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.7365 11.7276C25.7125 11.7276 25.6885 11.7306 25.6645 11.7366C23.437 12.2849 21.625 14.6984 21.625 17.1164C21.625 20.1584 24.1 22.6334 27.1428 22.6334C29.8855 22.6334 32.1775 20.6796 32.593 17.9871C32.596 17.9646 32.6065 17.8994 32.545 17.8266C32.4865 17.7584 32.3935 17.7179 32.296 17.7179C31.2378 17.7179 30.43 17.7419 29.7993 17.7599C28.2723 17.8056 27.6408 17.8229 27.0168 17.3601C26.0763 16.6634 25.9968 15.4664 25.9968 11.9459C25.9968 11.8829 25.9698 11.8304 25.9158 11.7884C25.8655 11.7486 25.8018 11.7276 25.7365 11.7276ZM27.1428 23.7584C23.4798 23.7584 20.5 20.7786 20.5 17.1164C20.5 14.2124 22.696 11.3084 25.3952 10.6439C25.8168 10.5411 26.2698 10.6371 26.6103 10.9026C26.935 11.1576 27.1218 11.5379 27.1218 11.9459C27.1218 15.2346 27.2327 16.1196 27.6865 16.4564C27.9843 16.6761 28.3923 16.6739 29.767 16.6356C30.406 16.6169 31.2242 16.5929 32.296 16.5929C32.7235 16.5929 33.1262 16.7759 33.3993 17.0946C33.6528 17.3909 33.7638 17.7779 33.7052 18.1589C33.2043 21.4026 30.4443 23.7584 27.1428 23.7584Z"
        fill="#E9E8EB"
      />
      <mask
        id="mask0_1_6942"
        maskUnits="userSpaceOnUse"
        x="28"
        y="7"
        width="9"
        height="9"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.3555 7.75049H36.1697V15.4675H28.3555V7.75049Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1_6942)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.508 8.87655C29.4255 10.7658 29.5478 13.2063 29.6048 14.1731C29.6078 14.2308 29.6498 14.2728 29.7068 14.2758C30.4778 14.3201 33.1343 14.4431 35.0445 14.1618C35.049 13.1088 34.3283 11.6808 33.243 10.5963C32.13 9.4848 30.813 8.87655 29.5245 8.87655H29.508ZM31.986 15.4676C31.0035 15.4676 30.1388 15.4278 29.6415 15.3993C29.016 15.3626 28.518 14.8638 28.482 14.2383C28.4235 13.2468 28.2968 10.7276 28.3868 8.77905C28.4115 8.2128 28.869 7.76205 29.4285 7.7523C31.0313 7.7058 32.685 8.4498 34.038 9.80055C35.3565 11.1183 36.1935 12.85 36.1695 14.2128C36.1605 14.7446 35.7743 15.1885 35.2523 15.2673C34.2338 15.4211 33.0413 15.4676 31.986 15.4676Z"
          fill="#E9E8EB"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_6942"
          x="0"
          y="10"
          width="56"
          height="36"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="7"
            result="effect1_foregroundBlur_1_6942"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_6942"
          x1="28"
          y1="24"
          x2="28"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B3A3F8" />
          <stop offset="1" stop-color="#A415F0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_6942"
          x1="28"
          y1="0"
          x2="28"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B3A3F8" />
          <stop offset="1" stop-color="#A415F0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
