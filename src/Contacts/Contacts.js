import React, { useState, useEffect } from "react";
import "../styles.css";

const Contacts = () => {

  const [dataFromApi, setDataFromApi] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [userName, setUserName] = useState(" ");
  const [isDelited, setIsDelited] = useState(false);

  useEffect(() => {
    console.log(isLoader)
  }, [isLoader]);

  const fetchData = (data) => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: "PUT",
      body: JSON.stringify({
        title: data,
        body: "body",
      }),
    }).then((data) => data.json())
      .then((res) => {
        setDataFromApi(res.id);
        setIsLoader(true);
      })
  }

  const onChangeInput = (e) => {
    if (e.target.value.length > 3) {
      setUserName(e.target.value);
      fetchData(e.target.value);
    }
  }


  const deletUser = (userNameLocal) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${dataFromApi}`, {
      method: "DELETE",
    }).then(() => setIsDelited(true))
  }



  return (
    <div className="home-page-container">
      <p className="home-page-container__head-text">Контакты</p>
      <div>
        <p>Введите ваши данные</p>
        <input type="text" onChange={(e) => onChangeInput(e)}></input>
      </div>
      <div>
        {isLoader ? <p>Ваш id</p> : <p>Ваш id еще не загружен</p>}
        {isLoader && <p>id - {dataFromApi}</p>}
      </div>
      {isLoader && (
        <div>
          <button onClick={() => deletUser()} > 
          { isDelited ? "Пользователь удален" : `Удалить пользователя - ${userName}`}
          </button>

        </div>
      )};

    </div>
  )
}
export default Contacts;