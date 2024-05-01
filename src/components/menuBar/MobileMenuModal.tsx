import { Modal, ModalClose, Sheet } from '@mui/joy';
import React, { SetStateAction } from 'react';

export default function MobileMenuModal({
  setIsMenuClicked,
  open,
}: {
  setIsMenuClicked: React.Dispatch<SetStateAction<boolean>>;
  open: boolean;
}) {
  const handleClick = () => setIsMenuClicked(false);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={handleClick}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10%',
      }}>
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: 'md',
          p: 3,
          boxShadow: 'lg',
        }}>
        <ModalClose variant="plain" sx={{ m: 1 }} />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: '3rem',
            gap: '2rem',
            width: '60dvw',
          }}>
          <a href="#section1-about-me" onClick={handleClick}>
            <h3
              style={{
                fontSize: '30px',
                color: '#0f1b61',
                marginTop: '0',
              }}>
              About
            </h3>
          </a>

          <a href="#section2-projects" onClick={handleClick}>
            <h3
              style={{
                fontSize: '30px',
                color: '#0f1b61',
              }}>
              Work
            </h3>
          </a>
          <a href="#section3-contact" onClick={handleClick}>
            <h3
              style={{
                fontSize: '30px',
                color: '#0f1b61',
              }}>
              Contact
            </h3>
          </a>
        </div>
      </Sheet>
    </Modal>
  );
}
