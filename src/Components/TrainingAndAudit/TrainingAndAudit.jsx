import React, { useState } from 'react';

const trainingData = {
    environment: [
        "Pollution control system and management",
        "Area expertise/EIA coordinator as per QCI scheme",
        "Waste water treatment and Bioremediation",
        "Ground water contamination and its remediation",
        "Air and Noise pollution and its eradication",
        "Pollution control devices handling and maintenance",
        "Environmental laws and EC compliances",
        "CRZ/EIA regulations",
        "Forest and Wildlife clearance process and regulations",
        "Environmental Tribulations and Solutions",
        "Green belt development and benefits",
        "GIS software systems",
        "Air-Noise Modelling",
        "Strategic Impact Assessment (SIA) and Need base assessment",
        "Water budgeting and water management- water balance",
        "Industrial Effluent Treatment technologies",
        "ESG - Environmental Social Governance",
        "Building and Township Regulations/Compliance",
        "Risk Assessment-HAZOP, HAZID, Tree Analysis, QRA, Risk Readiness Assessment (RRA)"
    ],
    ohSafety: [
        "Pollution control system and management",
        "Area expertise/EIA coordinator as per QCI scheme",
        "Waste water treatment and Bioremediation",
        "Ground water contamination and its remediation",
        "Air and Noise pollution and its eradication",
        "Pollution control devices handling and maintenance",
        "Environmental laws and EC compliances",
        "CRZ/EIA regulations",
        "Forest and Wildlife clearance process and regulations",
        "Environmental Tribulations and Solutions",
        "Green belt development and benefits",
        "GIS software systems",
        "Air-Noise Modelling",
        "Strategic Impact Assessment (SIA) and Need base assessment",
        "Water budgeting and water management- water balance",
        "Industrial Effluent Treatment technologies",
        "ESG - Environmental Social Governance",
        "Building and Township Regulations/Compliance",
        "Risk Assessment-HAZOP, HAZID, Tree Analysis, QRA, Risk Readiness Assessment (RRA)"
    ]
};

const TrainingAndAudit = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (card) => {
        setActiveCard(activeCard === card ? null : card);
    };

    return (
        <div className='lg:max-w-[1850px] px-[20px] m-auto lg:pt-[40px] pt-[20px] pb-[50px]'>
            <div className='lg:pt-[200px] md:pt-[120px] pt-[92px]'>

                <div className='flex justify-center md:flex-row flex-col items-center gap-[15px] '>

                    <div 
                        className='raing_card cursor-pointer' 
                        onClick={() => handleCardClick('environment')}
                    >
                        <h1>Environment TRAINING SERVICES</h1>
                        <p className='text-center mt-[10px]'>View More <span><i class="fa fa-angle-right" aria-hidden="true"></i></span> </p>
                    </div>

                    <div 
                        className='raing_card cursor-pointer' 
                        onClick={() => handleCardClick('ohSafety')}
                    >
                        <h1>OH & Safety TRAINING SERVICES</h1>
                        <p className='text-center mt-[10px]'>View More <span><i class="fa fa-angle-right" aria-hidden="true"></i></span> </p>
                    </div>
                </div>

                {activeCard && (
                    <div className="mt-8 w-[100%]">
                        <h1 className='font-bold text-center text-[25px] flex justify-center '>{activeCard === 'environment' ? 'Environment TRAINING SERVICES' : 'OH & Safety TRAINING SERVICES'}</h1>
                        <div className='flex flex-wrap gap-[10px] justify-center mt-[25px]'>
                            {trainingData[activeCard].map((service, index) => (
                                <div className='md:w-[45%] lg:w-[25%] w-[100%] bg-orange p-[15px] border-white border-[1px] rounded-sm'>
                                    <h1 key={index} className='text-white font-poppins text-[19px] '>{service}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrainingAndAudit;
