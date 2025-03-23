import '../../Styles/Landing/consult.css';

const appointment = () => {
    document.getElementsByName('.icon').onclick = function(){
        window.location.href = "/consult";
    };
    return(
        <>
            <div id="HomeFiveSection">   
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
                    <div class="icon1 icon">
                        
                        <div class="iconimg"><img src="https://th.bing.com/th/id/OIP.EEttvRizxVHhtVV8mYWxKgHaFW?w=241&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/></div>
                        <h3>Period doubts or Pregnancy </h3>
                        <h4>CONSULT NOW</h4>
                    </div>
                    <div class="icon1 icon">
                        
                        <div class="iconimg"><img src="https://th.bing.com/th/id/OIP.Dx-mDGRdugcUMS3KbQliUwHaE8?w=251&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/></div>
                        <h3>Acne, pimple or skin issues </h3>
                        <h4>CONSULT NOW</h4>
                    </div>
                    <div class="icon1 icon">
                     
                        <div class="iconimg"><img src="https://th.bing.com/th/id/OIP.-sMa_Nc19WN3-PI5AXfiigHaD4?w=339&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/></div>
                        <h3>Performance issues in bed </h3>
                        <h4>CONSULT NOW</h4>
                    </div>
                    <div class="icon1 icon">
                       
                        <div class="iconimg"><img src="https://th.bing.com/th/id/OIP.sqvr5wxj8SFsuCSSPogLrgHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/></div>
                        <h3>Cold, cough or fever</h3>
                        <h4>CONSULT NOW</h4>
                    </div>
                    <div class="icon1 icon">
                        
                        <div class="iconimg"><img src="https://th.bing.com/th/id/OIP.qT2lMK6K32b-_jo1MWpwnQHaD0?w=300&h=179&c=7&r=0&o=5&dpr=1.5&pid=1.7"/></div>
                        <h3>Child not feeling well</h3>
                        <h4>CONSULT NOW</h4>
                    </div>
                    <div class="icon1 icon">
                        
                        <div class="iconimg"><img src="https://th.bing.com/th/id/OIP.2DRL_L3kFWBvDT8TFsC0gQHaE8?w=279&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7"/></div>
                        <h3>Depression or anxiety</h3>
                        <h4>CONSULT NOW</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default appointment