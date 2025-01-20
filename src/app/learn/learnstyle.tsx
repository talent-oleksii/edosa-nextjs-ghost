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
                  pretext: "Transform Your Technical Expertise into Strategic Value",
                  text: "Join 1,000+ professionals who are elevating their strategic impact",
                  text1: "Transform your technical expertise into strategic value through battle-tested frameworks used to deliver nine-figure transformations at organisations like AXA, Barclays Group, and AIG.",
                  upItems1: {
                    title: "<b>Program Access & Rewards:</b>",
                    subitems: ['Immediate access to all 5 daily lessons', 'Unlimited lifetime access to all bonus materials', 'Complete all lessons + implementation survey - Get 25% credit toward Amplify', 'Share your transformation story - Get additional 25% Amplify credit', 'Total possible: 50% credit toward your Amplify investment', 'Priority notification for advanced programs']
                  },
                  upItems2: {
                    title: "Daily Lessons:",
                    subitems: ['Day 1: Strategic Value Identification', 'Day 2: Premium Positioning Framework', 'Day 3: High-Value Conversation System', 'Day 4: Strategic Engagement Model', 'Day 5: Value Acceleration Method']
                  },
                  subTitle: 'Strategic Bonuses:',
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
                  bonus1: {
                    name: 'Special Bonus:',
                    content: '<b>Strategic Advisory Roadmap</b>&#8482; ($1,497 value)',
                    items: ['Career evolution planner', 'Opportunity sizing tools', 'Risk mitigation framework', 'Value scaling system']
                  },
                  bonus2: {
                    name: 'Ultimate Bonus:',
                    content: '<b>Value Acceleration System</b>&#8482; ($1,697 value)',
                    items: ['Integration Framework', 'Acceleration Tools', 'Value Compounding System', 'Success Path Templates', 'Implementation Playbook']
                  },
                  value1: {
                    name: 'Total Value:',
                    val: '$6,385'
                  },
                  value2: {
                    name: 'Your Investment:',
                    val: '$0'
                  },
                  collapseView: ['✓ Unlimited lifetime access to all materials', '✓ Up to 50% credit toward Amplify'],
                  alert: "⏰ Next cohort starts February 1st",
                  buttonName: 'Start My 5-Day Journey',
                  textUnderBtn: 'Begin your transformation to strategic advisor...'
                },
                {
                  title: 'Amplify',
                  header: 'The $Million AI Advisor - From Technical Professional to High Value AI Consultant',
                  pretext: "From Technical Professional to High-Value AI Consultant",
                  text: "Used by consultants delivering 6-7 figure transformations",
                  text1: "A complete transformation system based on real experience delivering nine-figure impacts across 35+ organisations.",
                  upItems1: {
                    title: "<b>Implementation Rewards & Support:</b>",
                    subitems: ['Complete program within 14 days - Get 40% credit toward Peak', 'Document your first implementation - Get additional 35% Peak credit', 'Share detailed case study - Get final 25% Peak credit', 'Total possible: 100% credit toward your Peak program investment', 'Monthly group coaching calls with successful implementers', 'Strategic framework implementation guidance', 'Priority eligibility for Peak program']
                  },
                  upItems2: {
                    title: "",
                    subitems: []
                  },
                  subTitle: 'Strategic Bonuses Include:',
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
                  bonus1: {
                    name: 'Early Bonus:',
                    content: '<b>Advisory Board Presentation System</b>&#8482; ($2,997 value)',
                    items: ['Executive communication frameworks', 'Value demonstration tools', 'Strategic story templates', 'Impact documentation system']
                  },
                  bonus2: {
                    name: '',
                    content: '',
                    items: []
                  },
                  value1: {
                    name: 'Total Value:',
                    val: '$12,485'
                  },
                  value2: {
                    name: 'Your Investment:',
                    val: '[Request Pricing Details]'
                  },
                  collapseView: ['✓ 30-day success guarantee', '✓ Up to 100% credit toward Peak'],
                  alert: "🎯 Early access closing soon",
                  buttonName: 'Get My Strategic Toolkit',
                  textUnderBtn: 'Discover proven frameworks for million-dollar impacts...'
                },
                {
                  title: 'Peak',
                  header: 'The AI Advisory Accelerator Program',
                  pretext: "The AI Advisory Accelerator Program",
                  text: "Limited to 10 high-impact professionals per quarter",
                  text1: "Fully personalised guidance through your transformation journey, based on experience delivering nine-figure impacts at organisations like AXA, the European Commission, and Barclays Group.",
                  upItems1: {
                    title: "<b>Program Delivery & Success Milestones:</b>",
                    subitems: ['Clear 90-day implementation roadmap', 'Bi-weekly progress check-ins', 'Quarterly value review sessions', 'Implementation support throughout', 'Access to private advisory community', 'Regular strategy alignment reviews']
                  },
                  upItems2: {
                    title: "",
                    subitems: []
                  },
                  subTitle: 'Strategic Inclusions:',
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
                  bonus1: {
                    name: 'VIP Bonus:',
                    content: '<b>Private Advisory Council Access</b>&#8482; ($45,000 value)',
                    items: ['Direct strategic guidance', 'Implementation support', 'Pattern recognition', 'Success acceleration']
                  },
                  bonus2: {
                    name: '',
                    content: '',
                    items: []
                  },
                  value1: {
                    name: 'Total Value:',
                    val: '$115,000'
                  },
                  value2: {
                    name: 'Your Investment:',
                    val: '[Custom Program Details]'
                  },
                  collapseView: ['✓ Milestone-based delivery', '✓ Quarterly value reviews'],
                  alert: "⚡ 3 spots remaining this quarter",
                  buttonName: 'Begin My Advisory Journey',
                  textUnderBtn: 'Transform your expertise into lasting impact...'
                }
              ]

              let demoLearnItems: any[] = [];
              res.data.tiers
                .filter((item: { name: string; }) => TiersNames.includes(item.name))
                .map((el: any, index: number) => {
                    const data = {
                      tierId: el.id,
                      title: readyData[index].title,
                      header: readyData[index].header,
                      pretext: readyData[index].pretext,
                      text: readyData[index].text,
                      text1: readyData[index].text1,
                      upItems1: readyData[index].upItems1,
                      upItems2: readyData[index].upItems2,
                      subTitle: readyData[index].subTitle,
                      items: readyData[index].items,
                      bonus1: readyData[index].bonus1,
                      bonus2: readyData[index].bonus2,
                      value1: readyData[index].value1,
                      value2: readyData[index].value2,
                      collapseView: readyData[index].collapseView,
                      alert: readyData[index].alert,
                      buttonName: readyData[index].buttonName,
                      textUnderBtn: readyData[index].textUnderBtn,
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
              pretext={item.pretext}
              text={item.text}
              text1={item.text1}
              upItems1={item.upItems1}
              upItems2={item.upItems2}
              subTitle={item.subTitle}
              items={item.items}
              bonus1={item.bonus1}
              bonus2={item.bonus2}
              value1={item.value1}
              value2={item.value2}
              collapseView={item.collapseView}
              alert={item.alert}
              buttonName={item.buttonName}
              textUnderBtn={item.textUnderBtn}
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
