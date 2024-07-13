
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import MainComponent from "./Components/MainComponent";

export function getApi(url, headers) {
  return new Promise(function (resolve, reject) {
    axios({
      method: "get",
      url: url,
      headers: headers,
    })
      .then((res) => {
        resolve(res?.data);
      })
      .catch((err) => {
        console.log({ url, err });
        resolve(err?.response || err);
      });
  });
}
const getData = async () => {
  let url = `https://myportfolio-open.vercel.app/api/v1/profile`;
  let headers = {
    user: "soumyak",
  };
  return getApi(url, headers);
};
function App() {
  const [allData, setAllData] = useState({});

  let getAllData = async () => {
    let data = await getData();
    if (data?.data) {
      setAllData(data?.data);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return <MainComponent data={allData} />;
}

export default App;
