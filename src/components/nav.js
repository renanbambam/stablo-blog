"use client"

import { usePathname } from 'next/navigation';
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { BsTriangleHalf } from "react-icons/bs";
import { PiSoundcloudLogo } from "react-icons/pi";
import { TbTriangleOff } from "react-icons/tb";
import { IoMdCut } from "react-icons/io";
import { GiJoin } from "react-icons/gi";
import { CiMicrophoneOn } from "react-icons/ci";
import { RiRecordCircleFill } from "react-icons/ri";
import { BsFillPatchQuestionFill } from "react-icons/bs";

export default function Nav() {

  const pathname = usePathname();

    return (
      <nav className="bar">
        <div className="tools">
          <a href="/" className={pathname === "/" ? "router-link-active router-link-exact-active" : ""}><MdOutlinePlaylistRemove aria-hidden="true"
            width="2.5em"
            height="1.7em"
            fill="currentColor"
            stroke=""/>
            Removedor
          </a>
          <a
            href="/splitter"
            className={pathname === "/splitter" ? "router-link-active router-link-exact-active" : ""}
            aria-current="page"
          >
            <BsTriangleHalf aria-hidden="true"
              width="2.5em"
              height="1.7em"
              fill="currentColor"
              stroke=""/>
            Splitter
          </a>
          <a href="/pitch" className={pathname === "/pitch" ? "router-link-active router-link-exact-active" : ""}>
            <PiSoundcloudLogo aria-hidden="true"
              width="2.5em"
              height="1.7em"
              fill="currentColor"
              stroke=""/>
            Mudar de tom
          </a>
          <a href="/bpm" className={pathname === "/bpm" ? "router-link-active router-link-exact-active" : ""}>
            <TbTriangleOff aria-hidden="true"
              width="2.5em"
              height="1.7em"
              fill="currentColor"
              stroke=""/>
            Determinar Tom e BPM
          </a>
          <a href="/cutter" className={pathname === "/cutter" ? "router-link-active router-link-exact-active" : ""}>
            <IoMdCut  style={{transform: 'rotate(270deg)'}} aria-hidden="true"
              width="2.5em"
              height="1.7em"
              fill="currentColor"
              stroke=""/>
            Cortador
          </a>
          <a href="/joinner" className={pathname === "/joinner" ? "router-link-active router-link-exact-active" : ""}>
            <GiJoin style={{transform: 'rotate(90deg)'}} aria-hidden="true"
              width="2.5em"
              height="1.7em"
              fill="currentColor"
              stroke=""/>
            Juntar
          </a>
          <a href="/recorder" className={pathname === "/recorder" ? "router-link-active router-link-exact-active" : ""}>
            <CiMicrophoneOn aria-hidden="true"
              width="2.5em"
              height="1.7em"
              fill="currentColor"
              stroke=""/>
            Gravador
          </a>
          <a href="/karaoke" className={pathname === "/karaoke" ? "router-link-active router-link-exact-active" : ""}>
            <RiRecordCircleFill aria-hidden="true"
              width="2.5em"
              height="1.7em"
              fill="currentColor"
              stroke=""/>
            Karaoke
          </a>
        </div>
        <div className="help">
          <a href="/support" className={pathname === "/support" ? "router-link-active router-link-exact-active" : ""}>
            <BsFillPatchQuestionFill aria-hidden="true"
              width="1.75em"
              height="1.75em"
              fill="currentColor"
              stroke="currentColor"/>
            <div className="t">Ajuda</div>
          </a>
          <button className="link">
            <svg
              aria-hidden="true"
              width="2em"
              height="2em"
              fill="currentColor"
              stroke=""
            ></svg>
          </button>
        </div>
      </nav>
    );
}
