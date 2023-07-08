import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import React, { useEffect, useRef, useState } from "react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; //main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false); // toggle calendar
  const refCalendar = useRef(null);

  // Hàm xử lí khi click bên ngoài calendar
  const handleClickOutSide = (e) => {
    console.log(e.target); // e.target Kiểm tra xem đang kick chuột ở đâu

    //Kiểm tra nếu mà click bên ngoài refCalendar.current  thì set lại Open
    if (refCalendar.current && !refCalendar.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  // sử dụng useEffect để load các hành động khi trang được tải
  useEffect(() => {
    // thêm sự kiện click bên ngoài component
    document.addEventListener("click", handleClickOutSide, true);
  }, []);

  const handleSearch = () => {
    window.location.replace("/search");
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <Navbar />
        <div className={styles.header__home}>
          <div className={styles.title}>
            <h2>A lifetime of discounts? It's Genius</h2>
            <p>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free account
            </p>
            <button>Sign in/ Register</button>
          </div>
          <div className={styles.header__time}>
            <ul className={styles.header_list}>
              <li>
                <i className="fa fa-bed"></i>
                Where are you going?
              </li>
              <li>
                <i className="fa fa-calendar"></i>
                <input
                  value={`${format(
                    range[0].startDate,
                    "dd-MM-yyyy"
                  )} To ${format(range[0].endDate, "dd-MM-yyyy")}`}
                  readOnly
                  onClick={() => setIsOpen(!isOpen)}
                  className={styles.bodyCalendar}
                />
                <div ref={refCalendar}>
                  {/* show, hide Calendar */}
                  {isOpen ? (
                    <DateRange
                      className={styles.calendar}
                      editableDateInputs={true}
                      moveRangeOnFirstSelection={false}
                      minDate={new Date()}
                      onChange={(item) => setRange([item.selection])}
                      ranges={range}
                      months={1}
                      direction="horizontal"
                    />
                  ) : (
                    ""
                  )}
                </div>
              </li>

              <li>
                <i className="fa fa-female"></i>1 adult 0 children 1 room
              </li>
              <button
                type="button"
                className={styles.btnSearch}
                onClick={handleSearch}
              >
                Search
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
