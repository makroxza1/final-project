import image from './imImage'
import { CardMedia, Button } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import React from 'react';

const ImgFile = (props) => {
  const { funcName } = props
  const findIMG = (image()).find(img => img.key === funcName)
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {findIMG &&
        <>
          <Button onClick={handleClickOpen}>
            <CardMedia
              component="img"
              height="300"
              image={findIMG.img}
              title={findIMG.key}
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
              image={findIMG.img}
              title={findIMG.key}
              sx={{ objectFit: "contain" }}
            />
          </Dialog>
        </>
      }
    </>
  )
}

export default ImgFile