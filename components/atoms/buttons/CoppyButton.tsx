import { toast } from "sonner";

interface CoppyButtonProps{
    conteudo: string;
}

export default function CoppyButton({conteudo}: CoppyButtonProps){

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
        <div>
            <button onClick={Copiar}>Copiar Botão</button>
        </div>
    );
}