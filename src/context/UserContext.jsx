import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { URL } from "../utils/url";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  //   console.log("Rendering UserContextProvider");
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async (req, res) => {
    try {
      const res = await axios.get(URL + "/api/v1/auth/refetch", {
        withCredentials: true,
      });
      //   console.log("get user refetch ", res.data);
      setUser(res.data);
    } catch (error) {
      console.log("Failed to getUser credentials[refetch] : ", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
