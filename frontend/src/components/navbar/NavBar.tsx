import React, { useEffect, useState } from "react";
import styles from './navbar.module.css'
import { Dropdown, MenuProps, Space } from "antd";
import Link from "next/link";
import {
  DownOutlined
} from '@ant-design/icons'

export default function NavBar(props: any){
  const createMenuItems = (subLinks: Array<any>) => {
    const items: MenuProps['items'] = subLinks.map((link, index) => {
      return {
        key: index,
        label: (
          <a href={link.url}>{link.text}</a>
        )
      }
    })
    return items
  }

  const contentStyle = {
    borderRadius: "3px",
    color: "#666666D9 !important",
    width: "220px"
  }

  const menuStyle = {
    color: "#666666D9",
    padding: "15px 5px"
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {
          props.logo && 
          <div className={styles.logo}>
            <Link href={"/"}>
              <img 
                src={props.logo.url} 
                alt={props.logo.name}
                width="140p"
                height="auto"
              />
            </Link>
          </div>
        }
        <div className={styles.flex_list}>
          {
            props.headerNavigation.map((link: any, index: number) => {
              return (
                <div key={index}>
                  {
                    link.__component.indexOf('links-navigation') !== -1 && 
                    (
                      <div className={styles.flex_item}>
                        <a href={link.url}>{link.text}</a>
                      </div>
                    )
                  }
                  {
                    link.__component.indexOf('dropdown-navigation') !== -1 && 
                    (
                      <Dropdown 
                        menu={{items: createMenuItems(link.sub_links)}} 
                        placement="bottom" 
                        arrow
                        dropdownRender={(menu) => (
                          <div style={contentStyle}>
                            {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
                          </div>
                        )}
                      >
                        <div className={styles.flex_item}>
                          <a href={link.url}>
                            <Space>
                              {link.text}
                              <DownOutlined style={{fontSize: "12px", marginLeft: "-6px", color: "#dddddd"}}/>
                            </Space>
                          </a>
                        </div>
                      </Dropdown>
                    )
                  }
                </div>
              )
            })
          }
        </div>  
      </div>
    </div>
  )
}