import React, { useEffect, useState } from 'react'
import styles from './content.module.css'
import parse, { domToReact } from 'html-react-parser'
import TeamCard from '../teamCard/TeamList'
import { getAllTeams } from '@/clientApi'
import { createId } from '@/utils'
import { Grid } from '@mui/material'
import { ArrowLeftOutlined, ArrowRightOutlined, FullscreenExitOutlined } from '@ant-design/icons'

export default function Content(props: any){
  const [teams, setTeams] = useState<any>([])
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const content = props.content

  const optionParse = {
    replace: (domNode: any) => {
      if (domNode.name === 'oembed') {
        return (
          <iframe 
            width="100%" 
            height="438px" 
            src={domNode.attribs.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        )
      }
    }
  }

  const formatDate = (dateString: string) => {
    const [month, day, year] = dateString.split('-');
  
    const formattedDate = `${month}/${year}`;
  
    return formattedDate;
  };

  const sections = content
    .filter((component: any) => component.__component === "content.paragraph-with-title")
    .map((component: any) => {
      if(component.sub_section){
        return {
          title: component.title,
          sub_titles: component.sub_section.map((section: any) => section.title)
        }
      }
      return {
        title: component.title
      }
    })
  const information = content.find((_: any) => _.__component === "content.information")
  const imageHeader = information?.image_header

  const imageUrls = content
    .find((component: any) => component.__component === "content.light-box")?.images
    .map((image: any) => {
      return image.url
    })

  const openLightbox = (index: any) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(imageUrls.length - 1)
      return
    };
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const goToNext = () => {
    if (currentImageIndex === imageUrls.length - 1) {
      setCurrentImageIndex(0)
      return
    };
    setCurrentImageIndex(currentImageIndex + 1);
  };

  useEffect(() => {
    ;(async () => {
      if(content.find((_: any) => _.__component === 'content.intro-team')){
        const teams = await getAllTeams()
        setTeams([...teams])
      }
    })()
  }, [])

  return (
    <div>
      {content.map((component: any, index: number) => {
        switch(component.__component){
          case "content.intro-team":
            return(
              <div key={index}>
                {parse(component.content, optionParse)}
                {teams.length > 0 && <TeamCard teams={teams}/>}
              </div>
            )
          case "content.paragraph":
            return (
              <div key={index}>
                {parse(component.content, optionParse)}
              </div>
            )
          case "content.pre-formatted-paragraph":
            return(
              <div key={index}>
                <pre className={styles.preformatted}>
                  {parse(component.content, optionParse)}
                </pre>
              </div>
            )
          case "content.paragraph-with-title":
            const indexSection = sections.findIndex((_: any) => _.title === component.title)
            const idString = `${indexSection + 1}_${createId(component.title)}`
            const subIdString = sections[indexSection].sub_titles.map((subTitle: any, subIndex: number) => {
              return `${indexSection + 1}_${subIndex + 1}_${createId(subTitle)}`
            })
            return (
              <div key={index} id={idString}>
                <div className={styles.titleSection}>{`${indexSection + 1}. `}{component.title}</div>
                {
                  component.content && <div>{parse(component.content, optionParse)}</div>  
                }
                {
                  component.sub_section.length > 0 && component.sub_section.map((section: any, index: number) => {
                    return (
                      <div key={index} id={subIdString[index]}>
                        <div className={styles.subTitleSection}>{`${indexSection + 1}.${index + 1}. `}{section.title}</div>
                        <div>
                          {parse(section.content, optionParse)}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            )
          case "content.information":
            return (
              <Grid container style={{marginBottom: '20px'}}>
                <Grid item lg={4}>
                  <div className={styles.entry_information}>
                    <h2>Information</h2>
                    <ul>
                      <li><span className={styles.heading}>PI:</span>{" "}{information.persional_information}</li>
                      <li><span className={styles.heading}>Time:</span>{" "}{formatDate(information.start_time)} - {formatDate(information.start_time)}</li>
                      {
                        information.code && <li><span className={styles.heading}>Code:</span>{" "}{information.code}</li>
                      }
                      <li><span className={styles.heading}>Funding:</span>{" "}{information.funding}</li>
                      <li><span className={styles.heading}>Main areas:</span>{" "}{information.main_areas}</li>
                    </ul>
                  </div>
                </Grid>
                <Grid item lg={8}>
                  {
                    !!imageHeader && <div className={styles.entry_image_header}>
                      <img 
                        src={imageHeader.url} 
                        alt={imageHeader.name}
                        style={{width: "100%", height: "inherit"}}
                      />
                    </div>
                  }
                </Grid>
              </Grid>
            )
          case "content.lightbox":
            return (
              <div key={index}>
                {isOpen && (
                  <div className={styles.lightbox_overlay}>
                    <div className={styles.lightbox_exitButton} onClick={closeLightbox}>
                      <FullscreenExitOutlined />
                    </div>
                    <div className={styles.lightbox_container}>
                      <button className={styles.lightbox_btn_left} onClick={goToPrevious}>
                        <ArrowLeftOutlined />
                      </button>
                      <img
                        className={styles.lightbox_image}
                        src={imageUrls[currentImageIndex]}
                        alt="Lightbox Image"
                      />
                      <button className={styles.lightbox_btn_right} onClick={goToNext}>
                        <ArrowRightOutlined />
                      </button>
                    </div>
                  </div>
                )}

                <div className={styles.image_gallery}>
                  {imageUrls.map((imageUrl: any, index: number) => (
                    <img
                      key={index}
                      className={styles.gallery_image}
                      src={imageUrl}
                      alt={`Gallery Image ${index}`}
                      onClick={() => openLightbox(index)}
                    />
                  ))}
                </div>
              </div>
            )
          case "content.button": 
            return (
              <div key={index}>
                <a href={component.url} className={styles.button}>{component.text}</a>
              </div>
            )
        }
      })}
    </div>
  )
}