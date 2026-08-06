import React, { useState } from "react";
import { useEffect } from "react";
import "../../../styles/puzzle-app.css";
import "../../../styles/response.css";
import PuzzleNav from "../../../components/puzzle/PuzzleNav";
import PuzzleNavMobile from "../../../components/puzzle/PuzzleNavMobile";
import PuzzleFooter from "../../../components/puzzle/PuzzleFooter";
import img1 from "../../../assets/wedding/puzzle3/images/right1.png";
import img2 from "../../../assets/wedding/puzzle3/images/right2.png";
import insta from "../../../assets/shared/images/social2/insta.svg";
import messanger from "../../../assets/shared/images/social2/messanger.svg";
import twitter from "../../../assets/shared/images/social2/twitter.svg";
import wrong from "../../../assets/shared/images/wrong.png";

export default function Puzzle3() {
  const check = () => {
    let checkbox = document.querySelectorAll("[type=checkbox]");
    let checkboxArray = Array.from(checkbox);
    let correct = 0;
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray[i].checked === true) {
        if (checkboxArray[i].name === "_20" || checkboxArray[i].name === "_3") {
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
    "مقالة بعنوان -براءة علي يوسف جميل",
    "مقالة بعنوان -مقتل طبيبة نفسية للاطفال",
    "مقالة بعنوان -اعتقال ابو جميل بتهمة قتل",
    "تقرير الطبيب الشرعي",
    "صورة أمام مطعم سالوكا",
    "صورة الزقاق الخلفي لمطعم سالوكا",
    "صورة مسرح الجريمة",
    "تقرير الأدلة الخاتم",
    "رسالة من سعاد ايمن",
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
    "صورة غادة ماسي و مروان احمد سعيد في الطفوله من ام غادة",
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
    "صورة الشاهد - ابراهيم ساجي",
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
      <PuzzleNav caseSlug="wedding" active={3} />
      <PuzzleNavMobile caseSlug="wedding" active={3} />
      <div className="header">
        <h1>جريمة في يوم الزفاف</h1>
      </div>
      <div className="welcome">
        <h2 style={{ color: "#c22735" }}>مرحباً أيها المحقق</h2>
        <p>هل بامكانك ادانة القاتل الحقيقي؟</p>
        <p>
          أي مشتبه به قد أخفى دليلاً اساسياً يورطه في مقتل غادة ماسي؟
          <br />
          ما الوثيقتان اللتان تحتاجها لإثبات أن أحد المشتبه بهم هو القاتل؟
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
      <PuzzleFooter caseSlug="wedding" active={3} />

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
            <p>للأسف ليست هذه المستندات التي نبحث عنها لإدانة القاتل</p>
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
            <p>للأسف ليست هذه المستندات التي نبحث عنها لإدانة القاتل</p>
            <p>لقد حصلت على مستند صحيح هذا يعني أنك على وشك تحقيق العدالة</p>
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
          <p>لقد اثبت ان مروان أعسر!</p>
          <p>عمل رائع ايها المحقق!</p>
          <div className="images">
            <div>
              <p>تقرير الطبيب الشرعي</p>
              <img src={img2} alt="تقرير الطبيب الشرعي" />
            </div>
            <div>
              <p>صورة مروان وغادة في الطفولة</p>
              <img src={img1} alt="صورة مروان وغادة في الطفولة" />
            </div>
          </div>
          <p>عمل رائع، يمكنك الان فتح الملف الأضافي</p>
          <p className="last">
            لقد حللت للتو جريمة قتل لم تُحل منذ اكثر من 20 عاماً! إذا كنت قد
            استمتعت فاستخدم وسائل التواصل الاجتماعي لمشاركة تجربتك
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
          <h2 className="hint_header">تلميح!</h2>
          <p>لا تستمع لرأي سعاد ايمن عن مروان احمد سعيد</p>
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
            كذب مروان احمد سعيد في شي مهم في ورقة معلومات المشتبه به في النصف
            العلوي من الورقة. إنها ليست واحدة من الوثيقتين اللتين تبحث عنهما،
            ولكن اذا كنت تعرف ما كذب بشأنه، فسوف تكسب القضية
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
          <p>إحدى الوثيقتين التي تحتاجها هي تقرير الطبيب الشرعي</p>
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
