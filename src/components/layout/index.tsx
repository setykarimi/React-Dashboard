import { Box, Button, Container, Flex, Grid, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { useState } from "react";
import { Outlet } from "react-router";
import { sidebar } from "./../../../public/statics/index";
export default function Layout() {
  const [fullMenu, setFullMenu] = useState<boolean>(true);

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
          <Box>
            <Flex direction="column" gap="3">
              {sidebar.map((menu) => (
                <Box width="100%">
                  <Button style={{ width: '100%', background: 'transparent', color: "#030229", fontSize: '16px' , justifyContent: 'start' }} >{menu.title}</Button>
                </Box>
              ))}
              
            </Flex>
            {/* <Button onClick={() => setFullMenu((prv) => !prv)}>show</Button> */}
            
          </Box>

          <Box
            style={{
              gridColumn: "2 / -1",
              background: "",
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
