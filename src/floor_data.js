import floor_1_pic from './floor_images/firstFloor.jpeg'
import floor_2_pic from './floor_images/secondFloor.jpeg'
import floor_3_pic from './floor_images/thirdFloor.jpeg'
import floor_0_pic from './floor_images/groundFloor.jpeg'

const floor_data = [
    {
        floor : 0,
        image_url : floor_0_pic,
        buttons : [
            {
                name : 'hod-room',
                redirect_url : "",
                position : [30,80]
            },
            {
                name : 'office-room',
                redirect_url : "",
                position : [150,80]
                
            },
            {
                name : 'KVN seminar hall',
                redirect_url : "",
                position : [400,80]
                
            },
            {
                name : 'Rest-room',
                redirect_url : "",
                position : [540,420],
                rotate : true 
            },
            {
                name : 'flow lab',
                redirect_url : "/flowlab",
                position : [350,420]
                
            },
            {
                name : 'Machines lab',
                redirect_url : "/machinelab",
                position : [60,420]
                
            }
        ]
    },
    {
        floor : 1,
        image_url : floor_1_pic,
        buttons : [
            {
                name : 'control system lab',
                redirect_url : "/processlab",
                position : [30,70]
            },
            {
                name : 'Process control lab',
                redirect_url : "/controllab",
                position : [300,380]
                
            },
            {
                name : 'Automation Lab',
                redirect_url : "/automationlabs",
                position : [80,380]
            },
            {
                name : 'NP',
                redirect_url : "http://customserver:8080/Dr_NPappa.pdf",
                position : [8,220]
                
            },
           
            {
                name : 'Rest room',
                redirect_url : "",
                position : [540,370]
            },
            {
                name : 'SRK',
                redirect_url : "http://customserver:8080/Dr_SABITHA_RAMAKRISHNAN.pdf",
                position : [190,20]
            },
            {
                name : 'AG',
                redirect_url : "http://customserver:8080/DrAGaneshRam.pdf  ",
                position : [400,20]
            },
            {
                name : 'KS',
                redirect_url : "http://customserver:8080/Kselvakumar.pdf",
                position : [260,20]
                
            },
            {
                name : 'MM',
                redirect_url : "http://customserver:8080/Dr_Mythily.pdf",
                position : [330,20]
            },
            {
                name : 'NV',
                redirect_url : "http://customserver:8080/Dr_N_VINOTH.pdf",
                position : [480,20]   
            },
            {
                name : 'SS',
                redirect_url : "http://customserver:8080/Dr_S_SUTHA.pdf",
                position : [550,20]
                
            },
            {
                name : 'MVK',
                redirect_url : "http://customserver:8080/MVijayakarthick_profile.pdf",
                position : [550,105]
            },
            {
                name : 'SM',
                redirect_url : "http://customserver:8080/Meyyappan_S_Profile.pdf",
                position : [400,105]
            },
            {
                name : 'PA',
                redirect_url : "http://customserver:8080/PAnbumalar_Biodata.pdf",
                position : [190,105]
            },
            {
                name : 'SSP',
                redirect_url : "http://customserver:8080/Pream_Anand_S_S.pdf",
                position : [330,105]
            }
        ]
    },
    {
        floor : 2,
        image_url : floor_2_pic,
        buttons : [
            {
                name : 'Computing Facility',
                redirect_url : "flowlab",
                position : [120,60]
            },
            {
                name : 'Embedded System Lab',
                redirect_url : "/embeddedLab",
                position : [420,60]
                
                
            },
            {
                name : 'Instrumentation lab',
                redirect_url : "/iiLab",
                position : [370,410]
                
            },
            {
                name : 'Transducers Lab',
                redirect_url : "/translab",
                position : [120,410]
            },
            {
                name : 'DK',
                redirect_url : "http://customserver:8080/Dr_DKALPANA.pdf",
                position : [9,238]
                
            },
           
            {
                name : 'Rest room',
                redirect_url : "",
                position : [580,410]
            }

        
        ]
        
    },
    {
        floor : 3,
        image_url : floor_3_pic,
        buttons: [
            {
                name : 'Department Library',
                redirect_url : "",
                position : [70,60]
            },
            {
                name : 'Electronics Lab-I',
                redirect_url : "/electronicslab",
                position : [400,60]
                
                
            },
            {
                name : 'Project lab',
                redirect_url : "",
                position : [440,420]
                
            },
            {
                name : 'Electronics Lab-II',
                redirect_url : "/electronicslab",
                position : [280,420]
            },
            {
                name : 'Computing Facility',
                redirect_url : "",
                position : [100,420]
            },
            {
                name : 'KL',
                redirect_url : "flowlab",
                position : [10,240]
                
            },
            {
                name : 'electrical panel room',
                redirect_url : "",
                position : [10,420],
                rotate : true 
                
            },
            {
                name : 'Rest room',
                redirect_url : "",
                position : [585,420]
            }

            
        ]
        
    }
];

export default floor_data;