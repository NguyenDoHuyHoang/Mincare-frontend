// components/coaches/CoachCard.tsx
//
// ══════════════════════════════════════════════════════════════════════════════
// LUỒNG HOẠT ĐỘNG:
//   CoachListPage → Items<Coach> → renderItem → CoachCard
//   CoachCard chỉ nhận 1 coach object và render UI
//   Không giữ state, không filter — chỉ hiển thị
// ══════════════════════════════════════════════════════════════════════════════

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { TeamMember } from "../../data/Types";
import "../../assets/css/coach.css";

// Số ký tự tối đa hiển thị trước khi thu gọn
const Biography_PREVIEW_LENGTH = 1;

interface CoachCardProps {
  coach: TeamMember;
}

const CoachCard: React.FC<CoachCardProps> = ({ coach }) => {
  const navigate = useNavigate();

  // State kiểm soát "Read more / Show less" của Biography
  const [isBiographyExpanded, setIsBiographyExpanded] = useState(false);
  
    // Biography có cần truncate không?
    const isBiographyLong =
      coach.Biography !== undefined
        ? coach.Biography.length > Biography_PREVIEW_LENGTH
        : false;

    // Nội dung Biography hiển thị: full hoặc cắt ngắn

    const displayedBiography =
      isBiographyExpanded || !isBiographyLong
        ? coach.Biography
        : coach.Biography.slice(0, Biography_PREVIEW_LENGTH) + "...";
  

  return (
    <div className="coach-card">
      <div className="card-inner">
        {/* ── Top row: avatar + info ───────────────────────────────── */}
        <div className="top-row">
          {/* Avatar */}
          <img
            src={coach.image}
            alt={`${coach.name} avatar`}
            className="avatar"
          />

          {/* Info block */}
          <div className="info">
            {/* Name + certified badge */}
            <h2 className="name">
              {coach.name}

              <span className="certified">CERTIFIED</span>
            </h2>

            {/* Role */}
            <div className="role">{coach.role}</div>

            {/* Reviews */}
            <div className="reviews">{coach.review}</div>

            {/* Location */}
            <div
              className="coach-location"
              style={{ fontSize: "0.85rem", color: "#777", marginBottom: 10 }}
            >
              📍 {coach.location}
            </div>

            {/* Tags — chỉ hiển thị, không click được (filter ở CoachFilterBar) */}
            <div className="tags">
              {coach.tags.map((tag: string, idx: number) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* ── Bio + Read more ──────────────────────────────────────── */}
        <div className="description">
          {displayedBiography}

          {/* Chỉ hiện toggle khi bio dài hơn giới hạn */}
          {isBiographyLong && (
            <button
              onClick={() => setIsBiographyExpanded((prev) => !prev)}
              // prev => !prev: toggle giữa true và false
              style={{
                background: "none",
                border: "none",
                color: "var(--primary)",
                fontWeight: 500,
                cursor: "pointer",
                padding: 0,
                marginLeft: 4,
              }}
            >
              {isBiographyExpanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        {/* ── Action buttons ───────────────────────────────────────── */}
        <div className="actions">
          {/* View profile → /coach/:id */}
          <button
            className="btn btn-view"
            onClick={() => navigate(`/coach/${coach.id}`)}
          >
            View profile →
          </button>

          {/* Booking → /booking/:coachId */}
          <button
            className="btn btn-book"
            onClick={() => navigate(`/booking/${coach.id}`)}
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachCard;
