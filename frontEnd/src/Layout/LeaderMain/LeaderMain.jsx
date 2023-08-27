import { useState, useEffect } from "react";
import DashNavbar from "../../Components/DashNavbar/DashNavbar";
import design from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Hero from "../../assets/dash_hero.png";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";

const LeaderMain = () => {
  const { auth } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("general");

  useEffect(() => {
    // Simulate user data
    const data = [
      { name: "John", group: "abakpa", bottles: 10 },
      { name: "Jane", group: "enugu", bottles: 20 },
      { name: "Jack", group: "abakpa", bottles: 5 },
      { name: "Jill", group: "enugu", bottles: 15 },
      // ...
      { name: "Kate", group: "abakpa", bottles: 8 },
      { name: "Kevin", group: "enugu", bottles: 18 },
    ];

    setUsers(data);
  }, []);
  const groups = [
    { value: "general", label: "General" },
    { value: "enugu", label: "Enugu" },
    { value: "abakpa", label: "Abakpa" },
  ];

  const handleGroupChange = (e) => {
    setSelectedGroup(e.target.value);
  };

  const filteredUsers =
    selectedGroup === "general"
      ? users
      : users.filter((user) => user.group === selectedGroup);

  const sortedUsers = filteredUsers.sort((a, b) => b.bottles - a.bottles);

  const renderUser = (user, index) => (
    <div key={user.name} className={design.trow}>
      <p className={design.rank}>{index + 1}</p>
      <p>{user.name}</p>
      <p>{user.group}</p>
      <p>{user.bottles}</p>
    </div>
  );

  const navigate = useNavigate();
  function handleRecycle() {
    navigate("/dashboard/start-recycling");
  }

  return (
    <div
      className={design.LeaderMain_wrapper}
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <DashNavbar title="Leaderboard" />
      <div className={design.LeaderMain_hero}>
        <div>
          <h2>Hello {auth?.user?.fullName}</h2>
          <p>
            Check out the Leaderboard to see where you rank among other users.
          </p>
          {/* <Link to="start-recycling"> */}
          <Button
            onClick={handleRecycle}
            content="Start recycling"
            style={{
              backgroundColor: "#7F56D9",
              border: "none",
              marginLeft: "0",
            }}
          />
          {/* </Link> */}
        </div>
        <img src={Hero} />
      </div>
      <div className={`${design.LeaderMain_middle} ${design.grayed_out}`}>
        <div className={design.LeaderMain_tit_flex}>
          <p>Top Leads</p>
          <div>
            <label htmlFor="group-select">Select Group:</label>
            <select id="group-select" onChange={handleGroupChange}>
              {groups.map((group) => (
                <option key={group.value} value={group.value}>
                  {group.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={design.LeaderMain_board}>
          {sortedUsers.map(renderUser)}
        </div>
      </div>
    </div>
  );
};

export default LeaderMain;
