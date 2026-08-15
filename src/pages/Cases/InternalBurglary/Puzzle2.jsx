import React from "react";
import { useEffect } from "react";
import "../../../styles/puzzle-app.css";
import "../../../styles/response.css";
import PuzzleNav from "../../../components/puzzle/PuzzleNav";
import PuzzleNavMobile from "../../../components/puzzle/PuzzleNavMobile";
import PuzzleFooter from "../../../components/puzzle/PuzzleFooter";
import img1 from "../../../assets/internal-burglary/puzzle2/suspect-info.png";
import img2 from "../../../assets/internal-burglary/puzzle2/shop-chat.png";
import wrong from "../../../assets/shared/images/wrong.png";
import twitter from "../../../assets/shared/images/social2/twitter.svg";
import insta from "../../../assets/shared/images/social2/insta.svg";
import messanger from "../../../assets/shared/images/social2/messanger.svg";

export default function Puzzle2() {
  const check = () => {
    let checkbox = document.querySelectorAll("[type=checkbox]");
    let checkboxArray = Array.from(checkbox);
    let correct = 0;
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray[i].checked === true) {
        if (
          checkboxArray[i].name === "_4" ||
          checkboxArray[i].name === "_5"
        ) {
          correct += 1;
        }
      }
    }
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
    "التقرير الطبي",
    "معلومات المشتبه به – تاكويا كيمورا",
    "صورة المشتبه به - تاكويا كيمورا",
    "تحقيق شرطة - تاكويا كيمورا",
    "معلومات المشتبه به - هاتورو تاكاجي",
    "صورة المشتبه به - هاتورو تاكاجي",
    "تحقيق شرطة - هاتورو تاكاجي",
    "معلومات المشتبه به - شوهي إيتو",
    "صورة المشتبه به - شوهي إيتو",
    "تحقيق شرطة - شوهي إيتو",
    "معلومات المشتبه به - جينشي تاكاجي",
    "صورة المشتبه به - جينشي تاكاجي",
    "تحقيق شرطة - جينشي تاكاجي",
    "معلومات المشتبه به - أيا أندو",
    "صورة المشتبه به - أيا أندو",
    "تحقيق شرطة - أيا أندو",
    "إفادة الشاهد/ د يوشيو موري",
    "إفادة الشاهد/ ريوتشي ريوتارو",
    "إفادة الشاهد/ ساياكا إيشيكاوا",
    "إفادة الشاهد/ سوما تاكامورا",
    "إفادة الشاهد/ كازوكي هيروسيما",
    "إفادة الشاهد/ كينجي تاكيزاوا",
    "إفادة الشاهد/ ماسا كاتاياما",
    "إفادة الشاهد/ ميدوري ساتو",
    "إفادة الشاهد/ ناغيسا إكي",
    "إفادة الشاهد/ يوكي هاياشي",
    "تقرير ابلاغ سرقه",
    "صورة المدخل الرئيسي 1",
    "صورة المدخل الرئيسي 2",
    "صورة المدخل الرئيسي 3",
    "صورة المدخل الرئيسي 4",
    "صورة المدخل الرئيسي 5",
    "صورة المدخل الرئيسي6",
    "صورة القاعة7",
    "صورة القاعة8",
    "صورة القاعة9",
    "صورة الجائزة 10",
    "صورة كعك الحفل 11",
    "صورة ساكورا 12",
    "صورة الخزانه 13",
    "صورة الخاتم الانسة هيابرا ياما",
    "صورة الخاتم السيد تاكويا",
    "مخطط قاعة الحفل",
    "دعوة لحضور الحفل",
    "جدول المهام",
    "رسمة ساكورا",
    "تقويم",
    "بطاقة عمل تاداشي ايتو",
    "صورة لمقتنيات تم ايجادها في الحفل",
    "مستند لمقتنيات تم ايجادها في الحفل",
  ];

  return (
    <main className="puzzle-page">
      <PuzzleNav caseSlug="internal-burglary" active={2} />
      <PuzzleNavMobile caseSlug="internal-burglary" active={2} />
      <div className="header">
        <h1>سطو من الداخل</h1>
      </div>
      <div className="welcome">
        <h2 style={{ color: "#c22735" }}>مرحباً أيها المحقق</h2>
        <p>هل يمكنك اكتشاف هوية اللص ؟</p>
        <p>ما هما المستندان اللذان يكشفان عن هوية سارق الحفل</p>
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
      <PuzzleFooter caseSlug="internal-burglary" active={2} />

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
            <p>للأسف، هذه ليست المستندات المطلوبة لإدانة اللص</p>
            <p>لا تستسلم! فالمفتاح للحل قد يكون أقرب مما تتصور!</p>
            <p>*إذا اردت تلميحاً اضغط زر التلميح في الأسفل</p>
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
            <p>للأسف، هذه ليست المستندات الصحيحة لكشف هوية اللص، لكنك اقتربت! لقد اخترت مستندًا واحدًا صحيحًا.</p>
            <p>واصل المحاولة، أنت على وشك الوصول للحقيقة</p>
            <p>*إذا اردت تلميحاً اضغط زر التلميح في الأسفل</p>
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
        <button
          type="button"
          className="modal-close"
          aria-label="إغلاق"
          onClick={() => {
            document.querySelector(".an2").style.display = "none";
          }}
        >
          ×
        </button>
        <div className="res_container right">
          <p>لقد اثبت ان هاتورو تاكاجي هو السارق</p>
          <p>عمل رائع أيها المحقق</p>
          <div className="images">
            <div>
              <p>معلومات المشتبه به</p>
              <img src={img1} alt="معلومات المشتبه به" />
            </div>
            <div>
              <p>صورة المشتبه به</p>
              <img src={img2} alt="صورة المشتبه به" />
            </div>
          </div>
          <p>
            بعد التحقق من موقع متجر المجوهرات، تبين أنه متجر متخصص في بيع
            المجوهرات الأصلية دون فواتير. وعند مراجعة المستندات، اكتشفت أن
            البطاقة تعود للسيد هاتورو تاكاجي، الذي يُعرف أيضًا بـ BT
          </p>
          <p className="last">يمكنك الان فتح الظرف الثاني</p>
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
          <p>لا مكان للصدف هنا؟</p>
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
          <p>ابحث في الاماكن الغير متوقته!</p>
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
          <p>الأشياء الثمينة تجد طريقها إلى السوق</p>
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
        </div>
      </div>
    </div>
  );
}
