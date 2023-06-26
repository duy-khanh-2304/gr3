import React, { useEffect, useState } from "react";
import styles from './navbar.module.css'
import { Dropdown, MenuProps, Space } from "antd";
import Link from "next/link";
import {
  DownOutlined
} from '@ant-design/icons'

export default function NavBar(props: any){

  const [menuList, setMenuList] = useState()

  const data = props.navbar
  const logo = data.find((_: any) => _.__component.indexOf('logo-navigation') !== -1)
  const linkList = data.filter((_:any) => _.__component.indexOf('logo-navigation') === -1)

  const createMenuItems = (subLinks: Array<any>) => {
    const items: MenuProps['items'] = subLinks.map((link, index) => {
      return {
        key: index,
        label: (
          <Link href={link.url}>{link.text}</Link>
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
          logo && 
          <div className={styles.logo}>
            <Link href={logo.url}>
              <img 
                src={logo.image.url} 
                alt={logo.image.name}
                width="140p"
                height="auto"
              />
            </Link>
          </div>
        }
        <div className={styles.flex_list}>
          {
            linkList.map((link: any, index: number) => {
              return (
                <div key={index}>
                  {
                    link.__component.indexOf('links-navigation') !== -1 && 
                    (
                      <div className={styles.flex_item}>
                        <Link href={link.url}>{link.text}</Link>
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
                          <Link href={link.url}>
                            <Space>
                              {link.text}
                              <DownOutlined style={{fontSize: "12px", marginLeft: "-6px", color: "#dddddd"}}/>
                            </Space>
                          </Link>
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