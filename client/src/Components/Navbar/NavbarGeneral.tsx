import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useScreen from "../../hooks/useScreen";
import { theme } from "../../styles/theme";

import Link from "../Link";
import Spacer from "../Spacer";
import Text from "../Text";

import iJuniorLogo from "../../assets/iJuniorLogo.svg";

import { BsHouse } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { ImCalendar, ImDatabase } from "react-icons/im";
import { MdLogout } from "react-icons/md";

import NavbarShort from "./NavbarShort";

import {
  CenterContainer,
  FooterContainerNavbar,
  InternalContainerNavbar,
  InternalFooterContainerNavbar,
  LineHorizontal,
  LineVertical,
  LinkContainerNavbar,
  //MainContainer,
} from "../../utils/Containers/Containers";

function NavbarGeneral() {
  const navigate = useNavigate();
  const screen = useScreen();

  const [isMobile, setIsMobile] = useState(false);

  //fazer função genérica para loggout
  const loggout = () => {
    // coloque sua lógica para loggout aqui
    navigate("/login");
  }


  useEffect(
    () =>
      screen <
      Number(theme.breakpoints.t.slice(0, theme.breakpoints.t.indexOf("rem"))) *
        16
        ? setIsMobile(true)
        : setIsMobile(false),
    [screen]
  );

  return (
    <>
      <div style={{ width: "16.125rem" }}>
        <CenterContainer>
          <InternalContainerNavbar>
            <img
              src={iJuniorLogo}
              alt="iJunior"
              style={{ width: "5rem", cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
            <Spacer vertical="8" />
            <LineHorizontal />
            <Spacer vertical="10" />
            <LinkContainerNavbar>
              <Spacer horizontal="4" />
              <BsHouse
                style={{
                  cursor: "pointer",
                  width: "1.875rem",
                  height: "1.875rem",
                }}
                color={theme.colors.primary}
                onClick={() => navigate("/")}
              />
              <Spacer horizontal="4" />
              <Link path="/">
                <Text
                  variant="legenda"
                  color="greyDark"
                  hover="true"
                  bold="true"
                >
                  General Container
                </Text>
              </Link>
              {location.pathname.indexOf("general-container") !== -1 && (
                <LineVertical color="primary" weight="4" />
              )}
            </LinkContainerNavbar>
            <Spacer vertical="12" />
            <LinkContainerNavbar>
              <Spacer horizontal="6" />
              <ImDatabase
                style={{
                  cursor: "pointer",
                  width: "1.6rem",
                  height: "1.6rem",
                }}
                color={theme.colors.primary}
                onClick={() =>
                  navigate("/general-filter-container/dados-gerais")
                }
              />
              <Spacer horizontal="6" />
              <Link path="/general-filter-container/dados-gerais">
                <Text
                  variant="legenda"
                  color="greyDark"
                  hover="true"
                  bold="true"
                >
                  General Filter Container
                </Text>
              </Link>
              {location.pathname.indexOf("general-filter-container") !== -1 && (
                <LineVertical color="primary" weight="4" />
              )}
            </LinkContainerNavbar>
            <Spacer vertical="12" />
            <LinkContainerNavbar>
              <Spacer horizontal="4" />
              <ImCalendar
                style={{
                  cursor: "pointer",
                  width: "1.875rem",
                  height: "1.875rem",
                }}
                color={theme.colors.primary}
                onClick={() => navigate("/buttons")}
              />
              <Spacer horizontal="4" />
              <Link path="/buttons">
                <Text
                  variant="legenda"
                  color="greyDark"
                  hover="true"
                  bold="true"
                >
                  Buttons
                </Text>
              </Link>
            </LinkContainerNavbar>
            <Spacer vertical="40" />
            <Spacer vertical="40" />
            <Spacer vertical="40" />
            <Spacer vertical="40" />
            <FooterContainerNavbar>
              <FaUserCircle
                size="1.66rem"
                color={theme.colors.greyDarkLightHover}
              />
              <Spacer horizontal="4" />
              <InternalFooterContainerNavbar>
                <Text variant="legenda" color="greyDark" bold="true">
                  Nome do Usuário
                </Text>
                <Link path="/">
                  <Text variant="legenda2" color="greyDark" hover="true">
                    Ver perfil
                  </Text>
                </Link>
              </InternalFooterContainerNavbar>
              <Spacer horizontal="5" />
              <MdLogout
                size="1rem"
                color={theme.colors.grey}
                style={{ cursor: "pointer" }}
                onClick={() => loggout()}
              />
            </FooterContainerNavbar>
          </InternalContainerNavbar>
        </CenterContainer>
      </div>
    </>
  );
}

export default NavbarGeneral;
