import React, { useState } from "react";
import { useEffect } from "react";
import "../../../styles/puzzle-app.css";
import "../../../styles/response.css";
import PuzzleNav from "../../../components/puzzle/PuzzleNav";
import PuzzleNavMobile from "../../../components/puzzle/PuzzleNavMobile";
import PuzzleFooter from "../../../components/puzzle/PuzzleFooter";
import img1 from "../../../assets/death-in-the-darkness/puzzle3/images/right1.png";
import img2 from "../../../assets/death-in-the-darkness/puzzle3/images/right2.png";
import wrong from "../../../assets/shared/images/wrong.png";
import twitter from "../../../assets/shared/images/social2/twitter.svg";
import insta from "../../../assets/shared/images/social2/insta.svg";
import messanger from "../../../assets/shared/images/social2/messanger.svg";

export default function Puzzle3() {
  const check = () => {
    let checkbox = document.querySelectorAll("[type=checkbox]");
    let checkboxArray = Array.from(checkbox);
    let correct = 0;
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray[i].checked === true) {
        if (
          checkboxArray[i].name === "_10" ||
          checkboxArray[i].name === "_49"
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
    "خطاب المحقق كادي سليم",
    "صورة كابينة هاتف",
    "صورة سلاح الجريمة",
    "رسالة الي المحقق كادي سليم",
    "صورة اثر خطوة",
    "صورة مسدس مدفون",
  ];

  return (
    <main className="puzzle-page">
      <PuzzleNav caseSlug="death-in-the-darkness" active={3} />
      <PuzzleNavMobile caseSlug="death-in-the-darkness" active={3} />
      <div className="header">
        <h1>موت في الظلام</h1>
      </div>
      <div className="welcome">
        <h2 style={{ color: "#c22735" }}>مرحباً أيها المحقق</h2>
        <p> هناك دليل يمكن ان يدين احدهم</p>
        <p>ما الوثيقتان التي تحتاجها لإثبات أن أحد المشتبه بهم هو القاتل؟</p>
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
      <PuzzleFooter caseSlug="death-in-the-darkness" active={3} />

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
  };
  return (
    <div className="top-container">
      <div className="answer an0">
        <div className="res_container">
          <img src={wrong} alt=" " />

          <div className="wrong_container">
            <p>
              للأسف، ليست هذه المستندات التي تبحث عنها لإدانة القاتل الحقيقي
            </p>
            <p>لا تفقد الأمل الأدلة التي تحتاجها موجودة في ملف القضية</p>
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
              للأسف، ليست هذه المستندات التي تبحث عنها لإدانة القاتل الحقيقي
            </p>
            <p>لقد حصلت على مستند صحيح هذا يعني انك على وشك حل القضية</p>
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
          <p> لقد اثبت ان سيف هو القاتل!</p>
          <p>عمل رائع أيها المحقق</p>
          <p>تحري جيد يمكنك الأن فتح الملف الإضافي الاخير</p>

          <div className="images">
            <div>
              <p>صورة سلاح الجريمة</p>
              <img src={img2} alt="صورة سلاح الجريمة" />
            </div>
            <div>
              <p>صورة المشتبه به</p>
              <img src={img1} alt="صورة المشتبه به" />
            </div>
          </div>
          <p>
            نعم تعود هذه اللصقة الطبية إلى سيف. تهانينا! إن حلك لهذه القضية يدل
            على مدى براعتك
          </p>
          <p className="last">
            لقد تمكنت من حل قضية مغلقة! انت محقق مبدع، إذا كنت قد استمتعت في حل
            القضية فاستخدم وسائل التواصل الاجتماعي لمشاركة تجربتك
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
          <p>انت تبحث عن دليل يمكن ان يدين القاتل ويزجه في السجن</p>
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
          <p>تحتاج إلى الصور المرفقة في الملف لحل هذا اللغز</p>
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
          <p>هل لديك عدسة مكبرة؟</p>
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
