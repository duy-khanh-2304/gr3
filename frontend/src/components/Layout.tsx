import React, { useCallback, useEffect, useState } from "react";
import Header from "./header/Header";
import '../app/globals.css'
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import styles from './layout.module.css'
import { UpOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import BreadCrumbs from "./breadCrumbs/BreadCrumbs";
import { createTheme, ThemeProvider } from "@mui/material";

export default function Layout(props: any) {
  const [showButton, setShowButton] = useState(false)
  const [stickyNavbar, setStickyNavbar] = useState(false)
  const router = useRouter()

  const onScroll = useCallback(() => {
    if(document.body.scrollTop > 350){
      setStickyNavbar(true)
      setShowButton(true)
    }else{
      setShowButton(false)
    }
  }, []);

  const onScrollToTop = () => {
    document.body.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const theme = createTheme({
    typography: {
      fontFamily: 'Nunito, san-serif',
      fontSize: 12
    }
  })

  useEffect(() => {
    document.body.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", onScroll);
    }
  }, [onScroll]);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header
          information={props.information}
        />
        <NavBar 
          logo={props.information.logo}
        />
        {
          router.asPath !== "/" && <BreadCrumbs/>
        }
        <div>
          {props.children}
        </div>
        <Footer 
          information={props.information}
        />
        {
          showButton && <div onClick={onScrollToTop} className={styles.back_to_top}>
            <UpOutlined/>
          </div>
        }
      </ThemeProvider>
    </div>
  )
}