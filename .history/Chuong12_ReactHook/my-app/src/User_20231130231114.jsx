import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
const initialAddress = () => {
  // console.log('initialAddress')
  return {
    nation: "Vietnam",
    city: {
      street: "200 Dien Bien Phu, Da Nang",
      house: "Building",
    },
  };
};

const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nation: "China",
        city: {
          street: "100 Thuong Hai",
          house: "Building",
        },
      });
    }, 3000);
  });
};
export default function User() {
  // firstName
  const [firstName, setfirstName] = useState("Alex");
  // Age
  const [age, setAge] = useState(24);
  // forceRerender
  const [, forceRerender] = useState(0);
  // address
  const [address, setAddress] = useState(initialAddress);
  // function increaseAge
  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1);
  };
  // function changeName
  const changeName = () => {
    setfirstName((prevfirstName) => prevfirstName + " bi");
  };
  // function no re-render
  const rerender = () => {
    forceRerender((preState) => preState + 1);
  };
  // console.log("Re-render");
  const changeCity = () => {
    setAddress((prevAddress) => {
      const newCity = { ...prevAddress.city };
      newCity.street = "71 Nguyen Tuong Pho";
      return {
        ...prevAddress,
        city: newCity,
      };
    });
  };

  // Giống componentDidUpdate, effect function chạy lại
  // mỗi khi component re-render
  // useEffect(() => {
  //   console.log('useEffect giống componentDidUpdate')
  // })

  // Giống componentDidMount,chạy 1 lần duy nhất
  // Thường dùng để gọi Api
  useEffect(() => {
    // console.log("useEffect giống componentDidMount");
    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAdress = { ...prevAddress };
        newAdress.city = res.city;
        return newAdress;
      });
    });
    // cleanup function
    return () => {
      console.log("Huy goi API");
    };
  }, []);

  // useEffect(() => {
  //   console.log('age', age)
  //   return () => {
  //     console.log('Clean Age')
  //   }
  // }, [age])

  return (
    <div>
      <h1>User functional component</h1>
      <UserProfile
        firstName={firstName}
        age={age}
        address={address}
        increaseAge={increaseAge}
      />
      <button onClick={changeName}>Change Firstname</button>
      <button onClick={rerender}> Re-render</button>
      <button onClick={changeCity}> Change City</button>
    </div>
  );
}
