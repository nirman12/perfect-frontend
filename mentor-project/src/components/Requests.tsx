import type { ReactElement } from "react";
import ProfileIcon from "../icons/Profile";
import ButtonComponent from "./Buttons";
import TickIcon from "../icons/Tick";
import CrossIcon from "../icons/Cross";

interface RequestProps {
  profileIcon: ReactElement;
  userName: string;
  semester: string;
  course: string;
  firstSubTitle: string;
  secondSubTitle: string;
  time: string;
  expiry: string;
  details: string;
  onAccept?: () => void,
  onReject?: () => void
}

// Helper function to determine expiry color based on time
const getExpiryColor = (time: string) => {
  const timeStr = time.toLowerCase();
  
  if (timeStr.includes('day') || timeStr.includes('days')) {
    return 'bg-red-100 text-red-700 border-red-200';
  } else if (timeStr.includes('hour')) {
    const hours = parseInt(timeStr.match(/\d+/)?.[0] || '0');
    if (hours >= 8) {
      return 'bg-orange-100 text-orange-700 border-orange-200';
    }
  }
  
  return 'bg-darkTeal/10 text-darkTeal border-darkTeal/20';
};

export default function Requests(props: RequestProps) {
  return (
    <div className="bg-white flex flex-col rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="border border-gray-200 flex flex-col lg:flex-row justify-between m-4 p-4 rounded-lg">
        <div className="flex gap-4 flex-1">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <ProfileIcon />
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">{props.userName}</h1>
              <p className="text-gray-500 text-sm">{props.semester}</p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-medium text-gray-700">{props.course}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gray-100 text-gray-700 text-xs rounded-full px-3 py-1 font-medium">
                  {props.firstSubTitle}
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs rounded-full px-3 py-1 font-medium">
                  {props.secondSubTitle}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 mt-4 lg:mt-0 lg:min-w-[200px]">
          <div className="flex flex-col gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-2 py-1 rounded-full font-medium border ${getExpiryColor(props.time)}`}>
                • {props.expiry}
              </span>
              <span className="text-gray-600">{props.time}</span>
              <button className="text-darkTeal hover:text-darkTeal/80 cursor-pointer font-medium transition-colors duration-200">
                <span className="text-lg">•</span> <span className="underline">{props.details}</span>
              </button>
            </div>
          </div>
          <div className="flex gap-3 flex-row">
            <ButtonComponent 
              onClick={props.onAccept} 
              startIcon={<TickIcon size="size-4" color="white"/>} 
              style="text-sm bg-darkTeal text-white px-4 py-2 hover:bg-darkTeal/90 transition-colors duration-200 font-medium" 
              text="Accept"
            />
            <ButtonComponent 
              onClick={props.onReject} 
              startIcon={<CrossIcon size="size-4" color="red"/>} 
              style="text-sm border border-gray-300 text-gray-700 px-4 py-2 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 font-medium" 
              text="Reject"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

