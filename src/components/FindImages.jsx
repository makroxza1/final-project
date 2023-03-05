import image from './imImage'
import { CardMedia, Button } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import React from 'react';

const ImgFile = (key) => {
  const name = (image()).find(img => img.key === "123")
  const [open, setOpen] = React.useState()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleClickOpen}>
        <CardMedia
          component="img"
          height="300"
          image={name.img}
          title={name.key}
          sx={{ objectFit: "contain" }}
        />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <CardMedia
          component="img"
          height="auto"
          image={name.img}
          title={name.key}
          sx={{ objectFit: "contain" }}
        />
      </Dialog>
    </>
  )
}

export default ImgFile