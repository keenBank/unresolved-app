import React from "react";
import CaseHome from "../../../components/layout/CaseHome";
import thumbnail from "../../../assets/home/images/cases/wedding.jpg";

export default function WeddingHome() {
  return (
    <CaseHome
      slug="wedding"
      thumbnail={thumbnail}
      title="جريمة في يوم زفاف"
      welcomeUrl="https://festive-ride-da9b80.netlify.app/"
      description={
        'حب حتى الموت هكذا نقشت الضحية هذا الكلمات على خاتم الخطوبة .. لكن الموت زارها في يوم زفافها لتصبح غادة ضحية جريمة غامضة حيرت المحققين منذ عشرين عام يعيش القاتل حر طليقاً لم تصل له العدالة إلى الان'
      }
    />
  );
}
