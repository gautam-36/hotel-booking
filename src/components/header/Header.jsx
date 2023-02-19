import { faBed, faCalendarDays, faCar, faPerson, faPlane, faSort, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react"
import "./header.css"
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import 'react-date-range/dist/styles.css' // main css file 
import 'react-date-range/dist/theme/default.css' // theme css file 
import { useNavigate } from "react-router-dom";

const Header = (type) => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    const navigate = useNavigate()

    const handleOption = (name, operator) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operator === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }



    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } })
    }
    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    {/* here we have to naviagte after clicking this icon to hotels page */}
                    <div className="headerListItems active">
                        <FontAwesomeIcon icon={faBed} />
                        <span onClick={() => navigate("/hotels/123")} >Stays</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attraction</span>
                    </div>
                    <div className="headerListItems">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>
                {type !== "list" &&
                    <> <h1 className="headerTitle">A Lifetime of discounts? It's Genius</h1>
                        <p className="headerDescription">Get reward for your travels - unlock instant savings of 10% or more with a free Booking account</p>
                        <button className="headerBtn">Sign in / Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="headerSearchInput"
                                    onChange={e => setDestination(e.target.value)} />
                            </div>

                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={() => { setOpenDate(!openDate) }} className="headerSearchText"> {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")} `} </span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />}

                            </div>

                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult ${options.children} children ${options.room} room`}
                                    <FontAwesomeIcon icon={faSort} />
                                </span>

                                {openOptions && <div className="options">
                                    {/* for adults  */}
                                    <div className="optionsItems">
                                        <span className="optionsText">Adult</span>
                                        <div className="optionsCounter">
                                            <button disabled={options.adult <= 1} className="optionsCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionsCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    {/* for childrens */}
                                    <div className="optionsItems">
                                        <span className="optionsText">Children </span>
                                        <div className="optionsCounter">
                                            <button disabled={options.children <= 0} className="optionsCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionsCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                        </div>
                                    </div>

                                    {/* for rooms  */}
                                    <div className="optionsItems">
                                        <span className="optionsText">Room</span>
                                        <div className="optionsCounter">
                                            <button disabled={options.room <= 1} className="optionsCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className="optionsCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                        </div>
                                    </div>

                                </div>}

                            </div>

                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>

                        </div>
                    </>}
            </div>
        </div>

    )
};


export default Header;