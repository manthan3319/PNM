import React, { useState, useEffect } from 'react';
import { sliderbg10 } from '../Images/Images';

const faqs = [
    {
        title: 'Carbon Neutrality Assessment',
        description: 'Carbon neutrality assessment is a process of evaluating the carbon footprint of an entity or activity and determining the measures necessary to achieve carbon neutrality. It involves the identification, measurement, and reduction of greenhouse gas emissions (GHG) produced by an organization, product, or service.'
    },
    {
        title: 'Product Carbon Foot Print',
        description: 'A product carbon footprint refers to the total amount of greenhouse gas (GHG) emissions that are produced throughout the lifecycle of a particular product, from the extraction of raw materials to the disposal of the product at the end of its life. This includes the GHG emissions associated with the production, transportation, use, and disposal of the product.'
    },
    {
        title: 'Life Cycle Assessment',
        description: 'Life cycle assessment (LCA) is a methodological framework used to evaluate the environmental impacts associated with all stages of a product s life cycle, from raw material extraction to disposal. It is a comprehensive analysis that considers the environmental impacts of a products production, transportation, use, and end-of-life treatment.'
    },
    {
        title: 'ENVIRONMENTAL PRODUCT DIRECTIVE',
        description: 'The Environmental Product Directive (EPD) is a standardized method for evaluating and reporting the environmental performance of products throughout their life cycle. It is a type III environmental declaration, which means it is based on independent verification and provides information on a products environmental impact that is consistent, transparent, and scientifically credible.'
    },
    {
        title: 'ENERGY AUDIT AS PER BIS',
        description: 'An energy audit is a process of evaluating the energy consumption of a building or facility to identify areas of inefficiency and opportunities for energy savings. The purpose of an energy audit is to identify ways to reduce energy consumption, increase energy efficiency, and lower energy costs.'
    },
    {
        title: 'Taskforce On Climate Related Financial Disclosure',
        description: 'The Task Force on Climate-Related Financial Disclosures (TCFD) is an initiative established by the Financial Stability Board (FSB) in 2015 to improve and standardize climate-related financial disclosures by companies. The TCFD was created in response to concerns that climate change presents significant financial risks to companies, investors, and the financial system as a whole, and that existing financial disclosures may not adequately account for these risks.'
    },
    {
        title: 'CARBON DISCLOSURE PROJECT',
        description: 'The Carbon Disclosure Project (CDP) is a non-profit organization that runs a global disclosure system for companies, cities, states, and regions to measure and report on their environmental impact, including their greenhouse gas emissions, water use, and deforestation risks.'
    },
    {
        title: 'Assurance of Corporate Sustainability Report (GRI/IR)',
        description: 'Assurance of a Corporate Sustainability Report is a process of independent evaluation of a companys sustainability performance and reporting by a third-party assurance provider. Two widely recognized frameworks for sustainability reporting are the Global Reporting Initiative (GRI) and the International Integrated Reporting Council (IIRC) framework.'
    },

    {
        title: 'ESG Data Analytics/Benchmarking Study',
        description: 'ESG data analytics and benchmarking studies are used to evaluate the Environmental, Social, and Governance (ESG) performance of companies in a particular industry or region. These studies typically involve the collection and analysis of ESG data from multiple sources, such as sustainability reports, regulatory filings, and other publicly available information.'
    },
];

const Esg = () => {
    const [activeTab, setActiveTab] = useState(null);

    const toggleTab = (index) => {
        setActiveTab(activeTab === index ? null : index);
    };

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    return (
        
        <div className='lg:max-w-[1850px] px-[20px] m-auto lg:pt-[40px] pt-[100px]'>
            <div className='lg:pt-[220px] md:pt-[120px] pt-[92px]'>
                <div>
                    <img src={sliderbg10} alt='eng' className='w-[100%]' />

                    <div className="mt-[40px]">
                        {faqs.map((faq, index) => (
                            <div key={index} className="cursor-pointer mb-[15px]">
                                <h2 
                                    onClick={() => toggleTab(index)}
                                    className="text-[20px] font-bold py-[15px] rounded-t-lg text-black flex items-center gap-[10px] bg-[#02076430]  font-poppins"
                                >
                                     <span className="ml-[10px] text-[25px]">
                                        {activeTab === index ? '-' : '+'}
                                    </span>
                                    {faq.title}
                                </h2>
                                {activeTab === index && (
                                    <p className="pt-[10px] text-gray-600 text-[18px] font-poppins border-[1px] border-black border-t-0 p-[10px]">
                                        {faq.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Esg;
