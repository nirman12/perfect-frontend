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
}

export default function Requests(props: RequestProps) {
  return (
    <div className="bg-white flex flex-col rounded-md">
      <div className="border border-gray-200 flex justify-between m-3 p-3 rounded-md">
        <div className="flex gap-4">
          <div>
            <ProfileIcon />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-2xl">{props.userName}</h1>
              <p className="text-gray-500 text-sm">{props.semester}</p>
            </div>
            <div>
              <h1 className="text-2xl">{props.course}</h1>
              <div className="flex gap-2 text-xs text-gray-500">
                <p className="bg-gray-300 rounded-md p-1">{props.firstSubTitle}</p>
                <p className="bg-gray-300 rounded-md p-1">{props.secondSubTitle}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex text-xs text-gray-500 items-center gap-3">
            <h3 className="border border-darkTeal p-1 rounded-md">{props.expiry}</h3>
            <h3>{props.time}</h3>
            <h3 className="underline cursor-pointer">{props.details}</h3>
          </div>
          <div className="flex gap-3">
            <ButtonComponent startIcon={<TickIcon size="size-4" color="white"/>} style="text-xs bg-darkTeal text-white p-1" text="Accept"/>
            <ButtonComponent startIcon={<CrossIcon size="size-4" color="red"/>} style="text-xs border border-gray-400 p-1" text="Reject"/>
          </div>
        </div>
      </div>
    </div>
  );
}
