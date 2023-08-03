// Modules
import AOS from 'aos';
import 'aos/dist/aos.css';

// Icons
import pic from '../icons/IMG_7659.JPG';

// Styles
import styles from './expirience.module.scss';

const expirinceDetails = [
  {id: 1, count: '320+', info: 'задоволених клієнтів'},
  {id: 2, count: '3980+ годин', info: 'консультантської практики'},
  {id: 3, count: '1880+ годин', info: 'консультантської практики'},
  {id: 4, count: '400+ годин', info: 'консультантської практики'},
  {id: 5, count: '200+ годин', info: 'консультантської практики'},
  {id: 6, count: '120+ годин', info: 'консультантської практики'},
];

const Expirience = ({innerWidth}) => {
  console.log('innerWidth', innerWidth)
  return (
    <div className={styles['container']} style={innerWidth > 700 
        ? {padding: "5vh 0"} 
        : {height: 'auto'}} 
        onScroll={() => AOS.init({
      offset: 300,
      duratation: 500,
  })}>
      {innerWidth > 700 && <>
        <div className={ styles['container_header'] }></div>
        <div className={ styles['container_body'] }>
        <div
          className={ styles['container_body_text'] }
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <div
            className={ styles['container_body_text_title'] }
            style={ { 
              fontSize: "56px", 
              fontFamily: "Snell Roundhand", 
              fontWeight: "bold",
              textShadow: "2px 0 white", 
            } }
          >
            Я - Анастасія Новікова
          </div>
          <div
            className={ styles['container_body_text_main'] }
            style={ { fontSize: "24px" } }>
              «Магістр психології Харківської інженерно-педагогічної академії. Ведуча трансформаційної гри для жінок і співавтор та ведуча трансформаційної гри для чоловіків, як в групі, так і особисто.
              Маю 1 ступінь гештальт терапевта, отримую 2й ступінь, також є ініційованим кармологом в методі «Матриця долі» та володію методом регресійного гіпнозу.
              В моїй шкатулці знань є багато навиків, бо я постійно навчаюся та підвищую свою кваліфікацію психолога.»
            <br />Засновниця проекта 
              <span style={{
                fontFamily: "Snell Roundhand", 
                fontWeight: "bold",
                textShadow: "2px 0 white",
                fontSize: "32px",
              }}
              >
                "Простiр Взаємовiдносин"
              </span>
          </div>
          <div
            className={ styles['container_body_text_title'] }
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-easing="ease-in-sine"
            style={ { 
              fontSize: "48px", 
              fontFamily: "Snell Roundhand", 
              fontWeight: "bold",
              textShadow: "2px 0 white", 
            } }
          >
            5 <span style={{fontSize: "38px"}}>рокiв консультантської практики</span>
          </div>
          <div style={{ display: "flex", flexDirection: "row", position: "relative"}}>
          {expirinceDetails.map((detail) => 
                <div className={ styles['container_body_text_circle'] }
                  style={{ marginLeft: "50px" }}
                  data-aos="zoom-in-up"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                  data-aos-easing="ease-in-sine"
                  key={detail.id}
                >
                  <div style={ { fontSize: "32px" } }>{detail.count}</div>
                  <div style={ { fontSize: "18px", textAlign: "center" } }>{detail.info}</div>
                </div>
          )}
          </div>
        </div>
        <div
          className={ styles['container_body_picture'] }
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <img src={ pic }
            alt='pic'
            height="auto"
            width="60%"
            style={ { borderRadius: "5px", paddingLeft: '10px' } } />
        </div>
      </div></>}
      {innerWidth < 700 && <>
        <div className={ styles['container_header'] }>
          <div
          className={ styles['container_body_text'] }
          style={{padding: 0}}
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
          >
          <div
            className={ styles['container_body_text_title'] }
            style={ { fontSize: "32px", textAlign: 'center' } }
          >
            Я - Анастасія Новікова
          </div>
          <div
          className={ styles['container_body_picture'] }
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <img src={ pic }
            alt='pic'
            height="auto"
            width="60%"
            style={ { borderRadius: "5px", paddingLeft: '10px', paddingBottom: '20px' } } />
        </div>
          <div
            className={ styles['container_body_text_main'] }
            style={ { fontSize: "22px", padding: "0 10px" } }>
            Магістр психології Харківської інженерно-педагогічної академії. Ведуча трансформаційної гри для жінок і
            співавтором та ведучою трансформаційної гри для чоловіків, як в групі, так і
            особисто. В моїй шкатулці знань є багато навиків, бо я постійно навчаюся та
            підвищую свою кваліфікацію психолога.
            <br />Засновниця проекта <br />"ПРОСТІР ВЗАЄМОВІДНОСИН"
          </div>
          <div style={ { display: "flex", flexDirection: "row", justifyContent: "center", paddingBottom: "40px" } }>
            <div className={ styles['container_body_text_circleSmall'] }
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine">
              <div style={ { fontSize: "22px" } }>5 рокiв</div>
              <div style={ { fontSize: "12px", textAlign: "center" } }>консультантської практики</div>
            </div>
            <div className={ styles['container_body_text_circleSmall'] }
              style={{ marginLeft: "50px"}}
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine">
              <div style={ { fontSize: "22px" } }>400 годин</div>
              <div style={ { fontSize: "12px", textAlign: "center" } }>групової терапії</div>
            </div>
          </div>
          <div style={ { display: "flex", flexDirection: "row", justifyContent: "center", paddingBottom: "40px" } }>
            <div className={ styles['container_body_text_circleSmall'] }
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine">
              <div style={ { fontSize: "22px" } }>200 годин</div>
              <div style={ { fontSize: "12px", textAlign: "center" } }>особистої терапії</div>
            </div>
            <div className={ styles['container_body_text_circleSmall'] }
              style={{ marginLeft: "50px"}}
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine">
              <div style={ { fontSize: "22px" } }>90 годин</div>
              <div style={ { fontSize: "12px", textAlign: "center" } }>особистої супервізії</div>
            </div>
          </div>
        </div>
      </div></>}
    </div>
  )
};

export default Expirience;
