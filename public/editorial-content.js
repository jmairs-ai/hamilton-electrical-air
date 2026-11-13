(()=>{'use strict';const root=document.getElementById('root');if(!root||document.getElementById('ha-service-details'))return;
const E=(tag,cl,txt)=>{const n=document.createElement(tag);if(cl)n.className=cl;if(txt!==undefined)n.textContent=txt;return n};
const area=E('section','ha-edit');area.id='ha-service-details';const inner=E('div','ha-edit-inner'),head=E('div','ha-edit-heading'),heading=E('div');
heading.append(E('p','ha-kicker','THE FULL PICTURE'),E('h2',null,'EVERY DETAIL.\nONE GOOD TRADIE.'));
head.append(heading,E('p','ha-summary','Electrical work, cooling and the connections between them. From a new light or power point to an air-conditioning installation, talk directly to Stephen about the job.'));inner.append(head);
const panels=E('div','ha-panels');
for(const [name,items] of [
['Electrical',['Power points & switches','LED & feature lighting','Switchboards & safety switches','Fault finding & repairs','Smoke alarms','Ceiling & exhaust fans','Renovations & upgrades','Outdoor & garden electrics']],
['Air conditioning',['Split-system installation','Ducted reverse-cycle systems','Dedicated circuits & isolators','Servicing & maintenance','Fault diagnosis & repairs','Replacement & upgrades','Heating and cooling options','Installation planning']]
]){const card=E('article','ha-panel');card.append(E('h3',null,name));const list=E('div','ha-items');for(const item of items)list.append(E('div',null,item));card.append(list);panels.append(card)}
inner.append(panels);const advantage=E('div','ha-advantage');advantage.append(E('strong',null,'ONE CONTACT.\nBOTH TRADES.'),E('p',null,'Air-conditioning jobs often require new electrical circuits, isolators and commissioning. With electrical and refrigeration expertise under one roof, Stephen can coordinate both sides of the installation. Clearer communication, fewer handoffs and one business responsible for the finished result.'));inner.append(advantage);area.append(inner);
const services=root.querySelector('#services');if(services)services.insertAdjacentElement('afterend',area);else(root.querySelector('main')||root).append(area);
const reviews=E('section','ha-reviews');reviews.id='ha-reviews';const ri=E('div','ha-reviews-inner');ri.append(E('p','ha-kicker','IN THEIR WORDS'),E('h2',null,'GOOD WORK.\nGOOD WORD.'));
const grid=E('div','ha-review-grid');
const quotes=[
['Voyager One',"We highly recommend Hamilton Electrical & Air for all your household electrical needs. Steve has taken on a number of jobs at our place and his work is safe, professional, on time and at a very competitive rate. His communication is excellent and we're very happy with his work."],
['Dr. Dandan Ma',"Stephen is absolutely fantastic! He is reliable, professional, and incredibly knowledgeable. We have complete trust in him and the quality of his work. We’ve already recommended Stephen and his services to our friends and family, and we’ll continue to do so. I wouldn’t hesitate to recommend him to anyone looking for honest, high-quality air conditioning services."]
];
for(const [person,quote] of quotes){const card=E('article','ha-review-card'),name=E('div','ha-review-name',person);name.append(E('span',null,'Google review, as reproduced on the Hamilton website'));card.append(E('blockquote',null,quote),name);grid.append(card)}
ri.append(grid);const a=E('a','ha-review-link','READ MORE CUSTOMER REVIEWS ↗');a.href='https://www.google.com/maps/search/?api=1&query=Hamilton%20Electrical%20%26%20Air%20Perth';a.target='_blank';a.rel='noopener noreferrer';ri.append(a,E('p','ha-review-caption','Reviews transcribed from the supplied website archive. For current reviews and ratings, check Google.'));reviews.append(ri);
const compare=root.querySelector('#colour-preview');const teaser=compare?.nextElementSibling;if(teaser?.classList.contains('ham-feature-section')&&!teaser.id)teaser.replaceWith(reviews);else if(compare)compare.insertAdjacentElement('afterend',reviews);else area.insertAdjacentElement('afterend',reviews);
})();