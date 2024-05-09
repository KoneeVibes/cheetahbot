import { useContext, useEffect } from "react";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { navLinks } from "../../configs/content";
import { Navbar } from "./styled";
import { DexToolsLogo, Logo } from "../../assets";
import { BaseButton } from "../../components/button";
import { Stack, Typography } from "@mui/material";
import { Menu } from "../../components/button/menu";

export const Nav: React.FC<{}> = () => {
    const DEX_URL = process.env.REACT_APP_DEX_URL;
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
    const redirectToDexTools = () => {
        setOpenMenu(false);
        window.open(DEX_URL, '_blank');
    }
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
            <Stack
                className="actionButtons"
                gap={"calc(var(--flexGap)/2)"}
                direction={{ tablet: "row" }}
            >
                <BaseButton
                    variant="contained"
                >
                    <Typography
                        variant="button"
                    >
                        Get started
                    </Typography>
                </BaseButton>
                <BaseButton
                    variant="text"
                    startIcon={<DexToolsLogo />}
                    onClick={redirectToDexTools}
                >
                </BaseButton>
            </Stack>
            <Menu />
        </Navbar>
    )
}