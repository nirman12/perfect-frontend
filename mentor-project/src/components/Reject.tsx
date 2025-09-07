interface RejectModelProps {
  onClose: () => void;
}

export default function RejectModel({ onClose }: RejectModelProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50" onClick={onClose}>
      <div 
        className="flex flex-col justify-center items-center gap-5 text-center w-96 max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-lg p-6 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-lg font-semibold">
            Are you sure you want to reject?
          </h1>
          <p className="border border-amber-600 rounded-md p-3 text-gray-400 font-light">
            The request will be permanently declined and the learner will be
            notified about it.
          </p>
          <h3 className="text-left">
            Give reason for the rejection of the request and confirm to reject
            the request.
          </h3>
          <input
            type="text"
            placeholder="(Reason)"
            className="border border-gray-300 rounded-md py-5 px-2"
          />
        </div>
        <div className="flex gap-4 sm:gap-8 md:gap-12 lg:gap-20 flex-col sm:flex-row">
          <button
            className="bg-darkTeal text-white px-6 sm:px-8 py-2 rounded-md font-semibold 
                   hover:bg-white hover:text-darkTeal hover:border border-darkTeal transition-colors duration-300 w-full sm:w-auto"
          >
            Confirm
          </button>

          <button
            className="border border-darkTeal text-black px-6 sm:px-8 py-2 rounded-md font-semibold 
                   hover:bg-white hover:text-darkTeal transition-colors duration-300 w-full sm:w-auto"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
