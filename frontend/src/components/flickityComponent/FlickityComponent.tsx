import React, { useEffect, useRef } from "react"
import 'flickity/dist/flickity.min.css'
import Card from "../card/Card";
export default function FlickityComponent(props: any) {

  const carousel = useRef(null);

  async function initFlickity() {
    if (typeof window !== 'undefined' && carousel.current) {
      const Flickity = (await import('flickity')).default;
      new Flickity(carousel.current, {
        cellAlign: 'left',
        groupCells: "100%",
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        draggable: true,
      });
    }
  }
  useEffect(() => {
    initFlickity();
  }, []);
  return (
    <div ref={carousel} className="carousel">
      {
        props.dataList.map((item: any, index: number) => {
          return (
            <div key={index} className="carousel-cell">
              <Card item={item} onClickItem={props.onClickItem}/>
            </div>
          )
        })
      }
    </div>
  )
}