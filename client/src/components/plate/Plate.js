import React, { useState } from "react";
import Picture from "../picture/Picture";
import { useDrop } from "react-dnd";
import "./plate.scss";

const PictureList = [
  {
    id: 1,
    name: "Chicken",
    url: "https://www.nicepng.com/png/full/120-1208472_chicken-chop-raw-chicken-breast-png.png",
  },
  {
    id: 2,
    name: "Potatotes",
    url: "https://www.pngmart.com/files/3/Potato-PNG-Clipart.png",
  },
  {
    id: 3,
    name: "Leeks",
    url: "https://www.pngkey.com/png/full/900-9006069_leeks-leek.png",
  },
  {
    id: 4,
    name: "Onions",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3FdbM7sa47CD9HJwpz_LnI2pbSw957265ZCQav5r1XX0_7I0&s",
  },
  {
    id: 5,
    name: "Brocoli",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznK9-el9Cq4zZ2zBwxBaJtnzzDtM4mA0tpZZyusXf1s5vTS8&s",
  },
  {
    id: 6,
    name: "Rib Eye Steak",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJPpiQRkqfmBy3DWjWHLlXsiGQ2AO1G8_-eFPttBnucsz2k49&s",
  },
];

function Plate() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };

  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture, id) => {
          return (
            <Picture key={id} url={picture.url} name={picture.name} id={picture.id} />
          );
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture, id) => {
          return (
            <Picture key={id} url={picture.url} name={picture.name} id={picture.id} />
          );
        })}
      </div>
    </>
  );
}

export default Plate;
