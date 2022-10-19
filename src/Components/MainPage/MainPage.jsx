/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import ListFoto from "../ListFoto/ListFoto";
import ghosts from "../../assets/ghosts.gif";
import wood from "../../assets/wood.png";
import pumpkin from "../../assets/pumpkin.png";
import styles from "./MainPage.module.scss";
import titleLogo from "../../assets/title.png";
import { clothes, princessDress, surDress } from "../../constants/constants";

const MainPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <img
          src={pumpkin}
          alt='pumpkin'
          width={100}
          style={{ marginTop: "20px" }}
        />
        <img src={titleLogo} alt='title' width={350} />
        <div style={{ width: "114%", height: "116px", position: "absolute" }}>
          <div className={styles.ghosts} ы>
            <img src={ghosts} className={styles.logo} alt='rabbit' />
          </div>
        </div>
        <div style={{ marginTop: "40px" }}>
          <p>
            Здравствуй, <br />
            мой дорогой гость!
          </p>
          <p style={{ width: "255px", fontWeight: 700 }}>
            У тебя в руках Hell Ticket - пригласительный билет на мою закрытую
            вечеринку "Ночь с Кексом", я поздравляю тебя и уже в предвкушении
            нашей встречи!
          </p>
        </div>
        <div>
          <p style={{ width: "255px", fontWeight: 700 }}>
            Адская "Ночь с Кексом" - это мероприятие в формате вечеринки,
            поэтому мы встречаемся после захода солнца. Вечеринка пройдёт в
            стилистике очень колоритного и популярного праздника всех святых -
            Хэллоуина. А теперь представь Хэллоуин во всех лучших американских
            традициях, добавь элемент шоу, неожиданности, дух сказки и мою
            безграничную фантазию - вот это авторский коктейльчик получается! :){" "}
          </p>
        </div>
        <div
          className={styles.head}
          style={{ marginTop: "-10px", position: "relative" }}
        >
          <img
            src={wood}
            alt=''
            width='100%'
            height={140}
            style={{
              transform: "rotate(180deg)",
              position: "absolute",
              top: 0,
            }}
          />
          <img
            src={wood}
            alt=''
            width='100%'
            height={140}
            style={{
              position: "absolute",
              top: 0,
              transform: "scaleY(-1)",
            }}
          />
        </div>
        <div className={styles.head} style={{ marginTop: "180px" }}>
          <h2>Мы проведём с тобой</h2>
          <h2>незабываемую ночь</h2>
          <p
            style={{
              fontWeight: 700,
              marginTop: "10px",
            }}
          >
            29 октября | в субботу с 22:22 до рассвета
          </p>
        </div>
        <div className={styles.list} style={{ marginTop: "10px" }}>
          <h2>Какой у нас план ?</h2>
          <ul>
            <li style={{ position: "relative" }}>
              <span style={{ color: "black" }}>
                Сбор гостей в 22:22, постарайся не опаздывать, чтобы не
                пропустить самое интересное! Заранее приезжать тоже не надо, я
                думаю, ты справишься с этим пунктом :)
              </span>
            </li>
            <li style={{ position: "relative" }}>
              <span style={{ color: "black" }}>
                Я слышу твой вопрос: "Так а куда ехать-то?" <br />
                Локация вечеринки по адресу: ул. Адмирала Крюса, 6, Таганрог.
              </span>
            </li>
            <li style={{ position: "relative" }}>
              <span style={{ color: "black" }}>
                С 22:22 и до рассвета не планируй ничего, я уже позаботилась об
                этом :)
              </span>
            </li>
            <li style={{ position: "relative" }}>
              <span style={{ color: "black" }}>
                Не исключено, что рассвет ты встретишь с новыми мыслями,
                желаниями и друзьями!
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.head}>
          <h2 style={{ margin: "10px 0 20px" }}>Dress-code</h2>
          <p>
            Дай волю своим самым смелым фантазиям!
            {/* <span style={{ color: "black" }}>Платья:</span> */}
            <br /> Костюм на эту вечеринку может быть абсолютно любой, вот
            несколько примеров:
          </p>
          <div style={{ marginTop: "45px" }}>
            <p>Герои фильмов и звёзды</p>
            <ListFoto data={clothes} />
          </div>

          <div style={{ marginTop: "45px" }}>
            <p>Классика жанра</p>
            <ListFoto data={princessDress} />
          </div>
          <div style={{ marginTop: "45px" }}>
            <p>Красивые и простые образы</p>
            <ListFoto data={surDress} />
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "45px",
          width: "112%",
          height: "40px",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "red", margin: "0" }}>
          До встречи на Halloween Horror Night
        </p>
      </div>
    </div>
  );
};

export default MainPage;