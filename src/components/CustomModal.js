// Modules
import React, { useState } from 'react';

// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const BasicModal = ({ innerWidth }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 5,
    borderRadius: '8px',
  };

  return (
    <div>
      <Button 
        onClick={handleOpen} 
        style={{ 
          color: 'white', 
          border: '1px solid white', 
          borderRadius: '5px', 
          fontSize: '24px', 
          fontFamily: 'cursive',
          boxShadow: '1px 1px black', 
        }}
      >
        Детально
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={innerWidth > 700 ? {width: '50%'} : {width: '80%'}}>
          <div style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
            <Button 
              onClick={handleClose} 
            >
              <div style={{ 
                color: 'grey', 
                border: '1px solid grey', 
                borderRadius: '50%',
                padding: '5px 12px' 
                }}
              >
                X
              </div>
            </Button>
          </div>
          <Typography 
            id="modal-modal-title" 
            variant="h6" 
            component="h2" 
            sx={{ display: 'flex', justifyContent: 'center', fontFamily: 'cursive', fontSize: '32px' }}
          >
            ПРОСТІР ВЗАЄМОВІДНОСИН
          </Typography>
          <Typography id="modal-modal-description" sx={innerWidth > 700 
            ? { mt: 2, fontFamily: 'cursive', fontSize: '24px' }
            : { mt: 2, fontFamily: 'cursive', fontSize: '14px' }  
          }>
            {innerWidth > 700 ? `Зустріч проходить 2 дні поспіль по 4 години 1 раз на місяць на протязі року в 
            закритому форматі (тобто група закривається після набору і з неї не можна 
            вийти і в неї не можна потрапити)
            Ми кожного дня будуємо відносини вдома, в родині, з друзями, на роботі та в 
            багатьох інших місцях і саме відносини з людьми будують наші соціальні 
            опори і, звичайно, це має вплив на нас та наш стан, особливо, якщо якість цих 
            відносин не завжди є задовільною.
            Найважливіше в цьому проекті є те, що заходячи в нього - людина обирає 
            цілий рік пізнавати нове, пізнавати себе, свої механізми поведінки, 
            контактувати з іншими людьми, вчитися будувати теплі та міцні стосунки, 
            вчиться довіряти, відкриватися, проявляти свої почуття, прощатися зі своїми 
            стражданнями, вчиться безпечно розв’язувати конфліктні ситуації, тобто цей 
            проект відтворює для людини мікро світ в якому він може дозволити собі 
            проявлятися зовсім по-іншому  та на основі пережитого досвіду в цьому 
            оточенні зможе нові навички застосовувати у власному житті, не соромлячись 
            бути не прийнятим, вразливим, не соромлячись бути собою.
            Усі проблеми та нерозв’язуючі задачі можна вирішити тільки по-новому, але 
            багато хто не ризикує діяти по-новому з різних причин, тому деякі проблеми 
            та задачі залишаються невирішеними, а цей проект дає змогу 
            експериментувати у комфортній та безпечній атмосфері і забирати із собою 
            придбані навики.` 
            : `Зустріч проходить 2 дні поспіль по 4 години 1 раз на місяць на протязі року в 
            закритому форматі (тобто група закривається після набору і з неї не можна 
            вийти і в неї не можна потрапити)
            Ми кожного дня будуємо відносини вдома, в родині, з друзями, на роботі та в 
            багатьох інших місцях і саме відносини з людьми будують наші соціальні 
            опори і, звичайно, це має вплив на нас та наш стан, особливо, якщо якість цих 
            відносин не завжди є задовільною.
            Найважливіше в цьому проекті є те, що заходячи в нього - людина обирає 
            цілий рік пізнавати нове, пізнавати себе, свої механізми поведінки, 
            контактувати з іншими людьми, вчитися будувати теплі та міцні стосунки, 
            вчиться довіряти, відкриватися, проявляти свої почуття, прощатися зі своїми 
            стражданнями, вчиться безпечно розв’язувати конфліктні ситуації, тобто цей 
            проект відтворює для людини мікро світ в якому він може дозволити собі 
            проявлятися зовсім по-іншому  та на основі пережитого досвіду в цьому 
            оточенні зможе нові навички застосовувати у власному житті, не соромлячись 
            бути не прийнятим, вразливим, не соромлячись бути собою.`}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal; 
