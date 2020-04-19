import React, { useEffect, useState } from "react";
import posed from "react-pose";

const Box = posed.div({
  closed: {
    y: -500,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
  },
});
const FilmBox = ({ id, title, poster, year }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <Box className="filmBox" pose={open ? "open" : "closed"}>
      <img
        src={
          poster === "N/A"
            ? "https://www.laemmle.com/sites/default/files/default_images/default-poster.jpg"
            : poster
        }
      />
    </Box>
  );
};
export default FilmBox;
