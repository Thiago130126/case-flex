import { toast } from "sonner";

interface CoppyButtonProps{
    conteudo: string;
}

export default function CoppyButton({conteudo}: CoppyButtonProps){
    const baseStyles = "px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
    const primary = "bg-blue-600 hover:bg-blue-700 text-white shadow-sm";

    const Copiar = async () => {

        try{

            if(conteudo.trim() === ''){
                toast.message('Texto vazio');
            }else{
                await navigator.clipboard.writeText(conteudo);
                toast.success('Texto copiado com sucesso');
            }

        }catch(error){
            toast.error("Falha interna ao copiar texto");
            console.log('Falha interna ao copiar texto: ', error);
        }
    }

    return(
        <button onClick={Copiar} className={`${baseStyles} ${primary}`}>
            Copiar Botão
        </button>
    );
}