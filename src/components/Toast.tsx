import React from "react";

interface IToast {
  show: boolean;
  message: string;
  autoClose: boolean;
  statusCode: number | null;
  setShowToast: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toast: React.FC<IToast> = ({
  show,
  message,
  autoClose,
  statusCode,
  setShowToast,
}) => {
  if (autoClose && show) {
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  if (show) {
    return (
      <div
        id="toast-success"
        className="fixed right-5 top-5 mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-white shadow dark:bg-darkCream dark:text-white"
        role="alert"
      >
        {statusCode === 200 ? (
          <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-darkCream dark:text-green-200">
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
        ) : (
          <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-darkCream text-orange-500 dark:bg-darkCream dark:text-orange-200">
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            </svg>
            <span className="sr-only">Warning icon</span>
          </div>
        )}

        <div className="ms-3 text-sm font-normal">{message}</div>
        <button
          type="button"
          onClick={() => setShowToast(false)}
          className="hover:bg-darkCareem -mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-white hover:text-darkCream focus:ring-2 focus:ring-gray-300 dark:bg-darkCream dark:text-white dark:hover:bg-cream dark:hover:text-darkCream"
          data-dismiss-target="#toast-success"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="h-3 w-3"
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
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default Toast;
