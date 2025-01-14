'use client';
import React, { FC, useState } from "react";
import axios from "axios";
import LearnCard from "../components/cards/LearnCard";
import { title } from "process";

type TiersResponse = {
  tiers: any
}

const TiersNames = ['Growth', 'Amplify', 'Peak'];


const LearnStyle: FC = () => {
  const [learnItems, setLearnItems] = useState<any>([]);
  const [isMore, setIsMore] = useState<boolean>(false);

  React.useEffect(() => {
      const getTiers = async() => {
          try {
              const res = await axios.post<TiersResponse>('/api/content/tiers', {
                  payload: '&limit=all&include=monthly_price,benefits'
              });
              
              const readyData = [
                {
                  title: 'Growth',
                  header: 'The Million-Dollar AI Advisor: 5 Days to Transform Your Technical Expertise into Strategic Value',
                  text: "5 Day eMail Course to transform your technical expertise into strategic value in just 5 days through battle-tested frameworks I've used to deliver nine-figure transformations at organisations like AXA, Barclays Group, and AIG.",
                  subTitle: 'Strategic Bonuses',
                  items: [
                    {
                      title: '<b>Value Translation Framework</b>&#8482; ($997 value)',
                      subitems: ['Immediate value identification system', 'Strategic opportunity calculator', 'Quick-win spotting guide', 'Value story templates']
                    },
                    {
                      title: '<b>Executive Conversation Guide</b>&#8482; ($1,297 value)',
                      subitems: ['Board-level communication frameworks', 'Strategic question sequences', 'Response frameworks', 'Real engagement examples']
                    },
                    {
                      title: '<b>Rapid Implementation Kit</b>&#8482; ($897 value)',
                      subitems: ['30-day quick start guide', 'Progress tracking system', 'Value documentation templates', 'Success indicators']
                    }
                  ],
                  bonus: {
                    name: 'Special Time-Sensitive Bonus:',
                    content: '<b>Strategic Advisory Roadmap</b>&#8482; ($1,497 value)',
                    items: ['Career evolution planner', 'Opportunity sizing tools', 'Risk mitigation framework', 'Value scaling system']
                  },
                  totalValue: '$4,668',
                  buttonName: 'Start Here'
                },
                {
                  title: 'Amplify',
                  header: 'The $Million AI Advisor - From Technical Professional to High Value AI Consultant',
                  text: "A complete transformation system based on real experience delivering nine-figure impacts across 35+ organisations.",
                  subTitle: 'Strategic Bonuses',
                  items: [
                    {
                      title: '<b>Value Opportunity Assessment Toolkit</b>&#8482; ($2,997 value)',
                      subitems: ['Interactive PDF Scorecard system', 'Value Matrix Calculator', 'Strategic Context Framework', 'Opportunity Sizing Tools']
                    },
                    {
                      title: '<b>Strategic Advisory Templates</b>&#8482; ($1,997 value)',
                      subitems: ['PowerPoint Template Pack', 'Client Meeting Frameworks', 'Value Story Templates', 'Implementation Roadmaps']
                    },
                    {
                      title: '<b>Client Engagement Playbook</b>&#8482; ($2,497 value)',
                      subitems: ['Professional Meeting Guides', 'Stakeholder Management Tools', 'Value Documentation System', 'Success Metrics Framework']
                    },
                    {
                      title: '<b>Value Acceleration System</b>&#8482; ($1,997 value)',
                      subitems: ['Opportunity identification', 'Risk mitigation frameworks', 'Implementation accelerators', 'Progress tracking tools']
                    }
                  ],
                  bonus: {
                    name: 'Early Action Bonus:',
                    content: '<b>Advisory Board Presentation System</b>&#8482; ($2,997 value)',
                    items: ['Executive communication frameworks', 'Value demonstration tools', 'Strategic story templates', 'Impact documentation system']
                  },
                  totalValue: '$12,485',
                  buttonName: 'Register Interest Here'
                },
                {
                  title: 'Peak',
                  header: 'The AI Advisory Accelerator Program',
                  text: "Fully personalised guidance through your transformation journey, based on experience delivering nine-figure impacts at organisations like AXA, the European Commission, and Barclays Group.",
                  subTitle: 'Strategic Inclusions',
                  items: [
                    {
                      title: '<b>Strategic Evolution System</b>&#8482; ($15,000 value)',
                      subitems: ['Personalized transformation roadmap', 'Implementation guidance', 'Progress acceleration', 'Success validation']
                    },
                    {
                      title: '<b>Pattern Recognition Framework</b>&#8482; ($12,000 value)',
                      subitems: ['Real-time decision support', 'Risk identification system', 'Opportunity spotting', 'Value multiplication']
                    },
                    {
                      title: '<b>Impact Acceleration Method</b>&#8482; ($18,000 value)',
                      subitems: ['Value creation frameworks', 'Strategic positioning', 'Client acquisition system', 'Scale planning']
                    },
                    {
                      title: '<b>Legacy Building Blueprint</b>&#8482; ($25,000 value)',
                      subitems: ['Long-term value architecture', 'Market positioning system', 'Innovation framework', 'Future-proofing method']
                    }
                  ],
                  bonus: {
                    name: 'VIP Bonus:',
                    content: '<b>Private Advisory Council Access</b>&#8482; ($45,000 value)',
                    items: ['Direct strategic guidance', 'Implementation support', 'Pattern recognition', 'Success acceleration']
                  },
                  totalValue: '$115,000',
                  buttonName: 'Apply Here'
                }
              ]

              let demoLearnItems: { title: string; header: any; text: any; items: any; buttonStyle: string; backColor: string; border: string; }[] = [];
              res.data.tiers
                .filter((item: { name: string; }) => TiersNames.includes(item.name))
                .map((el: any, index: number) => {
                    const data = {
                      tierId: el.id,
                      title: readyData[index].title,
                      header: readyData[index].header,
                      text: readyData[index].text,
                      subTitle: readyData[index].subTitle,
                      items: readyData[index].items,
                      bonus: readyData[index].bonus,
                      totalValue: readyData[index].totalValue,
                      buttonName: readyData[index].buttonName,
                      buttonStyle: el.type == 'paid' ? 'paid' : 'free',
                      backColor: index%2 == 0 ? "white" : "#F3F8FE",
                      border: index%2 == 0 ? "border-2 border-gray-300" : "border-solid",
                    }
                    demoLearnItems.push(data)
                });
              setLearnItems(demoLearnItems);
          } catch (err) {
              console.log(err);
          }
      }

      getTiers();
  }, [])

  return (
    <div className="mt-4 sm:mt-14 sm:px-10 flex justify-center items-center flex-col">
      <div className="text-base sm:text-2xl leading-8 font-bold rounded-full bg-[#F3F8FE] px-3 sm:px-5 py-1">
        Learn
      </div>
      <div className="text-lg sm:text-4xl leading-11 font-bold mt-4 sm:mt-8 text-text-color">
        Learn with Edosa Odaro
      </div>
      <div className="text-lg sm:text-xl leading-8 mt-4 sm:mt-8 text-text-color">
        Edosa Odaro’s learning resources are designed to support professionals at every <br />
        stage of their journey, from beginners to advanced leaders. Explore our range of <br />
        educational offerings to gain valuable skills and insights in data science and AI:
      </div>
      <div className="text-sm leading-8 font-bold rounded-full bg-[#667EFF] text-white px-3 sm:px-5 py- mt-8">
        Most Popular
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-10 mt-6">
        {
          learnItems.map((item: any, index: React.Key | null | undefined) => (
            <LearnCard
              key={index}
              tierid={item.tierId}
              title={item.title}
              header={item.header}
              text={item.text}
              subTitle={item.subTitle}
              items={item.items}
              bonus={item.bonus}
              totalValue={item.totalValue}
              buttonName={item.buttonName}
              button={item.buttonStyle}
              backColor={item.backColor}
              border={item.border}
              more={isMore}
              setMore={setIsMore}
            />
          ))
        }
      </div>
    </div>
  );
};

export default LearnStyle;
