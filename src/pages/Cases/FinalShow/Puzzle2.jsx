import React, { useEffect } from "react";
import "../../../styles/puzzle-app.css";
import "../../../styles/response.css";
import PuzzleNav from "../../../components/puzzle/PuzzleNav";
import PuzzleNavMobile from "../../../components/puzzle/PuzzleNavMobile";
import PuzzleFooter from "../../../components/puzzle/PuzzleFooter";
import img1 from "../../../assets/final-show/puzzle2/images/right1.png";
import img2 from "../../../assets/final-show/puzzle2/images/right2.png";
import insta from "../../../assets/shared/images/social2/insta.svg";
import messanger from "../../../assets/shared/images/social2/messanger.svg";
import twitter from "../../../assets/shared/images/social2/twitter.svg";
import wrong from "../../../assets/shared/images/wrong.png";

export default function Puzzle2() {
  const check = () => {
    let checkbox = document.querySelectorAll("[type=checkbox]");
    let checkboxArray = Array.from(checkbox);
    let correct = 0;
    for (let i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray[i].checked === true) {
        if (
          checkboxArray[i].name === "_10" ||
          checkboxArray[i].name === "_34"
        ) {
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
    "ملصق خطف الطفلة رنيم",
    "ملصق خطف الطفلة",
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
    "ورقة معلومات جمال حسن",
    "صور منزل جمال حسن",
    "محفظة جمال حسن",
    "بنك كين",
    "ورق داخل المحفظة",
    "صورة داخل المحفظة",
  ];

  return (
    <main className="puzzle-page">
      <PuzzleNav caseSlug="final-show" active={2} />
      <PuzzleNavMobile caseSlug="final-show" active={2} />
      <div className="header">
        <h1>العرض الاخير</h1>
      </div>
      <div className="welcome">
        <h2 style={{ color: "#c22735" }}>مرحباً أيها المحقق</h2>
        <p>من هو الشريك المتواطئ في عملية الخطف؟</p>
        <p>
          هل استطعت معرفة الحليف بهذه العملية ، اثبت ذلك ادناه للانتقال للجزء
          التالي من القضية
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
      <PuzzleFooter caseSlug="final-show" active={2} />

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
            <p>للأسف ليست هذه المستندات المطلوبة لمعرفة هوية الحليف</p>
            <p>لا تتوقف عن المحاولة، ستتوصل الى الحل قريباً</p>
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
            <p>للأسف ليست هذه المستندات المطلوبة لمعرفة هوية الحليف</p>
            <p>تقدم رائع لقد حصلت على مستند واحد صحيح، راجع تحرياتك</p>
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
          <p>لقد وجدت الشريك في هذه العملية</p>
          <p>عمل رائع ايها المحقق!</p>
          <div className="images">
            <div>
              <p>كشف الحساب</p>
              <img src={img1} alt="كشف الحساب" />
            </div>
            <div>
              <p>معلومات المشتبه به</p>
              <img src={img2} alt="معلومات المشتبه به" />
            </div>
          </div>
          <p>
            نعم هناك علاقة تربط المشتبه به اسامة بالمجرم، لقد تمكنت من معرفة ذلك
            من خلال كشف الحساب بعد تطابق اسم المشتبه بمعلومات الحوالة المالية
          </p>
          <p className="last">
            قمت بمعرفة امر مهم يمكن الشرطة من القبض على المتهم واستجوابه، انت
            تتقدم بشكل مبهر!
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
          <a
            className="btns"
            href="https://news-nine-red.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            مشاهدة المقطع
          </a>
        </div>
      </div>

      <div className="hint1 hint">
        <div className="res_container">
          <h2 className="hint_header">تلميح!</h2>
          <p>ابحث عن ربط بين جمال حسن وشخص اخر</p>
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
            لا تيأس الدليل الذي يثبت تواطئ الشريك بعملية الخطف موجود داخل كيس
            الأدلة
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
          <p>انت بحاجة الى استعمال التكنولوجيا</p>
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
          <h2 className="hint_header">تلميح!</h2>
          <p>ادخل على موقع البنك كين ربما تلاحظ شي</p>
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
          <input
            className="btns hint_btn"
            type="button"
            value="تلميح"
            onClick={() => {
              document.querySelector(".hint5").style.display = "none";
              document.querySelector(".hint6").style.display = "flex";
            }}
          />
        </div>
      </div>

      <div className="hint6 hint">
        <div className="res_container">
          <h1 className="hint_header">تلميح!</h1>
          <p>الرقم السري مرتبط ارتباط عاطفي</p>
        </div>

        <div>
          <input
            className="btns try"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".hint6").style.display = "none";
            }}
          />
        </div>
      </div>
    </div>
  );
}
