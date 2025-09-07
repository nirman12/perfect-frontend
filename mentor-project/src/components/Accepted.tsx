import type { ReactElement } from "react";
import ProfileIcon from "../icons/Profile";
import ButtonComponent from "./Buttons";
import TickIcon from "../icons/Tick";
import CrossIcon from "../icons/Cross";
import ChatBubbleIcon from "../icons/chatBubble";

interface RequestProps {
  profileIcon: ReactElement;
  userName: string;
  semester: string;
  course: string;
  firstSubTitle: string;
  secondSubTitle: string;
  time: string;
  details: string;
  comments : string;
}

// Helper function to determine expiry color based on time
export default function Requests(props: RequestProps) {
  return (
    <div className="bg-white flex flex-col rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-200">
      <div className="flex flex-col lg:flex-row justify-between m-4 p-4 rounded-lg">
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
            <div className="flex items-center gap-2 flex-wrap justify-end">
              <span className="text-gray-600">{props.time}</span>
              <button className="text-darkTeal hover:text-darkTeal/80 underline cursor-pointer font-medium transition-colors duration-200">
                {props.details}
              </button>
            </div>
          </div>
          <div className="flex gap-2 flex-row items-start">
            <div className="relative">
              <span className="text-gray-600 text-xs leading-relaxed pr-6">{props.comments}</span>
              <div className="absolute -top-1 -right-1">
                <ChatBubbleIcon color="#75be44"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

