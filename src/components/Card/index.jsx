
const Card = ({ title, subTitle, children, className }) => {
  return (
    <div
      className={`w-full items-center flex flex-col bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ${className}`}
    >
      <div className="flex flex-col max-w-3xl  item-center gap-1 ">
        <div className="flex justify-center items-center gap-1"> 
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white flex">
         {title}
        </h5>
        <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="2.5m"
            width="2.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Face_Smile">
              <g>
                <path d="M12,21.942A9.942,9.942,0,1,1,21.942,12,9.953,9.953,0,0,1,12,21.942ZM12,3.058A8.942,8.942,0,1,0,20.942,12,8.952,8.952,0,0,0,12,3.058Z"></path>
                <path d="M16.693,13.744a5.041,5.041,0,0,1-9.387,0c-.249-.59-1.111-.081-.863.505a6.026,6.026,0,0,0,11.114,0c.247-.586-.614-1.1-.864-.505Z"></path>
                <circle cx="9" cy="9.011" r="1.25"></circle>
                <circle cx="15" cy="9.011" r="1.25"></circle>
              </g>
            </g>
          </svg></div>
       
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          {subTitle}
        </p>
        <div className="items-center justify-center bg-green-300 space-y-4 text-white sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse border-gray-200 rounded-lg shadow">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Card;
