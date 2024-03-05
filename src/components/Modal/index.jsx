const Modal = ({ isOpen, closeModal, title, children }) => {
  return (
    <div
      id="crud-modal"
      tabindex="-1"
      aria-hidden="true"
      className={` ${
        isOpen ? "block" : "hidden"
      } fixed overflow-y-auto overflow-x-hidden top-1/3 right-1/3 left-1/3 z-50 justify-center items-center w-full h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full max-h-full ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-3xl">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-toggle="crud-modal"
              onClick={() => closeModal()}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
