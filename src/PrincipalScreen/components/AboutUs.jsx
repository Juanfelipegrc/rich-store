import React from 'react'

export const AboutUs = () => {

    const paragraph = `Welcome to RichStore, your exclusive destination for luxury and prestige vehicles. Since our founding, we have been dedicated to offering an unparalleled experience in buying high-end cars. We take pride in our meticulous selection of vehicles, ensuring each one meets the highest standards of quality, performance and luxury.

    At RichStore, we understand that purchasing a luxury car is more than a purchase; It is a statement of style and a commitment to excellence. For this reason, our team is made up of passionate and knowledgeable professionals in the automotive sector, who are always available to offer personalized attention and answer all your questions.

    Our showroom, located in the heart of the city, is a space designed to inspire and delight. Here, customers can explore our exclusive collection of models from prestigious brands, enjoy personalized demonstrations and receive expert advice on the configuration of their new vehicle.

    In addition to sales, at RichStore we offer complete after-sales services that guarantee optimal maintenance of your vehicle. From maintenance services to specialized repairs, our technical team uses only original parts and the most advanced technologies.

    At RichStore, your trust is our priority. We are committed to providing a transparent, pressure-free experience, ensuring every interaction is as exceptional as the cars we sell.

    Visit us today and find out why RichStore is the choice of luxury car connoisseurs. We are here to guide you every step towards owning the car of your dreams.`

  return (
    <>
    
        <div className='container-content-about-us-home-page'>

            
            <div className='container-paragraph-about-us'>
                <p className='about-us-p-home-page'>
                    {paragraph}
                </p>
            </div>
            <div className='container-image-about-us'>
                <img src="/assets/logotipo.png" alt="logotipo" />
            </div>
        </div>
    
    </>
  )
}
