import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./pages/main/main";
import AddNew from "./pages/addNew/addNew";
import { StateContext } from "./context";
import { useEffect, useState } from "react";
import { days } from "./data";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const storedShop = JSON.parse(localStorage.getItem("shop"));
    if (storedShop) {
      setShop(storedShop);
    }
  }, []);
  const [shop, setShop] = useState([{ name: "Store Riviera", count: 1 }]);

  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState(["+998"]);
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [telegram, setTelegram] = useState("");
  const [bankDetails, setBankDetails] = useState([
    { accountNumber: "", bankName: "" },
  ]);
  const [website, setWebsite] = useState("");
  const [requisites, setRequisites] = useState(true);
  const [uniName, setUniName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [postIndex, setPostIndex] = useState();
  const [check, setCheck] = useState("");

  const addNewShop = () => {
    setShop((prevShop) => [
      ...prevShop,
      {
        name,
        size,
        workingDays: days,
        phoneNumbers,
        facebook,
        instagram,
        telegram,
        website,
        requisites,
        uniName,
        address,
        country,
        postIndex,
        bankDetails,
        check,
        count: 2,
      },
    ]);
    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("shop", JSON.stringify(shop));
  }, [shop]);
  console.log(name);
  return (
    <StateContext.Provider
      value={{
        shop,
        setShop,
        setName,
        setSize,
        setPhoneNumbers,
        setFacebook,
        setInstagram,
        setTelegram,
        setWebsite,
        setRequisites,
        setUniName,
        setAddress,
        setCountry,
        setPostIndex,
        setBankDetails,
        setCheck,
        phoneNumbers,
        requisites,
        bankDetails,
        check,
        addNewShop,
        name,
        size,
      }}
    >
      <div className="flex w-full">
        <Sidebar />
        <div className="ml-64 w-full">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="add" element={<AddNew />} />
          </Routes>
        </div>
      </div>
    </StateContext.Provider>
  );
}

export default App;
