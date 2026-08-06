import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import "../../styles/cases.css";

import bg from "../../assets/home/images/header.png";
import cover from "../../assets/home/images/cover.png";
import casesTitle from "../../assets/home/images/ourCases.png";
import wedding from "../../assets/home/images/cases/wedding.jpg";
import darkness from "../../assets/home/images/cases/darkness.jpg";
import last from "../../assets/home/images/cases/last.png";
import internal from "../../assets/home/images/cases/internal.png";
import next from "../../assets/shared/images/next.png";

export default function Home() {
  return (
    <div className="App">
      <Header bgImage={bg} coverImage={cover} />
      <main className="cases">
        <div className="header_cases">
          <div>
            <img src={casesTitle} alt=" " />
          </div>
        </div>
        <div className="cases_container">
          <div>
            <div className="order case_image">
              <img src={wedding} alt=" " />
            </div>
            <div>
              <h2>جريمة في يوم زفاف</h2>
              <p>
                حب حتى الموت هكذا نقشت الضحية هذا الكلمات على خاتم الخطوبة ..
                لكن الموت زارها في يوم زفافها لتصبح غادة ضحية جريمة غامضة
                حيرت المحققين منذ عشرين عام يعيش القاتل حر طليقاً لم تصل له
                العدالة إلى الان
              </p>
              <Link className="next" to="/case/wedding">
                <img src={next} alt="" />
              </Link>
            </div>
          </div>
          <div>
            <div className="case_image">
              <img src={darkness} alt=" " />
            </div>
            <div>
              <h2>موت في الظلام</h2>
              <p>
                تروي القصة حادثة انتحار وقعت في أحد المنازل المرموقة راح
                ضحيتها شاب يدعى رامي، لكن القصة لم تنته بعد؟ ما سر البيت
                المظلم ولماذا كتب رامي قبل أن يموت " أقرب من ظلك أبعد من
                الشمس" لم يستطع أحد من المحققين أن يفك رموز الحادثة لذا تم
                اغلاق القضية في حينها. نريد منك اعادة التحقيق مرة أخرى
                والكشف عن المجرم
              </p>
              <Link className="next" to="/case/death-in-the-darkness">
                <img src={next} alt="" />
              </Link>
            </div>
          </div>
          <div>
            <div className="order case_image">
              <img src={last} alt=" " />
            </div>
            <div>
              <h2>العرض الأخير</h2>
              <p>
                من فوق خشبة المسرح وأمام مرأى الجميع خطفت الطفلة نايا ليبقى
                الدليل الوحيد قناعاً مبتسم وصرخات الطفلة،، بين يديك قضية
                مختلفة في هذه القضية أراد المجرم أن يظهر للعلن لا أن يختفي
                داخل ملفات التحقيق
              </p>
              <Link className="next" to="/case/final-show">
                <img src={next} alt="" />
              </Link>
            </div>
          </div>

          <div>
            <div className="case_image">
              <img src={internal} alt=" " />
            </div>
            <div>
              <h2>سطو من الداخل</h2>
              <p>
                اختفاء المسروقات أو ربما اختفاء اللص؟ تجعل هذه القضية الأكثر
                غموضاً في العصر الأوسط. انتهى حفل الأوسكار الكبير بذعر هائل
                وسط ذهول الحضور، حيث تمكن السارق من سرقة الجميع دون أن يترك
                خلفه أي أثر. لم يستطع أحد القبض عليه، ولم تتمكن الشرطة من
                العثور على أي دليل يوصلهم إلى المسروقات عليك حل لغز اختفاء
                المسروقات وايجاد اللص
              </p>
              <Link className="next" to="/case/internal-burglary">
                <img src={next} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
