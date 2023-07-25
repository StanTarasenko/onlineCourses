// Modules
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// MUI
import { Button, Box } from '@mui/material';
import logo from '../../icons/logoAN.jpg';
import admin from '../../icons/pic1.JPG';
import project from '../../icons/IMG_7667.JPG';
import finalPic from '../../icons/IMG_7670.JPG';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// Data
import coursesBaseUK from '../../mockBase/coursesBase';
// import { personalInfo } from '../../mockBase/personalInfo';

// Components
import Loader from '../../components/Loader';
import Expirience from '../../components/Expirience';

// Styles
import styles from './styles.module.scss';
import CustomModal from '../../components/CustomModal';

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

const HomePage = () => {
  const isCheckId = localStorage.getItem('isMemorize');
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const isLoading = localStorage.getItem('isShowLoader');
  const [isArrowShow, setIsArrowShow] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (isCheckId === 'true') {
      const id = localStorage.getItem('sectionId');
      const element = document.getElementById(`section-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      localStorage.setItem("isMemorize", false);
    }
  }, [isCheckId]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem('isShowLoader', true);
      AOS.init({
        offset: 300,
        duratation: 500,
      })
    }, 1500)
    return () => clearTimeout(timeout)
}, []);

useEffect(() => {
  const timeout = setTimeout(() => {
    setIsArrowShow(true);
  }, 1500)
  return () => clearTimeout(timeout)
}, []);

  return (
    <>
      {isLoading === 'false'
      ? <Loader /> 
      : <div className={styles['container']} onScroll={() => AOS.init({
        offset: 300,
        duratation: 500,
    })}>
      <div className={styles['header']}>
        <div>
          <img src={logo} alt='logo' height="50px" width="50px" style={{ borderRadius: "50%"}} />
        </div>
        <div className={styles['langContainer']}>
          <Button variant="text">UA</Button>
          <Button variant="text">RU</Button>
        </div>
      </div>
      <div className={styles['paralax']}>
        <div className={styles['section_main_container']}>
          <div 
            className={styles['customText']}
          >
            {windowSize.innerWidth > 700 && 
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{fontSize: "48px", color: "white", textShadow: "2px 0 black", paddingBottom: "10px"}} data-aos="fade-right"
              data-aos-duration="700"
              data-aos-easing="ease-in-sine">
                Вітаю Вас!
              </div>
              <div style={{fontSize: "24px", color: "white", textShadow: "1px 0 black", paddingBottom: "10px"}} data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="700"
              data-aos-easing="ease-in-sine">
                Мене звуть Анастасія Новікова і мені приємно, що Ви завітали на мій сайт.
              </div>
              <div style={{fontSize: "24px", color: "white", textShadow: "1px 0 black"}} data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="1500"
                data-aos-easing="ease-in-sine">
                  Я дуже щиро захоплююся людьми, які цікавляться особистим розвитком та 
                  хочуть тримати свої психоемоційні процеси в чистоті, я закохуюся в їх 
                  сміливість занурюватися у свій внутрішній світ та крокувати на зустріч інколи 
                  не самим приємним процесам, мене підкорює їх бажання покращувати якість 
                  свого життя, будувати теплі та близькі стосунки і отримувати задоволення від
                  життя...
              </div>
              </div>
            }
            {windowSize.innerWidth < 700 && 
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{ 
                fontSize: "38px", 
                color: "white", 
                textShadow: "2px 0 black", 
                paddingBottom: "10px", 
                display: 'flex', 
                justifyContent: 'center'
                }} 
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="700"
                data-aos-easing="ease-in-sine">
                Вітаю Вас!
              </div>
              <div 
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-duration="700"
              data-aos-easing="ease-in-sine"
              style={{display: "flex", justifyContent: "center"}}  
            >
              <img src={admin} 
                alt='admin' 
                height="50%" 
                width="50%" 
                style={{ borderRadius: "5px"}} 
              />  
            </div>
              <div style={{fontSize: "22px", color: "white", textShadow: "1px 0 black", paddingBottom: "10px"}} data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="700"
              data-aos-easing="ease-in-sine">
                Мене звуть Анастасія Новікова і мені приємно, що Ви завітали на мій сайт
              </div>
              <div style={{fontSize: "22px", color: "white", textShadow: "1px 0 black"}} data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="1500"
                data-aos-easing="ease-in-sine">
                  Я дуже щиро захоплююся людьми, які цікавляться особистим розвитком та 
                  хочуть тримати свої психоемоційні процеси в чистоті, я закохуюся в їх 
                  сміливість занурюватися у свій внутрішній світ та крокувати на зустріч інколи 
                  не самим приємним процесам, мене підкорює їх бажання покращувати якість 
                  свого життя, будувати теплі та близькі стосунки і отримувати задоволення від
                  життя...
              </div>
            </div>
            }
            {windowSize.innerWidth > 700 && <div 
              data-aos="fade-left" 
              data-aos-duration="1500" 
              data-aos-delay="1500" 
              data-aos-easing="ease-in-sine"
              style={{display: "flex", justifyContent: "center"}}  
            >
              <img src={admin} 
                alt='admin' 
                height="70%" 
                width="70%" 
                style={{ borderRadius: "5px", marginRight: "20px"}} 
              />  
            </div>
            }
            </div>
            <div className={styles['blobContainer']}>
              <div className={styles['blob']}>
                <KeyboardDoubleArrowDownIcon style={isArrowShow 
                  ? {color: 'white', opacity: '1'} 
                  : {color: 'white', opacity: '0.3'}} 
                /> 
              </div>
            </div>
          </div>
      </div>
      
      <div className={styles['section']}>
        <Expirience innerWidth={windowSize.innerWidth} />
      </div>

      <div className={styles['section']}>
        <div className={windowSize.innerWidth > 700 ? styles['project'] : styles['smallProject']}>
        <div className={windowSize.innerWidth > 700 ? styles['projectBody'] : styles['smallProjectBody']}>
          {windowSize.innerWidth > 700 && <div className={styles['projectBody_image']} 
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <img src={project} 
              alt='project' 
              height="auto" 
              width="65%" 
              style={{ 
                borderRadius: "5px", 
                marginRight: "20px"
              }} 
            /> 
          </div>}
          <div className={windowSize.innerWidth > 700 ? styles['projectBody_text'] : styles['projectBody_smallText']}>
          <div className={windowSize.innerWidth > 700 ? styles['projectHeder'] : styles['smallProjectHeder']} 
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            ПРОЕКТ ПРОСТІР ВЗАЄМОВІДНОСИН
          </div>
            <div style={{ 
                marginBottom: '20px', 
                border: '1px solid black', 
                borderRadius: '4px', 
                background: "linear-gradient(to right, white , lightblue)",
                color: 'black', 
                padding: '15px',
              }}
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-easing="ease-in-sine"
            >
              Про мій проект «ПРОСТІР ВЗАЄМОВІДНОСИН»:
              Це  річна програма, яка включає в себе 12 зустрічей на 12 різних тем, 
              максимальна кількість учасників – 12 чоловік, зустрічі відбуваються в онлайн 
              форматі.
            </div>
            <div style={{ 
                marginBottom: '20px', 
                border: '1px solid black', 
                borderRadius: '4px', 
                background: "linear-gradient(to right, white , lightblue)",
                color: 'black', 
                padding: '15px',
              }}
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-easing="ease-in-sine"
            >
              <div className={styles['step']}>
              1 зустріч: «Почуття, як фундамент особистості»
            </div>
            <div className={styles['step']}>
              2 зустріч: «Контакт та способи його преривання»
            </div>
            <div className={styles['step']}>
              3 зустріч: «Стадії розвитку людини»
            </div>
            <div className={styles['step']}>
              4 зустріч: «Формування відносин»
            </div>
            <div className={styles['step']}>
              5 зустріч: «Психологічні кордони»
            </div>
            <div className={styles['step']}>
              6 зустріч: «Співзалежність»
            </div>
            <div className={styles['step']}>
              7 зустріч: «Проявлення та функції агресії»
            </div>
            <div className={styles['step']}>
              8 зустріч: «Психосексуальні відносини»
            </div>
            <div className={styles['step']}>
              9 зустріч: «Психосоматика»
            </div>
            <div className={styles['step']}>
              10 зустріч: «Сепарація»
            </div>
            <div className={styles['step']}>
              11 зустріч: «Цінності»
            </div>
            <div className={styles['step']}>
              12 зустріч: «Самореалізація»  
            </div>
            </div>
            <div style={windowSize.innerWidth > 700 
              ? {display: "flex", justifyContent: "flex-start", width: "100%", marginTop: "20px"}
              : {display: "flex", justifyContent: "center", width: "100%", margin: "20px 0"}
            }>
              <CustomModal innerWidth={windowSize.innerWidth} />
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className={styles['section']}>
        <div className={styles['section_info']}>
          {windowSize.innerWidth > 500 
            ? <div className={styles['section_info_title']} style={{fontSize: "36px"}}>
                Перелік послуг
              </div> 
            : <div className={styles['section_info_title']}>
                Перелік послуг
              </div>
          }
          {coursesBaseUK.map((course) => 
            <div 
              className={styles['section_info_item']} 
              key={course.id} 
              id={`section-${course.id}`}
            >
              <Box
                component="img"
                className={ styles['section_info_img'] }
                alt="The house from the offer."
                src={ course.image } 
                data-aos="fade-right"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine"
              />
                <div className={ styles['section_info_item_text'] } 
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  >
                  <div className={ styles['section_info_item_title'] }>
                    { course.title }
                  </div>
                  <div className={ styles['shortInfo'] }>
                    {course.shortInfo}
                  </div>
                  <Link
                    to={ `/doctorAN/details/${ course.id }` }
                    className={ styles['section_info_link'] }
                    onClick={ () => localStorage.setItem("sectionId", course.id) }
                  >
                    Детально
                  </Link>
                </div>
          </div>
          )}
          <div className={styles['section_info_fullList']}>
            <Link
              to={`/doctorAN/fullList`}
              className={ styles['section_info_link'] }
            >
              Повний перелiк
            </Link> 
          </div>   
        </div>
      </div>

      <div className={styles['paralaxFooter']}>
      <div className={styles['footerBody']}>
        <div className={windowSize.innerWidth > 700 
            ? styles['footerBody_finalInfo'] 
            : styles['footerBody_smallFinalInfo']}
          >
          <div style={{ display: 'flex', justifyContent: 'center' }}
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-easing="ease-in-sine"
          >
            {windowSize.innerWidth > 700 
              ? <img src={finalPic} alt='finalPic' height="400px" width="400px" style={{ borderRadius: "50%"}} />
              : <img src={finalPic} alt='finalPic' height="200px" width="200px" style={{ borderRadius: "50%", marginTop: '40px'}} />
            }
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: windowSize.innerWidth > 700 ? 'flex-start' : 'center',
            alignItems: 'center',
            fontSize: windowSize.innerWidth > 700 ? '24px' : '18px',
            border: '1px solid black',
            borderRadius: '4px',
            background: 'linear-gradient(to right, white, lightblue)',
            color: 'black',
            padding: '15px', 
            margin: windowSize.innerWidth > 700 ? '0 30px 0 0' : '20px',
          }}
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-easing="ease-in-sine"
          >
            На протязі п’яти років, кожного дня я допомагаю людям проживати  
            незрозумілі для них стани, болючі та нестерпні страждання, втрати та зради, 
            позбуватися від панічних атак, деяких видів залежності, від психосоматичних 
            проявів тіла, виходити легко з співзалежних і нездорових стосунків, 
            стройнішати, вибудовувати здорові стосунки з батьками, налаштовувати 
            контакт з самим собою, з власним тілом, з власними відчуттями та бажаннями,
            допомагаю зрозуміти, чого взагалі людина хоче від себе, свого життя, своєї 
            реалізації, допомагаю побудувати власну опору на себе і мати автономність у 
            всьому, щоб можна було будувати чесні та рівні стосунки, створювати родину, 
            обирати високооплачувані посади, створювати власний бізнес, подорожувати 
            та насолоджуватися своїм життям у повному обсязі та мати на це внутрішній 
            ресурс і енергію
          </div>
        </div>
        {windowSize.innerWidth > 700 
          && 
          <>
            <div className={styles['footerBody_title']} data-aos="flip-down" data-aos-duration="1000">Є питання ?</div> 
            <div className={styles['footerBody_contacts']} data-aos="flip-down" data-aos-duration="1000">
          <div className={styles['footerBody_contacts_block']}> 
            <Link
              to={`https://www.instagram.com/`}
              className={ styles['footerBody_contacts_block_link'] }
              target="_blank"
            >
              <img src={`https://img.freepik.com/premium-vector/instagram-social-media-icon-gradient-social-media-logo_197792-4682.jpg`} alt='instagram' height="50px" width="50px" style={{ borderRadius: "50%"}} />
            </Link> 
            <div className={styles['footerBody_contacts_block_text']}>
              Подарки, информационные прямые эфиры, разборы ваших запросов, практики, бонусы.
            </div>
          </div>
          <div className={styles['footerBody_contacts_block']}>
            <Link
              to={`https://web.telegram.org/k/`}
              className={ styles['footerBody_contacts_block_link'] }
              target="_blank"
              >
                <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png`} alt='telegram' height="40px" width="40px" style={{ borderRadius: "50%", padding: "5px"}}/>
              </Link>
              <div className={styles['footerBody_contacts_block_text']}>
              Прямые эфиры с разборами ваших матриц, фишки по работе с матрицей, жизненные и весёлые видео об энергиях.
              </div>
          </div>
          <div className={styles['footerBody_contacts_block']}>
            <Link
              to={`https://www.viber.com/ru/?utm_source=invite&utm_Medium=share&utm_campaign=msgtest`}
              className={ styles['footerBody_contacts_block_link'] }
              target="_blank"
            >
              <img src={`https://www.logo.wine/a/logo/Viber/Viber-Icon-Outlined-Purple-Logo.wine.svg`} alt='viber' height="50px" width="50px" style={{ borderRadius: "50%"}} />
            </Link>
            <div className={styles['footerBody_contacts_block_text']}>
              Возможность познакомится со мной, обсуждения нюансов матрицы в чате со мной, поиск кармического партнера для достижения своих целей.
            </div>
          </div>
          </div>
          </>
        }
      </div>
        <div className={styles['footer']} style={{lineHeight: windowSize.innerWidth > 700 ? '100px' : '20px'}}>
          {windowSize.innerWidth > 700 
            ? <div style={{ height: 'auto' }}>© 2024. All Rights Reserved</div> 
            : <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <div style={{ display: "flex", flexDirection: "row"}}>
                  <Link
                    to={`https://www.instagram.com/`}
                    target="_blank"
                  >
                    <img src={`https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg`} alt='instagram' height="50px" width="50px" style={{ borderRadius: "50%"}} />
                  </Link> 
                  <Link
                    to={`https://web.telegram.org/k/`}
                    target="_blank"
                  >
                    <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png`} alt='telegram' height="40px" width="40px" style={{ borderRadius: "50%", padding: "5px"}}/>
                  </Link>
                  <Link
                    to={`https://www.viber.com/ru/?utm_source=invite&utm_Medium=share&utm_campaign=msgtest`}
                    target="_blank"
                  >
                    <img src={`https://www.logo.wine/a/logo/Viber/Viber-Icon-Outlined-Purple-Logo.wine.svg`} alt='viber' height="50px" width="50px" style={{ borderRadius: "50%"}} />
                  </Link>
                </div>
                <div style={{ lineHeight: "15px", paddingBottom: "10px" }}>© 2024. All Rights Reserved</div>
              </div>
          }
        </div>
      </div>
    </div>}
    </>
  )
};

export default HomePage;
