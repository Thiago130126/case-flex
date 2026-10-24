interface TextInputProps{
    texto: string;
    TextManager: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextInput({texto, TextManager}: TextInputProps){

    return(
        <textarea placeholder="Digite seu texto aqui..." value={texto} onChange={TextManager}/>
    );
}