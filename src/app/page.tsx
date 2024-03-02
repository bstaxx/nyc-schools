"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {

  const [ data, setData ] = useState([])

  const getData = async () => {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/s3k6-pzi2.json', { cache: 'no-store'})
      if ( res.ok ) {
        const data = await res.json();
        console.log(data)
        setData( data )
      }

    } catch ( err ) {
      console.log( err )
    }
  }

  useEffect(() => {
    getData()
  }, [] )
  // console.log( data )
  return (
    <div data-testid="home">
      <h1 className="mb-3">NYC Schools</h1>
      <div>{data?.map( school => {
        return(
          <div className="mb-3">
            <p className="mb-0">
              <span className="fw-bold">Name: </span>
              <span className="">{school['school_name']}</span>
            </p>
            <p className="mb-0">
              <span className="fw-bold">DBN: </span>
              <span className="">{school['dbn']}</span>
            </p>
            <p className="mb-0">
              <span className="fw-bold">Overview: </span>
              <span className="">{school['overview_paragraph']}</span>
            </p>
          </div>
        )
      })}</div>
    </div>
  );
}
