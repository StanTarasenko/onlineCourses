// Modules
import AOS from 'aos';
import 'aos/dist/aos.css';

// Icons
import pic from '../icons/IMG_7659.JPG';

// Styles
import styles from './expirience.module.scss';

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
            style={ { fontSize: "56px" } }
          >
            Я - Анастасія Новікова
          </div>
          <div
            className={ styles['container_body_text_main'] }
            style={ { fontSize: "24px" } }>
            Магістр психології Харківської інженерно-педагогічної академії. Ведуча трансформаційної гри для жінок і
            співавтором та ведучою трансформаційної гри для чоловіків, як в групі, так і
            особисто. В моїй шкатулці знань є багато навиків, бо я постійно навчаюся та
            підвищую свою кваліфікацію психолога.
            <br />Засновниця проекта "ПРОСТІР ВЗАЄМОВІДНОСИН"
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", paddingBottom: "40px" }}>
            <div className={ styles['container_body_text_circle'] }
              style={{ marginLeft: "50px"}}
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-easing="ease-in-sine">
              <div style={ { fontSize: "32px" } }>5 рокiв</div>
              <div style={ { fontSize: "18px", textAlign: "center" } }>консультантської практики</div>
            </div>
            <div className={ styles['container_body_text_circle'] }
              style={{ marginLeft: "50px"}}
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-easing="ease-in-sine">
              <div style={ { fontSize: "32px" } }>400 годин</div>
              <div style={ { fontSize: "18px", textAlign: "center" } }>групової терапії</div>
            </div>
          </div>
          <div style={ { display: "flex", flexDirection: "row", justifyContent: "flex-start" } }>
            <div className={ styles['container_body_text_circle'] }
            style={{ marginLeft: "50px"}}
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-easing="ease-in-sine">
              <div style={ { fontSize: "32px" } }>200 годин</div>
              <div style={ { fontSize: "18px", textAlign: "center" } }>особистої терапії</div>
            </div>
            <div className={ styles['container_body_text_circle'] }
              style={{ marginLeft: "50px"}}
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-easing="ease-in-sine">
              <div style={ { fontSize: "32px" } }>90 годин</div>
              <div style={ { fontSize: "18px", textAlign: "center" } }>особистої супервізії</div>
            </div>
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
