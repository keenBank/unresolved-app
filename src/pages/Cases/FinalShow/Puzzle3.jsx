import React, { useState } from "react";
import "../../../styles/puzzle-app.css";
import "../../../styles/response.css";
import PuzzleNav from "../../../components/puzzle/PuzzleNav";
import PuzzleNavMobile from "../../../components/puzzle/PuzzleNavMobile";
import PuzzleFooter from "../../../components/puzzle/PuzzleFooter";
import img1 from "../../../assets/final-show/puzzle3/images/right1.png";
import img2 from "../../../assets/final-show/puzzle3/images/right2.png";
import insta from "../../../assets/shared/images/social2/insta.svg";
import messanger from "../../../assets/shared/images/social2/messanger.svg";
import twitter from "../../../assets/shared/images/social2/twitter.svg";
import wrong from "../../../assets/shared/images/wrong.png";

export default function Puzzle3() {
  const check = () => {
    let street = document.querySelector("#street").value;
    let mark = document.querySelector("#mark").value;

    let correct = 0;
    if (streets.indexOf(street) >= 0) {
      correct += 1;
    }
    if (marks.indexOf(mark) >= 0) {
      correct += 1;
    }

    answer(correct);
  };
  const answer = (correct) => {
    document.querySelector(".form").style.display = "none";
    if (correct === 0) {
      document.querySelector(".an0").style.display = "flex";
    } else if (correct === 1) {
      document.querySelector(".an1").style.display = "flex";
    } else if (correct === 2) {
      document.querySelector(".an2").style.display = "flex";
    }
  };

  const marks = [
    "المطار",
    "مطار مارين",
    "مطار مارين الدولي",
    "مطار الدولي",
    "المطار الدولي",
    "المطار مارين",
  ];
  const streets = ["حي الناجين", "الناجين", "الناجي"];

  return (
    <main className="puzzle-page">
      <PuzzleNav caseSlug="final-show" active={3} />
      <PuzzleNavMobile caseSlug="final-show" active={3} />
      <div className="header">
        <h1>العرض الاخير</h1>
      </div>
      <div className="welcome">
        <h2 style={{ color: "#c22735" }}>مرحباً أيها المحقق</h2>
        <p>هل استطعت الوصول الى مكان الطفلة؟</p>
        <p>اذا توصلت الى مكان احتجاز الطفلة قم بإدخال المعلومات في الاسفل</p>
      </div>

      <div className="main_container">
        <Response />

        <div className="form">
          <p>
            محققنا كي نستطيع انقاذ نايا نحتاج منك ان تقوم بكتابة مكان احتجاز
            الطفلة
          </p>

          <div className="app_container">
            <div>
              <label htmlFor="street">اسم الحي</label>
              <br />
              <input
                type="text"
                id="street"
                name="street"
                className="text_input"
              />
            </div>
            <div>
              <label htmlFor="mark">اقرب معلم</label>
              <br />
              <input type="text" id="mark" name="mark" className="text_input" />
            </div>
          </div>
          <div>
            <input
              className="btns_app"
              type="button"
              value="تحقق"
              onClick={() => {
                check();
              }}
            />
            <input
              className="btns_app hint_btn"
              type="button"
              value="تلميح"
              onClick={() => {
                document.querySelector(".answer").style.display = "none";
                document.querySelector(".form").style.display = "none";
                document.querySelector(".an0").style.display = "none";
                document.querySelector(".hint1").style.display = "flex";
              }}
            />
          </div>
        </div>
      </div>
      <PuzzleFooter caseSlug="final-show" active={3} />
    </main>
  );
}

function Response() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://detectives-5126dc7943c5.herokuapp.com/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
          }),
        }
      );

      // Handle the success or do something with the response
      console.log("Data sent successfully");
    } catch (error) {
      console.error("Error sending data:", error);
    }
    document.querySelector(".an3").style.display = "none";
    document.querySelector(".form").style.display = "block";
  };
  return (
    <div className="top-container">
      <div className="answer an0">
        <div className="res_container">
          <img src={wrong} alt=" " />
          <div className="wrong_container">
            <p>
            للأسف ليست هذه المستندات التي نبحث عنها لإيجاد الطفلة المختطفة نايا
            </p>
            <p>لا تفقد الامل! الأدلة التي تحتاج اليها موجودة في ملف القضية </p>
            <p>*إذا أردت تلميحاً أضغط زر التلميح في الاسفل</p>
          </div>
        </div>

        <div>
          <input
            className="btns"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".an0").style.display = "none";
              document.querySelector(".form").style.display = "block";
            }}
          />
          <input
            className="btns hint_btn"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".answer").style.display = "none";
              document.querySelector(".an0").style.display = "none";
              document.querySelector(".hint1").style.display = "flex";
            }}
          />
        </div>
      </div>

      <div className="answer an1">
        <div className="res_container">
          <img src={wrong} alt=" " />
          <div className="wrong_container">
            <p>
              للأسف ليست هذه المستندات التي نبحث عنها لإيجاد الطفلة المختطفة
              نايا
            </p>
            <p>لقد حصلت على مستند صحيح هذا يعني أنك على وشك إيجاد نايا</p>
            <p>*إذا أردت تلميحاً أضغط زر التلميح في الاسفل</p>
          </div>
        </div>

        <div>
          <input
            className="btns try"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".an1").style.display = "none";
              document.querySelector(".form").style.display = "block";
            }}
          />
          <input
            className="btns hint_btn"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".answer").style.display = "none";
              document.querySelector(".an1").style.display = "none";
              document.querySelector(".hint1").style.display = "flex";
            }}
          />
        </div>
      </div>

      <div className="answer an2">
        <div className="res_container right">
          <p>لقد تمكنت من انقاذ الطفلة نايا</p>
          <p>عمل مبهر أيها المحقق!</p>

          <div className="images">
            <div>
              <p>مقطع التهديد</p>
              <img src={img2} alt="مقطع التهديد" />
            </div>
            <div>
              <p>ورقة نايا</p>
              <img src={img1} alt="ورقة نايا" />
            </div>
          </div>
          <p>
            بكل تاكيد هذه الادله مكنتك من ايجاد اقرب نقطه للطفلة تهانينا! ان حلك
            لهذه القضية يدل على مدى براعتك
          </p>
          <p className="last">
            لقد حللت للتو جريمة رأي عام - إذا كنت قد استمتعت، فاتسخدم وسائل
            التواصل الاجتماعي لمشاركة تجربتك!
          </p>
          <div className="social_right">
            <a
              href="https://twitter.com/unresolved_cass?s=11&t=lOCc8EkhDZBKspcssFHufw"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt=" " />
            </a>
            <a
              href="https://instagram.com/unresolved_cass?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt=" " />
            </a>
            <a
              href="https://wa.me/966509330727"
              target="_blank"
              rel="noreferrer"
            >
              <img src={messanger} alt=" " />
            </a>
          </div>
        </div>

        <div>
          <input
            className="btns"
            type="button"
            value="التالي"
            onClick={() => {
              document.querySelector(".an2").style.display = "none";
              document.querySelector(".an3").style.display = "flex";
            }}
          />
        </div>
      </div>
      <div className="answer an3">
        <div className="res_container add_name">
          <p>
            الحين صرت محقق !!!
            <br /> ومو أي محقق
          </p>
          <p className="sec">
            أنت من الماستر!؟ اكتب اسمك لتنضم إلى قائمة أفضل المحققين
          </p>
          <form id="myForm" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              id="name"
              value={name}
              onChange={handleChange}
            />
          </form>
          <div>
            <input
              className="btns try"
              type="submit"
              form="myForm"
              value="اضف اسمك"
            />
            <input
              className="btns hint_btn"
              type="button"
              value="إلغاء"
              onClick={() => {
                document.querySelector(".an3").style.display = "none";
                document.querySelector(".form").style.display = "block";
              }}
            />
          </div>
        </div>
      </div>
      <div className="hint1 hint">
        <div className="res_container">
          <h1 className="hint_header">تلميح!</h1>
          <p>هل تستطيع لعب الأحجيات؟</p>
        </div>

        <div>
          <input
            className="btns try"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".hint1").style.display = "none";
              document.querySelector(".form").style.display = "block";
            }}
          />
          <input
            className="btns hint_btn"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".hint1").style.display = "none";
              document.querySelector(".hint2").style.display = "flex";
            }}
          />
        </div>
      </div>

      <div className="hint2 hint">
        <div className="res_container">
          <h1 className="hint_header">تلميح!</h1>
          <p>
            انت تبحث عن دليل قدم لك مؤخراً ،استعمل الخريطة لتحدد أقرب نقطة
            لمنطقة الفتاة
          </p>
        </div>

        <div>
          <input
            className="btns try"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".hint2").style.display = "none";
              document.querySelector(".form").style.display = "block";
            }}
          />
          <input
            className="btns hint_btn"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".hint2").style.display = "none";
              document.querySelector(".hint3").style.display = "flex";
            }}
          />
        </div>
      </div>

      <div className="hint3 hint">
        <div className="res_container">
          <h1 className="hint_header">تلميح!</h1>
          <p>انت بحاجة لتنصت أكثر</p>
        </div>

        <div>
          <input
            className="btns try"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".hint3").style.display = "none";
            }}
          />
          <input
            className="btns hint_btn"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".hint3").style.display = "none";
              document.querySelector(".hint4").style.display = "flex";
            }}
          />
        </div>
      </div>

      <div className="hint4 hint">
        <div className="res_container">
          <h1 className="hint_header watchout">انتبه!</h1>
          <p style={{ fontWeight: "bold" }}>
            ستحصل على تلميح إضافي قد يسهل عليك سير اللعبه بشكل كبير.
          </p>
          <p style={{ color: "#c22735" }}>
            اذا كنت لست بحاجة الى تلميح
            <br />
            اكمل اللعب دون الحصول على هذا التلميح
          </p>
        </div>

        <div>
          <input
            className="btns try"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".hint4").style.display = "none";
            }}
          />
          <input
            className="btns hint_btn"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".hint4").style.display = "none";
              document.querySelector(".hint5").style.display = "flex";
            }}
          />
        </div>
      </div>

      <div className="hint5 hint">
        <div className="res_container">
          <h1 className="hint_header">تلميح!</h1>
          <p>نايا تحاول ان تخبرك بشيء</p>
        </div>

        <div>
          <input
            className="btns try"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".hint5").style.display = "none";
            }}
          />
        </div>
      </div>
    </div>
  );
}
