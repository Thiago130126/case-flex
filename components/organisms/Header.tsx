import Link from "next/link";

export default function Header(){

    const header_div = 'flex items-center text-lime-200 bg-zinc-800 content-between w-full h-32'

    return(
        <header className={header_div}>
            <h1>CaseFlex</h1>

            <div>
                <p>Aqui estarão os links</p>
            </div>
        </header>
    );
}