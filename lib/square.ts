const VERSION='2026-07-15';
export const locationId=()=>{const id=process.env.SQUARE_LOCATION_ID;if(!id)throw new Error('SQUARE_LOCATION_ID is not configured');return id};
export async function squareFetch(path:string,init:RequestInit={}){
  const token=process.env.SQUARE_ACCESS_TOKEN;if(!token)throw new Error('SQUARE_ACCESS_TOKEN is not configured');
  const base=process.env.SQUARE_ENV==='production'?'https://connect.squareup.com':'https://connect.squareupsandbox.com';
  const response=await fetch(`${base}${path}`,{...init,cache:'no-store',headers:{Authorization:`Bearer ${token}`,'Square-Version':VERSION,'Content-Type':'application/json',...(init.headers||{})}});
  const json=await response.json().catch(()=>({}));if(!response.ok)throw new Error(json?.errors?.map((e:any)=>e.detail||e.code).join('; ')||`Square HTTP ${response.status}`);return json;
}
