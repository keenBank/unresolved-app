import React from "react";
import CaseHome from "../../../components/layout/CaseHome";
import thumbnail from "../../../assets/home/images/cases/darkness.jpg";

export default function DeathInTheDarknessHome() {
  return (
    <CaseHome
      slug="death-in-the-darkness"
      thumbnail={thumbnail}
      title="موت في الظلام"
      welcomeUrl="https://death-in-the-darkness.vercel.app/"
      description={
        'تروي القصة حادثة انتحار وقعت في أحد المنازل المرموقة راح ضحيتها شاب يدعى رامي، لكن القصة لم تنته بعد؟ ما سر البيت المظلم ولماذا كتب رامي قبل أن يموت " أقرب من ظلك أبعد من الشمس" لم يستطع أحد من المحققين أن يفك رموز الحادثة لذا تم اغلاق القضية في حينها. نريد منك اعادة التحقيق مرة أخرى والكشف عن المجرم'
      }
    />
  );
}
