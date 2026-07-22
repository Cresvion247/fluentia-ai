import React from "react";

const highlight = (text, term) => text.split(new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")).map((part, index) => part.toLowerCase() === term.toLowerCase() ? <strong key={index}>{part}</strong> : part);
const items = [
  ["blackout", "when there is no electricity", ["What can cause a blackout in an area?", "= when news is not reported", "Why would a news blackout be imposed during a trial?"]],
  ["breakdown", "when something stops working", ["Have you ever had to call a breakdown recovery service because your car broke down?", "What kinds of issues could cause a breakdown in negotiations between two opposite parties?", "= when something is divided into smaller parts", "How can getting a breakdown of your costs help you run your business better?", "= when you suffer from depression and you can’t function", "What can you do to avoid a nervous breakdown during moments of hardship and pressure?"]],
  ["break-in", "when burglars enter your house by force", ["“This area suffers a lot of break-ins.”", "Are there lots of break-ins in your area? What can be done about break-ins in an area?"]],
  ["burnout", "when you’ve worked too hard for too long and you stop feeling happy in your job", ["What can cause a burnout in a person? How can you avoid a burnout?"]],
  ["check-up", "a medical exam", ["How often do you go for a check-up? When was the last time you went for a check-up?"]],
  ["comeback", "when you try to become famous or important again", ["Do you know of any music groups that are trying to make a comeback? How can their comeback be successful?"]],
  ["crackdown", "when the authorities become very strict about something", ["What kind of behaviour needs a crackdown on?"]],
  ["downturn", "a reduction (often in finances)", ["What are the reasons behind the current economic downturn?"]],
  ["dropout", "someone who leaves school or university early", ["Why would a young person become a drop-out?"]],
  ["flashback", "when you get a sudden memory from the past", ["Do you ever get any flashbacks from the past?"]],
  ["handout", "something that is given to you – like a document or other type of support", ["What kinds of handouts did you receive in your English classes at school?", "What do you think about many people depending of state handouts to cover their basic necessities?"]],
  ["hang-up", "a psychological anxiety about yourself", ["How can you help a young person get over their hang-ups about their looks?"]],
  ["kick-off", "when a ball game like football or rugby starts", ["What happens right before the kick-off of a football match?"]],
  ["let-down", "a disappointment", ["Describe some things that you consider a let-down in a relationship?"]],
  ["makeover", "a complete change to make something / someone more attractive", ["Describe your ideal makeover for your house."]],
  ["meet-up", "where you meet people (longer than a meeting – often hours or days)", ["What is the best way to attend a meet-up that is organised for socialising and practising your English skills?"]],
  ["outbreak", "when there are lots of cases of a particular illness", ["How has the world changed after the outbreak of the Corona-virus?"]],
  ["outburst", "when someone shows great emotion (especially anger)", ["How would you deal with your boss/parent who was having an outburst due to a mistake you had made?"]],
  ["outcome", "result", ["Why is it essential to do things differently if we want a different outcome?"]],
  ["rip-off", "when something costs too much money", ["Describe some products of companies that you consider are a rip-off."]],
  ["shout-out", "when you publicly praise someone", ["Who would you give a shout-out to after receiving an award on a stage?"]],
  ["show-off", "a person who does things to get attention", ["Why should we avoid being a show-off?"]],
  ["tip-off", "secret information", ["How difficult would it be for the police to catch criminals without getting a tip-off?"]],
  ["turnover", "the amount of money a company generates", ["How can you increase the turnover of your company?"]],
  ["workaround", "a partial solution to a problem", ["Why should we never be complacent after finding a workaround for a problem?"]]
];
const Entry = ({ item }) => <div className="mb-5"><p><strong>{item[0]}</strong> = {item[1]}</p>{item[2].map((question, index) => <p key={index}>{highlight(question, item[0])}</p>)}</div>;

export default function PhrasalNounsDocument({ onSelect }) {
  const selectText = () => { const text = window.getSelection().toString().trim(); if (text) onSelect(text); };
  return <div onMouseUp={selectText} className="space-y-8 select-text"><article className="mx-auto min-h-[1123px] max-w-[794px] bg-white px-8 py-20 text-black shadow-sm sm:px-16"><div className="text-[15px] leading-6"><h1 className="mb-10 text-center text-4xl font-normal">Phrasal Verbs As Nouns</h1><div className="space-y-5"><p>You can “start up” a company (phrasal verb) or work in a “start-up” (phrasal noun) – a small company.</p><p>When a phrasal verb becomes a phrasal noun, does the verb sometimes come first, like “start-up”; and sometimes the preposition come first, such as “upbringing”?</p><p>Can a hyphen be used between the noun and the preposition (“start-up”) and be written it as one word (“startup”)?</p><p>Are Hyphenated nouns considered more formal than one word?</p><p>Bring up = upbringing</p><p>Rise up = uprising</p></div><h2 className="mb-12 mt-24 text-center text-3xl font-bold">25 Common Phrasal Nouns</h2>{items.slice(0, 6).map((item) => <Entry key={item[0]} item={item} />)}</div></article><article className="mx-auto min-h-[1123px] max-w-[794px] bg-white px-8 py-20 text-black shadow-sm sm:px-16"><div className="text-[15px] leading-6"><p className="mb-5">Do you know of any music groups that are trying to make a <strong>comeback</strong>? How can their <strong>comeback</strong> be successful?</p>{items.slice(6, 23).map((item) => <Entry key={item[0]} item={item} />)}</div></article><article className="mx-auto min-h-[1123px] max-w-[794px] bg-white px-8 py-20 text-black shadow-sm sm:px-16"><div className="text-[15px] leading-6">{items.slice(22).map((item) => <Entry key={item[0]} item={item} />)}</div></article></div>;
}