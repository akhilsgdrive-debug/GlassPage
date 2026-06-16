'use client'
import {useEffect,useState} from 'react'

export default function AnimatedCounter({target=100,duration=1500,suffix=''}:{target:number,duration?:number,suffix?:string}){
 const [count,setCount]=useState(0)
 useEffect(()=>{let start=0;const step=Math.max(1,Math.floor(target/60));const t=setInterval(()=>{start+=step;if(start>=target){setCount(target);clearInterval(t)}else setCount(start)},duration/60);return()=>clearInterval(t)},[target,duration])
 return <span>{count}{suffix}</span>
}