import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import '../../Styles/LabTests/testdetails.css';

const testTypes = [
  {
    image: "https://berkeley-institute.com/wp-content/uploads/Complete_Blood_Count_Berkeley_Institute.jpg",
    name: "Complete Blood Count (CBC)",
    details: "A routine blood test to evaluate overall health.",
    price: "₹400"
  },
  {
    image: "https://www.healthcareontime.com/wp-content/uploads/2025/01/liver-function-test-lft.jpg",
    name: "Liver Function Test (LFT)",
    details: "Assesses liver health and detects liver damage.",
    price: "₹700"
  },
 {
    image: "https://www.health.com/thmb/9-gXEbNyC4g8NVHkWOc1ZZU_RII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Diabetes-Insulin-GettyImages-1184019335-2000-9a522969b24d4cb3908b6e0e0f272999.jpg",
    name: "Random Blood Sugar (RBS)",
    details: "Checks blood glucose at any random time.",
    price: "₹150"
  },
  {
    image: "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/health/wp-content/uploads/2023/01/blood_sugar.jpeg.jpg",
    name: "Fasting Blood Sugar (FBS)",
    details: "Blood sugar level after overnight fasting.",
    price: "₹120"
  },
  {
    image: "https://static.vecteezy.com/system/resources/previews/046/810/380/non_2x/diabetes-high-blood-sugar-design-illustration-vector.jpg",
    name: "Postprandial Blood Sugar (PPBS)",
    details: "Sugar test done 2 hours after a meal.",
    price: "₹140"
  },
  {
    image: "https://d1wul7erwk4mtq.cloudfront.net/wp-content/uploads/2022/11/ecg-anormal.jpg",
    name: "ECG (Electrocardiogram)",
    details: "Tracks heart rhythm and detects abnormalities.",
    price: "₹300"
  },
 {
    image: "https://media.nature.com/lw767/magazine-assets/d42473-024-00102-6/d42473-024-00102-6_27209820.jpg",
    name: "Hemoglobin Test",
    details: "Checks hemoglobin levels to detect anemia.",
    price: "₹180"
  },
  {
    image: "https://www.panchamrit.co.in/cdn/shop/articles/Vitamin_D_Benefits.png?v=1701334350&width=1100",
    name: "Vitamin D Test",
    details: "Measures the level of Vitamin D in the blood.",
    price: "₹1200"
  },
  {
    image: "testImages.feverhttps://www.uclahealth.org/sites/default/files/styles/landscape_16x9_030000_1200x675/public/images/61/fevers2.jpg?f=10d749a9&itok=XI4eofSo",
    name: "Fever Panel",
    details: "Detects the cause of fever with various parameters.",
    price: "₹1500"
  },
  {
    image: "https://health.selfdecode.com/app/uploads/2019/11/Thyroid-Hormones-T3-T4-Roles-Functions-High-Low-Levels.jpg",
    name: "Thyroid Profile (T3, T4, TSH)",
    details: "Evaluates thyroid function and hormone levels.",
    price: "₹600"
  },
  {
    image: "https://cells4life.com/wp-content/uploads/2024/06/diabetes_-1080x675.jpg",
    name: "Diabetes Screening",
    details: "Includes fasting blood sugar and HbA1c.",
    price: "₹500"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3unigEm4iuTRPHSrBRVZkG4I6Ng2y6IIeWA&s",
    name: "Kidney Function Test (KFT)",
    details: "Checks how well your kidneys are working.",
    price: "₹800"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpxqzqyv97jKHsxLMuPtB6Q_d1WVpeH8q-Qw&s",
    name: "Urine Routine & Microscopy",
    details: "Examines urine sample for abnormalities.",
    price: "₹250"
  },
  {
    image: "https://etimg.etb2bimg.com/thumb/msid-107720562,imgsize-2898253,width-1200,height=765,overlay-ethealth/industry/eliminating-malaria-requires-new-solutions.jpg",
    name: "Malaria Antigen Test",
    details: "Detects malaria parasite in blood.",
    price: "₹450"
  },
  {
    image: "https://www.nutrientsreview.com/wp-content/uploads/2014/12/Cholesterol-structure.jpg",
    name: "Lipid Profile",
    details: "Measures cholesterol and triglyceride levels.",
    price: "₹650"
  },
  {
    image: "https://mylabglobal.com/wp-content/uploads/2022/09/covid-result.jpg",
    name: "COVID-19 RT-PCR",
    details: "Detects active coronavirus infection.",
    price: "₹800"
  },
  {
    image: "https://wp04-media.cdn.ihealthspot.com/wp-content/uploads/sites/342/2024/08/Pregnant_woman_Proteinuria-1024x666.jpg",
    name: "Pregnancy Test",
    details: "Quick urine test to detect pregnancy.",
    price: "₹100"
  },
  {
    image: "https://images.onlymyhealth.com/imported/images/2023/February/06_Feb_2023/main_signsandsymptomsofHIV.jpg",
    name: "HIV Screening Test",
    details: "Detects presence of HIV antibodies.",
    price: "₹500"
  },
  {
    image: "https://img.freepik.com/free-vector/diagram-showing-hepatitis-b-virus_1308-30317.jpg?ga=GA1.1.426297589.1724065447&semt=ais_hybrid",
    name: "Hepatitis B Surface Antigen (HBsAg)",
    details: "Tests for hepatitis B infection.",
    price: "₹350"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdYs3CYr8xR1bf0ZTR6KGbyCFJAR3ZRxvQw&s",
    name: "Dengue NS1 Antigen Test",
    details: "Early detection of dengue virus.",
    price: "₹600"
  },
   {
    image: "https://prod-images-static.radiopaedia.org/multiple_choice_questions/820/test-158_big_gallery.jpeg",
    name: "X-Ray Chest PA View",
    details: "Diagnoses conditions affecting the chest.",
    price: "₹500"
  },
  {
    image: "https://prod-images-static.radiopaedia.org/images/19319983/e8b196f5268ae6dc7f6915cbb48c88_gallery.jpeg",
    name: "MRI Brain Scan",
    details: "Detailed images of brain structures.",
    price: "₹4500"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSil_yBC_Lejmo3K1aSvN7bYygVGsQsSPOmLg&s",
    name: "CT Abdomen Scan",
    details: "Cross-sectional images of abdominal organs.",
    price: "₹3500"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GvtWc0_U43lpkgwL_hCu2wJeIQ3MsHKj7A&s",
    name: "Blood Grouping & Rh Typing",
    details: "Determines your blood group and Rh factor.",
    price: "₹200"
  },
  {
    image: "https://www.littleangelivf.com/wp-content/uploads/2023/04/PCOD-Problem.jpg",
    name: "Pelvic Ultrasound for PCOD",
    details: "Detects cysts and ovarian structure.",
    price: "₹1000"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdAcSpGvWKm3vmH9jQZLGJL8pdUx2EE7b2Q&s",
    name: "PSA (Prostate-Specific Antigen)",
    details: "Screening test for prostate cancer.",
    price: "₹900"
  },
  {
    image: "https://www.medicoverhospitals.in/images/diagnostics/rheumatoid-arthritis-factor-test.png",
    name: "RA Factor Test",
    details: "Used to detect rheumatoid arthritis.",
    price: "₹450"
  },
  {
    image: "https://www.medicoverhospitals.in/images/diagnostics/rheumatoid-arthritis-factor-test.png",
    name: "ESR (Erythrocyte Sedimentation Rate)",
    details: "Indicates inflammation in the body.",
    price: "₹150"
  },
  {
    image: "https://www.snexplores.org/wp-content/uploads/2019/11/860_main_hormone_explainer.png",
    name: "LH (Luteinizing Hormone) Test",
    details: "Helps diagnose fertility problems and menstrual disorders.",
    price: "₹500"
  },
  {
    image: "https://www.snexplores.org/wp-content/uploads/2019/11/860_main_hormone_explainer.png",
    name: "FSH (Follicle Stimulating Hormone) Test",
    details: "Assesses fertility and ovarian reserve.",
    price: "₹500"
  },
  {
    image: "https://www.snexplores.org/wp-content/uploads/2019/11/860_main_hormone_explainer.png",
    name: "AMH (Anti-Müllerian Hormone) Test",
    details: "Checks ovarian reserve and PCOS diagnosis.",
    price: "₹1200"
  },
  {
    image: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/02/322279_1100-1100x628.jpg",
    name: "Prolactin Test",
    details: "Helps detect pituitary gland issues and fertility concerns.",
    price: "₹400"
  },
  {
    image: "https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22114_16448437406713117.jpg",
    name: "Estradiol (E2) Test",
    details: "Measures estrogen levels in women.",
    price: "₹700"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o9dmiG0F4Uln9MQc-FePGqqRHJmh0hm9opwUnw7CZ5x7aOijPitqwOY_skS1EbWUMjs&usqp=CAU",
    name: "Testosterone (Total) Test (Female)",
    details: "High levels may indicate PCOS or hormone imbalance.",
    price: "₹600"
  },
];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

const Details  = () => {
    return(
        <>
        <div id="detail-section">
                <div class="Heading5part">
                    <div class="leftTextSection">
                        <h2>Consult top doctors online for any health concern</h2>
                        <h3>Private online consultations with verified doctors in all specialists</h3>
                    </div>
                    <div class="leftbtn">
                       <a href="#"><button>View All Specialities</button></a>
                    </div>
                </div>
                <div class="allIcon" onclick="location.href = 'www.yoursite.com';" >
                  <Slider {...sliderSettings}>
                    {testTypes.map((test,index)=>
                      <div key={index} className="test-card">
                      <img src={test.image} alt="nothing" />
                      <h3>{test.name}</h3>
                      <p className="price">
                      <p className="bought">{test.details}</p>
                      <span className="current">{test.price}</span>
                      </p>
                      </div>)}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Details