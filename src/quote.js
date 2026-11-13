export function validateQuote(values) {
 const errors={};
 for(const key of ['name','phone','service','suburb','message']) if(!String(values[key]||'').trim()) errors[key]='Please enter '+({name:'your name',phone:'your phone number',service:'a service',suburb:'your suburb',message:'a few job details'}[key])+'.';
 const phone=String(values.phone||'').trim();
 const digits=phone.replace(/\D/g,'');
 if(phone && (!/^\+?[\d\s().-]+$/.test(phone)||digits.length<7||digits.length>15)) errors.phone='Enter a valid phone number, including area or country code.';
 return errors;
}
export function quoteUrl(values) {
 const message=['Hi Hamilton, I would like to request a quote.',...['name','phone','service','suburb','message'].map(k=>`${k[0].toUpperCase()+k.slice(1)}: ${String(values[k]||'').trim()}`)].join('\n');
 return `https://wa.me/61438605733?text=${encodeURIComponent(message)}`;
}
