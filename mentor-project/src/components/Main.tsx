import { useState } from "react";
import CrossIcon from "../icons/Cross";
import NotificationIcon from "../icons/Notification";
import ProfileIcon from "../icons/Profile";
import RequestsIcon from "../icons/RequestsIcon";
import TickIcon from "../icons/Tick";
import Requests from "./Requests";
import AcceptModel from "./Accept";
import RejectModel from "./Reject";

export default function RequestsPage() {
  const [openModal, setOpenModal] = useState<"accept" | "reject" | null>(null);
  const [activeTab, setActiveTab] = useState<"requests" | "accepted" | "rejected">("requests");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-bgRequest rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
               Requests
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Accept or reject the mentorship requests!
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="cursor-pointer p-2 rounded-full hover:bg-white/20 transition-colors duration-200">
                <NotificationIcon />
              </div>
              <div className="cursor-pointer p-2 rounded-full hover:bg-white/20 transition-colors duration-200">
                <ProfileIcon />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 mb-8">
            <div className="flex bg-white rounded-lg shadow-sm p-1 w-full sm:w-auto">
              <button 
                className={`flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium transition-all duration-300 flex-1 sm:flex-none justify-center ${
                  activeTab === "requests" 
                    ? "bg-darkTeal text-white shadow-md" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-darkTeal"
                }`}
                onClick={() => setActiveTab("requests")}
              >
                <RequestsIcon color={`${activeTab === "requests" ? "white" : "black"}`}/>
                <span>Requests</span>
              </button>
              <button 
                className={`flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium transition-all duration-300 flex-1 sm:flex-none justify-center ${
                  activeTab === "accepted" 
                    ? "bg-darkTeal text-white shadow-md" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-darkTeal"
                }`}
                onClick={() => setActiveTab("accepted")}
              >
                <TickIcon color={`${activeTab === "accepted" ? "white" : "black"}`}/>
                <span>Accepted</span>
              </button>
              <button 
                className={`flex items-center gap-2 rounded-md px-4 py-3 text-sm font-medium transition-all duration-300 flex-1 sm:flex-none justify-center ${
                  activeTab === "rejected" 
                    ? "bg-darkTeal text-white shadow-md" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-darkTeal"
                }`}
                onClick={() => setActiveTab("rejected")}
              >
                <CrossIcon color={`${activeTab === "rejected" ? "white" : "black"}`}/>
                <span>Rejected</span>
              </button>
            </div>
          </div>

          {/* Request card */}
          <div className="space-y-4">
            <Requests
              profileIcon={<ProfileIcon />}
              userName="Perfect Bansal"
              semester="5th Semester"
              course="BSc Hons Computing"
              firstSubTitle="Web developer"
              secondSubTitle="Ml Engineer"
              expiry="Expiry"
              time="6 hours Ago"
              details="View Details"
              onAccept={() => setOpenModal("accept")}
              onReject={() => setOpenModal("reject")}
            />
            
            {/* Additional request cards can be added here */}
            <Requests
              profileIcon={<ProfileIcon />}
              userName="Sarah Johnson"
              semester="3rd Semester"
              course="Computer Science"
              firstSubTitle="Frontend Developer"
              secondSubTitle="UI/UX Designer"
              expiry="Expiry"
              time="2 hours Ago"
              details="View Details"
              onAccept={() => setOpenModal("accept")}
              onReject={() => setOpenModal("reject")}
            />
            
            <Requests
              profileIcon={<ProfileIcon />}
              userName="Mike Chen"
              semester="4th Semester"
              course="Software Engineering"
              firstSubTitle="Backend Developer"
              secondSubTitle="Database Admin"
              expiry="Expiry"
              time="10 hours Ago"
              details="View Details"
              onAccept={() => setOpenModal("accept")}
              onReject={() => setOpenModal("reject")}
            />
            
            <Requests
              profileIcon={<ProfileIcon />}
              userName="Emily Davis"
              semester="2nd Semester"
              course="Information Technology"
              firstSubTitle="Mobile Developer"
              secondSubTitle="DevOps Engineer"
              expiry="Expiry"
              time="2 days Ago"
              details="View Details"
              onAccept={() => setOpenModal("accept")}
              onReject={() => setOpenModal("reject")}
            />
          </div>

          {/* Modals */}
          {openModal === "accept" && (
            <AcceptModel onClose={() => setOpenModal(null)} />
          )}
          {openModal === "reject" && (
            <RejectModel onClose={() => setOpenModal(null)} />
          )}
        </div>
      </div>
    </div>
  );
}
