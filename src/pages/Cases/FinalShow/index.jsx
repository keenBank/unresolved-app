import React from "react";
import CaseHome from "../../../components/layout/CaseHome";
import FinalShowNotice from "./FinalShowNotice";
import thumbnail from "../../../assets/home/images/cases/last.png";

export default function FinalShowHome() {
  return (
    <>
      <CaseHome
        slug="final-show"
        thumbnail={thumbnail}
        title="العرض الأخير"
        welcomeUrl="https://news-nine-red.vercel.app/"
        description={
          'من فوق خشبة المسرح وأمام مرأى الجميع خطفت الطفلة نايا ليبقى الدليل الوحيد قناعاً مبتسم وصرخات الطفلة،، بين يديك قضية مختلفة في هذه القضية أراد المجرم أن يظهر للعلن لا أن يختفي داخل ملفات التحقيق'
        }
      />
      <FinalShowNotice />
    </>
  );
}
