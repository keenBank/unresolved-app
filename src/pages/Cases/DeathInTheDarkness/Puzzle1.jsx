import React from "react";
import { useEffect } from "react";
import "../../../styles/puzzle-app.css";
import "../../../styles/response.css";
import PuzzleNav from "../../../components/puzzle/PuzzleNav";
import PuzzleNavMobile from "../../../components/puzzle/PuzzleNavMobile";
import PuzzleFooter from "../../../components/puzzle/PuzzleFooter";
import img1 from "../../../assets/death-in-the-darkness/puzzle1/images/right1.png";
import img2 from "../../../assets/death-in-the-darkness/puzzle1/images/right2.png";
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
        if (checkboxArray[i].name === "_4" || checkboxArray[i].name === "_2") {
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
    "صورة الضحية رامي",
    "دفتر مذكرات رامي",
    "تقرير الطبيب الشرعي",
    "ﺧرﻳﻄﻪ المنزل",
    "استمارة سلاح الجريمة",
    "صورة المشتبه ﺑﻪ­ - غسان ﻋﻠﻲ ﺻﺎﻟﺢ",
    "معلومات المشتبه ﺑﻪ - غسان علي صالح",
    "افادة الشاهد - اثير ﻋﻤر",
    "افادة الشاهد - فادي ﺻﻬﻴﺐ",
    "تحقيق الشرطة - غسان ﻋﻠﻲ ﺻﺎﻟﺢ",
    "صورة المشتبه ﺑﻪ - ­ﺳﻴﻒ الحق ",
    "معلومات المشتبه ﺑﻪ - ­ﺳﻴﻒ الحق ",
    "افادة اﻟﺸﺎﻫﺪ­ - الاستاذ فاروق",
    "اﻓﺎﺩﺓ اﻟﺸﺎﻫﺪ - انور ﻣﻬﻴﺐ",
    "ﺗﺤﻘﻴﻖ الشرطة - ­ﺳﻴﻒ الحق",
    "وثيقة المنحة",
    "صورة المشتبه به - ­ﻣﺤﺴﻦ ﺻﺒﻲ وثب ",
    "معلومات المشتبه ﺑﻪ­ - ﻣﺤﺴﻦ ﺻﺒﻲ وثب",
    "افادة اﻟﺸﺎﻫﺪ­ - ﻧﺒﻴﻞ حكيم ",
    "افادة اﻟﺸﺎﻫﺪ - ­ﺳﻤﻴﺢ ﻣﺆﻣﻦ",
    "ﺗﺤﻘﻴﻖ الشرطة - ­ﻣﺤﺴﻦ ﺻﺒﻲ وثب",
    "استمارة شهادة وفاة زهرة",
    "صورة المشتبه ﺑﻪ­ - ﺧﺎﻟﺪ اﺣﻤﺪ رضى",
    "معلومات المشتبه ﺑﻪ­ - ﺧﺎﻟﺪ اﺣﻤﺪ رضى",
    "افادة اﻟﺸﺎﻫﺪ­ - كمال رزق",
    "ﺗﺤﻘﻴﻖ الشرطة - ­ﺧﺎﻟﺪ اﺣﻤﺪ رضى",
    "صورة المشتبه ﺑﻪ - ­اﺑراﻫﻴﻢ ﻣﻨﻴﻒ",
    "معلومات المشتبه ﺑﻪ - ­اﺑراﻫﻴﻢ ﻣﻨﻴﻒ",
    "افادة اﻟﺸﺎﻫﺪ - ­ﺳﺤر فوزي",
    "افادة اﻟﺸﺎﻫﺪ - ­ﻏﺎﻟﺐ ﻳﺴﻴر",
    "ﺗﺤﻘﻴﻖ الشرطة - ­اﺑراﻫﻴﻢ ﻣﻨﻴﻒ",
    "استمارة ﻣﺨﺎﻟﻔﺔ اﻟﺴرﻋﺔ",
    "صورة سلاح الجريمة",
    "صورة ﻣﻦ المقتنيات اﻟﺘﻲ بحوزة ﺧﺎﻟﺪ اﺣﻤﺪ",
    "صورة ﻣﻦ المقتنيات اﻟﺘﻲ بحوزة ﻣﺤﺴﻦ ﺻﺒﻲ",
    "صورة ﻣﻦ المقتنيات اﻟﺘﻲ بحوزة ﺳﻴﻒ الحق",
    "صورة ﻣﻦ المقتنيات اﻟﺘﻲ بحوزة غسان ﻋﻠﻲ",
    "صورة ﻣﻦ المقتنيات اﻟﺘﻲ بحوزة اﺑراﻫﻴﻢ ﻣﻨﻴﻒ",
    "صورة رصاص مسرح اﻟﺠرﻳﻤﺔ",
    "صورة عداد اﻟﻜﻬرﺑﺎء",
    "صورة عداد اﻟﻜﻬرﺑﺎء ﻣﻘرب",
    "صورة مكتب اﻟﻀﺤﻴﺔ رامي",
    "صورة ﺟﻬﺎز اﻟﻀﺤﻴﺔ",
    "صورة ﺷﺎﺷﺔ اﻟﺠﻬﺎز",
    "ﺧﻄﺎب ﻗﻀﻴﺔ ﻣﻐﻠﻘﻪ",
  ];

  return (
    <main className="puzzle-page">
      <PuzzleNav caseSlug="death-in-the-darkness" active={1} />
      <PuzzleNavMobile caseSlug="death-in-the-darkness" active={1} />
      <div className="header">
        <h1>موت في الظلام</h1>
      </div>
      <div className="welcome">
        <h2 style={{ color: "#c22735" }}>مرحباً أيها المحقق</h2>
        <p>هل بامكانك اثبات انها قضية قتل؟ </p>
        <p>هل تعرف ماهما المستندان اللذان يثبتان أنها عملية قتل ليست انتحار</p>
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
      <PuzzleFooter caseSlug="death-in-the-darkness" active={1} />

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
            <p>للأسف، ليست هذه المستندات المطلوبة لإثبات انها جريمة قتل</p>
            <p>لا تيأس، فعملية الانتحار هذه تلفيق من أحدهم</p>
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
            <p>للأسف، ليست هذه المستندات المطلوبة لإثبات انها جريمة قتل</p>
            <p>يبدو تقدم رائع لقد حصلت على مستند واحد صحيح، راجع تحرياتك</p>
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
          <p>لقد اثبت إنها عملية قتل!</p>
          <p>عمل رائع أيها المحقق</p>
          <div className="images">
            <div>
              <p>استمارة سلاح الجريمة</p>
              <img src={img2} alt="استمارة سلاح الجريمة" />
            </div>
            <div>
              <p>تشريح الجثة</p>
              <img src={img1} alt="تشرح الجثة" />
            </div>
          </div>
          <p>
            لقد عثرت على معلومة مهمه جداً عيار الرصاصتين مختلفة عيار 9 مم للسلاح
            الذي بحوزة رامي، أما الرصاصة التي قتل فيها كانت 10مم. مما يعني انه
            تم قتل رامي بمسدس اخر وهذا يثبت انه لم يقتل نفسه
          </p>
          <p className="last">
            استخدم، وسائل التواصل الاجتماعي لإخبار الجميع أنك كشفت خدعة القاتل
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
            إحدى الوثيقتين اللتين تحتاج إليهما لإثبات انها عملية قتل هي مستند
            تشريح الجثة
          </p>
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
          <h1 className="hint_header">تلميح!</h1>
          <p>
            عندما تجد دليل على ان رامي لا يمكنه استعمال مسدس اخر سيبدو هذا
            واضحاً
          </p>
          <p className="last">إذا اردت تلميح اخر اضغط زر التلميح في الاسفل</p>
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
          <p>لإثبات وقوع جريمة، راجع جميع المستندات التي تتعلق بسلاح الجريمة</p>
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
