import React from "react";
import { useEffect } from "react";
import "../../../styles/puzzle-app.css";
import "../../../styles/response.css";
import PuzzleNav from "../../../components/puzzle/PuzzleNav";
import PuzzleNavMobile from "../../../components/puzzle/PuzzleNavMobile";
import PuzzleFooter from "../../../components/puzzle/PuzzleFooter";
import img1 from "../../../assets/wedding/puzzle1/images/right1.png";
import img2 from "../../../assets/wedding/puzzle1/images/right2.png";
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
        if (checkboxArray[i].name === "_0" || checkboxArray[i].name === "_7") {
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
    "مقالة بعنوان -مقتل طبيبة نفسية للاطفال",
    "مقالة بعنوان -اعتقال ابو جميل بتهمة قتل",
    "تقرير الطبيب الشرعي",
    "صورة أمام مطعم سالوكا",
    "صورة الزقاق الخلفي لمطعم سالوكا",
    "صورة مسرح الجريمة",
    "تقرير الأدلة الخاتم",
    "خريطة السلم",
    "بصمات ابو جميل",
    "صورة اعتقال - علي يوسف جميل",
    "صورة خاتم الخطوبة",
    "أمر محكمة الاسرة",
    "سجلات هاتف عيادة صحتنا",
    "صورة المشتبه به - لؤي تامر هتان",
    "صورة المشتبه به - مروان احمد سعيد",
    "صورة المشتبه به - علي يوسف جميل",
    "صورة المشتبه به - مهند طلال قاسم",
    "صورة المشتبه به - سعد احمد وسيم",
    "معلومات المشتبه - مروان احمد سعيد",
    "معلومات المشتبه - علي يوسف جميل",
    "معلومات المشتبه - مهند طلال قاسم",
    "معلومات المشتبه - سعد احمد وسيم",
    "معلومات المشتبه - لؤي تامر هتان",
    "تحقيق شرطة - مروان احمد سعيد",
    "تحقيق شرطة - علي يوسف جميل",
    "تحقيق شرطة - مهند طلال قاسم",
    "تحقيق شرطة - سعد احمد وسيم",
    "تحقيق شرطة - لؤي تامر هتان",
    "صورة الشاهد - عدنان حمد",
    "صورة الشاهد - انس غازي",
    "صورة الشاهد-ابراهيم ساجي",
    "صورة الشاهد - راكان انور",
    "صورة الشاهد - سيف العدل",
    "صورة الشاهد - هلال الدين",
    "صورة الشاهد - عمر فارس",
    "إفادة الشاهد - سجى فادي",
    "افادة الشاهد - عدنان حمد",
    "افادة الشاهد - انس غازي",
    "افادة الشاهد - راكان انور",
    "افادة الشاهد - سيف العدل",
    "افادة الشاهد - ابراهيم ساجي",
    "افادة الشاهد - اسماء جواد",
    "افادة الشاهد - عمر فارس",
    "افادة الشاهد - هلال الدين",
  ];

  return (
    <main className="puzzle-page">
      <PuzzleNav caseSlug="wedding" active={1} />
      <PuzzleNavMobile caseSlug="wedding" active={1} />
      <div className="header">
        <h1>جريمة في يوم الزفاف</h1>
      </div>
      <div className="welcome">
        <h2 style={{ color: "#c22735" }}>مرحباً أيها المحقق</h2>
        <p> هل بامكانك اثبات براءة علي يوسف جميل </p>
        <p>ماهما المستندان اللذان يزيلان تهمة قتل غادة ماسي عن ابو جميل</p>
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
      <PuzzleFooter caseSlug="wedding" active={1} />

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
            <p>للأسف ليست هذه المستندات المطلوبة لتحرير أبو جميل</p>
            <p>لا تستسلم ابو جميل بحاجة إلى مساعدتك</p>
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
            <p>للأسف ليست هذه المستندات المطلوبة لتحرير أبو جميل</p>
            <p>
              لكنك حصلت على مستند واحد صحيح. حاول مجدداً، أنت قريب وابو جميل
              بحاجة إلى مساعدتك!
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
          <p>لقد اثبت براءة ابو جميل!</p>
          <p>عمل رائع أيها المحقق</p>
          <div className="images">
            <div>
              <p>مقالة مقتل طبيبة نفسية للاطفال</p>
              <img src={img2} alt="مقالة" />
            </div>
            <div>
              <p>خريطة السلم</p>
              <img src={img1} alt="خريطة السلم" />
            </div>
          </div>
          <p>
            لقد عثرت على المقالة التي تثبت اغلاق جسر سكوير مارينا من الساعة 8:45
            مساءً، حتى 9:45 مساءً وفقاً للخريطة، لم يكن بإمكان ابو جميل عبور
            النهر إلى سالوكا والعودة إلى حديقة الممشى في الوقت المناسب.
          </p>
          <p className="last">
            استخدم، وسائل التواصل الاجتماعي لإخبار الجميع بأنك حررت رجلاً بريئاً
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
          <p>
            إحدى الوثيقتين اللتين تحتاج إليهما لإثبات أن ابو جميل بريء هي
            المقالة الرئيسية بعنوان: مقتل طبيبة نفسية للأطفال
          </p>
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
          <p>
            عندما تجد دليل على ان ابو جميل لايمكن ان يكون في مسرح الجريمة سيكون
            الامر واضح
          </p>
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
          <p>
            لإثبات ان ابو جميل بريء ستحتاج إلى مقال بعنوان مقتل طبيبة نفسية
            للأطفال والدليل في الجهة الخلفيه من المقال
          </p>
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
