import {SVGProps, useEffect, useState} from "react";
import folder from "/public/folder.png";

export function AppleLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path fill="currentColor"
            d="M24.32 10.85q-2.615 1.851-2.615 4.455q0 3.118 3.232 4.786q-.867 2.516-2.514 4.376q-1.645 1.861-3.004 1.862q-.641-.002-1.75-.423l-.353-.138q-1.086-.421-1.92-.423q-.787 0-1.725.33l-.445.16l-.56.23q-.662.264-1.337.264q-1.59 0-3.507-2.616q-2.764-3.747-2.764-8.167q-.001-3.141 1.724-5.06q1.725-1.92 4.568-1.92c.71 0 1.37.13 1.988.388l.423.172l.445.183q.594.25.96.25q.466.002 1.04-.216l.58-.23l.436-.16q1.04-.376 2.297-.376q2.987 0 4.8 2.274zm-4.705-7.563q.032.4.033.617q0 1.976-1.438 3.467c-1.438 1.491-2.075 1.49-3.347 1.49a6 6 0 0 1-.058-.638q0-1.68 1.337-3.153q1.335-1.476 3.096-1.726q.125-.022.377-.057"></path>
    </svg>
  )
}

export function Battery(props: SVGProps<SVGSVGElement>) {
  const [battery, setBattery] = useState(0);
  useEffect(()=> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    navigator.getBattery().then((battery: { level: number; addEventListener: (arg0: string, arg1: () => void) => void; }) => {
      const batteryPercentage = battery.level * 100;
      setBattery(batteryPercentage)
      battery.addEventListener('levelchange', () => {
        setBattery(battery.level * 100)
      })})
  }, [])
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="bevel"
         className="lucide lucide-battery" {...props}>
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" fill={"transparent"}/>
      <rect width={battery/100 * 16} height="10" x="2" y="7" rx="2" ry="2" fill="white"/>
      <line x1="22" x2="22" y1="11" y2="13" strokeWidth="2"/>
    </svg>
  )
}

export function Wifi(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 3 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         {...props}>
      <path d="M12 20h.01"/>
      <path d="M5 12.859a10 10 0 0 1 14 0"/>
      <path d="M8.5 16.429a5 5 0 0 1 7 0"/>
    </svg>
  )
}

export function Search(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         {...props}>
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  )
}

export function Siri(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none">
        <path
          d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
        <path fill="currentColor"
              d="M7 9c1.786 0 3.33 1.096 4.929 2.568l.458.43l.691.669c.733.714 1.49 1.453 2.241 2.031c.908.7 1.972 1.302 3.181 1.302a3.5 3.5 0 0 0 3.427-2.785C21.327 18.165 17.112 22 12 22C6.477 22 2 17.523 2 12a5 5 0 0 0 5 5c2.57 0 4.633-1.37 6.318-2.714l-.325-.308l-1.128-1.095C10.32 14.089 8.788 15 7 15a3 3 0 1 1 0-6m5-7c5.523 0 10 4.477 10 10l-.005.314A3.5 3.5 0 0 0 18.5 9c-1.162 0-2.204.497-3.121 1.103a13 13 0 0 0-.371.255l.745.723l.497.47q.12.111.238.216c.783-.516 1.426-.767 2.012-.767a1.5 1.5 0 0 1 0 3c-.54 0-1.165-.273-1.96-.886c-.464-.357-.93-.785-1.425-1.259l-1.3-1.26l-.395-.374l-.412-.378C11.4 8.396 9.43 7 7 7a5 5 0 0 0-4.995 4.783L2 11.937l.003-.217C2.152 6.327 6.57 2 12 2"></path>
      </g>
    </svg>
  )
}

export function ControlCenter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 29 29" {...props}>
      <path
        fill="currentColor"
        strokeWidth="1"
        d="M7.5 13h14a5.5 5.5 0 0 0 0-11h-14a5.5 5.5 0 0 0 0 11Zm0-9h14a3.5 3.5 0 0 1 0 7h-14a3.5 3.5 0 0 1 0-7Zm0 6A2.5 2.5 0 1 0 5 7.5 2.5 2.5 0 0 0 7.5 10Zm14 6h-14a5.5 5.5 0 0 0 0 11h14a5.5 5.5 0 0 0 0-11Zm1.434 8a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Z"></path>
    </svg>
  )
}

export function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path strokeDasharray="64" strokeDashoffset="64"
              d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
        </path>
        <g fill="currentColor" stroke="none">
          <path d="M10.5 10h3v0h-3z">
            <animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s"
                     values="M10.5 10h3v0h-3z;M10.5 10h3v4h-3z"></animate>
          </path>
          <path d="M8 13h8l-4 0z">
            <animate fill="freeze" attributeName="d" begin="0.9s" dur="0.1s"
                     values="M8 13h8l-4 0z;M8 13h8l-4 4z"></animate>
          </path>
        </g>
      </g>
    </svg>
  )
}

export function Folder({... props}) {
  return (
    <div className={"relative top-14 float-end px-6 flex items-center flex-col text-xs text-white font-bold"} {...props}>
      {
        props.type === "resume" ?
          <a href={"https://drive.google.com/file/d/1QdSREX9YxXC2-oSTnLRtVRV66JNv8r8i/view?usp=sharing"} download={true}>
            <img src={folder} alt={"Folder"} width={60} height={60}></img>
          </a>:
          <img src={folder} alt={"Folder"} width={60} height={60}></img>
      }
      <span className={"flex-row items-center gap-1 flex"}>
                <p>{props.name}</p>
        {props.type === "resume" && <DownloadIcon width={15} height={15} />}
            </span>
    </div>
  )
}