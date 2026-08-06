import React, { useEffect } from "react";
import "../../../styles/puzzle-app.css";
import "../../../styles/response.css";
import PuzzleNav from "../../../components/puzzle/PuzzleNav";
import PuzzleNavMobile from "../../../components/puzzle/PuzzleNavMobile";
import PuzzleFooter from "../../../components/puzzle/PuzzleFooter";
import img1 from "../../../assets/final-show/puzzle1/images/right1.png";
import img2 from "../../../assets/final-show/puzzle1/images/right2.png";
import wrong from "../../../assets/shared/images/wrong.png";
import twitter from "../../../assets/shared/images/social2/twitter.svg";
import insta from "../../../assets/shared/images/social2/insta.svg";
import messanger from "../../../assets/shared/images/social2/messanger.svg";

export default function Puzzle1() {
  const check = () => {
    let checkbox = document.querySelectorAll("[type=checkbox]");
    let checkboxArray = Array.from(checkbox);
    let correct = 0;
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray[i].checked === true) {
        if (checkboxArray[i].name === "_3" || checkboxArray[i].name === "_27") {
          correct += 1;
        }
      }
    }
    document.querySelector(".top-container").style.display = "block";

    answer(correct);
  };
  const answer = (correct) => {
    if (correct === 0) {
      document.querySelector(".an0").style.display = "flex";
    } else if (correct === 1) {
      document.querySelector(".an1").style.display = "flex";
    } else if (correct === 2) {
      document.querySelector(".an2").style.display = "flex";
    }
  };

  const times = () => {
    let checkbox = document.querySelectorAll("[type=checkbox]");
    let checkboxArray = Array.from(checkbox);
    let selected = 0;
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray[i].checked === true) {
        selected += 1;
      }
    }
    if (selected !== 2) {
      document.querySelector("#submit").removeEventListener("click", check);
    } else {
      document.querySelector("#submit").addEventListener("click", check);
    }
  };

  useEffect(() => times());
  const documents = [
    "ملصق خطف الطفلة - صور الطفلة نايا",
    " ملصق خطف الطفلة رنيم",
    " ملصق خطف الطفلة",
    " مقطع الاخبار",
    " ورقة معلومات المشتبه به - عصام محيي الدين",
    " صو­رة المشتبه به - عصام محيي الدين",
    "تحقيق الشرطة -  عصام محيي الدين",
    " ورقة معلومات المشتبه به -  مراد فيصل",
    " صورة المشتبه به - مراد فيصل",
    "تحقيق الشرطة - مراد فيصل",
    " ورقة معلومات المشتبه به - اسامة نبيل",
    " صورة المشتبه به - اسامة نبيل",
    "تحقيق الشرطة - اسامة نبيل",
    " إفادة الشاهد - إبراهيم مقرن",
    " إفادة الشاهد - هاني علي فال",
    " إفادة الشاهد - د. رجب مشارى",
    " إفادة الشاهد - سلمى جالي",
    " إفادة الشاهد - صبري علي هاشم",
    " إفادة الشاهد - المدرب مؤيد نصر",
    " إفادة الشاهد - نوره هادي",
    " ملصق اعلان عرض مسرحي للتصوير القصصي",
    " صورة المسرح ",
    " صور من فرقة أطفالنا موهوبون",
    " صورة المدرب مؤيد ناصر",
    " صورة منطقة الأزياء والمكياج في القاعة",
    " خريطة الجزء الجنوبي لمدينة ميران",
    " رسم تقريبي لشكل المجرم",
    " تذكرة حضور العرض المسرحي",
    " مستند ادلة جنائية",
    "مستند مقاعد القاعة F2",
    " كشف أسماء من مسرح الراية",
  ];

  return (
    <main className="puzzle-page">
      <PuzzleNav caseSlug="final-show" active={1} />
      <PuzzleNavMobile caseSlug="final-show" active={1} />
      <div className="header">
        <h1>العرض الاخير</h1>
      </div>
      <div className="welcome">
        <h2 style={{ color: "#c22735" }}>مرحباً أيها المحقق</h2>
        <p>هل بإمكانك الكشف عن هوية الخاطف؟ </p>
        <p>
          هل توصلت الى هوية الخاطف المقنع؟ ما هما المستندان اللذان ساعداك على
          ذلك؟
        </p>
      </div>

      <div className="main_container">
        <div className="documents">
          {documents.map((doc, id) => (
            <label key={`___${id}`}>
              <input
                className="checkbox"
                type="checkbox"
                name={`_${id}`}
                key={id}
                onClick={(e) => {
                  const __box = e.target;
                  if (__box.checked) {
                    const __selected = Array.from(
                      document.querySelectorAll("[type=checkbox]")
                    ).filter((c) => c.checked).length;
                    if (__selected > 2) {
                      __box.checked = false;
                      return;
                    }
                  }
                  __box.parentNode.classList.toggle("red");
                  times();
                }}
              />
              <span key={`__${id}`} className="checkmark" id={`_${id}`}></span>
              <span className="selection">{doc}</span>
            </label>
          ))}
        </div>
        <div className="btns_container">
          <input id="submit" type="button" value="تحقق" className="submit" />
          <input
            type="button"
            value="تلميح"
            className="submit hint_home"
            onClick={() => {
              document.querySelector(".answer").style.display = "none";
              document.querySelector(".an0").style.display = "none";
              document.querySelector(".hint1").style.display = "flex";
            }}
          />
        </div>
      </div>
      <PuzzleFooter caseSlug="final-show" active={1} />

      <Response />
    </main>
  );
}

function Response() {
  return (
    <div className="top-container">
      <div className="answer an0">
        <div className="res_container">
          <img src={wrong} alt=" " />
          <div className="wrong_container">
            <p>للأسف ليست هذه المستندات المطلوبة لكشف هوية الخاطف</p>
            <p>لا تستسلم نايا بحاجة الى مساعدتك</p>
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
            <p>للأسف ليست هذه المستندات المطلوبة لكشف هوية الخاطف</p>
            <p>
              لقد حصلت على مستند واحد صحيح. حاول مجدداً، فأنت قريب ونايا بحاجة
              إلى مساعدتك!
            </p>
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
          <p>لقد توصلت الي هوية المجرم</p>
          <p>احرزت تقدماً رائعاً</p>
          <div className="images">
            <div>
              <p>صورة مظاهرات</p>
              <img src={img1} alt="صورة مظاهرات" />
            </div>
            <div>
              <p>تذكرة الحضور</p>
              <img
                src={img2}
                alt="
              تذكرة الحضور"
              />
            </div>
          </div>
          <p>
            لقد قام المجرم بكتابة نفس العبارة ليهدد د.رجب والد الطفله، اكتشاف
            رائع سيساعد في سير التحقيق
          </p>
          <p className="last">
            انت تسير في طريق جيد ايها المحقق، لقد استطعت ازالة القناع عن وجه
            المجرم، اخبر الجميع انك كشفت هوية المجرم المقنع!
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
      </div>

      <div className="hint1 hint">
        <div className="res_container">
          <h1 className="hint_header">تلميح!</h1>
          <p>انت ترى لكنك لم تلاحظ</p>
        </div>

        <div>
          <input
            className="btns try"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".hint1").style.display = "none";
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
          <p>عد الى نقطة البداية </p>
        </div>

        <div>
          <input
            className="btns try"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".hint2").style.display = "none";
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
          <p>ربما انت بحاجة الى سماع القصة مرة أخرى </p>
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
          <p>شاهد الاخبار لترى احدهم</p>
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
