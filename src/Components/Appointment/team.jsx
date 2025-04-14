import '../../Styles/Appointment/team.css';

const Team = () => {
    const doctors = [
        {
          image : "https://th.bing.com/th/id/OIP.3bMVEXh1w7WgqGKOPlCLZAHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          title : "Cardiologist",
          detail : "Expert in heart health, diagnosing and treating cardiovascular diseases for a healthier life.",
        //   <div className="flex items-center mt-2.5 mb-5">
        //     <div className="flex items-center space-x-1 rtl:space-x-reverse">
        //         <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        //             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        //         </svg>
        //         <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        //             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        //         </svg>
        //         <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        //             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        //         </svg>
        //         <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        //             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        //         </svg>
        //         <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        //             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        //         </svg>
        //     </div>
        //     <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        // </div>
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
          detail : "Provides eye care, treating vision problems, cataracts, and other eye diseases."
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5fV7eph5U0UpEu59QcmgDzYRl-AfUG1qoCQ&s",
          title: "Oncologist",
          detail: "Specializes in the diagnosis and treatment of cancer, guiding patients through therapy and care plans."
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCY2VjsvrWtG3586Q-ST3boEpHOioeqz7xgw&s",
          title: "Orthopedic Surgeon",
          detail: "Focuses on the musculoskeletal system, treating bone, joint, and muscle conditions including fractures and arthritis."
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfLF_ODGqfSwAMjlEv9UJz5Bvb7eH0J7eFw&s",
          title: "Psychiatrist",
          detail: "Expert in mental health, diagnosing and treating conditions like depression, anxiety, and schizophrenia."
        }
      ]
      let i = 0;
    return (
        <>
        <h1 className='text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center p-12'>Meet Our Specialists</h1>
        <div className="team">
        {
            doctors.map((doctor,index)=>(
            <div className=" card w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className=" p-8 rounded-t-lg" src={doctor.image} alt="product image" />
    </a>
    <div className="px-5 pb-5">
            <h5 className=" font-semibold tracking-tight">{doctor.title}</h5>
  
        <div className="flex items-center justify-between p-4">
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Know More</a>
        </div>
    </div>
</div>))
}
</div>
        </>
    )
}

export default Team

// .img-container {
//     float: left;
//     width: 33.33%; /* three containers (use 25% for four, and 50% for two, etc) */
//     padding: 5px; /* if you want space between the images */
//   } use to place doctor images and details