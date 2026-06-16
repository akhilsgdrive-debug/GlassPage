'use client'
import AnimatedCounter from './AnimatedCounter'

const items=[{value:3600,label:'TPD Capacity',suffix:''},{value:20,label:'GW Support',suffix:''},{value:30,label:'Years Product Life',suffix:'+'},{value:100,label:'Recyclable Glass',suffix:'%'}]

export default function KPISection(){return(<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'20px',marginTop:'60px'}}>{items.map(i=><div key={i.label} style={{padding:'28px',borderRadius:'24px',background:'rgba(255,255,255,.06)',backdropFilter:'blur(18px)',border:'1px solid rgba(255,255,255,.1)'}}><div style={{fontSize:'42px',fontWeight:800,color:'#FDB814'}}><AnimatedCounter target={i.value} suffix={i.suffix}/></div><div style={{marginTop:'10px',color:'rgba(255,255,255,.75)'}}>{i.label}</div></div>)}</div>)}