import React, { useState } from 'react'
import righticon from '../img/right.svg'
import { balanceMenu } from '../styles.js'
import qrkod from '../img/qrkod.png'
import chart from '../img/Frame 78.png'
const InformationMenu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menu, setMenu] = useState(false);
  const [activeTab, setActiveTab] = useState();
  const [closeModal, setCloseModal] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu);
  }
  const handleopen = () => {
    setCloseModal(true)
  }
  const handleClose = () => {
    setCloseModal(false)
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterSearch = (country) => {
    if (searchQuery.trim() === "") {
      return true;
    }
    return country.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  }

  const filterCountries = balanceMenu.filter(filterSearch);


  return (
    <section className={`${menu ? " pr-[472px] " : "pr-[200px]"} bg-#030D14 bg-contact-bg pt-[34px] pl-[328px]  h-full min-h-[100vh]`}>
      <div className='flex items-center justify-between mb-[72px]'>
        <h1 className='text-white text-[40px] font-medium'>Information</h1>
        <button onClick={toggleMenu} className='flex items-center py-3 px-4 bg-[#122533] rounded-lg'>
          <p className='text-white text-base font-medium mr-2'>Manage</p>
          <img src={righticon} alt="right" />
        </button>
      </div>
      <h2 className='text-white text-2xl  mb-4'>
        Trend Overview
      </h2>


      <div className='flex items-center justify-between mb-8'>
        <select className='py-3  px-4 bg-[#122533] rounded-lg  text-white text-base font-medium'>
          <option>
            BTC
          </option>
          <option>
            ETH
          </option>
          <option>
            LTC
          </option>
          <option>
            DOGE
          </option>
        </select>
        <div className='flex items-center space-x-[44px]'>
          <button className='text-[#747474] transition-all   text-bese font-medium hover:text-white hover:py-2 hover:px-4 hover:bg-[#122533] hover:rounded-3xl'>
            Daily
          </button>
          <button className='text-[#747474] transition-all   text-bese font-medium hover:text-white hover:py-2 hover:px-4 hover:bg-[#122533] hover:rounded-3xl'>
            Monthly
          </button>
          <button className='text-[#747474] transition-all   text-bese font-medium hover:text-white hover:py-2 hover:px-4 hover:bg-[#122533] hover:rounded-3xl'>
            Yearly
          </button>
        </div>
      </div>

      <div className='relative'>
        <img className='w-full max-w-[1020px]' src={chart} alt="" />
        <div className='absolute top-[45px] right-0'>
          <svg xmlns="http://www.w3.org/2000/svg" width="820" height="243" viewBox="0 0 820 243" fill="none">
            <path d="M820 10.1824L815.341 7.83161L811.614 20.1735L806.955 2.54224L802.295 0.191406V44.8572L795.773 51.9097L790.182 49.5589L785.523 51.9097L779 47.7958L775.273 67.1901L768.75 64.8393L761.295 106.567L756.636 57.1991L751.045 80.1197L746.386 70.1287L740.795 16.0595L738.932 17.2349C737.689 14.4923 735.018 9.24211 734.273 10.1824C733.527 11.1228 731.477 22.3284 730.545 27.8137L727.75 0.191406L723.091 16.0595C722.47 11.5538 720.855 2.54224 719.364 2.54224C717.873 2.54224 715.015 12.3374 713.773 17.2349H710.977L700.727 81.8828L693.273 80.1197L690.477 94.2247L686.75 91.8739L682.091 101.865L680.227 74.2426L673.705 121.259L669.977 123.022L666.25 104.803L659.727 101.865L649.477 61.9007L643.886 68.9532V51.9097L638.295 57.1991L631.773 49.5589L628.045 61.9007L624.318 57.1991L619.659 96.5755L615 94.2247L607.545 109.505L601.955 81.8828L595.432 106.567L590.773 104.803L581.455 115.382L574 98.9263L567.477 106.567L561.886 98.9263L557.227 111.268L551.636 91.8739L548.841 126.549L536.727 98.9263L529.273 109.505L521.818 98.9263L515.295 109.505L511.568 54.8483L505.045 61.9007L501.318 54.8483L493.864 101.865L486.409 96.5755L482.682 104.803L476.159 27.8137L471.5 101.865L466.841 91.8739L462.182 101.865L453.795 88.9353L450.068 94.2247L443.545 88.9353L440.75 104.803L437.023 98.9263L432.364 121.259L428.636 104.803L422.114 124.785L414.659 88.9353L406.273 94.2247L401.614 88.9353L399.75 94.2247L395.091 91.8739L390.432 115.382L384.841 112.444L380.182 115.382L370.864 91.8739L365.273 98.9263L354.091 91.8739L350.364 98.9263L341.977 90.1107L338.25 98.9263L328.932 91.8739L326.136 96.5755L322.409 91.8739L320.545 152.995L317.75 146.531L315.886 152.995L310.295 150.645L306.568 158.285L300.977 148.294L296.318 160.048L292.591 104.803L289.795 112.444L285.136 88.9353L281.409 94.2247L278.614 68.9532L273.023 74.2426L268.364 36.0416L260.909 57.1991L255.318 53.6728L252.523 94.2247L246.932 83.6459L240.409 101.865L236.682 90.1107C235.439 94.0288 232.768 101.865 232.023 101.865C231.277 101.865 227.985 98.3386 226.432 96.5755L222.705 106.567L216.182 101.865L213.386 113.619L203.136 85.4091L198.477 96.5755L191.955 91.8739L189.159 98.9263L183.568 96.5755L179.841 126.549L176.114 121.259L173.318 123.022L169.591 101.865L166.795 104.803L160.273 94.2247L156.545 100.102L151.886 87.1722L146.295 91.8739L140.705 83.6459L134.182 91.8739L132.318 85.4091L129.523 94.2247L123 91.8739L120.205 98.9263L111.818 94.2247L109.023 101.865L104.364 96.5755L98.7728 103.04L94.1136 81.8828L89.4546 118.908L86.6591 98.9263L82.9318 103.04L79.2045 81.8828L73.6136 91.8739L68.0228 220.582L64.2955 197.661L60.5682 201.775L57.7727 175.916L52.1818 201.775L46.5909 186.495L42.8636 201.775L38.2046 196.486C37.5834 201.188 35.9682 210.356 34.4773 209.415C32.9864 208.475 30.7501 203.93 29.8182 201.775L27.0227 234.099L25.1591 230.573L20.6567 242.5H20.4692L17.7046 205.301L13.9773 214.705C13.0455 211.57 10.9955 205.301 10.25 205.301C9.50458 205.301 7.45453 214.313 6.52271 218.819L0 212.942V242.5H20.4692L20.5001 242.915L20.6567 242.5H820V10.1824Z" fill="url(#paint0_linear_136_708)" />
            <defs>
              <linearGradient id="paint0_linear_136_708" x1="410" y1="0.191406" x2="410" y2="242.915" gradientUnits="userSpaceOnUse">
                <stop stop-color="#56AB91" stop-opacity="0.55" />
                <stop offset="1" stop-color="#56AB91" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div>
        {
          menu && (
            <section className='pt-[34px] px-[34px] bg-[#081219] w-[408px] h-full min-h-[100vh] fixed top-0 right-0'>
              <div className='flex items-center justify-between mb-3'>
                <form className=' flex items-center py-[14px] pl-4 w-full max-w-[211px] bg-[#122533] rounded-lg'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clip-path="url(#clip0_135_2928)">
                      <path d="M7.5 14.25C11.2279 14.25 14.25 11.2279 14.25 7.5C14.25 3.77208 11.2279 0.75 7.5 0.75C3.77208 0.75 0.75 3.77208 0.75 7.5C0.75 11.2279 3.77208 14.25 7.5 14.25Z" stroke="#747474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.75 12.75L17.25 17.25" stroke="#747474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_135_2928">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <input value={searchQuery} onChange={handleSearchChange} type="search" placeholder='Search' className='bg-transparent text-[#747474] text-base ml-3' />
                </form>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                    <rect x="1" y="1" width="22" height="18" rx="4" stroke="#747474" stroke-width="2" />
                    <path d="M6 6L8.46446 8.46446C10.4171 10.4171 13.5829 10.4171 15.5355 8.46447L18 6" stroke="#747474" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
                    <path d="M1.31641 17.3682H18.6848" stroke="#747474" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.6848 17.3682C18.2428 17.3145 17.8316 17.1142 17.5168 16.7994C17.2019 16.4846 17.0017 16.0733 16.948 15.6313V11.2892C16.948 6.94712 13.9815 3.10522 10.0006 3.10522C6.01977 3.10522 3.05325 6.94712 3.05325 11.2892V15.6313C2.99955 16.0733 2.7993 16.4846 2.48447 16.7994C2.16964 17.1142 1.75839 17.3145 1.31641 17.3682" stroke="#747474" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.4747 17.3682C13.4747 18.2894 13.1087 19.173 12.4573 19.8244C11.8059 20.4759 10.9223 20.8418 10.001 20.8418C9.07975 20.8418 8.1962 20.4759 7.54476 19.8244C6.89332 19.173 6.52734 18.2894 6.52734 17.3682" stroke="#747474" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.001 3.10522V0.868164" stroke="#747474" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <button className='px-[7px] py-[7px] bg-white/[0.03] rounded-lg'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none">
                    <g clip-path="url(#clip0_168_5759)">
                      <rect y="0.5" width="32" height="23" rx="4" fill="#1A47B8" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.40415 0.5H0V4.33333L28.5774 23.5H32V19.6667L3.40415 0.5Z" fill="white" />
                      <path d="M1.13539 0.5L32 21.2543V23.5H30.8912L0 2.72419V0.5H1.13539Z" fill="#F93939" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9524 0.5H32V4.33333C32 4.33333 12.2054 17.103 3.04762 23.5H0V19.6667L28.9524 0.5Z" fill="white" />
                      <path d="M32 0.5H30.9665L0 21.2722V23.5H1.13539L32 2.74099V0.5Z" fill="#F93939" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6375 0.5H20.3892V7.59445H32V16.4009H20.3892V23.5H11.6375V16.4009H0V7.59445H11.6375V0.5Z" fill="white" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4737 0.5H18.5263V9.34616H32V14.6538H18.5263V23.5H13.4737V14.6538H0V9.34616H13.4737V0.5Z" fill="#F93939" />
                    </g>
                    <defs>
                      <clipPath id="clip0_168_5759">
                        <rect y="0.5" width="32" height="23" rx="4" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>

              <h3 className='text-white text-2xl mb-3'>Convert</h3>
              <div className='px-4 py-7 bg-[#0D1B25] rounded-2xl mb-4'>
                <div className='py-1 pl-4 pr-2 bg-[#122533] rounded-lg flex items-center justify-between mb-4'>
                  <p className='text-white text-base '>0.000620</p>
                  <div className='flex items-center justify-between py-3 px-2 border-#56AB91 border-2 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M23.6393 14.9029C22.0366 21.3315 15.5254 25.2438 9.09601 23.6407C2.66931 22.038 -1.24303 15.5265 0.360359 9.09837C1.96234 2.66903 8.47351 -1.24361 14.9009 0.359081C21.3298 1.96177 25.2419 8.47404 23.6391 14.903L23.6392 14.9029H23.6393Z" fill="#F7931A" />
                      <path d="M17.291 10.2903C17.5299 8.6934 16.3141 7.83498 14.6516 7.26233L15.1909 5.09914L13.8741 4.77103L13.3491 6.87726C13.0029 6.79092 12.6474 6.70957 12.2941 6.62892L12.8229 4.50878L11.5069 4.18066L10.9673 6.34315C10.6808 6.27793 10.3994 6.21347 10.1265 6.14554L10.128 6.13874L8.31209 5.68528L7.9618 7.09171C7.9618 7.09171 8.93876 7.31565 8.91817 7.32943C9.4514 7.46252 9.54783 7.81551 9.53182 8.09529L8.91747 10.5597C8.95418 10.569 9.00181 10.5825 9.05437 10.6036C9.01043 10.5927 8.96369 10.5808 8.91518 10.5692L8.05407 14.0214C7.9889 14.1834 7.82349 14.4266 7.45068 14.3342C7.46388 14.3534 6.49361 14.0954 6.49361 14.0954L5.83984 15.6027L7.55345 16.0299C7.87224 16.1098 8.18463 16.1935 8.49228 16.2721L7.94737 18.4601L9.26265 18.7883L9.80228 16.6235C10.1616 16.721 10.5103 16.811 10.8517 16.8958L10.3139 19.0504L11.6307 19.3785L12.1756 17.1946C14.421 17.6196 16.1094 17.4482 16.82 15.4172C17.3927 13.7821 16.7915 12.8389 15.6102 12.2238C16.4706 12.0254 17.1187 11.4595 17.2915 10.2905L17.2911 10.2902L17.291 10.2903ZM14.2825 14.5091C13.8755 16.1443 11.1224 15.2604 10.2298 15.0387L10.9529 12.14C11.8454 12.3628 14.7078 12.8038 14.2825 14.5091H14.2825ZM14.6897 10.2666C14.3185 11.754 12.027 10.9984 11.2837 10.8131L11.9392 8.1841C12.6826 8.36939 15.0764 8.71522 14.6898 10.2666H14.6897Z" fill="white" />
                    </svg>
                    <p className='text-white text-base font-medium ml-4'>BTC</p>
                  </div>


                </div>

                <button className='py-1.5 px-2 bg-[#122533] rounded-[32px] w-full max-w-[32px] block mx-auto mb-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path d="M1.66602 6.25244L12.6464 6.25244L8.56798 0.999919" stroke="#56AB91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.333 9.74756L5.35262 9.74756L9.43105 15.0001" stroke="#56AB91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>

                <div className='py-1 pl-4 pr-2 bg-[#122533] rounded-lg flex items-center justify-between'>
                  <p className='text-white text-base '>10.42</p>
                  <div className='flex items-center justify-between py-3 px-2 border-#56AB91 border-2 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.39403 0.102539L0.0179909 9.29442C0.00133879 9.32861 -0.00393815 9.36723 0.00293176 9.40463C0.00980167 9.44203 0.028458 9.47626 0.0561725 9.5023L11.8748 20.8274C11.9084 20.8596 11.9531 20.8776 11.9996 20.8776C12.0461 20.8776 12.0908 20.8596 12.1244 20.8274L23.943 9.503C23.9708 9.47696 23.9894 9.44274 23.9963 9.40534C24.0032 9.36794 23.9979 9.32932 23.9812 9.29513L19.6052 0.103246C19.5911 0.0723753 19.5683 0.0462243 19.5398 0.027918C19.5112 0.00961164 19.4779 -7.57261e-05 19.444 1.36834e-05H4.55666C4.52255 -0.000410672 4.48905 0.00904334 4.46019 0.0272353C4.43133 0.0454272 4.40836 0.0715799 4.39403 0.102539Z" fill="#50AF95" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5176 10.2383C13.4328 10.2447 12.9944 10.2708 12.0165 10.2708C11.2388 10.2708 10.6865 10.2475 10.4928 10.2383C7.48706 10.1061 5.24354 9.58284 5.24354 8.95638C5.24354 8.32991 7.48706 7.80739 10.4928 7.67305V9.71718C10.6894 9.73132 11.2522 9.76456 12.03 9.76456C12.9633 9.76456 13.4307 9.72567 13.5148 9.71789V7.67446C16.5142 7.8081 18.7528 8.33133 18.7528 8.95638C18.7528 9.58142 16.5149 10.1047 13.5148 10.2376L13.5176 10.2383ZM13.5176 7.46305V5.63386H17.7035V2.84448H6.30697V5.63386H10.4921V7.46234C7.0904 7.6186 4.53223 8.29244 4.53223 9.09991C4.53223 9.90738 7.0904 10.5805 10.4921 10.7375V16.5991H13.5169V10.7354C16.9109 10.5791 19.4648 9.90597 19.4648 9.0992C19.4648 8.29244 16.913 7.61931 13.5169 7.46234L13.5176 7.46305Z" fill="white" />
                    </svg>
                    <p className='text-white text-base font-medium ml-4'>USDT</p>
                  </div>


                </div>
              </div>

              <div className='flex items-center justify-between mb-3'>
                <h3 className='text-white text-xl '>
                  My assets
                </h3>
                <select className='text-white py-2 px-3 bg-[#122533] rounded-lg'>
                  <option>Popular</option>
                  <option>Popular</option>
                  <option>Popular</option>
                  <option>Popular</option>
                </select>
              </div>

              <ul className='grid grid-cols-2 gap-5'>
                {
                  filterCountries.map((menu) => {
                    return (
                      <li key={menu.id} onClick={() => setActiveTab(menu.id)} >
                       <button className={`px-3 py-3 bg-[#0D1B25] rounded-2xl block w-full `} onClick={handleopen}>
                       <div className='flex items-center mb-2'>
                          <img className='w-full max-w-[30px]' src={menu.logo} alt="logo" />
                          <div className='ml-3'>
                            <h4 className='text-white text-sm mb-1 '>{menu.fullname}</h4>
                            <p className='text-[#747474] text-base font-medium '>{menu.name}</p>
                          </div>
                        </div>
                        <img className='w-full max-w-[80px] mx-auto mb-3' src={menu.chart} alt="chart" />
                        <div>
                          <h4 className='text-white text-sm text-center'>$ {menu.money}</h4>
                        </div>
                       </button>
                      </li>
                    )
                  })
                }
              </ul>
            </section>
          )
        }
      </div>

      <div className='fixed top-[36px] left-[568px] w-full max-w-[420px]'>
        {closeModal && (
          <ul>
            {
              filterCountries.map((menu) => {
                return (
                  <li key={menu.id} className={` py-6 px-10 bg-[#081219] border border-white/[0.50] w-full max-w-[420px] rounded-2xl ${activeTab === menu.id ? "" : "hidden"}`}>
                   <div className='flex items-center justify-between border-b border-white/[0.05] pb-[15px] mb-[10px]'>
                      <h2 className='text-white text-2xl font-medium leading-[22px]'>Deposit Crypto</h2>
                      <button onClick={handleClose} className='py-[6px] px-[6px] border-[#CFC6FB] border-[3px] rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                          <path d="M8.64355 17.2855H25.3578" stroke="#56AB91" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </button>
                    </div>
                    <p className='text-white text-sm leading-[22.5px] mb-1'>Currency</p>
                    <div className='flex items-center py-[10px] px-4 justify-between rounded-xl border border-white/[0.1] mb-2'>
                      <div className='flex items-center'>
                        <img className='w-full max-w-[36px] mr-1.5' src={menu.logo} alt="" />
                        <p className='text-white text-base font-medium ml-1.5'>{menu.fullname}</p>
                        <span className='text-white text-base opacity-[0.5] ml-1.5'>{menu.name}</span>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M14.25 6L9.92803 10.5H8.07197L3.75 6" stroke="#F7F7FF" stroke-miterlimit="10" />
                        </svg>
                      </button>
                    </div>
                    <p className='text-white text-sm leading-[22px] mb-1'>Network</p>
                    <div className='flex items-center py-[10px] px-4 justify-between rounded-xl border border-white/[0.1] mb-2'>
                      <div className='flex items-center'>
                        <p className='text-white text-base font-medium ml-1.5'>BSC/BEP20</p>
                      </div>
                      <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M14.25 6L9.92803 10.5H8.07197L3.75 6" stroke="#F7F7FF" stroke-miterlimit="10" />
                        </svg>
                      </button>
                    </div>
                    <p className='text-white text-sm leading-[22px] mb-1'>Address</p>
                    <div className='w-full max-w-[320px] mx-auto'>
                      <img src={qrkod} alt="" />
                    </div>
                    <div className='px-4 py-3 bg-[#0D1B25] rounded-xl mb-4'>
                      <div className='flex items-center justify-between'>
                        <p className='text-white text-base '>Minimum deposit</p>
                        <p className='text-white text-base font-medium'>0.0005 BTC</p>
                      </div>
                    </div>

                    <button className='flex items-center text-white text-base font-medium py-4  w-full max-w-[472px] rounded-xl bg-#56AB91 pl-[112px] '>
                      <svg className='mr-1.5' xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M2 6.87872H17" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 12.8787H6.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.375 12.8787H11.375" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.33 3.12872H13.6625C16.3325 3.12872 17 3.78872 17 6.42122V12.5787C17 15.2112 16.3325 15.8712 13.67 15.8712H5.33C2.6675 15.8787 2 15.2187 2 12.5862V6.42122C2 3.78872 2.6675 3.12872 5.33 3.12872Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Buy With Card
                    </button>
                  </li>
                )
              })
            }
          </ul>
        )

        }
      </div>
    </section>
  )
}

export default InformationMenu