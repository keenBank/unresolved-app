import React, { useState } from "react";
import "./final-show-notice.css";
import insta from "../../../assets/shared/images/social/insta.png";
import whatsapp from "../../../assets/shared/images/social2/whatsapp.svg";

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
            href="https://instagram.com/unresolved_cass?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="انستقرام" />
          </a>
          <a href="https://wa.me/966509330727" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="واتساب" />
          </a>
        </div>
      </div>
    </div>
  );
}
