/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client"

import type { IParallax } from "@react-spring/parallax"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import React, { useRef } from "react"

import { bash, clients, clientsMain, cloud, earth, server, stars } from "./_img"

export default function ParallaxPage() {
  const parallax = useRef<IParallax>(null!)
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: ' rgb(51 65 85)' }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: 'rgb(154 105 141)' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'rgb(165 180 252)' }} />

        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: `url(${stars})`, backgroundSize: 'cover' }} />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img src={cloud} style={{ width: "15%", marginLeft: "70%" }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={cloud}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={cloud}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img src={earth} style={{ width: "60%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{ backgroundImage: `url(${clients})`, backgroundSize: '80%', backgroundPosition: 'center' }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={server} style={{ width: "20%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={bash} style={{ width: "40%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <img src={clientsMain} style={{ width: "40%" }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
