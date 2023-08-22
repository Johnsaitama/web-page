// import './index.scss'
// import LogoS from '../../../assets/images/logo-s.png'
// import { useEffect, useRef } from 'react'
// import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'
// import gsap from 'gsap-trial'

// const Logo = () => {
//   const bgRef = useRef()
//   const outlineLogoRef = useRef()
//   const solidLogoRef = useRef()

//   useEffect(() => {
//     gsap.registerPlugin(DrawSVGPlugin)

//     gsap
//       .timeline()
//       .to(bgRef.current, {
//         duration: 1,
//         opacity: 1,
//       })
//       .from(outlineLogoRef.current, {
//         drawSVG: 0,
//         duration: 20,
//       })
//     gsap.fromTo(
//       solidLogoRef.current,
//       {
//         opacity: 0,
//       },
//       {
//         opacity: 1,
//         delay: 4,
//         duration: 4,
              
              
//       }
//     )
      
//   }, [])

//   return (
//       <div className="logo-container" ref={bgRef}>
          
//       <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
//       <svg
//         width="1748"
//         height="2734"
//         viewBox="0 0 1748 2734"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//           >
//         <path
//               className="svg-container"
//           ref={outlineLogoRef}
//           d="M1548.54 2061V33V11L1744.7 1C1744.7 503.667 1734.76 1583.56 1746.7 2025C1759.63 2503 1352.38 2715 1160.22 2715L1022.11 2733H888C1476.48 2625 1525.85 2285 1548.54 2061Z"
//         />
//               <path
//                     className="svg-container"
//                     ref={outlineLogoRef}
//           fill-rule="evenodd"
//           clip-rule="evenodd"
//           d="M916 10H1541V2090.56L1509 2218.56C1508.99 2218.57 1508.99 2218.58 1508.99 2218.59C1487.61 2386.85 1303.92 2723 740.5 2723C458.769 2723 276.632 2623.61 163.43 2499.34C50.2438 2375.07 6.00688 2225.96 0.000909626 2126.53L0 2126.52V1738H609.025L608.999 1738.52C602 1879.51 608.253 1974.2 622.862 2036.95C637.473 2099.7 660.418 2130.4 686.724 2143.55C713.046 2156.71 742.885 2152.39 771.495 2144.7C779.835 2142.47 788.033 2139.95 796.006 2137.51C801.726 2135.75 807.329 2134.04 812.785 2132.48C825.805 2128.77 837.925 2126 848.5 2126C856.701 2126 864.018 2121.69 870.548 2113.76C877.083 2105.82 882.79 2094.29 887.753 2079.96C897.675 2051.31 904.571 2011.6 909.203 1967.45C918.466 1879.15 918.667 1773.17 916 1702.52L916 1702.51V10ZM917 11V1702.49C919.667 1773.17 919.467 1879.19 910.197 1967.55C905.563 2011.73 898.658 2051.53 888.697 2080.29C883.718 2094.67 877.963 2106.32 871.32 2114.4C864.673 2122.47 857.099 2127 848.5 2127C838.075 2127 826.07 2129.73 813.059 2133.44C807.65 2134.98 802.056 2136.7 796.336 2138.45C788.338 2140.9 780.093 2143.43 771.755 2145.67C743.115 2153.36 712.954 2157.79 686.276 2144.45C659.582 2131.1 636.527 2100.05 621.888 2037.18C607.266 1974.37 601.015 1879.73 607.975 1739H1V2126.49C6.99759 2225.72 51.1619 2374.6 164.17 2498.66C277.168 2622.72 459.031 2722 740.5 2722C1303.45 2722 1486.7 2386.19 1508 2218.44L1508.01 2218.41L1540 2090.44V11H917Z"
                  
//         />
//       </svg>
//     </div>
//   )
// }

// export default Logo
// import './index.scss'
// import LogoS from '../../../assets/images/logo-s.png'
// import { useEffect, useRef } from 'react'
// import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'
// import gsap from 'gsap-trial'

// const Logo = () => {
//   const bgRef = useRef()
//   const outlineLogoRef = useRef()
//   const solidLogoRef = useRef()

//   const animationStarted = useRef(false);

//   useEffect(() => {
//     gsap.registerPlugin(DrawSVGPlugin);

//     if (!animationStarted.current) {
//       animationStarted.current = true;

//       gsap.timeline().to(bgRef.current, {
//         duration: 1,
//         opacity: 1,
//       })
//       .from(outlineLogoRef.current, {
//         drawSVG: 0,
//         duration: 20,
//       });

//       gsap.fromTo(
//         solidLogoRef.current,
//         {
//           opacity: 0,
//         },
//         {
//           opacity: 1,
//           delay: 4,
//           duration: 4,
//         }
//       );
//     }
//   }, []);

//   return (
//     <div className="logo-container" ref={bgRef}>
//       <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
//       <svg
//   width="1748"
//   height="2734"
//   viewBox="0 0 1748 2734"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   {/* ... */}
//   <path
//     className="svg-container"
//     ref={outlineLogoRef}
//     fillRule="evenodd"   // Change this to 'fillRule="evenodd"'
//     clipRule="evenodd"   // Change this to 'clipRule="evenodd"'
//     d="M916 10H1541V2090.56L1509 2218.56C1508.99 2218.57 1508.99 2218.58 1508.99 2218.59C1487.61 2386.85 1303.92 2723 740.5 2723C458.769 2723 276.632 2623.61 163.43 2499.34C50.2438 2375.07 6.00688 2225.96 0.000909626 2126.53L0 2126.52V1738H609.025L608.999 1738.52C602 1879.51 608.253 1974.2 622.862 2036.95C637.473 2099.7 660.418 2130.4 686.724 2143.55C713.046 2156.71 742.885 2152.39 771.495 2144.7C779.835 2142.47 788.033 2139.95 796.006 2137.51C801.726 2135.75 807.329 2134.04 812.785 2132.48C825.805 2128.77 837.925 2126 848.5 2126C856.701 2126 864.018 2121.69 870.548 2113.76C877.083 2105.82 882.79 2094.29 887.753 2079.96C897.675 2051.31 904.571 2011.6 909.203 1967.45C918.466 1879.15 918.667 1773.17 916 1702.52L916 1702.51V10ZM917 11V1702.49C919.667 1773.17 919.467 1879.19 910.197 1967.55C905.563 2011.73 898.658 2051.53 888.697 2080.29C883.718 2094.67 877.963 2106.32 871.32 2114.4C864.673 2122.47 857.099 2127 848.5 2127C838.075 2127 826.07 2129.73 813.059 2133.44C807.65 2134.98 802.056 2136.7 796.336 2138.45C788.338 2140.9 780.093 2143.43 771.755 2145.67C743.115 2153.36 712.954 2157.79 686.276 2144.45C659.582 2131.1 636.527 2100.05 621.888 2037.18C607.266 1974.37 601.015 1879.73 607.975 1739H1V2126.49C6.99759 2225.72 51.1619 2374.6 164.17 2498.66C277.168 2622.72 459.031 2722 740.5 2722C1303.45 2722 1486.7 2386.19 1508 2218.44L1508.01 2218.41L1540 2090.44V11H917Z"
//   />
// </svg>
//     </div>
//   )
// }

// export default Logo
import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  const animationStarted = useRef(false);

  useEffect(() => {
    if (!animationStarted.current) {
      animationStarted.current = true;

      gsap.timeline().to(bgRef.current, {
        duration: 1,
        opacity: 1,
      });

      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 4,
          duration: 4,
        }
      );
    }
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
    </div>
  )
}

export default Logo