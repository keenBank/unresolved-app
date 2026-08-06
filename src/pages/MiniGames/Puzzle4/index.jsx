import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import "../../../styles/response.css";
import "./puzzle4.css";

import img1 from "../../../assets/puzzle4/images/right1.png";
import img2 from "../../../assets/puzzle4/images/right2.png";
import img3 from "../../../assets/puzzle4/images/top1.png";
import wrong from "../../../assets/shared/images/wrong.png";
import insta from "../../../assets/shared/images/social2/insta.svg";
import messanger from "../../../assets/shared/images/social2/messanger.svg";
import twitter from "../../../assets/shared/images/social2/twitter.svg";

const activeStyle = { color: "#c22735" };

function Puzzle4Nav() {
  return (
    <nav className="puzzle4-nav">
      <div className="nav_bar">
        <Link to="/">الرئيسية</Link>
        <Link to="/minigames/puzzle4">مهمة 1</Link>
        <Link to="/minigames/puzzle4">مهمة 2</Link>
        <Link to="/minigames/puzzle4" style={activeStyle}>
          مهمة 3
        </Link>
      </div>
    </nav>
  );
}

function Puzzle4NavMobile() {
  return (
    <div className="puzzle4-nav-mobile">
      <div
        className="menu"
        onClick={() => {
          document.querySelector(".mobile_nav").classList.toggle("visible");
        }}
      >
        <HiOutlineMenu />
      </div>
      <div className="mobile_nav">
        <Link to="/">الرئيسية</Link>
        <Link to="/minigames/puzzle4">مهمة 1</Link>
        <Link to="/minigames/puzzle4">مهمة 2</Link>
        <Link to="/minigames/puzzle4" style={activeStyle}>
          مهمة 3
        </Link>
      </div>
    </div>
  );
}

function Puzzle4Footer() {
  return (
    <footer className="puzzle4-footer">
      <div className="footer_list">
        <ul>
          <li>
            <span></span>
            <Link to="/">الرئيسية</Link>
          </li>
          <li>
            <span></span>
            <Link to="/minigames/puzzle4">مهمة 1</Link>
          </li>
          <li>
            <span></span>
            <Link to="/minigames/puzzle4">مهمة 2</Link>
          </li>
          <li>
            <span></span>
            <Link to="/minigames/puzzle4" style={activeStyle}>
              مهمة 3
            </Link>
          </li>
        </ul>
      </div>
      <div className="mid_col">
        <p className="footer_p">
          الاهتمام بالتفاصيل الصغيرة هو السبيل الوحيد لحل أصعب القضايا
        </p>
      </div>
    </footer>
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
            <p>للأسف، هذه ليست المستندات التي نبحث عنها.</p>
            <p>لا تستسلم. لا يمكنك ترك زياد عامر يفلت من هذا</p>
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
            <p>للأسف، هذه ليست المستندات التي نبحث عنها.</p>
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

      <div className="answer an4">
        <div className="res_container">
          <img src={wrong} alt=" " />

          <div className="wrong_container">
            <p>معذرة، ليس هذا السطر الي نبحث عنه</p>
            <p>لا تستسلم. أنت قريب جداً!</p>
          </div>
        </div>

        <div>
          <input
            className="btns try"
            type="button"
            value="إعادة المحاولة"
            onClick={() => {
              document.querySelector(".an4").style.display = "none";
              document.querySelector(".an0").style.display = "none";
            }}
          />
          <input className="btns hint_btn" type="hidden" value="تلميح" />
        </div>
      </div>

      <div className="answer an2">
        <div className="res_container right">
          <p>لقد فعلتها!</p>
          <p>عمل رائع أيها المحقق</p>
          <p>لقد أثبتت أن زياد عامر كذب بشأن كون الشمس في عينيه!</p>

          <div>
            <div>
              <img src={img3} alt=" " />
            </div>
            <p>قال زياد ان الشمس كانت في عينيه وانه بحاجه للنظارة الشمسية</p>
          </div>
          <div className="images">
            <div>
              <img src={img2} alt=" " />
            </div>
            <div>
              <img src={img1} alt=" " />
            </div>
          </div>
          <p>لكنه كان يسافر غربا ويتجه شمالا-كانت الشمس وراءه</p>

          <p className="last">
            استخدم، وسائل التواصل الاجتماعي لإخبار الجميع أنك كشفت كذب زياد
            بشأن الحادث
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
          <p>إحدى المستندات التي ستحتاجها هي استجواب المشتبه به.</p>
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
            لا توجد بوصلة في الرسم التخطيطي للحادث، لذا لا يمكنك تحديد الاتجاه
            الشمالي أو الجنوبي أو الشرقي أو الغربي.
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
            شروق الشمس في تمام الساعة 6:55 صباحًا وغرب في 18 اغسطس 2006 الساعة
            7:55 مساءً.
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

export default function Puzzle4() {
  const [show, setShow] = useState(false);
  const [names, setNames] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://detectives-5126dc7943c5.herokuapp.com/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setNames(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const check = (type) => {
    let checkbox = document.querySelectorAll("[type=checkbox]");
    let checkboxArray = Array.from(checkbox);
    if (type === "radio") {
      let correct = 2;
      for (let i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray[i].checked === true) {
          if (checkboxArray[i].name === "__39") {
            correct += 1;
          }
        }
      }
      answerRadio(correct);
    } else {
      let correct = 0;
      for (let i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray[i].checked === true) {
          if (
            checkboxArray[i].name === "_2" ||
            checkboxArray[i].name === "_6"
          ) {
            correct += 1;
          }
        }
      }
      answer(correct);
    }
  };

  const answer = (correct) => {
    if (correct === 0) {
      document.querySelector(".an0").style.display = "flex";
    } else if (correct === 1) {
      document.querySelector(".an1").style.display = "flex";
    } else if (correct === 2) {
      setShow(true);
    }
  };
  const answerRadio = (correct) => {
    if (correct === 2) {
      document.querySelector(".an4").style.display = "flex";
    } else if (correct === 3) {
      document.querySelector(".an2").style.display = "flex";
      document.querySelector(".an0").style.display = "none";
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
    if (selected === 2 && show === false) {
      document.querySelector("#submit").addEventListener("click", () => {
        check("normal");
      });
    } else if (selected === 1 && show === true) {
      document.querySelector("#submit").addEventListener("click", () => {
        check("radio");
      });
    }
  };

  useEffect(() => times());
  const documents = [
    "مقالة جريدة",
    "صورة الضحية راجا باهي",
    "تقرير الشرطة",
    "صورة المشتبه بها زياد عامر",
    "ورقة تهديد",
    "صورة موقع الحادث",
    "استجواب زياد عامر رافي",
    "افادة الضابط فاروق",
    "صورة الضابط فاروق",
    "افادة أمريتا باها",
    "صورة الضابط فاروق",
  ];

  const rows = [
    "001", "002", "003", "004", "005", "006", "007", "008", "009", "010",
    "011", "012", "013", "014", "015", "016", "017", "018", "019", "020",
    "021", "022", "023", "024", "025", "026", "027", "028", "029", "030",
    "031", "032", "033", "034", "035", "036", "037", "038", "039", "040",
    "041", "042", "043", "044", "045", "046", "047", "048", "049", "050",
    "051",
  ];
  return (
    <main className="App puzzle4-page">
      <Puzzle4Nav />
      <Puzzle4NavMobile />
      <div className="banner_wrapper">
        <div className="banner">
          <div
            className="marquee_wrapper"
            style={{ animationDuration: `${names.length * 2}s` }}
          >
            <div className="marquee">
              <span className="dot"></span>
              <span className="master">Master Detectives</span>
              <span className="dot"></span>
              {names.map((data, index) => (
                <React.Fragment key={index}>
                  <span> {data.name} </span>
                  <span className="dot"></span>
                  <span className="master">Master Detectives</span>
                  <span className="dot"></span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <h1> لا أحد يعلم</h1>
      </div>
      {show === false ? (
        <div className="welcome">
          <h2 style={{ color: "#c22735" }}>مرحباً أيها المحقق</h2>
          <p> اثبت ان زياد كذب بشأن الحادث</p>
          <p>ما الوثيقتان التي تثبت أن الحادث لم يكن حادثًا؟</p>
        </div>
      ) : (
        <div className="welcome">
          <h2 style={{ color: "#c22735" }}>مرحباً أيها المحقق</h2>
          <p>أي سطر من الاستجواب يتضمن كذبة زياد؟</p>
        </div>
      )}

      <div className="main_container">
        <div className="documents">
          {show === false
            ? documents.map((doc, id) => (
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
                        if (__selected > (show ? 1 : 2)) {
                          __box.checked = false;
                          return;
                        }
                      }
                      __box.parentNode.classList.toggle("red");
                      times();
                    }}
                  />
                  <span
                    key={`__${id}`}
                    className="checkmark"
                    id={`_${id}`}
                  ></span>
                  <span className="selection">{doc}</span>
                </label>
              ))
            : rows.map((row, id) => (
                <label key={`__${id}`}>
                  <input
                    className="checkbox"
                    type="checkbox"
                    name={`__${id}`}
                    key={id}
                    onClick={(e) => {
                      const __box = e.target;
                      if (__box.checked) {
                        const __selected = Array.from(
                          document.querySelectorAll("[type=checkbox]")
                        ).filter((c) => c.checked).length;
                        if (__selected > (show ? 1 : 2)) {
                          __box.checked = false;
                          return;
                        }
                      }
                      __box.parentNode.classList.toggle("red");
                      times();
                    }}
                  />
                  <span
                    key={`__${id}`}
                    className="checkmark"
                    id={`_${id}`}
                  ></span>
                  <span className="selection">{row}</span>
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
      <Puzzle4Footer />

      <Response />
    </main>
  );
}
