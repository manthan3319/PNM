import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AREAOFEXPERTISE, auditicon, auditicon1, auditicon2, bg1, certificate1, certificate2, ConstructionSafety, CulturalTransformation, DMRC, ElectricalSafety, ENVIRONMENTAL_IMPACT, ENVIRONMENTAL_IMPACT1, FireServices, HAZOP, IncidentInvestigation, IndustrialSafety, IndustrialSafety1, InformativeTraining, IntegratedManagement, LegalCompliance, MARINESERVICES, MODELLING, OccupationalHealth, pollutin, ProcessSafety, RiskAssessment, SITEAPPRAISAL, TrainingDISH, TRAININGSERVICES, TURNKEYPROJECTS, workSystem } from '../Images/Images';
import { certificate } from '../Images/Images';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export const environmentServices = [
    {
        id: 1,
        name: 'CERTIFICATIONS, CLEARANCES AND PERMISSION',
        img: certificate,
        sliderImages: [
            IndustrialSafety1,
            certificate1,
            certificate2,
        ],
        details: [
            "1. Environment Clearance (EIA) for project clearances",
            "2. Consent to Establish (CTE), Consent to Operate (CTO)/ Consolidated Consent & Authorization (CC&A) under Air & Water Act.",
            "3. Environment Audit",
            "4. Half Yearly Environmental Compliances",
            "5. Submission of FORM-IV, V & Environment Financial Statement",
            "6. Environment Legal advice",
            "7. Waste water treatment-consultancy, design and management",
            "8. Authorization of hazardous substance / Bio-Medical waste",
            "9. Green building certification",
            "   a. High rise building construction clearance",
            "   b. Township development & clearance",
            "10. Geology & hydrological studies",
            "11. Geospatial/GIS Studies (GRI- Geographical Information System)",
            "12. Land use/ Land cover studies",
            "13. Forest Clearance",
            "14. No Objection Certificate- Forest Diversion/Non Forest Land",
            "15. Wildlife conservation",
            "16. Wildlife conservation plan/Mangrove management plan",
            "17. CRZ Clearance",
            "18. Marine Studies",
            "19. Environment Modelling Studies",
            "20. No Objection Certificate -Storage of Diesel/Hazardous Chemicals",
            "21. No- Objection Certificate- Revenue Department/Authority",
            "22. DPR (Detailed Project Report) & feasibility report",
            "23. Environment Design and Architect",
            "24. Rain water harvesting",
            "25. Central Ground water authority permissions"
        ]
    },
    {
        id: 2,
        name: 'AUDIT SCHEMES',
        img: auditicon,
        sliderImages: [
            auditicon1,
            auditicon2,
        ],
        details: [
            "1 - Environmental Audit",
            "2 - Energy / Safety Audit",
            "3 - Clean Development Mechanism",
            "4 - Carbon Footprint (Carbon Emission Monitoring)",
            "5 - Emission Trading Scheme (ETS)",
            "6 - Carbon Reduction Commitment",
            "7 - Biogenic CO2 Emission",
            "8 - Green Building Certifications"
        ]
    },
    {
        id: 3,
        name: 'ENVIRONMENTAL IMPACT STUDIES',
        img: ENVIRONMENTAL_IMPACT,
        sliderImages: [
            ENVIRONMENTAL_IMPACT1,
            auditicon2,
            auditicon1
        ],
        details: [
            "1 - Environmental Impact Assessment",
            "2 - Environmental Management Plan",
            "3 - Environmental Audit Plan",
            "4 - Pollutant Apportionment Study",
            "5 - Social Impact Study / Environmental Social Governance (ESG)",
            "6 - Public Consultation",
            "7 - Baseline Environmental Assessment",
            "8 - DMP - Disaster Management Plan",
            "9 - Corporate Social Responsibility (CSR)",
            "10 - Environment Corporate Social Responsibility (ECSR)"
        ]
    },
    {
        id: 4,
        name: 'SITE APPRAISAL STUDIES',
        img: SITEAPPRAISAL,
        sliderImages: [
            ENVIRONMENTAL_IMPACT1,
            auditicon2,
            auditicon1
        ],
        details: [
            "1 - Site selection and liability studies",
            "2 - Rehabilitation and resettlement studies",
            "3 - Land use / Land cover studies based on remote sensing",
            "4 - Carrying capacity based regional studies",
            "5 - Due Diligence studies",
            "6 - Geological & Hydro-Geological studies"
        ]
    },
    {
        id: 5,
        name: 'MODELLING SERVICES',
        img: MODELLING,
        sliderImages: [
            ENVIRONMENTAL_IMPACT1,
            auditicon2,
            auditicon1
        ],
        details: [
            "1 - Risk Assessment Modelling",
            "2 - Noise Dispersion Modelling",
            "3 - Ground water modelling",
            "4 - Land gem modelling",
            "5 - Surface water modelling",
            "6 - Vehicular Emission Modelling",
            "7 - Geospatial services"
        ]
    },
    {
        id: 6,
        name: 'POLLUTION CONTROL SERVICES (LABORATORY) ENVIRONMENTAL TESTING',
        img: pollutin,
        sliderImages: [
            ENVIRONMENTAL_IMPACT1,
            auditicon2,
            auditicon1
        ],
        details: [
            "1 - Air Pollution Control",
            "2 - Water Pollution Control",
            "3 - Noise Pollution Control",
            "4 - Soil & Land Pollution Control",
            "5 - Waste Management (Solid & Hazardous)",
            "6 - Environmental Monitoring/Compliance Monitoring - Air, Water, Soil & Noise",
            "7 - Ground Water Sampling and Analysis"
        ]
    },
    {
        id: 7,
        name: 'MARINE SERVICES',
        img: MARINESERVICES,
        sliderImages: [
            ENVIRONMENTAL_IMPACT1,
            auditicon2,
            auditicon1
        ],
        details: [
            "1 - CRZ Management Studies",
            "2 - Marine impact assessment",
            "3 - Marine Ecological Studies",
            "4 - Brine Discharge Dispersion",
            "5 - Offshore sampling and analysis"
        ]
    },
    {
        id: 8,
        name: 'TURNKEY PROJECTS',
        img: TURNKEYPROJECTS,
        sliderImages: [
            ENVIRONMENTAL_IMPACT1,
            auditicon2,
            auditicon1
        ],
        details: [
            "1-Water Treatment Plant (WTP)",
            "2-Sewage Treatment Plant (STP)",
            "3-Operation & Maintenance",
            "4-Zero Liquid Discharge system",
            "5-Industrial Effluent Treatment Plant (ETP)",
            "6-Fabrication, Civil Structure & Maintenance (Multi effect evaporator (MEE), spray dryer, solvent stripper) ZLD",
            "7-Feasibility/Adequacy report",
            "8-Engineering & Designs"
        ]
    },
    {
        id: 9,
        name: 'TRAINING SERVICES',
        img: TRAININGSERVICES,
        sliderImages: [
            ENVIRONMENTAL_IMPACT1,
            auditicon2,
            auditicon1
        ],
        details: [
            "1-Pollution control system and management",
            "2-Area expertise/EIA coordinator as per QCI scheme",
            "3-Waste water treatment and Bioremediation",
            "4-Ground water contamination and its remediation",
            "5-Air and Noise pollution and its eradication",
            "6-Pollution control devices handling and maintenance",
            "7-Environmental laws and EC compliances",
            "8-CRZ/EIA regulations",
            "9-Forest and Wildlife clearance process and regulations",
            "10-Environmental Tribulations and Solutions",
            "11-Green belt development and benefits",
            "12-GIS software systems",
            "13-Air-Noise Modelling",
            "14-Water Modelling",
            "15-Risk Assessment-HAZOP, HAZID, Tree Analysis, QRA, Risk Readiness Assessment (RRA)",
            "16-Strategic Impact Assessment (SIA) and Need base assessment",
            "17-Water budgeting and water management- water balance",
            "18-Industrial Effluent Treatment technologies",
            "19-Building and Township Regulations/Compliance",
            "20-ESG - Environmental Social Governance"
        ]
    },
    {
        id: 10,
        name: 'AREA OF EXPERTISE AS PER QCI FOR ENVIRONMENT SERVICES',
        img: AREAOFEXPERTISE,
        sliderImages: [
            ENVIRONMENTAL_IMPACT1,
            auditicon2,
            auditicon1
        ],
        details: [
            "1-Land Use",
            "2-Air Pollution Monitoring, Prevention and Control",
            "3-Meteorology, Air Quality Modeling and prediction",
            "4-Water Pollution Monitoring, prevention and control",
            "5-Ecology and Bio Diversity",
            "6-Noise & Vibration",
            "7-Socio-Economics/ESG",
            "8-Hydrology, Ground water and Water Conservations",
            "9-Geology",
            "10-Soil Conversations",
            "11-Risk Assessment and Hazard Waste Management Comprising Hazardous Waste (HW) Industrial Solid Waste (ISW) and Municipal Solid Waste (MSW)"
        ]
    },
    {
        id: 11,
        name: 'DMRC (Delhi Metro Rail Corporation) Empaneled Agencies',
        img: DMRC,
        sliderImages: [
            ENVIRONMENTAL_IMPACT1,
            auditicon2,
            auditicon1
        ],
        details: [
            "1-Environmental Training",
            "2-External Environment Audit",
            "3-Specialised Training"
        ]
    }
];

export const safetyHealthServices = [
    { name: 'Industrial Safety & Health Audit', img: IndustrialSafety },
    { name: 'Risk Assessment', img: RiskAssessment },
    { name: 'Process Safety Management (PSM) Services', img: ProcessSafety },
    { name: 'HAZOP', img: HAZOP },
    { name: 'Incident Investigation', img: IncidentInvestigation },
    { name: 'Training * DISH approved training Institute and Trainers', img: TrainingDISH },
    { name: 'Fire Services', img: FireServices },
    { name: 'Permit to Work System', img: workSystem },
    { name: 'Electrical Safety', img: ElectricalSafety },
    { name: 'IMS (Integrated Management System)', img: IntegratedManagement },
    { name: 'Project/Construction Safety Management', img: ConstructionSafety },
    { name: 'Shutdown HSE Management', img: SITEAPPRAISAL },
    { name: 'Legal Compliance', img: LegalCompliance },
    { name: 'Occupational Health Services', img: OccupationalHealth },
    { name: 'DMRC (Delhi Metro Rail Corporation) Empaneled Agencies', img: DMRC },
    { name: 'Documentary/Informative Training Movies for Safety Health & Environment', img: InformativeTraining },
    { name: 'Cultural Transformation with the help of change agent', img: CulturalTransformation }
];





const Services = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 },
        },
    };

    const tabVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="relative py-[50px] bg-cover bg-center"
            style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center'
            }}>

            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative lg:max-w-[1850px] px-[20px] m-auto lg:mt-[40px]">
                <div className="text-center">
                    <h1 className='font-poppins lg:text-[45px] text-[35px] font-bold text-light-blue border-b-[2px] border-orange inline-block'>
                        PNM SERVICES
                    </h1>
                    <p className='lg:text-[18px] text-[16px] mt-[15px] font-poppins max-w-[1200px] m-auto text-white'>
                        <span>PNM Enviro-Safe Solutions is dedicated to providing top-notch</span>
                        <span className='font-bold'> Environment Services</span>
                        <span>, offering scientifically sound and practically applicable solutions for a safer, sustainable future.</span>
                        <span className='text-white text-[25px] px-[10px]'>&</span>
                        <span> We also specialize in</span>
                        <span className='font-bold'> Industrial Safety & Health</span>
                        <span>, ensuring that businesses adhere to high standards of safety and health regulations to protect their workforce and operations.</span>
                    </p>
                </div>

                <div className="mt-20">
                    <Tabs>
                        <TabList className='tab_list flex md:flex-row flex-col justify-center md:space-x-4 gap-[15px] pb-[50px]'>
                            <Tab className="cursor-pointer text-white bg-slate-500 text-[19px] font-semibold border-b-2 border-transparent hover:border-orange focus:outline-none focus:border-pink p-[15px]">
                                Environment Services
                            </Tab>
                            <Tab className="cursor-pointer text-white text-[19px] bg-slate-500 font-semibold border-b-2 border-transparent hover:border-orange focus:outline-none focus:border-pink p-[15px]">
                                Industrial Safety & Health
                            </Tab>
                            <Tab className="cursor-pointer text-white text-[19px] bg-slate-500 font-semibold border-b-2 border-transparent hover:border-orange focus:outline-none focus:border-pink p-[15px]">
                                ESG
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <motion.div className='mt-8 text-black grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[25px]'>
                                {environmentServices.map((service, index) => (
                                    <motion.div
                                        key={service.id}
                                        className="flex flex-col bg-[#ffffff5e] service_card_box p-[15px] min-h-[200px] border-white border-[1px] rounded-lg overflow-hidden shadow-lg"
                                        variants={{
                                            hidden: { opacity: 0, x: -50 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect
                                    >
                                        <img src={service.img} alt={service.name} className='img_filter w-[80px] m-auto min-h-[50px] max-h-[80px] mb-[10px]' />
                                        <h1 className='mt-auto text-white text-center font-poppins text-[20px]'>{service.name}</h1>

                                        <div className='mt-[10px] text-center'>
                                            <Link to={`/service-details/${service.name}`} className='inline-block bg-orange text-white px-[10px] py-[5px] rounded-lg font-poppins'>View More</Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabPanel>


                        <TabPanel>
                            <motion.div className='mt-8 text-black grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[25px]'>
                                {safetyHealthServices.map((service, index) => (
                                    <motion.div
                                        key={service.id}
                                        className="flex flex-col bg-[#ffffff5e] service_card_box p-[15px] min-h-[200px] border-white border-[1px] rounded-lg overflow-hidden shadow-lg"
                                        variants={{
                                            hidden: { opacity: 0, x: -50 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect
                                    >
                                        <img src={service.img} alt={service.name} className='img_filter w-[80px] m-auto min-h-[50px] max-h-[80px] mb-[10px]' />
                                        <h1 className='mt-auto text-white text-center font-poppins text-[20px]'>{service.name}</h1>

                                        <div className='mt-[10px] text-center'>
                                            <Link to={`/service-details/${service.name}`} className='inline-block bg-orange text-white px-[10px] py-[5px] rounded-lg font-poppins'>View More</Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabPanel>

                        <TabPanel>
                            <motion.div className='mt-8 text-black grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-[25px]'>
                                {safetyHealthServices.map((service, index) => (
                                    <motion.div
                                        key={service.id}
                                        className="flex flex-col bg-[#ffffff5e] service_card_box p-[15px] min-h-[200px] border-white border-[1px] rounded-lg overflow-hidden shadow-lg"
                                        variants={{
                                            hidden: { opacity: 0, x: -50 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect
                                    >
                                        <img src={service.img} alt={service.name} className='img_filter w-[80px] m-auto min-h-[50px] max-h-[80px] mb-[10px]' />
                                        <h1 className='mt-auto text-white text-center font-poppins text-[20px]'>{service.name}</h1>

                                        <div className='mt-[10px] text-center'>
                                            <Link to={`/service-details/${service.name}`} className='inline-block bg-orange text-white px-[10px] py-[5px] rounded-lg font-poppins'>View More</Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabPanel>


                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Services;
