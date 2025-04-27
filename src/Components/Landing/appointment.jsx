import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../Styles/Landing/appointment.css";

const doctorgenre = [
  {
    image : "https://th.bing.com/th/id/OIP.3bMVEXh1w7WgqGKOPlCLZAHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title : "Cardiologist",
    detail : "Expert in heart health, diagnosing and treating cardiovascular diseases for a healthier life."
  },
  {
    image : "https://th.bing.com/th/id/OIP.5MAO2KzeR9eCbMmTOrr2QAHaE7?w=292&h=193&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title : "Dermatologist",
    detail : "Specializes in skin, hair, and nail conditions, offering treatments for acne, eczema, and more."
  },
  {
    image : "https://th.bing.com/th/id/OIP.YLmLxB2zdQvPIzHqqapuWAHaE7?w=283&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title : "Pediatrician",
    detail : "Provides medical care for infants, children, and adolescents to ensure healthy growth and development."
  },
  {
    image : "https://th.bing.com/th/id/OIP.x4kT2an_Noab7WdF_024JwHaE8?w=245&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title : "Neurologist",
    detail : "Diagnoses and treats disorders of the brain, spinal cord, and nerves, including migraines and epilepsy."
  },
  {
    image : "https://th.bing.com/th/id/OIP.UM-ng1D3vjXTLhtrEI4zSwHaDj?w=344&h=168&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title : "Endocrinologist",
    detail : "Specializes in hormone-related conditions like diabetes, thyroid disorders, and metabolic issues."
  },
  {
    image : "https://th.bing.com/th/id/OIP.lHfcLadZ63yizr_mkxMYEwHaE8?w=256&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title : "Gastroenterologist",
    detail : "Treats digestive system disorders, including acid reflux, IBS, and liver diseases."
  },
  {
    image : "https://th.bing.com/th/id/OIP.ofEzwpwNyyoFqsAxR0MQEAHaE8?w=230&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title : "Pulmonologist",
    detail : "Focuses on lung and respiratory conditions such as asthma, COPD, and chronic cough."
  },
  {
    image : "https://th.bing.com/th/id/OIP.I-h7hOI0hIX7gn0-_ifaUQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title : "Urologist",
    detail : "Expert in urinary tract and male reproductive health, addressing kidney stones and prostate issues."
  },
  {
    image : "https://th.bing.com/th/id/OIP.uk1bF57Nw_PECkDiN3sdqwHaE7?w=279&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title : "Ophthalmologist",
    detai : "Provides eye care, treating vision problems, cataracts, and other eye diseases."
  }
]

const Appointment = () => {
  return (
    <div className="appointment-container">
      <div className="content">
        <h1>Book Your appointment Today</h1>
        <p>
          Visit your nearby doctors and get your problems being discussed
        </p>
        <div class="leftbtn">
                       <a href="/appointment"><button>Book Now</button></a>
                    </div>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        keyboard={{ enabled: true }}
        mousewheel={{ thresholdDelta: 70 }}
        pagination={{ clickable: true }}
        modules={[Pagination, Keyboard, Mousewheel, EffectCoverflow]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1560: { slidesPerView: 3 },
        }}
        className="swiper"
      >
         <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ Autoplay enabled
      loop={true} // ✅ Ensures infinite looping
    ></Swiper>
        {doctorgenre.map((doctor,index) =>
        <SwiperSlide className="swiper-slide" >
        <a href="/details" target="_blank" rel="noopener noreferrer">
          <div key={index}>
            <img src={doctor.image} alt={doctor.title} className="swiper-slide-image"/>
            <h2>{doctor.title}</h2>
            <p>{doctor.detail}
            </p>
          </div></a>
        </SwiperSlide>)}

      </Swiper>

    </div>
  );
};

export default Appointment;
