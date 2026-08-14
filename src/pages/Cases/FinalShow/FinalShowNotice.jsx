import React, { useState } from "react";
import "./final-show-notice.css";
import youtube from "../../../assets/shared/images/social/youtube.png";
import insta from "../../../assets/shared/images/social/insta.png";
import twitter from "../../../assets/shared/images/social/twitter-x.svg";
import snap from "../../../assets/shared/images/social/snap.png";
import tictok from "../../../assets/shared/images/social/tictok.png";
import whatsapp from "../../../assets/shared/images/social2/messanger.svg";

// One-time warning shown on the Final Show case page: the phone numbers
// used inside this case's story/documents are fictional (part of the
// puzzle), so we point real visitors to our actual contact channels.
export default function FinalShowNotice() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="final-show-notice">
      <div className="final-show-notice__card">
        <button
          type="button"
          className="final-show-notice__close"
          aria-label="إغلاق"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        <p className="final-show-notice__title">تنبيه</p>
        <p>
          جميع أرقام الهواتف المستخدمة في أحداث هذه القضية أرقام وهمية
          لأغراض اللعبة فقط، الرجاء عدم التواصل معها.
        </p>
        <p>إن أردتم التواصل معنا فعلياً، تابعونا عبر:</p>
        <div className="final-show-notice__social">
          <a
            href="https://youtube.com/channel/UCppzhcAxtubamEPzfKEnHSg"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="يوتيوب" />
          </a>
          <a
            href="https://instagram.com/unresolved_cass?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="انستقرام" />
          </a>
          <a
            href="https://twitter.com/unresolved_cass?s=11&t=UK-0AXfs2xWnbqe16c5y2g"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="اكس" />
          </a>
          <a
            href="https://www.snapchat.com/add/unresolved_cass?share_id=QTg2ODRBQjktMTdDOC00NTJCLTg2QUItMEI0N0Y5NUVDMDIw&locale=en_SA@calendar=gregorian"
            target="_blank"
            rel="noreferrer"
          >
            <img src={snap} alt="سناب شات" />
          </a>
          <a
            href="https://vt.tiktok.com/ZSdwBjnbk/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tictok} alt="تيك توك" />
          </a>
          <a href="https://wa.me/966509330727" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="واتساب" />
          </a>
        </div>
      </div>
    </div>
  );
}
