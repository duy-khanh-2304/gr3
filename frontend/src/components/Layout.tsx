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
  const {
    header_navigation,
    footer_navigation
  } = props.layout
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
    //add eventlistener to window
    document.body.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
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
          headerNavigation={header_navigation}
        />
        {
          router.asPath !== "/" && <BreadCrumbs/>
        }
        <div>
          {props.children}
        </div>
        <Footer 
          information={props.information}
          footerNavigation={footer_navigation}
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