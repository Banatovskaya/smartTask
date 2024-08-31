import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { filtersSet } from "../store/filter.slice";
import { Filters } from "../store/filter.slice";
import "./filter.css";

export const Filter = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [userNameFilter, setUserNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [phoneFilter, setPhoneFilter] = useState("");

  const addFiltersToStore = useAppDispatch(filtersSet);

  useEffect(() => {
    const filters: Filters = { 
      name: nameFilter, 
      userName: userNameFilter, 
      email: emailFilter, 
      phone: phoneFilter 
    };
    addFiltersToStore(filters);
  }, [nameFilter, userNameFilter, emailFilter, phoneFilter]);

  return (
    <div className="search-row">
      <input
        className="name"
        type="text"
        placeholder="Search by Name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <input
        className="userName"
        type="text"
        placeholder="Search by Username"
        value={userNameFilter}
        onChange={(e) => setUserNameFilter(e.target.value)}
      />
      <input
        className="email"
        type="text"
        placeholder="Search by Email"
        value={emailFilter}
        onChange={(e) => setEmailFilter(e.target.value)}
      />
      <input
        className="phone"
        type="text"
        placeholder="Search by Phone"
        value={phoneFilter}
        onChange={(e) => setPhoneFilter(e.target.value)}
      />
    </div>
  );
};
