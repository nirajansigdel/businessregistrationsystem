const Card = ({title,subTitle, children, className}) => {
  return (
    <div className={`w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ${className}`}>
      <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
       {subTitle}
      </p>
      <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        {children}
      </div>
    </div>
  );
};
export default Card;
