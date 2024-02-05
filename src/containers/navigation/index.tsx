import { HashLink } from "react-router-hash-link";
import { navLinks } from "../../configs/content";
import { Navbar } from "./styled";
import { Logo } from "../../assets";
import { BaseButton } from "../../components/button";
import { Typography } from "@mui/material";

export const Nav: React.FC<{}> = () => {
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
            >
                <Typography
                    variant="button"
                >
                    Get started
                </Typography>
            </BaseButton>
        </Navbar>
    )
}