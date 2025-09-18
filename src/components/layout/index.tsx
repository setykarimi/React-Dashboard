import { Box, Button, Container, Grid, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import {  useState, type ReactNode } from "react";

export default function Layout({children}: {children:ReactNode}) {
  const [fullMenu, setFullMenu] = useState<boolean>(true)

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
          <Box style={{ background: "red" }}>
            <Button onClick={() => setFullMenu((prv) => !prv)}>show</Button>
          </Box>

          <Box
            style={{
              gridColumn: "2 / -1", 
              background: "black",
              transition: "all 0.5s ease",
            }}
          >
            {children}
          </Box>
        </Grid>
      </Container>
    </Theme>
  );
}
