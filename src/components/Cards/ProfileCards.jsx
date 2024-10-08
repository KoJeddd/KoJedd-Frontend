import Filters from "../../pages/Search/Results/Filters";
import { StarRating } from "../Forms/SettingsForms/ProfileSettingsForm";
import SearchProposal from "../functionalComponents/Search";

export const About = () => {
  return (
    <>
      <div className="rounded-xl bg-[#262626] p-9 text-[#FBFFFF]">
        <div className="mb-5">
          <p className="text-[20px] font-bold">Bio</p>
          <p className="text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum Sed ipsum quam
            sit accusantium ipsam et molestiae harum. Est recusandae assumenda
            et aperiam consequatur id sunt omnis vel ipsum vero ab accusantium
            iure et placeat tempore accusantium dolor
          </p>
        </div>
        <div className="mb-5">
          <p className="text-[20px] font-bold">Specailties</p>
          <p className="text-[15px]">Stakings,P2E</p>
        </div>
        <div>
          <p className="text-[20px] font-bold">Industry</p>
          <p className="text-[15px]">Web 3</p>
        </div>
      </div>
    </>
  );
};

export const Links = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center pb-10 font-bold md:flex-row">
        <button className="mt-4 w-[150px] rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-[#0f0f0f] md:mr-5">
          Add Links
        </button>
        <button className="mt-4 w-[150px] rounded border-2 border-[#FFDF00] bg-none p-2.5 text-[#FFDF00]">
          Manage Links
        </button>
      </div>
      <div className="text-black">
        <a href="# ">
          <div className="button-gradient m-auto mt-4 flex w-full items-center justify-center rounded-md border-2 border-[#FFD21D] p-2 font-bold focus:outline-none">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5095 3.44C15.6092 1.54 13.0987 0.5 10.4383 0.5C4.98734 0.5 0.556579 4.96 0.556579 10.44C0.556579 12.09 0.956652 13.7 1.71678 15.11L0.526575 19.56C0.456563 19.81 0.526578 20.09 0.71661 20.28C0.856634 20.42 1.04667 20.5 1.2467 20.5C1.30671 20.5 1.37672 20.49 1.43674 20.48L6.00751 19.28C7.38775 20 8.91802 20.38 10.4383 20.38C15.9892 20.38 20.5 15.92 20.5 10.44C20.5 7.86 19.4398 5.37 17.5095 3.44ZM14.669 13.75L13.8289 14.58C12.9487 15.46 10.6283 14.5 8.55795 12.43C6.4976 10.37 5.56744 8.04 6.40759 7.16L7.23773 6.32001C7.33775 6.24001 7.54779 6.1 7.81783 6.09C8.06788 6.09 8.24789 6.20001 8.42792 6.32001C9.14805 6.82001 9.51812 7.07 9.65814 7.55C9.82817 8.13 9.60813 8.66 9.50811 8.86C9.56812 9.16 9.76816 9.95999 10.4783 10.65C11.1884 11.35 11.9885 11.55 12.2886 11.61C12.4786 11.48 12.9287 11.22 13.4388 11.33C13.8689 11.42 14.1289 11.81 14.669 12.56C14.779 12.72 14.889 12.9 14.899 13.14C14.899 13.43 14.749 13.65 14.669 13.75Z"
                fill="#0F0F0F"
              />
            </svg>
            <span className="pl-2">Whatsapp</span>
          </div>
        </a>
        <a href="#">
          <div className="button-gradient m-auto mt-4 flex w-full items-center justify-center rounded-md border-2 border-[#FFD21D] p-2 font-bold focus:outline-none">
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7029 2.61366C19.0071 2.92199 18.2596 3.13033 17.4737 3.22449C18.2846 2.73932 18.8912 1.97572 19.1804 1.07616C18.4186 1.52865 17.5849 1.84716 16.7154 2.01783C16.1307 1.39355 15.3563 0.979766 14.5124 0.840723C13.6684 0.701679 12.8022 0.845154 12.0481 1.24887C11.2941 1.65259 10.6944 2.29396 10.3422 3.07341C9.99003 3.85287 9.90503 4.72679 10.1004 5.55949C8.55682 5.48199 7.04677 5.08079 5.66827 4.38192C4.28977 3.68304 3.07362 2.70213 2.09875 1.50283C1.76542 2.07783 1.57375 2.74449 1.57375 3.45449C1.57338 4.09366 1.73078 4.72303 2.03198 5.28677C2.33319 5.85051 2.76888 6.33119 3.30042 6.68616C2.68398 6.66655 2.08114 6.49998 1.54208 6.20033V6.25033C1.54202 7.14678 1.85211 8.01564 2.41974 8.70949C2.98736 9.40334 3.77756 9.87944 4.65625 10.057C4.0844 10.2118 3.48486 10.2346 2.90292 10.1237C3.15083 10.895 3.63375 11.5695 4.28406 12.0528C4.93437 12.536 5.71951 12.8038 6.52958 12.8187C5.15444 13.8982 3.45616 14.4837 1.70792 14.4812C1.39823 14.4812 1.08881 14.4632 0.78125 14.427C2.55581 15.568 4.62153 16.1735 6.73125 16.1712C13.8729 16.1712 17.7771 10.2562 17.7771 5.12616C17.7771 4.95949 17.7729 4.79116 17.7654 4.62449C18.5248 4.07531 19.1803 3.39524 19.7013 2.61616L19.7029 2.61366Z"
                fill="#0F0F0F"
              />
            </svg>
            <span className="pl-2">Twitter</span>
          </div>
        </a>
        <a href="#">
          <div className="button-gradient m-auto mt-4 flex w-full items-center justify-center rounded-md border-2 border-[#FFD21D] p-2 font-bold focus:outline-none">
            <svg
              width="21"
              height="15"
              viewBox="0 0 21 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4312 1.24413C16.1562 0.669125 14.7896 0.244125 13.3604 0.00245847C13.3477 1.50682e-05 13.3345 0.00158969 13.3227 0.00696458C13.3109 0.0123395 13.3011 0.0212487 13.2946 0.0324585C13.1196 0.339958 12.9246 0.740792 12.7879 1.05746C11.2721 0.830989 9.73115 0.830989 8.2154 1.05746C8.06318 0.706509 7.89152 0.364312 7.70123 0.0324585C7.69478 0.0211107 7.68503 0.0119999 7.67326 0.00634191C7.6615 0.000683887 7.64829 -0.00125235 7.6354 0.000791728C6.20707 0.242458 4.8404 0.667459 3.56457 1.24329C3.55359 1.2479 3.54429 1.25575 3.5379 1.26579C0.944567 5.07829 0.233734 8.79662 0.582901 12.4683C0.583872 12.4773 0.586663 12.486 0.591105 12.4939C0.595546 12.5017 0.601544 12.5086 0.608734 12.5141C2.12239 13.6161 3.81068 14.4556 5.6029 14.9975C5.61539 15.0013 5.62876 15.0013 5.64124 14.9974C5.65373 14.9936 5.66476 14.986 5.6729 14.9758C6.05856 14.46 6.40031 13.9128 6.69457 13.34C6.69865 13.3321 6.701 13.3235 6.70147 13.3147C6.70193 13.3059 6.7005 13.297 6.69726 13.2888C6.69402 13.2806 6.68905 13.2732 6.68269 13.2671C6.67633 13.2609 6.66873 13.2562 6.6604 13.2533C6.12207 13.0506 5.60047 12.8059 5.1004 12.5216C5.09141 12.5165 5.08384 12.5092 5.07836 12.5004C5.07289 12.4917 5.06967 12.4817 5.06901 12.4713C5.06835 12.461 5.07026 12.4507 5.07458 12.4413C5.07889 12.4319 5.08548 12.4237 5.09373 12.4175C5.19873 12.34 5.30373 12.2591 5.40373 12.1783C5.41273 12.171 5.42358 12.1664 5.43505 12.1649C5.44653 12.1635 5.45819 12.1652 5.46873 12.17C8.74123 13.64 12.2854 13.64 15.5196 12.17C15.5301 12.1649 15.5419 12.1629 15.5536 12.1643C15.5652 12.1656 15.5762 12.1702 15.5854 12.1775C15.6854 12.2591 15.7896 12.34 15.8954 12.4175C15.9037 12.4236 15.9104 12.4316 15.9149 12.441C15.9193 12.4503 15.9214 12.4606 15.9209 12.4709C15.9204 12.4812 15.9174 12.4912 15.912 12.5001C15.9067 12.509 15.8993 12.5163 15.8904 12.5216C15.3921 12.8083 14.8737 13.0508 14.3296 13.2525C14.3212 13.2555 14.3136 13.2603 14.3072 13.2665C14.3009 13.2727 14.2959 13.2802 14.2927 13.2885C14.2894 13.2968 14.288 13.3056 14.2885 13.3145C14.289 13.3234 14.2913 13.3321 14.2954 13.34C14.5954 13.9125 14.9387 14.4575 15.3162 14.975C15.3241 14.9856 15.335 14.9935 15.3475 14.9977C15.3601 15.0019 15.3736 15.0021 15.3862 14.9983C17.1815 14.458 18.8726 13.6181 20.3879 12.5141C20.3953 12.509 20.4015 12.5023 20.4061 12.4945C20.4107 12.4867 20.4136 12.4781 20.4146 12.4691C20.8312 8.22412 19.7162 4.53579 17.4571 1.26746C17.4515 1.25684 17.4424 1.24856 17.4312 1.24413ZM7.18373 10.2325C6.19873 10.2325 5.38623 9.34162 5.38623 8.24912C5.38623 7.15579 6.1829 6.26579 7.18373 6.26579C8.19207 6.26579 8.99707 7.16329 8.98123 8.24912C8.98123 9.34246 8.18457 10.2325 7.18373 10.2325ZM13.8296 10.2325C12.8437 10.2325 12.0321 9.34162 12.0321 8.24912C12.0321 7.15579 12.8279 6.26579 13.8296 6.26579C14.8379 6.26579 15.6429 7.16329 15.6271 8.24912C15.6271 9.34246 14.8387 10.2325 13.8296 10.2325Z"
                fill="#0F0F0F"
              />
            </svg>
            <span className="pl-2">Discord</span>
          </div>
        </a>
        <a href="#">
          <div className="button-gradient m-auto mt-4 flex w-full items-center justify-center rounded-md border-2 border-[#FFD21D] p-2 font-bold focus:outline-none">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5095 3.44C15.6092 1.54 13.0987 0.5 10.4383 0.5C4.98734 0.5 0.556579 4.96 0.556579 10.44C0.556579 12.09 0.956652 13.7 1.71678 15.11L0.526575 19.56C0.456563 19.81 0.526578 20.09 0.71661 20.28C0.856634 20.42 1.04667 20.5 1.2467 20.5C1.30671 20.5 1.37672 20.49 1.43674 20.48L6.00751 19.28C7.38775 20 8.91802 20.38 10.4383 20.38C15.9892 20.38 20.5 15.92 20.5 10.44C20.5 7.86 19.4398 5.37 17.5095 3.44ZM14.669 13.75L13.8289 14.58C12.9487 15.46 10.6283 14.5 8.55795 12.43C6.4976 10.37 5.56744 8.04 6.40759 7.16L7.23773 6.32001C7.33775 6.24001 7.54779 6.1 7.81783 6.09C8.06788 6.09 8.24789 6.20001 8.42792 6.32001C9.14805 6.82001 9.51812 7.07 9.65814 7.55C9.82817 8.13 9.60813 8.66 9.50811 8.86C9.56812 9.16 9.76816 9.95999 10.4783 10.65C11.1884 11.35 11.9885 11.55 12.2886 11.61C12.4786 11.48 12.9287 11.22 13.4388 11.33C13.8689 11.42 14.1289 11.81 14.669 12.56C14.779 12.72 14.889 12.9 14.899 13.14C14.899 13.43 14.749 13.65 14.669 13.75Z"
                fill="#0F0F0F"
              />
            </svg>
            <span className="pl-2">Whatsapp</span>
          </div>
        </a>
      </div>
    </>
  );
};

export const ProfileDetailsCard = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="m-auto grid grid-cols-2 place-items-center gap-4 md:grid-cols-3">
          {/* Followers Card */}
          <div className="inline-flex  h-24 w-36 flex-col items-center justify-center gap-2.5 rounded-xl bg-[#242222] px-3 py-2 md:h-28 md:w-60 md:px-6 md:py-3.5">
            <div className="inline-flex items-center justify-start gap-3.5">
              <div className="relative h-3 w-3 md:h-6 md:w-6">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5 0.5C10.3034 0.5 8.52273 2.28069 8.52273 4.47727C8.52273 5.4065 8.84139 6.26129 9.37539 6.93834C7.46171 7.92679 6.07615 9.79486 5.7535 12.0077C4.07389 12.4732 2.84091 14.0131 2.84091 15.8409C2.84091 16.7701 3.15957 17.6249 3.69357 18.302C1.49975 19.4351 0 21.7242 0 24.3636C0 24.9912 0.508767 25.5 1.13636 25.5C1.76396 25.5 2.27273 24.9912 2.27273 24.3636C2.27273 21.8533 4.3078 19.8182 6.81818 19.8182C9.32854 19.8182 11.3636 21.8533 11.3636 24.3636C11.3636 24.9912 11.8724 25.5 12.5 25.5C13.1276 25.5 13.6364 24.9912 13.6364 24.3636C13.6364 21.8533 15.6715 19.8182 18.1818 19.8182C20.6922 19.8182 22.7273 21.8533 22.7273 24.3636C22.7273 24.9912 23.236 25.5 23.8636 25.5C24.4912 25.5 25 24.9912 25 24.3636C25 21.7242 23.5002 19.4351 21.3064 18.302C21.8404 17.6249 22.1591 16.7701 22.1591 15.8409C22.1591 14.0131 20.9261 12.4732 19.2465 12.0077C18.9239 9.79486 17.5383 7.92679 15.6246 6.93834C16.1586 6.26129 16.4773 5.4065 16.4773 4.47727C16.4773 2.28069 14.6966 0.5 12.5 0.5ZM16.9479 12.0588C16.5144 10.0001 14.6877 8.45455 12.5 8.45455C10.3123 8.45455 8.48562 10.0001 8.05212 12.0588C9.64466 12.578 10.7955 14.0751 10.7955 15.8409C10.7955 16.7701 10.4768 17.6249 9.94279 18.302C10.9779 18.8366 11.8585 19.6287 12.5 20.5934C13.1415 19.6287 14.0221 18.8366 15.0572 18.302C14.5232 17.6249 14.2045 16.7701 14.2045 15.8409C14.2045 14.0751 15.3553 12.578 16.9479 12.0588Z"
                    fill="#737373"
                  />
                </svg>
              </div>
              <div className="font-['Poppins'] text-xs text-xs font-bold text-neutral-500 md:text-lg">
                Followers
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1">
              <div className="font-['Poppins'] text-xs text-xs font-bold text-stone-200 md:text-lg">
                234
              </div>
            </div>
          </div>
          {/* Open to Collabs */}
          <div className="inline-flex  h-24 w-36 flex-col items-center justify-center gap-2.5 rounded-xl bg-[#242222] px-3 py-2 md:h-28 md:w-60 md:px-6 md:py-3.5">
            <div className="inline-flex items-center justify-start gap-3.5">
              <div className="relative h-6 w-6">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.36246 5.5C6.36246 5.64706 6.47608 5.79412 6.5897 5.94118L8.862 8.88235C9.08924 9.17647 9.31647 9.32353 9.65731 9.32353C9.99816 9.32353 10.2254 9.17647 10.4526 8.88235C10.9071 8.29412 10.9071 7.41177 10.4526 6.82353L10.1118 6.38235H14.8836L14.5428 6.82353C14.3155 7.11765 14.2019 7.41176 14.2019 7.85294C14.2019 8.73529 14.6564 9.32353 15.3381 9.32353C15.6789 9.32353 15.9062 9.17647 16.1334 8.88235L18.4057 5.94118C18.5193 5.79412 18.6329 5.64706 18.6329 5.5C18.6329 5.35294 18.7465 5.20588 18.7465 4.91176C18.7465 4.76471 18.7465 4.47059 18.6329 4.32353C18.5193 4.17647 18.5193 4.02941 18.4057 3.88235L16.1334 0.941176C15.6789 0.352941 14.9972 0.352941 14.5428 0.941176C14.0883 1.52941 14.0883 2.41176 14.5428 3L14.8836 3.44118H10.1118L10.4526 3C10.9071 2.41176 10.9071 1.52941 10.4526 0.941176C9.99816 0.352941 9.31647 0.352941 8.862 0.941176L6.5897 3.88235C6.47608 4.02941 6.36246 4.17647 6.36246 4.32353C6.36246 4.47059 6.24885 4.61765 6.24885 4.91176C6.24885 5.05882 6.24885 5.35294 6.36246 5.5ZM5.68077 16.9706C7.27139 16.9706 8.63477 15.2059 8.63477 13.1471C8.63477 11.0882 7.27139 9.32353 5.68077 9.32353C4.09016 9.32353 2.72677 11.0882 2.72677 13.1471C2.72677 15.2059 4.09016 16.9706 5.68077 16.9706ZM9.99816 20.9412C7.04416 17.8529 2.72677 18.4412 0.340846 22.2647C0.113615 22.7059 0 23.1471 0 23.5882C0 24.6176 0.681693 25.5 1.477 25.5H9.88454C10.4526 25.5 11.0207 25.0588 11.2479 24.4706C11.4752 23.8824 11.4752 23 11.0207 22.4118C10.6799 21.8235 10.339 21.3824 9.99816 20.9412ZM16.3606 13.1471C16.3606 15.2059 17.724 16.9706 19.3146 16.9706C20.9052 16.9706 22.2686 15.2059 22.2686 13.1471C22.2686 11.0882 20.9052 9.32353 19.3146 9.32353C17.724 9.32353 16.3606 11.0882 16.3606 13.1471ZM24.6546 22.4118C24.3137 21.9706 23.9729 21.3824 23.632 21.0882C20.678 18 16.3606 18.5882 13.9747 22.4118C13.7475 22.7059 13.6339 23.1471 13.6339 23.5882C13.6339 24.6176 14.3155 25.5 15.1109 25.5H23.5184C24.0865 25.5 24.6546 25.0588 24.8818 24.4706C25.109 23.7353 24.9954 23 24.6546 22.4118Z"
                    fill="#737373"
                  />
                </svg>
              </div>
              <div className="font-['Poppins'] text-xs font-bold text-neutral-500 md:text-lg">
                Open to Collabs
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1">
              <div className="font-['Poppins'] text-xs font-bold text-stone-200 md:text-lg">
                Active
              </div>
            </div>
          </div>
          {/* Following */}
          <div className="inline-flex  h-24 w-36 flex-col items-center justify-center gap-2.5 rounded-xl bg-[#242222] px-3 py-2 md:h-28 md:w-60 md:px-6 md:py-3.5">
            <div className="inline-flex items-center justify-start gap-3.5">
              <div className="relative h-6 w-6">
                <svg
                  width="26"
                  height="20"
                  viewBox="0 0 26 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4375 19.375C11.4375 19.375 9.875 19.375 9.875 17.8125C9.875 16.25 11.4375 11.5625 17.6875 11.5625C23.9375 11.5625 25.5 16.25 25.5 17.8125C25.5 19.375 23.9375 19.375 23.9375 19.375H11.4375ZM17.6875 10C18.9307 10 20.123 9.50614 21.0021 8.62706C21.8811 7.74799 22.375 6.5557 22.375 5.3125C22.375 4.0693 21.8811 2.87701 21.0021 1.99794C20.123 1.11886 18.9307 0.625 17.6875 0.625C16.4443 0.625 15.252 1.11886 14.3729 1.99794C13.4939 2.87701 13 4.0693 13 5.3125C13 6.5557 13.4939 7.74799 14.3729 8.62706C15.252 9.50614 16.4443 10 17.6875 10Z"
                    fill="#737373"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.65 19.3757C8.41837 18.8879 8.30285 18.3531 8.3125 17.8132C8.3125 15.696 9.375 13.5163 11.3375 12.0007C10.358 11.6988 9.33742 11.5513 8.3125 11.5632C2.0625 11.5632 0.5 16.2507 0.5 17.8132C0.5 19.3757 2.0625 19.3757 2.0625 19.3757H8.65Z"
                    fill="#737373"
                  />
                  <path
                    d="M7.53125 10C8.56725 10 9.56082 9.58845 10.2934 8.85589C11.0259 8.12332 11.4375 7.12975 11.4375 6.09375C11.4375 5.05775 11.0259 4.06418 10.2934 3.33161C9.56082 2.59905 8.56725 2.1875 7.53125 2.1875C6.49525 2.1875 5.50168 2.59905 4.76911 3.33161C4.03655 4.06418 3.625 5.05775 3.625 6.09375C3.625 7.12975 4.03655 8.12332 4.76911 8.85589C5.50168 9.58845 6.49525 10 7.53125 10Z"
                    fill="#737373"
                  />
                </svg>
              </div>
              <div className="font-['Poppins'] text-xs font-bold text-neutral-500 md:text-lg">
                Following
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1">
              <div className="font-['Poppins'] text-xs font-bold text-stone-200 md:text-lg">
                276
              </div>
            </div>
          </div>
          {/* Twitter */}
          <div className="inline-flex  h-24 w-36 flex-col items-center justify-center gap-2.5 rounded-xl bg-[#242222] px-3 py-2 md:h-28 md:w-60 md:px-6 md:py-3.5">
            <div className="inline-flex items-center justify-start gap-3.5">
              <div className="relative h-6 w-6">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.425 0.5H6.575C3.225 0.5 0.5 3.225 0.5 6.575V19.425C0.5 22.775 3.225 25.5 6.575 25.5H19.425C22.775 25.5 25.5 22.775 25.5 19.425V6.575C25.5 3.225 22.775 0.5 19.425 0.5ZM18.9875 9.08749C19.7625 12.1375 18.9 15.3375 16.7 17.3C13.875 19.825 9.2875 19.9375 5.925 17.3125C6.175 17.35 6.40001 17.3625 6.60001 17.35C8.18751 17.2875 9.27499 16.025 9.61249 15.6C9.02499 15.0875 8.1125 14.1875 7.475 12.8C6.575 10.875 6.6625 9.0625 6.8125 8.0375C6.85 7.8375 7.09999 7.7625 7.24999 7.925C7.71249 8.45 8.4625 9.1625 9.5625 9.675C10.75 10.225 11.825 10.325 12.4375 10.325C12.4 8.8375 13.2875 7.5 14.625 6.9875C15.8 6.525 17.1625 6.78749 18.125 7.66249C18.775 7.63749 19.425 7.62499 20.075 7.59999C19.7125 8.09999 19.35 8.58749 18.9875 9.08749Z"
                    fill="#737373"
                  />
                </svg>
              </div>
              <div className="font-['Poppins'] text-xs font-bold text-neutral-500 md:text-lg">
                Twitter
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1">
              <div className="font-['Poppins'] text-xs font-bold text-stone-200 md:text-lg">
                10k
              </div>
            </div>
          </div>
          {/* Discord */}
          <div className="inline-flex  h-24 w-36 flex-col items-center justify-center gap-2.5 rounded-xl bg-[#242222] px-3 py-2 md:h-28 md:w-60 md:px-6 md:py-3.5">
            <div className="inline-flex items-center justify-start gap-3.5">
              <div className="relative h-6 w-6">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5526 0.5H4.44738C2.2681 0.5 0.5 2.11251 0.5 4.10001V20.075C0.5 21.9875 2.11733 23.4875 4.18696 23.4875H20.5795C21.1963 24 21.5938 24.325 22.5943 25.1125C22.9233 25.3625 23.3207 25.5 23.7319 25.5C23.9786 25.5 24.239 25.45 24.472 25.35C25.1025 25.0875 25.5 24.5375 25.5 23.9V4.10001C25.5 2.11251 23.7319 0.5 21.5526 0.5ZM16.5225 17.7375C16.5225 17.7375 16.5088 17.7375 16.4951 17.7375C16.1524 17.7375 15.8372 17.5875 15.6453 17.325L15.0559 16.55C13.7538 16.7875 12.3832 16.8 11.04 16.55L10.2451 17.4125C10.0395 17.625 9.72425 17.7375 9.42272 17.7375C6.06471 17.625 4.76262 15.5875 4.7078 15.5C4.61185 15.3625 4.57073 15.2 4.57073 15.0375C4.57073 11.1 6.39362 7.9875 6.47586 7.8625C6.54439 7.75 6.64036 7.63749 6.76372 7.56249C8.86076 6.11249 10.9029 6.15001 10.9715 6.15001C11.3552 6.16251 11.6842 6.36249 11.8624 6.66249C12.6025 6.59999 13.3427 6.6 14.0828 6.675C14.261 6.3625 14.5899 6.16251 14.9737 6.15001C15.0422 6.15001 17.0981 6.11249 19.1952 7.56249C19.3048 7.63749 19.4008 7.73751 19.4693 7.85001C19.5515 7.98751 21.4293 11.0875 21.4293 15.0375C21.4293 15.2125 21.3881 15.375 21.2922 15.525C21.2374 15.6 19.8668 17.6375 16.5225 17.7375Z"
                    fill="#737373"
                  />
                </svg>
              </div>
              <div className="font-['Poppins'] text-xs font-bold text-neutral-500 md:text-lg">
                Discord
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1">
              <div className="font-['Poppins'] text-xs font-bold text-stone-200 md:text-lg">
                10k
              </div>
            </div>
          </div>
          {/* Website */}
          <div className="inline-flex  h-24 w-36 flex-col items-center justify-center gap-2.5 rounded-xl bg-[#242222] px-3 py-2 md:h-28 md:w-60 md:px-6 md:py-3.5">
            <div className="inline-flex items-center justify-start gap-3.5">
              <div className="relative h-6 w-6">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5404 15.084C17.6237 14.3965 17.6862 13.709 17.6862 13.0007C17.6862 12.2923 17.6237 11.6048 17.5404 10.9173H21.0612C21.2279 11.584 21.332 12.2819 21.332 13.0007C21.332 13.7194 21.2279 14.4173 21.0612 15.084M15.6966 20.8757C16.3216 19.7194 16.8008 18.4694 17.1341 17.1673H20.207C19.1978 18.9051 17.5967 20.2215 15.6966 20.8757ZM15.4362 15.084H10.5612C10.457 14.3965 10.3945 13.709 10.3945 13.0007C10.3945 12.2923 10.457 11.5944 10.5612 10.9173H15.4362C15.5299 11.5944 15.6029 12.2923 15.6029 13.0007C15.6029 13.709 15.5299 14.3965 15.4362 15.084ZM12.9987 21.2923C12.1341 20.0423 11.4362 18.6569 11.0091 17.1673H14.9883C14.5612 18.6569 13.8633 20.0423 12.9987 21.2923ZM8.83203 8.83398H5.79036C6.78917 7.0915 8.38911 5.77303 10.2904 5.12565C9.66536 6.2819 9.19661 7.5319 8.83203 8.83398ZM5.79036 17.1673H8.83203C9.19661 18.4694 9.66536 19.7194 10.2904 20.8757C8.3931 20.2211 6.79541 18.9045 5.79036 17.1673ZM4.9362 15.084C4.76953 14.4173 4.66536 13.7194 4.66536 13.0007C4.66536 12.2819 4.76953 11.584 4.9362 10.9173H8.45703C8.3737 11.6048 8.3112 12.2923 8.3112 13.0007C8.3112 13.709 8.3737 14.3965 8.45703 15.084M12.9987 4.69857C13.8633 5.94857 14.5612 7.3444 14.9883 8.83398H11.0091C11.4362 7.3444 12.1341 5.94857 12.9987 4.69857ZM20.207 8.83398H17.1341C16.8081 7.54384 16.3253 6.29846 15.6966 5.12565C17.6133 5.7819 19.207 7.10482 20.207 8.83398ZM12.9987 2.58398C7.23828 2.58398 2.58203 7.27148 2.58203 13.0007C2.58203 15.7633 3.6795 18.4128 5.633 20.3663C6.60028 21.3336 7.7486 22.1009 9.01241 22.6244C10.2762 23.1479 11.6308 23.4173 12.9987 23.4173C15.7614 23.4173 18.4109 22.3198 20.3644 20.3663C22.3179 18.4128 23.4154 15.7633 23.4154 13.0007C23.4154 11.6327 23.1459 10.2782 22.6224 9.01436C22.099 7.75056 21.3317 6.60223 20.3644 5.63496C19.3971 4.66768 18.2488 3.90039 16.985 3.37691C15.7212 2.85342 14.3666 2.58398 12.9987 2.58398Z"
                    fill="#737373"
                  />
                </svg>
              </div>
              <div className="font-['Poppins'] text-xs font-bold text-neutral-500 md:text-lg">
                Website
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 px-2.5 py-1">
              <div className="text-center font-['Poppins'] text-xs font-bold text-stone-200 md:text-lg">
                Okay-bears.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ProfileProductsCard = () => {
  const els = [
    {
      name: "Python Programming",
      about: "Learn Python programming language",
      tags: ["Programming", "Python"],
      id: 1,
      price: 100,
      rating: 4.5,
      src: "/assests/images/dashboard.png",
    },
    {
      name: "Machine Learning",
      about: "Introduction to machine learning concepts",
      tags: ["Machine Learning", "AI"],
      id: 2,
      price: 150,
      rating: 4.7,
      src: "/assests/images/dashboard.png",
    },
    {
      name: "Web Development",
      about: "Build dynamic websites with Django",
      tags: ["Web Development", "Python"],
      id: 3,
      price: 120,
      rating: 4.8,
      src: "/assests/images/dashboard.png",
    },
  ];

  return (
    <div>
      <div className="flex flex-col flex-wrap items-center justify-center pb-10 font-bold md:flex-row">
        <button className="mt-4 w-[250px] rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-[#0f0f0f] md:mr-5">
          Add Products
        </button>
        <button className="mt-4 w-[250px] rounded border-2 border-[#FFDF00] bg-none p-2.5 text-[#FFDF00]">
          Manage Products
        </button>
      </div>
      <div className="mb-10 flex justify-center">
        <SearchProposal />
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 text-white">
        {els.length == 0 ? (
          <img
            src="/assests/images/no-results.png"
            alt="empty"
            className="mx-auto"
          />
        ) : (
          els.map((el) => (
            <div
              key={el.id}
              className="relative grid gap-6 overflow-hidden rounded-xl bg-[#242222] p-4 sm:grid-cols-2 md:gap-12 md:p-7"
            >
              <img
                src={el.src}
                alt="product image"
                className="h-60 w-full rounded-xl object-cover md:h-64"
              />
              <div className="grid w-full gap-y-4">
                <h3 className="text-xs font-semibold md:text-lg md:text-xl md:font-bold">
                  {el.name}
                </h3>
                <p className="text-md text-xs font-light">{el.about}</p>
                <>
                  <div className="flex gap-4">
                    <span>Demitchy</span>
                    <span>Okay Bears</span>
                  </div>
                  <p>$ {el.price}</p>
                </>
                <p>
                  Rating: <StarRating rating={el.rating} />
                </p>
                <Filters filterList={el.tags} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export const ProfileServicesCard = () => {
  const els = [
    {
      name: "Python Programming",
      about: "Learn Python programming language",
      tags: ["Programming", "Python"],
      id: 1,
      price: 100,
      rating: 4.5,
      src: "/assests/images/dashboard.png",
    },
    {
      name: "Machine Learning",
      about: "Introduction to machine learning concepts",
      tags: ["Machine Learning", "AI"],
      id: 2,
      price: 150,
      rating: 4.7,
      src: "/assests/images/dashboard.png",
    },
    {
      name: "Web Development",
      about: "Build dynamic websites with Django",
      tags: ["Web Development", "Python"],
      id: 3,
      price: 120,
      rating: 4.8,
      src: "/assests/images/dashboard.png",
    },
  ];

  return (
    <div>
      <div className="flex flex-col flex-wrap items-center justify-center pb-10 font-bold md:flex-row">
        <button className="mt-4 w-[250px] rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-[#0f0f0f] md:mr-5">
          Add Service
        </button>
        <button className="mt-4 w-[250px] rounded border-2 border-[#FFDF00] bg-none p-2.5 text-[#FFDF00]">
          Manage Service
        </button>
      </div>
      <div className="mb-10 flex justify-center">
        <SearchProposal />
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 text-white">
        {els.length == 0 ? (
          <img
            src="/assests/images/no-results.png"
            alt="empty"
            className="mx-auto"
          />
        ) : (
          els.map((el) => (
            <div
              key={el.id}
              className="relative grid gap-6 overflow-hidden rounded-xl bg-[#242222] p-4 sm:grid-cols-2 md:gap-12 md:p-7"
            >
              <img
                src={el.src}
                alt="product image"
                className="h-60 w-full rounded-xl object-cover md:h-64"
              />
              <div className="grid w-full gap-y-4">
                <h3 className="text-xs font-semibold md:text-lg md:text-xl md:font-bold">
                  {el.name}
                </h3>
                <p className="text-md text-xs font-light">{el.about}</p>
                <>
                  <p>Paid Service</p>
                  <p>Demitchy</p>
                  <p>Lagos, Nigeria</p>
                </>
                <p>
                  Rating: <StarRating rating={el.rating} />
                </p>
                <Filters filterList={el.tags} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export const ProfileCollabOpportunities = () => {
  const els = [
    {
      firm: "Demitchy",
      role: "Software Developer",
      location: "Lagos, Nigeria",
      is_paid: true,
      is_full_time: true,
      posted_on: "12th August, 2021",
      about: "We are looking for a software developer to join our team",
      num_applications: 10,
      tags: ["Software Development", "Python", "Django"],
      id: 1,
    },
    {
      firm: "Demitchy",
      role: "Software Developer",
      location: "Lagos, Nigeria",
      is_paid: true,
      is_full_time: true,
      posted_on: "12th August, 2021",
      about: "We are looking for a software developer to join our team",
      num_applications: 10,
      tags: ["Software Development", "Python", "Django"],
      id: 2,
    },
    {
      firm: "Demitchy",
      role: "Software Developer",
      location: "Lagos, Nigeria",
      is_paid: true,
      is_full_time: true,
      posted_on: "12th August, 2021",
      about: "We are looking for a software developer to join our team",
      num_applications: 10,
      tags: ["Software Development", "Python", "Django"],
      id: 3,
    },
  ];

  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-center pb-10 font-bold md:flex-row">
        <button className="mt-4 w-[250px] rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-[#0f0f0f] md:mr-5">
          Add Collab
        </button>
        <button className="mt-4 w-[250px] rounded border-2 border-[#FFDF00] bg-none p-2.5 text-[#FFDF00]">
          Manage Collab
        </button>
      </div>
      <div className="mb-10 flex justify-center">
        <SearchProposal />
      </div>
      <ul className="mx-auto grid max-w-5xl gap-8">
        {els.length == 0 ? (
          <img
            src="/assests/images/no-results.png"
            alt="empty"
            className="mx-auto mb-10"
          />
        ) : (
          els.map((el) => (
            <li
              key={el.id}
              className="relative overflow-hidden rounded-xl bg-[#242222] p-4 pt-12 text-xs sm:pt-4"
            >
              <h3 className="mb-3 flex gap-2 text-xs font-semibold md:text-lg md:text-xl md:font-bold">
                <span className="text-yellow-500">{el.firm}</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-300">{el.role}</span>
              </h3>
              <p className="mb-3 flex flex-wrap items-center gap-x-3 font-semibold text-gray-300">
                <span>{el.location}</span>
                <span className="aspect-square h-1 rounded-full bg-white"></span>
                <span>{el.is_paid ? "Paid" : "Free"} Service</span>
                <span className="aspect-square h-1 rounded-full bg-white"></span>
                <span>{el.is_full_time ? "Full" : "Part"} time</span>
                <span className="aspect-square h-1 rounded-full bg-white"></span>
                <span>Posted on {el.posted_on}</span>
              </p>
              <p className="text-md mb-3 text-gray-300">{el.about}</p>
              <p className="mb-3 flex-wrap items-center gap-x-3 font-semibold text-gray-300 sm:flex">
                <span>Escrow available</span>
                <span className="aspect-square h-1 rounded-full bg-white"></span>
                <span className="my-4 sm:my-0" style={{ display: "block" }}>
                  <span>Applications: </span>
                  <span className="ms-2 text-xs font-normal">
                    {el.num_applications} received
                  </span>
                </span>
              </p>
              <div className="text-gray-300">
                <Filters filterList={el.tags} />
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};
