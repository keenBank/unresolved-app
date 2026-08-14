import React from "react";
import CaseHome from "../../../components/layout/CaseHome";
import thumbnail from "../../../assets/home/images/cases/internal.png";

export default function InternalBurglaryHome() {
  return (
    <CaseHome
      slug="internal-burglary"
      thumbnail={thumbnail}
      title="سطو من الداخل"
      welcomeUrl="https://conan-case.vercel.app/"
      description={
        'اختفاء المسروقات أو ربما اختفاء اللص؟ تجعل هذه القضية الأكثر غموضاً في العصر الأوسط. انتهى حفل الأوسكار الكبير بذعر هائل وسط ذهول الحضور، حيث تمكن السارق من سرقة الجميع دون أن يترك خلفه أي أثر. لم يستطع أحد القبض عليه، ولم تتمكن الشرطة من العثور على أي دليل يوصلهم إلى المسروقات عليك حل لغز اختفاء المسروقات وايجاد اللص'
      }
    />
  );
}
