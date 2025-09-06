export default function AcceptModel() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center gap-5 text-center w-96">
        <div className="flex flex-col gap-5">
          <h1 className="text-lg font-semibold">
            Are you sure you want to Accept?
          </h1>
          <p className="text-gray-400 font-light">
            The user will be notified of your approval.
          </p>
          <h3 className="text-left">
            Any message to the student about the session? 
            <p className="text-gray-400 font-light">(Optional)</p>
          </h3>
          <input
            type="text"
            className="border border-gray-300 rounded-md py-5 px-2"
          />
        </div>
        <div className="flex gap-20">
          <button
            className="bg-darkTeal text-white px-8 py-2 rounded-md font-semibold 
                   hover:bg-white hover:text-darkTeal hover:border border-darkTeal transition-colors duration-300"
          >
            Confirm
          </button>

          <button
            className="border border-darkTeal text-black px-8 py-2 rounded-md font-semibold 
                   hover:bg-white hover:text-darkTeal transition-colors duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
