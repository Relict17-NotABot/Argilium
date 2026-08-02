import { SquarePlay, Users } from "lucide-react";


export function Footer(){
    return (
<footer className="mt-auto border-[#cfb2c0] border-t p-4 flex gap-1">
    <h4><b>Contactanos : </b></h4>
    <a href="https://github.com/Relict17-NotABot"><Users className="hover:bg-[#9b111e] hover:text-white h-8 w-8 p-1 rounded-2xl cursor-pointer transition-colors duration-300"/></a>
    <a href="https://www.youtube.com/@StevenMoralesAlvarado"><SquarePlay className="hover:bg-[#9b111e] hover:text-white h-8 w-8 p-1 rounded-2xl cursor-pointer transition-colors duration-300"/></a>
</footer>
    )
}