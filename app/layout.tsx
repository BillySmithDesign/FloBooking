import type {Metadata} from 'next';import './globals.css';
const name=process.env.NEXT_PUBLIC_BUSINESS_NAME||'FloBooking Demo';
export const metadata:Metadata={title:`Book online | ${name}`,description:`Choose a service and book live availability with ${name}.`,robots:{index:true,follow:true}};
export const viewport={themeColor:'#f6f2ec',colorScheme:'light'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en-AU"><body>{children}</body></html>}
