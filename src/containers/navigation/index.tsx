import { HashLink } from "react-router-hash-link";
import { navLinks } from "../../configs/content";
import { Navbar } from "./styled";
import { Logo } from "../../assets";
import { BaseButton } from "../../components/button";
import { Typography } from "@mui/material";
import { Menu } from "../../components/button/menu";
import { useContext, useEffect } from "react";
import { Context } from "../../context";


export const Nav: React.FC<{}> = () => {
    const { openMenu } = useContext(Context);
    useEffect(() => {
        if (openMenu) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "visible"
        }
    }, [openMenu])
    return (
        <Navbar>
            <Logo />
            <ul>
                {navLinks.map((link, k) => {
                    return (
                        <li
                            key={k}
                        >
                            <HashLink
                                to={link.url}
                                smooth={true}
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