import { Box, Button, Container, Flex, Grid, Text, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { sidebar } from "./../../../public/statics/index";
import logo from '../../../public/assets/logo.svg'

export default function Layout() {
  const [fullMenu, setFullMenu] = useState<boolean>(true);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Theme accentColor="jade" grayColor="slate" radius="large" scaling="95%">
      <Container size="4">
        <Grid
          columns="16"
          gap="3"
          width="auto"
          p="2"
          style={{
            backgroundColor: "var(--gray-a2)",
            borderRadius: "var(--radius-3)",
            gridTemplateColumns: fullMenu
              ? "200px repeat(15, 1fr)"
              : "60px repeat(15, 1fr)",
            transition: "grid-template-columns 0.5s ease",
          }}
        >
          {/* Sidebar */}
          <Box>
            <Flex direction="column" gap="3">
              <Flex align="center" className="mx-auto gap-2 my-10"><img src={logo} alt="logo" className="w-10"/> <Text className="font-medium text-lg"> Base</Text></Flex>
              {sidebar.map((menu) => {
                const isActive = location.pathname === menu.href;
                return (
                  <Box key={menu.href} width="100%">
                    <Button
                      role="link"
                      onClick={() => navigate(menu.href)}
                      style={{
                        cursor: 'pointer',
                        width: "100%",
                        justifyContent: "start",
                        padding: "10px",
                        fontSize: "16px",
                        background: "transparent",
                        color: isActive ? "#605BFF" : "#030229" ,
                        fontWeight: isActive ? "bold" : "normal",
                        borderRadius: '0'
                      }}
                    >
                      {menu.title}
                    </Button>
                  </Box>
                );
              })}

              
            </Flex>
          </Box>

          {/* Content */}
          <Box
            style={{
              gridColumn: "2 / -1",
              transition: "all 0.5s ease",
            }}
          >
            <Outlet />
          </Box>
        </Grid>
      </Container>
    </Theme>
  );
}
