import { useState } from "react";
import CrossIcon from "../icons/Cross";
// Removed NotificationIcon import as header icons were removed
import ProfileIcon from "../icons/Profile";
import RequestsIcon from "../icons/RequestsIcon";
import TickIcon from "../icons/Tick";
import Requests from "./Requests";
import Accepted from "./Accepted";
import Rejected from "./Rejected";
import AcceptModel from "./Accept";
import RejectModel from "./Reject";

export default function RequestsPage() {
  const [openModal, setOpenModal] = useState<"accept" | "reject" | null>(null);
  const [activeTab, setActiveTab] = useState<"requests" | "accepted" | "rejected">("requests");

  return (
    <div className="min-h-screen w-full bg-bgRequest overflow-x-hidden">
      <div className="max-w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-10">
        <div className="w-full max-w-full">
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
            {/* Top-right action icons removed as requested */}
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

          {/* Content based on active tab */}
          <div className="space-y-4">
            {activeTab === "requests" && (
              <>
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
              </>
            )}

            {activeTab === "accepted" && (
              <>
                <Accepted
                  profileIcon={<ProfileIcon />}
                  userName="John Smith"
                  semester="4th Semester"
                  course="Computer Science"
                  firstSubTitle="Full Stack Developer"
                  secondSubTitle="React Specialist"
                  time="1 day Ago"
                  details="View Details"
                  comments="Great potential, looking forward to mentoring!"
                />
                
                <Accepted
                  profileIcon={<ProfileIcon />}
                  userName="Lisa Wang"
                  semester="3rd Semester"
                  course="Software Engineering"
                  firstSubTitle="Backend Developer"
                  secondSubTitle="Python Expert"
                  time="3 days Ago"
                  details="View Details"
                  comments="Excellent communication skills and eagerness to learn."
                />
              </>
            )}

            {activeTab === "rejected" && (
              <>
                <Rejected
                  profileIcon={<ProfileIcon />}
                  userName="Tom Wilson"
                  semester="2nd Semester"
                  course="Information Technology"
                  firstSubTitle="Frontend Developer"
                  secondSubTitle="JavaScript Developer"
                  time="1 week Ago"
                  details="View Details"
                  comments="Schedule conflicts with current commitments."
                />
                
                <Rejected
                  profileIcon={<ProfileIcon />}
                  userName="Anna Brown"
                  semester="5th Semester"
                  course="Computer Science"
                  firstSubTitle="Mobile Developer"
                  secondSubTitle="iOS Developer"
                  time="2 weeks Ago"
                  details="View Details"
                  comments="Not available for the requested time slots."
                />
              </>
            )}
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
