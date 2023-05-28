import React from "react";
import styles from './header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "antd";

export default function Header(props: any) {
  const {
    email,
    start_time,
    end_time,
    phone_number
  } = props.header
  const formattedStartTime = `${start_time.split(":")[0]}:${end_time.split(":")[1]}`
  const formattedEndTime = `${end_time.split(":")[0]}:${end_time.split(":")[1]}`
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Tooltip placement="bottom" title={email}>
          <div className={`${styles.email} ${styles.item}`}>
            <FontAwesomeIcon icon={faEnvelope} style={{marginRight: "5px"}}/>        
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </Tooltip>
        <Tooltip placement="bottom" title={`${formattedStartTime} - ${formattedEndTime}`}>
          <div className={`${styles.time} ${styles.item}`}>
            <FontAwesomeIcon icon={faClock} style={{marginRight: "5px"}}/>        
            <span>{formattedStartTime} - {formattedEndTime}</span>
          </div>
        </Tooltip>
        <Tooltip placement="bottom" title={phone_number}>
          <div className={`${styles.phoneNumber} ${styles.item}`}>
            <FontAwesomeIcon icon={faPhone} style={{marginRight: "5px"}}/>        
            <a href={`tel:${phone_number}`}>{phone_number}</a>
          </div>
        </Tooltip>
      </div>
    </div>
  )
}