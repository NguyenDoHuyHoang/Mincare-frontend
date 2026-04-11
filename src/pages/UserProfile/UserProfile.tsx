// src/pages/UserProfile.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AvatarSection from "../../components/userProfile/AvatarSection";
import PointsInfo from "../../components/userProfile/PointsInfo";
import PersonalInfo from "../../components/userProfile/PersonalInfo";
import DeliveryAddress from "../../components/userProfile/DeliveryAddress";
import PaymentMethod from "../../components/userProfile/PaymentMethod";
import Orders from "../../components/userProfile/Orders";
import ReceiptModal from "../../components/userProfile/ReceiptModal";
import { getUserById } from "../../data/UserData";
import type {
  UserProfile as UserProfileType,
  OrderData,
} from "../../data/UserData";
import "../../assets/css/profile.css";

type MainTab = "personal" | "orders";

/**
 * UserProfile page — requires a logged-in user stored in localStorage.
 * Redirects to /login if no session found.
 *
 * Layout:
 *  - Left column  : AvatarSection + PointsInfo + Logout button
 *  - Right column : PersonalInfo + DeliveryAddress + PaymentMethod
 *  - Orders tab   : Purchases / Subscriptions / Refunds with ReceiptModal
 *
 * Payment tab and a second Order tab are defined but hidden (display:none)
 * as per the original HTML structure.
 */
const UserProfile: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProfileType | null>(null);
  const [avatarSrc, setAvatarSrc] = useState("");
  const [activeTab, setActiveTab] = useState<MainTab>("personal");
  const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  // Load user from localStorage session
  useEffect(() => {
    const id = localStorage.getItem("loggedInUserId");
    if (!id) {
      navigate("/login");
      return;
    }
    const found = getUserById(Number(id));
    if (!found) {
      navigate("/login");
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(found);
    setAvatarSrc(found.avatar);
  }, [user, navigate]);

  // Auto-dismiss message after 5 seconds
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => setMessage(null), 5000);
    return () => clearTimeout(t);
  }, [message]);

  const showMessage = (text: string, type: "success" | "error") => {
    setMessage({ text, type });
  };

  const handleSave = (data: Partial<UserProfileType>) => {
    setUser((prev) => (prev ? { ...prev, ...data } : prev));
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("loggedInUserId");
      navigate("/login");
    }
  };

  if (!user) return null;

  const tabs: { key: MainTab; label: string }[] = [
    { key: "personal", label: "Personal Information" },
    { key: "orders", label: "My Orders" },
  ];

  return (
    <main className="profile-main">
      <div className="container">
        {/* ── Header ── */}
        <div className="profile-header">
          <h1 className="profile-title">My Profile</h1>
          <p className="profile-subtitle">Manage and update your information</p>
        </div>

        {/* ── Global message ── */}
        {message && (
          <div className={`message ${message.type}`}>{message.text}</div>
        )}

        {/* ── Tab Navigation ── */}
        <div className="tab-navigation">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab-btn${activeTab === tab.key ? " active" : ""}`}
              data-tab={tab.key}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Tab Content ── */}
        <div className="tab-content">
          {/* ===== Personal Tab ===== */}
          <div
            id="personal"
            className={`tab-pane${activeTab === "personal" ? " active" : ""}`}
          >
            <div className="profile-grid">
              {/* Left column */}
              <div className="profile-left">
                <AvatarSection
                  avatarSrc={avatarSrc}
                  onAvatarChange={setAvatarSrc}
                  onMessage={showMessage}
                />
                <PointsInfo points={user.points} coupons={user.coupons} />
                <button className="logout-btn" onClick={handleLogout}>
                  Log Out
                </button>
              </div>

              {/* Right column */}
              <div className="profile-right">
                <PersonalInfo
                  user={user}
                  onSave={handleSave}
                  onMessage={showMessage}
                />
                <DeliveryAddress
                  user={user}
                  onSave={handleSave}
                  onMessage={showMessage}
                />
                <PaymentMethod onMessage={showMessage} />
              </div>
            </div>
          </div>

          {/* ===== Orders Tab ===== */}
          <div
            id="orders"
            className={`tab-pane${activeTab === "orders" ? " active" : ""}`}
          >
            <Orders
              orders={user.orders}
              onViewReceipt={(order) => setSelectedOrder(order)}
            />
          </div>

          {/* ===== Payment Tab (hidden — not in nav) ===== */}
          <div id="payment" className="tab-pane" style={{ display: "none" }}>
            <div className="profile-grid">
              <div className="profile-left">
                <PaymentMethod onMessage={showMessage} />
              </div>
              <div className="profile-right">
                <DeliveryAddress
                  user={user}
                  onSave={handleSave}
                  onMessage={showMessage}
                />
              </div>
            </div>
          </div>

          {/* ===== Offers Tab (hidden — not in nav) ===== */}
          <div id="offers" className="tab-pane" style={{ display: "none" }}>
            <div className="profile-grid">
              <div className="profile-left">
                <PointsInfo points={user.points} coupons={user.coupons} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Receipt Modal ── */}
      <ReceiptModal
        order={selectedOrder}
        buyerName={user.fullName}
        onClose={() => setSelectedOrder(null)}
      />
    </main>
  );
};

export default UserProfile;
