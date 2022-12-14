import React from "react";

export default function LivePortal() {
  return (
    <div
      className="alert bg-yellow-100 rounded-lg py-5 px-6 mb-3 text-base text-yellow-700 inline-flex items-center w-full alert-dismissible fade show"
      role="alert"
    >
      <h1 className="text-pink-600 bg-pink-400 py-6 w-full rounded-lg">
        Live Portal{" "}
      </h1>
      ;
      <button
        type="button"
        className='btn-close border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline data-bs-dismiss="alert" aria-label="Close" '
      ></button>
    </div>
  );
}
