import CrossIcon from "../icons/Cross";
import NotificationIcon from "../icons/Notification";
import ProfileIcon from "../icons/Profile";
import RequestsIcon from "../icons/RequestsIcon";
import TickIcon from "../icons/Tick";

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
        <button className="flex rounded-md p-4 hover:bg-darkTeal hover:text-white"><RequestsIcon/>Requests</button>
        <button className="flex rounded-md p-4 hover:bg-darkTeal hover:text-white"><TickIcon/>Accepted</button>
        <button className="flex rounded-md p-4 hover:bg-darkTeal hover:text-white"><CrossIcon/>Rejected</button>
      </div>
    </div>
  );
}
