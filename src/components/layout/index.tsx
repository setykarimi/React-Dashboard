import { Box, Button, Flex, Grid, Text, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { sidebar } from "./../../../public/statics/index";
import logo from '/assets/logo.svg';
import lamp from '/assets/light.svg';

export default function Layout() {
  const [fullMenu, setFullMenu] = useState<boolean>(true);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Theme
      accentColor="iris"
      grayColor="slate"
      radius="large"
      scaling="95%"
      style={{ fontFamily: "Nunito", height: "95vh", display: "flex" }}
    >
      <Grid
        columns="16"
        gap="0"
        width="100%"
        style={{
          flex: 1,
          backgroundColor: "var(--gray-a2)",
          borderRadius: "var(--radius-3)",
          gridTemplateColumns: fullMenu
            ? "200px repeat(15, 1fr)"
            : "60px repeat(15, 1fr)",
          transition: "grid-template-columns 0.5s ease",
          height: "100%",
        }}
      >
        {/* Sidebar */}
        <Box
          className="bg-white"
          style={{
            overflowY: "auto",
            height: "100%",
          }}
        >
          <Flex direction="column" gap="3" style={{ height: "100%" }}>
            <Flex align="center" className="mx-auto gap-2 my-8">
              <img src={logo} alt="logo" className="w-10" />
              <Text className="text-lg font-bold"> Base</Text>
            </Flex>

            {sidebar.map((menu) => {
              const isActive = location.pathname === menu.href;
              return (
                <Box key={menu.href} width="100%">
                  <Button
                    role="link"
                    onClick={() => navigate(menu.href)}
                    style={{
                      cursor: "pointer",
                      width: "100%",
                      justifyContent: "start",
                      padding: "10px",
                      fontSize: "14px",
                      background: "transparent",
                      color: isActive ? "#605BFF" : "#818094",
                      fontFamily: "Nunito",
                      borderRadius: "0",
                      backgroundImage: isActive
                        ? "linear-gradient(90deg,rgba(172, 169, 255, 0.32) 0%, rgba(255, 255, 255, 1) 7%, rgba(255, 255, 255, 1) 14%)"
                        : "transparent",
                    }}
                  >
                    {menu.title}
                  </Button>
                </Box>
              );
            })}

            <Box className="p-4 mt-auto bg-[#80aaff12] w-40 mx-auto h-40 rounded-2xl !flex !flex-col justify-center items-center">
              <img src={lamp} alt="lamp" className="w-36 -mt-6" />
              <Button
                style={{
                  fontFamily: "Nunito-light",
                  fontSize: "12px",
                  padding: "15px 20px",
                  borderRadius: "10px",
                }}
                size="2"
              >
                Upgrade Now
              </Button>
            </Box>
          </Flex>
        </Box>

        {/* Content */}
        <Box
          style={{
            gridColumn: "2 / -1",
            transition: "all 0.5s ease",
            padding: 15,
            height: "100%",
            overflowY: "auto", // 👈 بخش محتوا هم مستقل اسکرول بخوره
          }}
        >
          <Outlet />
        </Box>
      </Grid>
    </Theme>
  );
}
