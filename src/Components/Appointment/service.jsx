import '../../Styles/Appointment/service.css';

const doctors = [
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
const service = () => {
  let i = 0;
    return(
        <>
          <div className="parent">
            {
              doctors.map((doctor,index)=>{
                <div className={"div"+i+1}>
                  <div className="card">
                    <img src={doctor.image} alt="" className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{doctor.title}</h5>
                      <p className="card-text">Hi</p>
                      <p className="card-text"><small className="text-muted"></small>No updation</p>
                    </div>
                  </div>
                </div>
                
              })
            }
          </div>
        </>
    )   
}

export default service

// {doctors.map((doctor,index)=>
//   <div class="card-group">
//   <div class="card">
//     <img src={doctor.image} class="card-img-top" alt="Hollywood Sign on The Hill"/>
//     <div class="card-body">
//       <h5 class="card-title">{doctor.title}</h5>
//       <p class="card-text">
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </p>
//       <p class="card-text">
//         <small class="text-muted">Last updated 3 mins ago</small>
//       </p>
//     </div>
//   </div>
//   <div class="card">
//     <img src={doctor.image} class="card-img-top" alt="Palm Springs Road"/>
//     <div class="card-body">
//       <h5 class="card-title">{doctor.title}</h5>
//       <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//       <p class="card-text">
//         <small class="text-muted">Last updated 3 mins ago</small>
//       </p>
//     </div>
//   </div>
//   <div class="card">
//     <img src={doctor.image} class="card-img-top" alt="Los Angeles Skyscrapers"/>
//     <div class="card-body">
//       <h5 class="card-title">{doctor.title}</h5>
//       <p class="card-text">
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to show
//         that equal height action.
//       </p>
//       <p class="card-text">
//         <small class="text-muted">Last updated 3 mins ago</small>
//       </p>
//     </div>
//   </div>
// </div>)}