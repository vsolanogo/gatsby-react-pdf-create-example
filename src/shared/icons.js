import styled from '@emotion/styled'
import React from 'react'
import { css } from '@emotion/react'

export const Chat = ({ color = '#5a5d5e', width = '35', height = '27' }) => (
  <svg width={width} height={height} viewBox='0 0 35 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M28.2741 26.2001L2.85759 26.2001C-0.113444 26.2001 -0.890321 24.3467 1.10786 22.0828L5.02024 17.7365L5.02024 7.76854C5.02117 5.85379 5.75406 4.01773 7.05787 2.66379C8.36169 1.30985 10.1298 0.548791 11.9736 0.547828L28.0431 0.547829C29.8876 0.547829 31.6566 1.30847 32.9611 2.66251C34.2657 4.01655 34.9991 5.85316 35 7.76855L35 18.983C35.0001 20.8572 34.2984 22.658 33.0432 24.0048C31.7881 25.3515 30.0779 26.1388 28.2741 26.2001ZM32.9003 7.76855C32.8985 6.43173 32.386 5.15027 31.4754 4.20534C30.5648 3.26041 29.3304 2.72918 28.0431 2.72822L11.9736 2.72822C10.6869 2.73014 9.45343 3.26179 8.54358 4.20662C7.63373 5.15145 7.12176 6.43236 7.11991 7.76854L7.11991 18.5724L6.56 19.1901L2.66512 23.5509C2.53969 23.6833 2.42279 23.8241 2.31517 23.9724C2.48928 23.9951 2.66462 24.006 2.84009 24.0052L28.2041 24.0052C29.4626 23.9682 30.6576 23.4227 31.5347 22.4848C32.4118 21.5468 32.9017 20.2904 32.9003 18.983L32.9003 7.76855Z'
      fill={color}
    />
  </svg>
)

export const SharedSVGClip = ({ width = '16px', height = '16px', color = '#333' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 16 16'>
    <path
      d='M11 4v8c0 1.5-1.5 3-3 3s-3-1.5-3-3V3c0-1 1-2 2-2s2 1 2 2v8a1.08 1.08 0 0 1-1 1 1.08 1.08 0 0 1-1-1V4H6v7c0 1 1 2 2 2s2-1 2-2V3c0-1.5-1.5-3-3-3S4 1.5 4 3v9c0 2 2 4 4 4s4-2 4-4V4h-1z'
      fill={color}
    />
  </svg>
)

export const SharedSVGFire = ({ width = '15px', height = '22px' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 15 22' fill='none'>
    <path
      d='M3.826 22C1.38 13.94 6.548 11 6.548 11c-.362 4.3 2.082 7.65 2.082 7.65.9-.27 2.614-1.54 2.614-1.54 0 1.54-.905 4.887-.905 4.887s3.17-2.45 4.166-6.52-1.897-8.155-1.897-8.155a10.91 10.91 0 0 1-2.709 7.877 1.56 1.56 0 0 0 .237-.365c.343-.686.894-2.47.57-6.597C10.253 2.444 5.003 0 5.003 0 5.455 3.53 4.098 4.344.92 11.046S3.826 22 3.826 22z'
      fill='#fd7114'
    />
  </svg>
)

export const SharedSkype = ({ width = '18', height = '18' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 18 18' fill='none'>
    <path
      fill-rule='evenodd'
      d='M17.483 10.91c.13-.586.198-1.194.198-1.817C17.68 4.42 13.838.63 9.095.63c-.5 0-1 .043-1.468.124C6.86.276 5.952 0 4.98 0 2.23 0 0 2.197 0 4.9a4.84 4.84 0 0 0 .684 2.483C.57 7.942.5 8.51.5 9.093c0 4.676 3.844 8.465 8.585 8.465.538 0 1.063-.05 1.573-.142.702.37 1.502.583 2.354.583C15.77 18 18 15.802 18 13.09a4.83 4.83 0 0 0-.517-2.181zM13.5 13.14c-.397.555-.983.993-1.745 1.304-.752.31-1.654.466-2.682.466-1.233 0-2.267-.214-3.074-.636-.577-.307-1.052-.722-1.413-1.237s-.55-1.032-.55-1.53c0-.31.12-.578.358-.798s.537-.33.896-.33c.294 0 .55.087.756.26.198.166.367.41.504.725.152.344.317.634.492.86.17.22.412.406.72.55s.73.22 1.247.22c.7 0 1.292-.15 1.73-.445.43-.287.636-.633.636-1.057 0-.333-.11-.596-.33-.802-.235-.215-.543-.382-.917-.5a18.51 18.51 0 0 0-1.575-.385c-.892-.188-1.65-.4-2.25-.664-.616-.258-1.112-.616-1.475-1.063-.368-.456-.556-1.027-.556-1.697a2.72 2.72 0 0 1 .583-1.712c.383-.493.944-.88 1.667-1.14.712-.26 1.56-.39 2.52-.39.766 0 1.44.088 2.003.26s1.042.407 1.417.696.66.602.835.925.27.65.27.965c0 .303-.118.578-.352.817s-.532.364-.882.364c-.317 0-.567-.077-.74-.227-.16-.14-.328-.36-.513-.673-.214-.4-.473-.717-.77-.94C10.018 5.11 9.537 5 8.873 5c-.614 0-1.115.12-1.487.362-.358.23-.532.497-.532.812a.73.73 0 0 0 .173.491c.12.148.293.275.51.384.225.112.458.2.69.264a30.83 30.83 0 0 0 1.187.288c.695.146 1.333.312 1.898.5.573.18 1.066.4 1.47.66a2.91 2.91 0 0 1 .967 1.007c.232.408.35.91.35 1.492a3.18 3.18 0 0 1-.601 1.888z'
      fill='#333'
    />
  </svg>
)

export const SharedLinkCubicle = ({ width = '22', height = '22' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 22 22' fill='none'>
    <path
      d='M18.778.4H9.89C8.333.4 7.067 1.666 7.067 3.222v3.845H3.222C1.666 7.067.4 8.333.4 9.888v8.89c0 1.557 1.266 2.822 2.822 2.822h8.89c1.556 0 2.822-1.266 2.822-2.822v-3.845h3.844c1.556 0 2.822-1.266 2.822-2.82V3.223C21.6 1.666 20.334.4 18.778.4zm-5.045 18.377c0 .895-.728 1.623-1.622 1.623h-8.89c-.895 0-1.622-.73-1.622-1.623v-8.89c0-.895.728-1.622 1.622-1.622h3.844v3.845c0 1.556 1.266 2.82 2.822 2.82h3.845v3.845zM20.4 12.11c0 .895-.728 1.622-1.622 1.622H9.89c-.895 0-1.622-.728-1.622-1.622V3.223c0-.895.728-1.623 1.622-1.623h8.89c.895 0 1.622.73 1.622 1.623v8.888z'
      fill='#97a3b4'
    />
  </svg>
)

export const SharedFacebookCubicle = ({ width = '24', height = '24', color = '#4460a0' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 24' fill='none'>
    <path
      fill-rule='evenodd'
      d='M12.82 24H1.325C.593 24 0 23.407 0 22.675V1.325C0 .593.593 0 1.325 0h21.35C23.407 0 24 .593 24 1.325v21.35c0 .732-.593 1.325-1.325 1.325H16.56v-9.294h3.12l.467-3.622H16.56V8.77c0-1.05.29-1.763 1.795-1.763l1.918-.001v-3.24c-.332-.044-1.47-.143-2.795-.143-2.765 0-4.66 1.688-4.66 4.788v2.67H9.692v3.622h3.128V24z'
      fill={color}
    />
  </svg>
)

export const SharedLinkedin = ({ width = '24', height = '22', color = '#007ebb' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 22' fill='none'>
    <path
      fill-rule='evenodd'
      d='M24 21.818h-5.304v-7.67c0-2.008-.83-3.378-2.654-3.378-1.396 0-2.172.925-2.533 1.816-.136.32-.114.766-.114 1.21v8.02H8.14V6.997h5.255v2.326c.3-1.017 2-2.47 4.67-2.47 3.325 0 5.936 2.132 5.936 6.723v8.24zM2.825 5.143H2.79C1.098 5.143 0 4 0 2.573 0 1.11 1.13 0 2.857 0s2.787 1.106 2.82 2.57c0 1.436-1.095 2.573-2.853 2.573zM.605 6.997h4.678v14.822H.605V6.997z'
      fill={color}
    />
  </svg>
)

export const SharedLinkedinCubical = ({ width = '22', height = '22', color = '#007ebb' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 448 512'>
    <path
      fill={color}
      d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
    />
  </svg>
)

export const SharedTwitter = ({ width = '24', height = '20', color = '#00aaec' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 24 20' fill='none'>
    <path
      fill-rule='evenodd'
      d='M24 2.368c-.882.402-1.83.673-2.827.795A5.04 5.04 0 0 0 23.338.37a9.7 9.7 0 0 1-3.129 1.224C19.313.612 18.033 0 16.616 0c-2.717 0-4.922 2.26-4.922 5.05 0 .396.042.78.127 1.15C7.728 5.988 4.1 3.98 1.67.922a5.14 5.14 0 0 0-.666 2.541c0 1.75.87 3.297 2.19 4.202-.806-.025-1.566-.254-2.23-.63v.062c0 2.447 1.697 4.488 3.95 4.95-.413.118-.848.178-1.297.178-.317 0-.627-.03-.927-.1.627 2.005 2.444 3.466 4.6 3.505-1.685 1.355-3.81 2.163-6.115 2.163A9.86 9.86 0 0 1 0 17.734 13.71 13.71 0 0 0 7.548 20c9.058 0 14.01-7.692 14.01-14.365a16.64 16.64 0 0 0-.013-.654c.962-.712 1.797-1.6 2.455-2.613z'
      fill={color}
    />
  </svg>
)

export const SharedTwitterCubicle = ({ width = '24', height = '24', color = '#00aaec' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 448 512'>
    <path
      fill={color}
      d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z'
    />
  </svg>
)

export const SharedTelegram = ({ width = '20', height = '16' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 20 16' fill='none'>
    <g fill='#333'>
      <path d='M7.53 15.187l4.155-3.3-3.578-1.72-.577 5.03z' />
      <path d='M19.33.03L.324 6.793c-.098.035-.182.098-.24.18s-.087.18-.083.28a.46.46 0 0 0 .106.274.5.5 0 0 0 .255.162l6.82 1.862a.55.55 0 0 1 .167.083l8.557 6.266a.51.51 0 0 0 .228.092.52.52 0 0 0 .246-.024c.08-.028.15-.074.203-.135s.093-.133.1-.212L19.98.604a.45.45 0 0 0 .001-.258.47.47 0 0 0-.141-.22c-.067-.06-.15-.1-.24-.117a.52.52 0 0 0-.27.021z' />
    </g>
    <path d='M5.57 9.086l1.96 6.1.577-5.03 8.973-7.68-11.51 6.61z' fill='#fff' />
  </svg>
)

export const SharedGithub = ({ width = '16', height = '16', color = '#000' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 480 512'>
    <path
      fill={color}
      d='M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z'
    />
  </svg>
)

export const SharedGithubCubicle = ({ width = '24', height = '24', color = '#000' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 448 512'>
    <path
      fill={color}
      d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z'
    />
  </svg>
)

export const SharedFacebook = ({ width = '16', height = '16', color = '#000' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 320 512'>
    <path
      fill={color}
      d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
    />
  </svg>
)

export const SharedDribble = ({ width = '16', height = '16' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 2500 2497.07'>
    <path
      d='M1250 83c644.53 0 1166 521.48 1166 1165s-521.5 1166-1166 1166S84 1892.58 84 1249 605.47 83 1250 83z'
      fill='#bababb'
    />
    <path
      d='M1250 2497.07C560.55 2497.07 0 1937.5 0 1249 0 559.57 560.55 0 1250 0s1250 559.57 1250 1248.05-560.55 1249-1250 1249zM2303.7 1419c-36.13-11.72-330.08-98.64-665-45.9 139.65 382.8 196.3 695.3 207 759.76 240.23-161.18 411.13-417.04 458-713.86zM1667 2231.45c-15.62-93.75-78.12-419.93-227.54-808.6a18.14 18.14 0 0 1-6.83 2c-602.54 210-818.36 627-837.9 666 180.66 140.63 408.2 224.6 655.27 224.6a1043 1043 0 0 0 417-84zM457 1962.9c24.42-41 317.38-525.4 868.17-704.1 13.67-4.88 28.32-8.8 42-12.7-26.37-60.54-55.67-121.1-86.92-180.66C747.07 1224.6 229.5 1217.77 182.62 1216.8c0 10.74-1 21.48-1 32.22 1 274.42 104.5 524.42 275.4 713.87zm-251.92-931.64c47.85 1 487.3 2.93 987.3-129.88-176.75-314.46-368.16-578.13-395.5-616.2-299.8 140.62-522.46 416-591.8 746.1zM1000 212.9c29.3 39.06 223.63 302.73 398.44 624 379.88-142.57 540-357.42 559.57-384.76-188.48-167-436.53-268.56-708-268.56-85.95.02-169.93 10.77-250 29.32zm1076.17 362.3C2053.7 605.47 1875 835 1480.47 996.1l71.3 154.3 23.44 54.7c355.46-44.92 708 27.34 743.16 34.18a1062 1062 0 0 0-242.19-664.06z'
      fill='#5c5c5c'
    />
  </svg>
)

export const SharedClutch = ({ width = '16', height = '16', color = '#bbbbbc' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 16 17.7'>
    <path
      d='M12.2 12.5c-.9.8-2 1.2-3.3 1.2-2.8 0-4.8-2-4.8-4.8s2-4.8 4.8-4.8c1.2 0 2.4.4 3.3 1.2l.6.5 2.7-2.7-.7-.6C13.3 1.1 11.2.3 9 .3 4 .3.4 3.9.4 8.9c0 4.9 3.7 8.7 8.6 8.7 2.3 0 4.4-.8 6-2.3l.7-.6L13 12l-.8.5zM8.8 6c1.6 0 2.9 1.3 2.9 2.9s-1.3 2.9-2.9 2.9-2.9-1.3-2.9-2.9S7.2 6 8.8 6'
      fill={color}
    />
  </svg>
)

export const SharedHuman = ({ width = '15', height = '16' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 15 16'>
    <path
      fill='#9FA3A7'
      fill-rule='evenodd'
      d='M6.275 14.924c-2.945 0-5.333.223-5.333-2.132S3.33 7.818 6.275 7.818c2.945 0 5.333 2.619 5.333 4.974s-2.388 2.132-5.333 2.132zm.004-7.84A3.192 3.192 0 1 1 6.28.701a3.192 3.192 0 0 1-.001 6.383z'
    ></path>
  </svg>
)

export const SharedMail = ({ width = '17', height = '15', color = '#9FA3A7' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 17 15'>
    <path
      fill={color}
      fill-rule='evenodd'
      d='M16.281 13.592c-.28.297-.616.445-1.008.445H2.131c-.392 0-.729-.148-1.008-.445a1.502 1.502 0 0 1-.42-1.07V5.008c.262.309.563.583.902.823 2.154 1.552 3.633 2.641 4.437 3.265.339.265.614.472.825.62.212.148.493.3.844.455.351.154.678.231.982.231h.018c.304 0 .631-.077.982-.231.351-.155.632-.307.843-.455.212-.148.487-.355.826-.62a185.334 185.334 0 0 1 4.446-3.265c.339-.246.637-.521.893-.823v7.514c0 .417-.14.773-.42 1.07zm-1.107-8.774l-4.178 3.076c-.059.044-.186.14-.379.289-.193.148-.354.268-.482.36a9.416 9.416 0 0 1-.464.307 2.637 2.637 0 0 1-.514.256 1.36 1.36 0 0 1-.446.085h-.018a1.36 1.36 0 0 1-.446-.085 2.637 2.637 0 0 1-.514-.256 9.416 9.416 0 0 1-.464-.307 19.977 19.977 0 0 1-.482-.36l-.379-.289c-.542-.404-1.322-.979-2.339-1.727a344.59 344.59 0 0 1-1.83-1.349c-.369-.265-.718-.629-1.045-1.093-.327-.464-.491-.894-.491-1.292 0-.492.124-.902.371-1.23C1.321.875 1.673.71 2.131.71h13.141c.387 0 .722.149 1.004.445.283.297.425.654.425 1.07a2.6 2.6 0 0 1-.438 1.429 4.357 4.357 0 0 1-1.089 1.164z'
    ></path>
  </svg>
)

export const SharedCross = ({ width = '20', height = '20', color = '#000' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 20 20' fill='none'>
    <path
      d='M10 8.586L18.293.293a1 1 0 0 1 1.414 0 1 1 0 0 1 0 1.414L11.414 10l8.293 8.293a1 1 0 0 1-1.414 1.414L10 11.414l-8.293 8.293a1 1 0 0 1-1.414 0 1 1 0 0 1 0-1.414L8.586 10 .293 1.707A1 1 0 1 1 1.707.293L10 8.586z'
      fill={color}
    />
  </svg>
)

export const SharedBullet = ({ width = '20', height = '20' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 5 5' fill='none'>
    <circle cx='2.5' cy='2.5' r='2.5' fill='#333' />
  </svg>
)

export const SharedPartyPopper = ({ width = '20', height = '20' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 648 893' width={width} height={height}>
    <path d='M0 0h648v893H0V0z' fill='#fff' />
    <path
      d='M433.8 11.17c1.72 1.66 2.85 4.12 3.92 6.24l13.7 28.1 30.78 4.3c2.86.44 6.05.74 8.47 2.5 2.73 1.86 4 5.5 3.32 8.68-.65 2.7-2.6 4.64-4.48 6.53l-23.5 22.9 5.6 31.37c.44 2.57.96 5.52.27 8.07-1.1 3.76-5 6.13-8.8 6.1-2-.26-3.88-1.32-5.66-2.23l-29.68-15.48-29.84 15.7c-2.24 1.1-4.28 2.18-6.88 1.74-3.92-.5-7.23-3.7-7.63-7.66-.05-2 .34-4.07.66-6.04l5.48-31.5-22.27-21.75c-1.98-1.98-4.53-4.14-5.6-6.76-.96-3.27.05-7.37 2.83-9.5 2.37-1.88 5.43-2.16 8.32-2.6l31.1-4.37 15.73-31.76c2.54-5.24 9.9-6.26 14.15-2.6z'
      fill='#4d4d4d'
    />
    <path
      d='M427.75 37.2l10.05 20.06c1.6 3.02 4.07 4.48 7.37 5.1 7.2 1.22 14.46 2.26 21.7 3-4.85 4.32-9.35 9-14.1 13.42-2.52 2.57-5.3 5.2-4.8 9.16.98 7.7 2.62 15.32 3.86 22.97-6.73-3.56-13.4-7.33-20.32-10.53-3.27-1.52-6.2-.66-9.26.87l-18.24 9.53c1.1-7.28 2.7-14.5 3.6-21.8.5-3.65-.95-6.6-3.53-9.07l-15.26-14.5L409 62.58c3.52-.63 6.85-1.46 8.67-4.87 3.57-6.72 6.72-13.7 10.08-20.52z'
      fill='#b3b3b3'
    />
    <path
      d='M221.95 50.6c3.98-.8 7.45 1.78 10.54 3.9 8.8 6.42 17.23 13.38 25.12 20.88 11.02 9.53 20.82 20.68 30.43 31.6 23.85 28.44 43.27 60.67 56.7 95.28 10.53 26.6 17.2 54.47 21.17 82.77 4.98 40.04 2.88 80.72-3.67 120.46l-5.28 25.5c-3.65 14.18-6.96 28.4-11.72 42.27-4.27 14.6-9.93 28.66-15.17 42.9-3.6 8.93-7.63 17.68-11.35 26.56-2.28 5.15-3.4 10.16-9.8 11.3-5.17.67-10.05-3.65-9.77-8.93.42-3.35 1.88-6.7 3-9.88 5.18-13.7 8.94-28.17 12.8-42.3 2.23-7.8 3.6-15.93 5.37-23.88 4.87-22.76 7.94-45.85 9.56-69.06 2.42-47.62-1.66-95.4-18.65-140.25-9-24.47-22.02-47.35-38.25-67.74-10.1-13.6-22.12-24.17-34.63-35.35-8.97-7.16-17.8-14.4-27.62-20.4-9.4-6.72-19.8-11.5-29.8-17.18-2.8-1.56-4.62-3.77-4.87-7.06-.54-3.26 1.2-5.5 2.96-8l36.55-48.47c1.8-2.17 3.47-4.34 6.38-4.95z'
      fill='#4d4d4d'
    />
    <path
      d='M225.44 71.38c5.2 4.15 10.58 8.2 15.54 12.63 14.1 12.82 27.78 26.45 39.43 41.55 5.76 6.98 10.72 14.66 15.97 22.04 7.6 10.8 13.97 22.34 19.9 34.14 5.57 11.15 10.7 22.42 14.72 34.24l6.67 20.06c7.46 26.74 12.08 54.2 13.1 81.96 1.1 24.84-1.17 49.35-3.94 74h-.88c.34-8.8 1.02-17.55.6-26.38-.6-38.67-7.28-77.87-20.87-114.13-9.46-26.4-23.6-51.16-41.34-72.87-12.63-16.28-27.5-29.6-43.36-42.62-13.66-10.28-27.94-19.85-42.98-27.98l25.72-34.2 1.72-2.43z'
      fill='#fff'
    />
    <path
      d='M480.35 236.38c4.83-2.5 11.1.48 12.15 5.82.93 5.8.2 11.92.4 17.8-.17 4.56.58 9.6-.65 14.03-1.3 5-7.75 7.33-12.13 4.86-3.9-1.77-4.83-5.94-4.84-9.86v-23.08c.04-3.9 1.13-7.94 5.05-9.57zM447 280.64c6.15.28 12.75-.7 18.76.64 6.6 1.86 7.9 10.98 2.6 15.04-4.06 2.87-10.58 1.7-15.35 1.92-6.42-.3-13.24.66-19.54-.56-6.83-1.76-8.3-10.85-2.92-15.12 4.32-3 11.4-1.66 16.46-1.92zm59.98-.01l24.04.01c3.86.1 7.6 1.34 9.2 5.14 2.33 4.58-.35 10.78-5.44 11.92-4.75 1.05-9.92.38-14.77.53-5.54-.2-11.35.53-16.8-.46-5.32-1.06-8.18-7.47-5.6-12.2 1.6-3.83 5.6-4.86 9.4-4.95zm-18.85 25.27c3.25 1.4 4.48 4.76 4.7 8.06.24 5 0 10.04.07 15.05-.17 4.64.55 9.7-.6 14.2-1.26 4.93-7.3 7.47-11.8 5.26-3.97-1.47-5.14-5.57-5.22-9.42l-.03-23.08c-.02-3.8.84-8.33 4.72-10.04 2.84-1.45 5.26-1.44 8.13-.04zM197 321.02c1.74 1.16 2.8 3.4 3.75 5.22l14.72 30.04 32.54 4.74c2.1.34 4.48.63 6.35 1.65 3.35 2.05 5 6.7 3.57 10.36-.86 2.2-2.72 3.92-4.35 5.57l-23.35 22.62 5.53 32.27c.3 1.82.63 3.72.6 5.58-.6 3.97-4.22 7.5-8.3 7.62-2.92.08-5.5-1.43-8-2.7L192 429.25l-28.08 14.77c-1.87.98-3.86 2-5.9 2.52-4.14.8-8.44-1.74-9.88-5.7-.92-2.27-.35-4.52-.04-6.87l5.66-32.76c-7.9-7.4-15.53-15.12-23.35-22.63-1.63-1.63-3.5-3.37-4.35-5.55-1.4-3.68.2-8.3 3.54-10.37 1.9-1 4.3-1.32 6.4-1.66l32.25-4.76 14.13-28.83c1.1-2.2 2.12-4.44 4.08-6 2.95-2.52 7.37-2.43 10.55-.4z'
      fill='#4d4d4d'
    />
    <path
      d='M192.35 349.3c3.87 6.42 6.23 13.78 10.25 20.12 2.04 3.16 5.2 3.4 8.6 4.03l19.7 2.76-15.13 14.54c-2.4 2.34-4.15 4.67-3.7 8.23.85 7.68 2.58 15.3 3.8 22.94-6.63-3.65-13.28-7.37-20.1-10.67-3.1-1.5-6.04-1.04-9 .5L168 421.78l3.23-18.72c.35-2.44.8-5.2.2-7.62-.9-2.34-3.04-4.33-4.77-6.1l-13.54-13.12 20.94-3.04c2.98-.45 5.55-1.16 7.18-3.9 3.8-6.15 6.37-13.03 9.94-19.3.23-.63.62-.86 1.17-.68z'
      fill='#ff962c'
    />
    <path
      d='M579.08 358.93c2.58 3.13 2.27 7.26 2.3 11.07-.14 7 .1 14.03-.08 21.03-.2 3.4-1.35 7.08-4.75 8.5-4.53 2.52-10.87.1-12.2-5-1.2-4.94-.4-10.46-.6-15.53.06-4.67-.2-9.38.08-14.04.27-3.5 1.65-6.73 5.1-8.08 3.43-1.8 7.55-.6 10.14 2.05zm-54.12 42.3c5.34-.2 10.7.03 16.04-.04 4.27.13 8.96-.5 13.1.6 5.06 1.25 7.54 7.7 5 12.15-1.9 4.43-6.9 4.92-11.1 4.87-8.22-.22-16.53.3-24.72-.25-5.83-.6-9.38-6.9-6.85-12.18 1.4-3.6 4.92-4.97 8.53-5.16zm79.04-.04c5.35.07 10.7-.15 16.04.03 3.6.18 7.14 1.6 8.56 5.16 1.73 3.4.62 7.6-2.07 10.14-3.17 2.5-6.7 2.27-10.53 2.3-7.02-.12-14.04.05-21.05-.05-3.58-.13-7.48-1.25-8.97-4.85-2.03-3.57-.82-8.18 2.2-10.75 4.2-3 10.88-1.77 15.82-2zm-24.64 27.43c2.8 3.83 1.87 9.85 2 14.37-.25 6.6.5 13.42-.4 19.96-.84 5.3-7.1 8.46-11.88 6.12-3.5-1.3-4.94-4.54-5.24-8.03-.3-4.67-.03-9.37-.1-14.05.26-5.27-.8-11.3.88-16.33 2.27-6.04 10.77-6.96 14.72-2.04zM535 535.37c14.62.44 29.13 2.53 43.25 6.38 12.95 3.48 25.3 8.7 37.24 14.77 3.32 1.6 5.63 4.54 5.66 8.32-.3 3.5-1.8 7.04-2.88 10.37l-14.3 42.75c-1.1 3.18-1.97 6.55-3.46 9.57-1.9 3.55-6.26 5.28-10.06 3.94-3.94-1.18-6.32-5.96-9.13-8.77-9.5-9.48-20.4-17.32-33.13-21.83-10.94-4.17-22.46-6.74-34.17-7.18-19.58-.72-39.04 2.1-57.8 7.68-26.3 7.42-51.7 19.65-75.1 33.68-2.84 1.65-6.73 3.94-10.12 3.2-4.94-.75-8.25-6.4-6.75-11.1 1-3.28 3.97-6.14 6.16-8.7 15.24-18.04 33.52-33.7 52.9-47.14 14.82-9.97 30.66-18.35 47.46-24.47 20.45-7.78 42.36-11.56 64.23-11.46zm-306.82 11.4c2.6 2.43 4.7 5.38 7.03 8.05l148.4 175.63c2.88 3.05 3.53 7.76 1.3 11.35-1.72 2.98-5.88 3.95-8.9 5.15l-148.74 54.5c-4.82 1.83-9.52 3.9-14.48 5.37l-175 64.13c-2.68.9-5.3 1.44-8.04.4-3.82-1.74-6.1-6.23-4.9-10.33 1.15-3.72 3.78-7.08 5.74-10.44l179.76-294.23c2-3.13 3.76-6.96 6.56-9.46 2.97-2.78 8.3-3 11.27-.13z'
      fill='#4d4d4d'
    />
    <path
      d='M574.93 559.05c9.2 2.78 18.04 6.4 26.86 10.2l-12.23 36.8c-11.27-10.34-25.06-18.07-39.42-23.2-27.4-9.32-57.24-8.55-85.14-1.96-15.6 3.3-30.9 8.46-45.4 15.04 9.6-6.56 18.6-13.67 28.97-19.22 15.5-8.54 32.23-15.5 49.42-19.73 25.3-5.8 52-5.14 76.94 2.1z'
      fill='#fff'
    />
    <path d='M224.78 582.84l123.75 146.42-27.53 9.96-111.48-131.24 15.26-25.14z' fill='#b3b3b3' />
    <path
      d='M189.43 624.68L300.7 755.65c-5.67 1.9-11.25 4.7-17.08 5.96-2.5-2.2-4.5-5.03-6.7-7.54l-97.03-113.75 9.55-15.64z'
      fill='#ff962c'
    />
    <path
      d='M472.4 646.65c4.62 2.5 4.54 7.77 4.5 12.35-.26 7.8.36 15.73-.3 23.5-.67 5.9-7.27 9.2-12.44 6.5-3.3-1.35-4.55-4.68-4.84-8-.24-4.65-.01-9.33-.06-14 .18-4.98-.55-10.3.5-15.17 1.3-5.45 7.88-8.07 12.65-5.18z'
      fill='#4d4d4d'
    />
    <path d='M171.5 670.3l80.55 94.47-31.22 11.48-67.06-77 17.73-28.96z' fill='#b3b3b3' />
    <path
      d='M428 690.5c6.93.3 14.13-.56 20.97.46 5.23.95 8.14 7.18 5.84 11.86-1.23 3.37-4.4 4.84-7.76 5.17-5.33.36-10.7.03-16.05.13-5.07-.28-11.98 1.06-16.4-1.78-4.6-3.37-4.65-10.4-.16-13.9 3.58-2.65 9.3-1.82 13.55-1.94zm59.03.48c5.84-1 12.04-.24 17.97-.46 4.54.14 9.46-.5 13.88.58 4.92 1.26 7.63 7.4 5.25 11.88-1.47 3.8-5.34 5.02-9.1 5.12l-24.06.02c-4.06-.05-8.16-1.2-9.73-5.35-2.22-4.62.6-10.84 5.78-11.8zM471.5 715.6c3.66 1.33 5.04 4.78 5.3 8.4.2 5.32-.03 10.67.05 16-.24 4.77.92 11-1.46 15.27-3.03 5.13-10.77 5.37-14.3.64-2.63-3.82-1.7-9.47-1.85-13.9.26-6.7-.5-13.6.37-20.22.82-5.4 7.06-8.47 11.9-6.18z'
      fill='#4d4d4d'
    />
    <path
      d='M133.63 716.26c.9.8 1.72 1.7 2.53 2.6l64.12 73.68-17.04 6.17-58.87-67.56c3.16-4.9 5.92-10.1 9.26-14.9z'
      fill='#ff962c'
    />
    <path d='M116 761l35.03 40.76L114.8 815l-18.07-22.64L116 761z' fill='#b3b3b3' />
    <path d='M76.6 809.48l17.68 22L54 846.25l22.6-36.77z' fill='#ff962c' />
  </svg>
)

export const SharedCalendar = ({ width = '23', height = '24', color = '#000' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 23 24'>
    <path
      fill={color}
      fill-rule='nonzero'
      d='M19.626 1.62h-1.38V.714a.716.716 0 0 0-.72-.713c-.398 0-.72.32-.72.713v.908H6.194V.713A.716.716 0 0 0 5.474 0c-.398 0-.72.32-.72.713v.908H3.373C1.511 1.623.002 3.118 0 4.96v15.7C.003 22.503 1.511 23.996 3.373 24h16.253c1.863-.001 3.373-1.496 3.374-3.341V4.962c-.001-1.845-1.511-3.34-3.374-3.341zm1.934 5.47H1.44V4.963c0-1.057.865-1.914 1.933-1.916h1.381v.82c0 .394.322.713.72.713.398 0 .72-.32.72-.713v-.82h10.613v.82c0 .394.323.713.72.713.398 0 .72-.32.72-.713v-.82h1.38a1.927 1.927 0 0 1 1.934 1.914v2.13zM4.08 12.858c0-.82.671-1.486 1.5-1.486.828 0 1.5.665 1.5 1.486 0 .82-.672 1.485-1.5 1.485-.829 0-1.5-.665-1.5-1.485zm5.921 0c0-.82.672-1.486 1.5-1.486s1.5.665 1.5 1.486c0 .82-.672 1.485-1.5 1.485s-1.5-.665-1.5-1.485zm5.922 0c0-.82.671-1.486 1.5-1.486.828 0 1.5.665 1.5 1.486 0 .82-.672 1.485-1.5 1.485-.829 0-1.5-.665-1.5-1.485zM4.079 17.703c0-.82.671-1.485 1.5-1.485.828 0 1.5.665 1.5 1.485 0 .82-.672 1.485-1.5 1.485-.829 0-1.5-.665-1.5-1.485zm5.921 0c0-.6.364-1.143.924-1.374a1.51 1.51 0 0 1 1.636.32c.43.425.558 1.064.326 1.62a1.5 1.5 0 0 1-1.386.917 1.493 1.493 0 0 1-1.5-1.483zm5.922 0c0-.82.671-1.485 1.5-1.485.828 0 1.5.665 1.5 1.485 0 .82-.672 1.485-1.5 1.485-.829 0-1.5-.665-1.5-1.485z'
    ></path>
  </svg>
)

export const SharedFlagFormConfirm = ({ width = '17', height = '22', color = '#000' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 17 22'>
    <path
      fill={color}
      fill-rule='nonzero'
      d='M9.714 2.452h6.678c.5 0 .786.575.485.978l-3.369 4.52 3.37 4.52c.3.403.014.978-.486.978H10.32a1.827 1.827 0 0 1-1.822-1.833.609.609 0 0 0-.607-.61H1.214v10.384c0 .338-.272.611-.607.611A.609.609 0 0 1 0 21.39V1.832C0 .82.815 0 1.821 0h6.071c1.006 0 1.822.82 1.822 1.833v.62z'
    ></path>
  </svg>
)

export const SharedHumanCalendarForm = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='25' viewBox='0 0 24 25'>
    <path
      fill='#FFF'
      fill-rule='nonzero'
      d='M23.916 21.275c-1.074-4.44-4.38-7.816-8.53-9.02a6.643 6.643 0 0 0 3.106-5.641C18.492 2.968 15.58 0 12 0S5.508 2.968 5.508 6.614a6.643 6.643 0 0 0 3.107 5.64c-4.15 1.206-7.459 4.582-8.532 9.02a2.98 2.98 0 0 0 .545 2.528A3.024 3.024 0 0 0 3.04 25h17.919c.947 0 1.827-.436 2.412-1.198.56-.726.758-1.647.545-2.527z'
    ></path>
  </svg>
)

export const SharedRightAngle = ({ width = '7', height = '26', color = '#000' }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 9.41 20.97'>
    <path
      d='M1.15 19.82l7.1-9.33-7.1-9.34'
      fill='none'
      stroke={color}
      stroke-linecap='round'
      stroke-linejoin='round'
      stroke-width='2.3'
    />
  </svg>
)
