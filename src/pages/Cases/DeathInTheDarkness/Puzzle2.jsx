import React from "react";
import { useEffect } from "react";
import "../../../styles/puzzle-app.css";
import "../../../styles/response.css";
import PuzzleNav from "../../../components/puzzle/PuzzleNav";
import PuzzleNavMobile from "../../../components/puzzle/PuzzleNavMobile";
import PuzzleFooter from "../../../components/puzzle/PuzzleFooter";
import img1 from "../../../assets/death-in-the-darkness/puzzle2/images/right1.png";
import img2 from "../../../assets/death-in-the-darkness/puzzle2/images/right2.png";
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
          checkboxArray[i].name === "_11" ||
          checkboxArray[i].name === "_15"
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
    "صورة الضحية رامي",
    "دفتر مذكرات رامي",
    "تقرير الطبيب الشرعي",
    "ﺧﺮﻳﻄﻪ المنزل",
    "استمارة سلاح اﻟﺠﺮﻳﻤﺔ",
    "ﺻﻮرة اﻟﻤﺸﺘﺒﻪ ﺑﻪ­ - غسان ﻋﻠﻲ ﺻﺎﻟﺢ",
    "معلومات اﻟﻤﺸﺘﺒﻪ ﺑﻪ - ­غسان علي صالح",
    "افادة اﻟﺸﺎﻫﺪ - ­اﺛﻴﺮ ﻋﻤﺮ",
    "افادة اﻟﺸﺎﻫﺪ - فادي ﺻﻬﻴﺐ",
    "ﺗﺤﻘﻴﻖ الشرطة - ­غسان ﻋﻠﻲ ﺻﺎﻟﺢ",
    "ﺻﻮرة اﻟﻤﺸﺘﺒﻪ ﺑﻪ - ­ﺳﻴﻒ اﻟﺤﻖ ",
    "معلومات اﻟﻤﺸﺘﺒﻪ ﺑﻪ - ­ﺳﻴﻒ اﻟﺤﻖ ",
    "اﻓﺎدة اﻟﺸﺎﻫﺪ­ - اﻻﺳﺘﺎﺫ فاروق",
    "افادة اﻟﺸﺎﻫﺪ - ­اﻧﻮر ﻣﻬﻴﺐ",
    "ﺗﺤﻘﻴﻖ الشرطة - ­ﺳﻴﻒ اﻟﺤﻖ",
    "وثيقة اﻟﻤﻨﺤﺔ",
    "صورة المشتبه به - ­ﻣﺤﺴﻦ ﺻﺒﻲ وثب ",
    "معلومات اﻟﻤﺸﺘﺒﻪ ﺑﻪ­ - ﻣﺤﺴﻦ ﺻﺒﻲ وثب",
    "اﻓﺎدة اﻟﺸﺎﻫﺪ­ - ﻧﺒﻴﻞ حكيم ",
    "اﻓﺎدة اﻟﺸﺎﻫﺪ - ­ﺳﻤﻴﺢ ﻣﺆﻣﻦ",
    "ﺗﺤﻘﻴﻖ الشرطة - ­ﻣﺤﺴﻦ ﺻﺒﻲ وثب",
    "اﺳﺘﻤﺎرة ﺷﻬﺎدة وفاة زﻫﺮة",
    "ﺻﻮرة اﻟﻤﺸﺘﺒﻪ ﺑﻪ­ - ﺧﺎﻟﺪ اﺣﻤﺪ رﺿﻰ",
    "معلومات اﻟﻤﺸﺘﺒﻪ ﺑﻪ­ - ﺧﺎﻟﺪ اﺣﻤﺪ رﺿﻰ",
    "اﻓﺎدة اﻟﺸﺎﻫﺪ­ - كمال رزق",
    "ﺗﺤﻘﻴﻖ الشرطة - ­ﺧﺎﻟﺪ اﺣﻤﺪ رﺿﻰ",
    "ﺻﻮرة اﻟﻤﺸﺘﺒﻪ ﺑﻪ - ­اﺑﺮاﻫﻴﻢ ﻣﻨﻴﻒ",
    "معلومات اﻟﻤﺸﺘﺒﻪ ﺑﻪ - ­اﺑﺮاﻫﻴﻢ ﻣﻨﻴﻒ",
    "اﻓﺎدة اﻟﺸﺎﻫﺪ - ­ﺳﺤﺮ فوزي",
    "اﻓﺎدة اﻟﺸﺎﻫﺪ - ­ﻏﺎﻟﺐ ﻳﺴﻴﺮ",
    "ﺗﺤﻘﻴﻖ الشرطة - ­اﺑﺮاﻫﻴﻢ ﻣﻨﻴﻒ",
    "اﺳﺘﻤﺎرة ﻣﺨﺎﻟﻔﺔ اﻟﺴﺮﻋﺔ",
    "صورة سلاح الجريمة",
    "ﺻﻮرة ﻣﻦ المقتنيات اﻟﺘﻲ ﺑﺤﻮزة ﺧﺎﻟﺪ اﺣﻤﺪ",
    "ﺻﻮرة ﻣﻦ المقتنيات اﻟﺘﻲ ﺑﺤﻮزة ﻣﺤﺴﻦ ﺻﺒﻲ",
    "ﺻﻮرة ﻣﻦ المقتنيات اﻟﺘﻲ ﺑﺤﻮزة ﺳﻴﻒ اﻟﺤﻖ",
    "ﺻﻮرة ﻣﻦ المقتنيات اﻟﺘﻲ ﺑﺤﻮزة غسان ﻋﻠﻲ",
    "ﺻﻮرة ﻣﻦ المقتنيات اﻟﺘﻲ ﺑﺤﻮزة اﺑﺮاﻫﻴﻢ ﻣﻨﻴﻒ",
    "ﺻﻮرة رصاص مسرح اﻟﺠﺮﻳﻤﺔ",
    "ﺻﻮرة ﻋﺪاد اﻟﻜﻬﺮﺑﺎء",
    "ﺻﻮرة ﻋﺪاد اﻟﻜﻬﺮﺑﺎء مقرب",
    "ﺻﻮرة مكتب اﻟﻀﺤﻴﺔ رامي",
    "ﺻﻮرة ﺟﻬﺎز اﻟﻀﺤﻴﺔ",
    "ﺻﻮرة ﺷﺎﺷﺔ اﻟﺠﻬﺎز",
    "خطاب ﻗﻀﻴﺔ ﻣﻐﻠﻘﻪ",
    "خطاب المحقق كادي سليم",
    "صورة كابينة هاتف",
  ];

  return (
    <main className="puzzle-page">
      <PuzzleNav caseSlug="death-in-the-darkness" active={2} />
      <PuzzleNavMobile caseSlug="death-in-the-darkness" active={2} />
      <div className="header">
        <h1>موت في الظلام</h1>
      </div>
      <div className="welcome">
        <h2 style={{ color: "#c22735" }}>مرحباً أيها المحقق</h2>
        <p>أي المشتبهين يخفي امر مريب</p>

        <p> هل تعرف أي المشتبهين لديه ما يخفيه؟</p>
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
      <PuzzleFooter caseSlug="death-in-the-darkness" active={2} />

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
            <p>
            للأسف، ليست هذه المستندات المطلوبة لإثبات أن أحدهم يخفي امر مريب
            </p>
            <p>ستزاح ستار الحقائق قريباً واصل عملك</p>
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
            <p>
              للأسف، ليست هذه المستندات المطلوبة للإثبات أن أحدهم يخفي امر مريب
            </p>
            <p>انت تسير بالطريق السليم لقد حصلت على مستند صحيح </p>
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
          <p>عمل رائع ايها المحقق!</p>
          <p>عمل رائع، يمكنك الان فتح الملف الاضافي الثاني</p>
          <div className="images">
            <div>
              <p>مستند المنحة الدراسية</p>
              <img src={img2} alt="مستند المنحة الدراسية" />
            </div>
            <div>
              <p>معلومات المشتبه به سيف الحق</p>
              <img src={img1} alt=" معلومات المشتبه به سيف الحق" />
            </div>
          </div>
          <p>
            قمت بمطابقة اسم المشتبه المدرج في معلومات سيف الحق مع اسمه في ورقة
            المنحة الدراسية
          </p>
          <p className="last">أخبرا صدقائك بأنك تمكنت من فتح ملف قضية مغلقة</p>
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
          <h2 className="hint_header">تلميح!</h2>
          <p>إحدى الوثيقتين التي ستحتاج إليها هي معلومات احد المشتبهين</p>
          <p className="last">إذا اردت تلميح اخر اضغط زر التلميح في الاسفل</p>
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
          <h2 className="hint_header">تلميح!</h2>
          <p>
            عندما تجد الدليل الصحيح لهذا الجزء من القضية ستكون علاقة الضحية
            بالمجرم واضحة جداً
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
          <h2 className="hint_header">تلميح!</h2>
          <p>
            لدى سيف دليل مهم في (صورة المقتنيات التي كانت بحوزة سيف وقت وقوع
            الجريمة) الدليل ليس احدى الوثيقتين التي تبحث عنهما، لكن إذا عرفت ما
            اخفى فسوف تحل القضية
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
