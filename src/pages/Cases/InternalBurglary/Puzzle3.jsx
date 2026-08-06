import React, { useState } from "react";
import { useEffect } from "react";
import "../../../styles/puzzle-app.css";
import "../../../styles/response.css";
import PuzzleNav from "../../../components/puzzle/PuzzleNav";
import PuzzleNavMobile from "../../../components/puzzle/PuzzleNavMobile";
import PuzzleFooter from "../../../components/puzzle/PuzzleFooter";
import img1 from "../../../assets/internal-burglary/puzzle3/cake.png";
import wrong from "../../../assets/shared/images/wrong.png";
import twitter from "../../../assets/shared/images/social2/twitter.svg";
import insta from "../../../assets/shared/images/social2/insta.svg";
import messanger from "../../../assets/shared/images/social2/messanger.svg";

export default function Puzzle3() {
  // This puzzle only requires ONE correct document (صورة كعك الحفل 13),
  // unlike the other puzzles in this case which require two.
  const check = () => {
    let checkbox = document.querySelectorAll("[type=checkbox]");
    let checkboxArray = Array.from(checkbox);
    let correct = 0;
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray[i].checked === true) {
        if (checkboxArray[i].name === "_39") {
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
    if (selected !== 1) {
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
    "صورة الخزانه 11",
    "صورة ساكورا 12",
    "صورة كعك الحفل 13",
    "صورة الخاتم الانسة هيابرا ياما",
    "صورة الخاتم السيد تاكويا",
    "مخطط قاعة الحفل",
    "دعوة لحضور الحفل",
    "جدول المهام",
    "رسمة ساكورا",
    "تقويم",
    "بطاقة عمل تاداشي ايتو",
    "صورة لمقتنيات تم ايجادها في الحفل",
    "مستند لمقتنيات تم يجادها في الحفل",
    "جريدة",
    "صورة مطعم مون باستري",
    "إنذار إغلاق المطعم",
    "استمارة اعتراف",
    "فاتورة شراء الكعك",
  ];

  return (
    <main className="puzzle-page">
      <PuzzleNav caseSlug="internal-burglary" active={3} />
      <PuzzleNavMobile caseSlug="internal-burglary" active={3} />
      <div className="header">
        <h1>سطو من الداخل</h1>
      </div>
      <div className="welcome">
        <h2 style={{ color: "#c22735" }}>مرحباً أيها المحقق</h2>
        <p>هل بإمكانك العثور على المسروقات؟</p>
        <p>ما الوثيقة التي ستقودك إلى موقع المسروقات؟</p>
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
                    if (__selected > 1) {
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
      <PuzzleFooter caseSlug="internal-burglary" active={3} />

      <Response />
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
      await fetch("https://detectives-5126dc7943c5.herokuapp.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      });
      console.log("Data sent successfully");
    } catch (error) {
      console.error("Error sending data:", error);
    }
    document.querySelector(".an3").style.display = "none";
  };

  return (
    <div className="top-container">
      <div className="answer an0">
        <div className="res_container">
          <img src={wrong} alt=" " />

          <div className="wrong_container">
            <p>للأسف، لم تتمكن من العثور على المسروقات.</p>
            <p>لا تفقد الأمل! واصل البحث، فقد تكون قريبًا من الحل.</p>
            <p>*إذا احتجت إلى مساعدة، اضغط على زر التلميح في الأسفل.</p>
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

      <div className="answer an2">
        <div className="res_container right">
          <p>لقد نجحت في العثور على المسروقات</p>
          <p>عمل رائع أيها المحقق</p>
          <div className="images">
            <div>
              <p>صورة كعكة الحفل</p>
              <img src={img1} alt="صورة كعكة الحفل" />
            </div>
          </div>
          <p className="last">
            لقد تمكنت من حل قضية سرقة لم تُحل من قبل! إذا استمتعت برحلة
            التحقيق، استخدم التواصل الاجتماعي لمشاركة تجربتك
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
              }}
            />
          </div>
        </div>
      </div>

      <div className="hint1 hint">
        <div className="res_container">
          <h1 className="hint_header">تلميح!</h1>
          <p>استمع إلى ما يُقال، فقد يكون المفتاح</p>
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
          <p>الأدلة ليست دائمًا واضحة، لكن يمكن اكتشافها</p>
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
          <p>إذا اختلف الشكل، فربما هناك سر مخفي</p>
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
