import { HashLink } from "react-router-hash-link";
import { navLinks } from "../../configs/content";
import { Navbar } from "./styled";
import { Logo } from "../../assets";
import { BaseButton } from "../../components/button";
import { Typography } from "@mui/material";
import { Menu } from "../../components/button/menu";
import { useContext, useEffect } from "react";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";

export const Nav: React.FC<{}> = () => {
    const { openMenu, setOpenMenu } = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        if (openMenu) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "visible";
        }
    }, [openMenu]);
    const handleLogoClick = () => {
        setOpenMenu(false);
        navigate("/");
    };
    return (
        <Navbar>
            <Logo 
                onClick={handleLogoClick}
            />
            <ul>
                {navLinks.map((link, k) => {
                    return (
                        <li
                            key={k}
                        >
                            <HashLink
                                to={link.url}
                                smooth={true}
                                onClick={() => setOpenMenu(false)}
                            >
                                {link.name}
                            </HashLink>
                        </li>
                    )
                })}
            </ul>
            <BaseButton
                variant="contained"
                className="actionButton"
            >
                <Typography
                    variant="button"
                >
                    Get started
                </Typography>
            </BaseButton>
            <Menu />
        </Navbar>
    )
}