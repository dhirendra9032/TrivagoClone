import React, { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import RoomIcon from "@material-ui/icons/Room";
import { makeStyles } from "@material-ui/core";
import styled from "styled-components";
const useStyle = makeStyles({
  logo: {
    width: "30px",
    height: "30px",
    color: "red",
  },
});

export default function Map({ hotel }) {
  const cls = useStyle();
  const [port, setPort] = useState({
    width: 600,
    height: 600,
    latitude: hotel.map[0],
    longitude: hotel.map[1],
    zoom: 1,
  });
  const [del, setdel] = useState(null);
  //console.log(port.latitude, port.longitude, "Loats");
  return (
    <div style={{ marginTop: "50px" }}>
      <ReactMapGl
        {...port}
        mapboxApiAccessToken="pk.eyJ1IjoiYWtzaGF5a3VtYXIyNCIsImEiOiJja3N1aGFhOTMxZzZqMnF0ZmZ1eDRmNXJmIn0.ylSBEBM4k84BqHw-Hl1lOQ"
        onViewportChange={(p) => setPort(p)}
        mapStyle="mapbox://styles/akshaykumar24/cksum88qz319v18o2jzl25kao/draft"
      >
        {hotel.map((res) => (
          <Marker latitude={res.map[0]} longitude={res.map[1]}>
            <RoomIcon
              className={cls.logo}
              onMouseOver={(e) => {
                e.preventDefault();
                setdel([res.map[0], res.map[1], res]);
              }}
              onMouseOut={(e) => {
                e.preventDefault();
                setdel(null);
              }}
              // onClick={(e) => {
              //   e.preventDefault();
              //   setSel([i.map[0], i.map[1], i]);
              // }}
            />
          </Marker>
        ))}
        {del ? (
          <Popup
            onClose={() => setdel(null)}
            latitude={del[0]}
            longitude={del[1]}
          >
            <Show>
              <img src={del[2].img[0]} alt="" />
              <div>
                <h3>{del[2].name}</h3>
                <h2>₹{del[2].deals.reduce((a, b) => Math.min(a, b))}</h2>
                <h1>
                  {(
                    (del[2].review.location +
                      del[2].review.room +
                      del[2].review.services +
                      del[2].review.facilities +
                      del[2].review.vom) /
                    5
                  ).toFixed(1)}
                </h1>
              </div>
            </Show>
          </Popup>
        ) : null}
      </ReactMapGl>
    </div>
  );
}

const Show = styled.div`
  display: flex;
  gap: 10px;

  * {
    font-size: 14px;
    padding: 8px 0;
  }
  > img {
    width: 100px;
    height: 120px;
  }
  h1 {
    width: 50px;
    background-color: green;
    border: 1px solid black;
    text-align: center;
    border-radius: 25px;
    color: white;
    border: none;
    font-size: 16px;
  }
`;
