import React, { useState } from "react";

import { Menu, MenuMobile } from "./styles";

import { Link } from "react-router-dom";

import HomeIcon from "../../assets/home.svg";
import FakeIcon from "../../assets/fakenewsicon.svg";
import GroupIcon from "../../assets/group.svg";
import AboutIcon from "../../assets/about.svg";
import Logout from "../../assets/logout.svg";

function MenuComponent() {
    const [widthscreen, setWidthscreen] = useState(window.screen.width);

    return (
        <>
            {
                widthscreen < 500 && <MenuMobile id="section1"></MenuMobile> // Só renderiza se for tela de pc
            }
            {widthscreen >= 500 && ( // Só renderiza se for tela de pc
                <Menu>
                    <Link to="/detector" style={{ textDecoration: "none" }}>
                        <button>
                            <div className="cell">
                                <img className="icon" src={FakeIcon} alt="" />
                                <p>Detector</p>
                            </div>
                        </button>
                    </Link>
                    <Link to="/groups" style={{ textDecoration: "none" }}>
                        <button>
                            <div className="cell">
                                <img className="icon" src={GroupIcon} alt="" />
                                <p>Grupos</p>
                            </div>
                        </button>
                    </Link>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                        <button>
                            <div className="cell">
                                <img className="icon" src={AboutIcon} alt="" />
                                <p>Sobre Nós</p>
                            </div>
                        </button>
                    </Link>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                        <button>
                            <div className="cell">
                                <img className="icon" src={Logout} alt="" />
                                <p>Sobre Nós</p>
                            </div>
                        </button>
                    </Link>
                </Menu>
            )}
        </>
    );
}

export default MenuComponent;
