import React from "react";
import style from "../card/style.module.css";
import { Widget } from "@uploadcare/react-widget";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFavorites,
  setDislike,
  setFile,
  setError,
} from "../../redux/action";
import { ReactComponent as Apply } from "../card/Group.svg";
import { ReactComponent as Lable } from "../card/Text-Label.svg";
import { ReactComponent as Star } from "../card/Icon-Favorite-Star-Empty.svg";
import { ReactComponent as StarFilled } from "../card/Icon-Favorite-Star-Filled.svg";
import { ReactComponent as Dislike } from "../card/Icon-Dislike-Empty.svg";
import { ReactComponent as DislikeFilled } from "../card/Icon-Dislike-Filled.svg";
import { ReactComponent as Error } from "../card/Error.svg";
function Badges({ text }) {
  return <div>{text}</div>;
}

export default function Card({ card }) {
  const { id, img, status, vacancy, logo, salary, company, city, badges } =
    card;
  const dispatch = useDispatch();
  const { favorites, dislikes, file, error } = useSelector((state) => state);
  const isFavorites = favorites.find((favorites) => favorites.id === id);
  const newFavorite = favorites.filter((favorite) => favorite.id !== id);
  const isDislike = dislikes.find((dislike) => dislike.id === id);
  const newDislike = dislikes.filter((dislike) => dislike.id !== id);
  const isFileTrue = file.find((uuid) => uuid.uuid === id);
  function toLocalStorage(vacancy) {
    localStorage.setItem("favorite", JSON.stringify(vacancy));
  }
  function toLocalStorageDislike(vacancy) {
    localStorage.setItem("dislike", JSON.stringify(vacancy));
  }
  function toLocalStorageFile(file) {
    localStorage.setItem("file", JSON.stringify(file));
  }
  function handlerFavorite() {
    if (isFavorites) {
      toLocalStorage([...newFavorite]);
      return dispatch(setFavorites([...newFavorite]));
    } else {
      toLocalStorage([...favorites, card]);
      dispatch(setFavorites([...favorites, card]));
      toLocalStorageDislike([...newDislike]);
      return dispatch(setDislike([...newDislike]));
    }
  }
  function handlerDislike() {
    if (isDislike) {
      toLocalStorageDislike([...newDislike]);
      return dispatch(setDislike([...newDislike]));
    } else {
      toLocalStorageDislike([...dislikes, card]);
      dispatch(setDislike([...dislikes, card]));
      toLocalStorage([...newFavorite]);
      return dispatch(setFavorites([...newFavorite]));
    }
  }
  useEffect(() => {
    const favoriteStorage = JSON.parse(localStorage.getItem("favorite"));
    const dislikeStorage = JSON.parse(localStorage.getItem("dislike"));
    const fileStorage = JSON.parse(localStorage.getItem("file"));
    if (favoriteStorage) {
      dispatch(setFavorites(favoriteStorage));
    }
    if (dislikeStorage) {
      dispatch(setDislike(dislikeStorage));
    }
    if (fileStorage) {
      dispatch(setFile(fileStorage));
    }
  }, [dispatch]);

  return (
    <div className={style.content}>
      <div
        className={`${style.bg}  ${
          isDislike || Boolean(isFileTrue) ? style.opacity : ""
        }`}
      >
        <img src={img} alt="img" />
      </div>
      <div className={style.container}>
        <div
          className={`${style.status} ${
            isDislike || Boolean(isFileTrue) ? style.opacity : ""
          }`}
        >
          {status}
        </div>
        {isDislike && (
          <div className={style.dislikeText}>
            <span>Неинтересная</span>
          </div>
        )}
        {Boolean(isFileTrue) && (
          <div className={style.applied}>
            <span>Вы откликнулись</span>
          </div>
        )}
        <div
          className={`${style.vacancy} ${
            isDislike || Boolean(isFileTrue) ? style.opacity : ""
          }`}
        >
          <h3>{vacancy}</h3>
          <img src={logo} alt="logo" />
        </div>

        <div
          className={`${style.salary} ${
            isDislike || Boolean(isFileTrue) ? style.opacity : ""
          }`}
        >
          {salary.price} ₴ <span>{salary.type}</span>
        </div>
        <div className={style.company}>
          <span>{company}</span> <span>{city}</span>
        </div>
        <div
          className={`${style.badges} ${
            isDislike || Boolean(isFileTrue) ? style.opacity : ""
          }`}
        >
          {badges.map((badge, i) => (
            <Badges key={i} text={badge} />
          ))}
        </div>
        <div className={style.footerCard}>
          <div className={style.action}>
            {Boolean(isFileTrue) ? (
              ""
            ) : (
              <label>
                <Apply />
                <Widget
                  onChange={(e) => {
                    if (e.size < 2000000) {
                      e.uuid = id;
                      toLocalStorageFile([...file, e]);
                      dispatch(setFile([...file, e]));
                    } else dispatch(setError(id));
                  }}
                  publicKey="e721f9ee3769e573ca2a"
                  imagesOnly
                  // inputAcceptTypes=".doc, .docx, .txt, .rtf, .odt, .pdf"
                  tabs="file"
                  preloader={false}
                  clearable
                />
                <Lable />
              </label>
            )}
            <div className={style.review}>
              <span onClick={handlerFavorite}>
                {isFavorites ? <StarFilled /> : <Star />}
              </span>
              <span onClick={handlerDislike}>
                {isDislike ? <DislikeFilled /> : <Dislike />}
              </span>
            </div>
            {Boolean(isFileTrue) && (
              <div className={style.publication}>
                Отправлено резюме{" "}
                <a href={isFileTrue.originalUrl}>«{isFileTrue.name}»</a>
              </div>
            )}
          </div>
          <div className={style.time}>37 минут назад</div>
        </div>
      </div>
      {error === id && (
        <div className={style.error}>
          <Error />
          Ёлки-палки, этот файл просто огромный и не помещается в наш сервер
        </div>
      )}
    </div>
  );
}
