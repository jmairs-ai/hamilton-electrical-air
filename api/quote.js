import {validateQuote} from '../src/quote.js';
export default async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='POST'){res.setHeader('Allow','POST');return res.status(405).json({error:'Method not allowed.'})}
 const origin=req.headers.origin;
 const allowedOrigins=['https://beta.hamiltonelectricalair.com.au','https://hamilton-electrical-air.vercel.app','https://hamilton-electrical-air-beta.vercel.app'];
 if(origin && !allowedOrigins.includes(origin))return res.status(403).json({error:'Please use the website enquiry form.'});
 if(!String(req.headers['content-type']||'').includes('application/json'))return res.status(415).json({error:'Invalid request format.'});
 let data=req.body;
 try{if(typeof data==='string')data=JSON.parse(data)}catch{return res.status(400).json({error:'Invalid request.'})}
 if(!data||typeof data!=='object'||Array.isArray(data))return res.status(400).json({error:'Invalid request.'});
 if(data.company)return res.status(400).json({error:'Unable to send this enquiry.'});
 const limits={name:100,phone:40,service:100,suburb:80,message:2000,email:200};
 const values={};for(const [key,max] of Object.entries(limits)){if(data[key]!=null&&typeof data[key]!=='string')return res.status(400).json({error:'Invalid form values.'});values[key]=String(data[key]||'').trim();if(values[key].length>max)return res.status(400).json({error:'Please shorten your enquiry.'})}
 const errors=validateQuote(values);
 if(values.message.length<10)errors.message='Please provide at least 10 characters about the job.';
 if(values.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))errors.email='Please check your email address.';
 if(Object.keys(errors).length)return res.status(400).json({error:Object.values(errors)[0]});
 const startedAt=Number(data.startedAt);if(!Number.isFinite(startedAt)||Date.now()-startedAt<2000)return res.status(400).json({error:'Please review your details and try again.'});
 const payload={name:values.name,phone:values.phone,email:values.email,suburb:values.suburb,type:values.service==='Air conditioning'?'Air conditioning':values.service==='Electrical + air conditioning'?'Both':'Electrical',message:`Service: ${values.service}\n${values.message}`,company:'',startedAt:String(startedAt)};
 try{const upstream=await fetch('https://hamiltonelectricalair.com.au/api/quote',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(15000)});if(!upstream.ok)return res.status(502).json({error:'Your enquiry could not be sent. Please try again or call 0438 605 733.'});return res.status(200).json({ok:true})}catch{return res.status(503).json({error:'We could not confirm sending. Please call 0438 605 733 before trying again.'})}
}
