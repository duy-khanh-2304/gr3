import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Typography } from "@mui/material";
import styles from './breadCrumbs.module.css'

const _defaultGetTextGenerator = (param: any, query: any) => {
  if(query[param]){
    const text = query[param] as string ?? ""
    const clearText = text.split("-").filter(_ => _.length > 0).join(" ")
    const capitalText = clearText.replace(/\b\w/g, letter => letter.toUpperCase())
    return capitalText
  }
  return null
};
const _defaultGetDefaultTextGenerator = (path: string) => {
  if(path === 'contactus'){
    return 'Contact Us'
  }else{
    return path.replace(/\b\w/g, letter => letter.toUpperCase())
  }
};

// Pulled out the path part breakdown because its
// going to be used by both `asPath` and `pathname`
const generatePathParts = (pathStr: string) => {
  const pathWithoutQuery = pathStr.split("?")[0];
  return pathWithoutQuery.split("/").filter(v => v.length > 0);
}

export default function BreadCrumbs({
  getTextGenerator = _defaultGetTextGenerator,
  getDefaultTextGenerator = _defaultGetDefaultTextGenerator
}) {
  const router = useRouter();
  const breadCrumbs = React.useMemo(function generateBreadCrumbs(){
    const asPathNestedRoutes = generatePathParts(router.asPath);
    const pathnameNestedRoutes = generatePathParts(router.pathname);

    const crumbList = asPathNestedRoutes.map((subpath, idx) => {
      // Pull out and convert "[post_id]" into "post_id"
      const param = pathnameNestedRoutes[idx].replace("[", "").replace("]", "");

      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      return {
        href, 
        textGenerator: getTextGenerator(param, router.query),
        text: getDefaultTextGenerator(subpath)
      }; 
    })

    return [{ href: "/", text: "Home", textGenerator: null }, ...crumbList];
  }, [router.asPath, router.pathname, router.query, getTextGenerator, getDefaultTextGenerator])
  
  const listCrumbs = breadCrumbs.map((crumb, index) => {
    if(index === breadCrumbs.length - 1){
      return {
        title: crumb.text
      }
    }
    return {
      title: <Link href={crumb.href}>{crumb.textGenerator ? crumb.textGenerator : crumb.text}</Link>
    }
  })
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Breadcrumbs aria-label="breadcrumb">
          {breadCrumbs.map((_: any, index: number) => {
            const finalText = _.textGenerator ? _.textGenerator : _.text
            if(index === breadCrumbs.length - 1){
              return <Typography key={index} className={styles.finalText}>{finalText}</Typography>
            }
            return <Link key={index} href={_.href ?? ""} className={styles.subpath}>{finalText}</Link>
          })}
        </Breadcrumbs>
      </div>
    </div>
  )
}