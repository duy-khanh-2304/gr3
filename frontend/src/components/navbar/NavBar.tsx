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
          <div className={styles.flex_item}>
            <a href="/">Home Page</a>
          </div>
          <div className={styles.flex_item}>
            <a href="/our-team">Our Teams</a>
          </div>
          <Dropdown 
            menu={{items: [
              {
                key: 'Projects',
                label: (
                  <a href="/researches/projects">Projects</a>
                )
              },
              {
                key: 'Tool and Resources',
                label: (
                  <a href="/researches/tool-and-resources">Tool and Resources</a>
                )
              },
              {
                key: 'Publications',
                label: (
                  <a href="/researches/publication-lists">Publications</a>
                )
              }
            ]}} 
            placement="bottom" 
            arrow
            dropdownRender={(menu) => (
              <div style={contentStyle}>
                {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
              </div>
            )}
          >
            <div className={styles.flex_item}>
              <a href="/our-team">
                <Space>
                  Researches
                  <DownOutlined style={{fontSize: "12px", marginLeft: "-6px", color: "#dddddd"}}/>
                </Space>
              </a>
            </div>
          </Dropdown>
          <div className={styles.flex_item}>
            <a href="/solutions">Solutions</a>
          </div>
          <div className={styles.flex_item}>
            <a href="/courses">Training Courses</a>
          </div>
          <div className={styles.flex_item}>
            <a href="/ai-tech-blogs">AI Tech Blogs</a>
          </div>
          <Dropdown 
            menu={{items: [
              {
                key: 'News',
                label: (
                  <a href="/news">News</a>
                )
              },
              {
                key: 'Events',
                label: (
                  <a href="/events">Events</a>
                )
              },
              {
                key: 'Seminars',
                label: (
                  <a href="/seminars">Seminars</a>
                )
              }
            ]}} 
            placement="bottom" 
            arrow
            dropdownRender={(menu) => (
              <div style={contentStyle}>
                {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
              </div>
            )}
          >
            <div className={styles.flex_item}>
              <a href="/news-and-events">
                <Space>
                  News and Events
                  <DownOutlined style={{fontSize: "12px", marginLeft: "-6px", color: "#dddddd"}}/>
                </Space>
              </a>
            </div>
          </Dropdown>
          <div className={styles.flex_item}>
            <a href="/contactus">Contact</a>
          </div>
        </div>  
      </div>
    </div>
  )
}