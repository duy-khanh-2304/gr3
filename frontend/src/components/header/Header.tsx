import React from "react";
import styles from './header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";
import { formattedPhoneNumber, formattedWorkTime } from "@/utils";

export default function Header(props: any) {
  const {
    email,
    start_time,
    end_time,
    phone_number
  } = props.information
  const {formattedStartTime, formattedEndTime} = formattedWorkTime(start_time, end_time)
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Tooltip placement="bottom" title={<span style={{fontSize: "14px"}}>{email.value}</span>}>
          <div className={`${styles.email} ${styles.item}`}>
            <FontAwesomeIcon icon={faEnvelope} style={{marginRight: "5px"}}/>        
            <a href={`mailto:${email.value}`}>{email.value}</a>
          </div>
        </Tooltip>
        <Tooltip placement="bottom" title={<span style={{fontSize: "14px"}}>{`${formattedStartTime} - ${formattedEndTime}`}</span>}>
          <div className={`${styles.time} ${styles.item}`}>
            <FontAwesomeIcon icon={faClock} style={{marginRight: "5px"}}/>        
            <span>{formattedStartTime} - {formattedEndTime}</span>
          </div>
        </Tooltip>
        <Tooltip placement="bottom" title={<span style={{fontSize: "14px"}}>{phone_number.value}</span>}>
          <div className={`${styles.phoneNumber} ${styles.item}`}>
            <FontAwesomeIcon icon={faPhone} style={{marginRight: "5px"}}/>        
            <a href={`tel:${phone_number.value}`}>{formattedPhoneNumber(phone_number.value)}</a>
          </div>
        </Tooltip>
      </div>
    </div>
  )
}