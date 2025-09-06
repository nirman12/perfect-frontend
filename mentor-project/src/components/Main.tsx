import CrossIcon from "../icons/Cross";
import NotificationIcon from "../icons/Notification";
import ProfileIcon from "../icons/Profile";
import RequestsIcon from "../icons/RequestsIcon";
import TickIcon from "../icons/Tick";
import Requests from "./Requests";

export default function () {
  return (
    <div className="bg-bgRequest rounded-md m-10 p-5">
      <div className="flex justify-between my-10 mx-20 items-center">
        <div>
          <h1 className="text-3xl font-bold">Requests</h1>
          <p className="text-gray-400">Accept or reject the mentorship requests!</p>
        </div>
        <div className="flex gap-3 cursor-pointer">
          <NotificationIcon />
          <ProfileIcon />
        </div>
      </div>
      <div className="flex my-10 mx-20 bg-white w-96 justify-center rounded-md">
        <button className="flex rounded-md p-4 hover:bg-darkTeal hover:text-white transition duration-700"><RequestsIcon/>Requests</button>
        <button className="flex rounded-md p-4 hover:bg-darkTeal hover:text-white transition duration-700"><TickIcon/>Accepted</button>
        <button className="flex rounded-md p-4 hover:bg-darkTeal hover:text-white transition duration-700"><CrossIcon/>Rejected</button>
      </div>
      <Requests userName="Perfect Bansal" semester="5th Semester" course="BSc Hons Computing" firstSubTitle="Web developer" secondSubTitle="Ml Engineer" expiry="Expiry" time="6 hours Ago" details="View Details"/>
    </div>
  );
}
