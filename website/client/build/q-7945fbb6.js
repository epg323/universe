import{F as r}from"./q-1422778e.js";import{p as t}from"./q-5018de6a.js";const o={"en-US":{lang:"en-US",currency:"USD",timeZone:"America/Los_Angeles"},"pt-BR":{lang:"pt-BR",currency:"BRL",timeZone:"America/Sao_Paulo"}},l={defaultLocale:o["en-US"],supportedLocales:Object.values(o),assets:["app","contact","banner","discord","doc-summary","evolving","explore","footer","hero","medusa","navbar","showcase","sponsor","subscribe","showcase-page"]},i=r(t("s_mMq7bk0JCAw")),g={loadTranslation$:i},L=(n,e)=>{const s=n.startsWith("/")?n:`/${n}`,c=s.endsWith("/")?s:`${s}/`,a=`${l.defaultLocale.lang===e.locale.lang?"":`/${e.locale.lang}`}${c}`;return a.includes("/#")?a.slice(0,-1):a};export{o as L,l as c,L as l,g as t};
