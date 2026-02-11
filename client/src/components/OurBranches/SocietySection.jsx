import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import RangManch from "./RangManch";
import Avantikulam from "./Avantikulam";

export default function SocietySection() {
  return (
    <div className="flex flex-col gap-32 pb-20">
      {/* Section 1: RangManch */}
      <RangManch />

      {/* Section 2: Avantikulam */}
      <Avantikulam/>
    </div>
  );
}
