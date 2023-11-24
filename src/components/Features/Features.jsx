import React from 'react'
import styles from './Features.module.css'
import servicesImage from '../../assets/images/servicesImage.png'
import london from '../../assets/images/DestinationLondon.svg';
import Rome from '../../assets/images/DestinationRome.svg';
import fullEurope from '../../assets/images/destinationFullEurope.svg';
import bookingIcon from '../../assets/images/bookingIcon.png';
import airportIcon from '../../assets/images/airportIcon.png';
import paymentIcon from '../../assets/images/paymentIcon.png';
import onGoingTrip from '../../assets/images/ongoingTrip.png';
import customization from '../../assets/images/customization.svg';
import weather from '../../assets/images/weather.svg';
import flights from '../../assets/images/flight.svg';
import localEvent from '../../assets/images/localEvent.svg';

const Features = () => {
  return (
   <div>
        <div className={styles.services}>
            <p className={styles.smallHeading}>CATEGORY</p>
            <p className={styles.largeHeading}> We Offer Best Services</p>
            <div className={styles.servicesCardsContainer}>
                <div className={styles.card}>
                    <img />
                    <p className={styles.cardTitle}></p>
                    <p className={styles.cardInfo}></p>
                </div>
                <div className={styles.cardActive}>
                    <img />
                    <p className={styles.cardTitle}></p>
                    <p className={styles.cardInfo}></p>
                </div>
                <div className={styles.card}>
                    <img />
                    <p className={styles.cardTitle}></p>
                    <p className={styles.cardInfo}></p>
                </div>
                <div className={styles.card}>
                    <img />
                    <p className={styles.cardTitle}></p>
                    <p className={styles.cardInfo}></p>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Features