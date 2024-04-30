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
          //   maxWidth: 500,
          borderRadius: 'md',
          p: 3,
          boxShadow: 'lg',
        }}>
        <ModalClose variant="plain" sx={{ m: 1 }} />
        {/* <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}>
          This is the modal title
        </Typography>
        <Typography id="modal-desc" textColor="text.tertiary">
          Make sure to use <code>aria-labelledby</code> on the modal dialog with
          an optional <code>aria-describedby</code> attribute.
        </Typography> */}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

            marginTop: '3rem',
            gap: '2rem',
            width: '60dvw',
          }}>
          <a
            href="#section1-about-me"
            style={{ paddingLeft: '20%' }}
            onClick={handleClick}>
            <span className="menu-text-number">01.</span>
            <h3
              style={{
                fontSize: '30px',
                color: '#0f1b61',
              }}>
              About
            </h3>
          </a>

          <a
            style={{ paddingLeft: '20%' }}
            href="#section2-projects"
            onClick={handleClick}>
            <span className="menu-text-number">02.</span>
            <h3
              style={{
                fontSize: '30px',
                color: '#0f1b61',
              }}>
              Work
            </h3>
          </a>
          <a
            style={{ paddingLeft: '20%' }}
            href="#section3-contact"
            onClick={handleClick}>
            <span className="menu-text-number">03.</span>
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
