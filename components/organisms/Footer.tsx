export default function Footer(){
    const footer_div = 'flex flex-col items-center text-lime-200 bg-zinc-800'
    const section1 = 'flex flex-row gap-5'

    return (
        <footer className={`${footer_div}`}>
            <section className={`${section1}`}>
                <h1>Footer</h1>
                <div>
                    <p>Links ficiticios</p>
                    <p>Mais links</p>
                </div>
                <div>
                    <p>Outros Textos</p>
                </div>
            </section>

            <section>
                CaseFlex 2026&copy; todos os direitos reservados
            </section>

        </footer>
    );
}