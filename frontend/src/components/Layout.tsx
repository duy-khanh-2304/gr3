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
  const router = useRouter()

  const onScroll = useCallback(() => {
    if(document.body.scrollTop > 350){
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
  }, []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header header={props.data.header}/>
        <NavBar navbar={props.data.nav_bar}/>
        {
          router.asPath !== "/" && <BreadCrumbs/>
        }
        <div style={{minHeight: "700px"}}>
          {props.children}
        </div>
        <Footer footerSection={props.data.footer} absoluteFooter={props.data.absolute_footer}/>
        {
          showButton && <div onClick={onScrollToTop} className={styles.back_to_top}>
            <UpOutlined/>
          </div>
        }
      </ThemeProvider>
    </div>
  )
}