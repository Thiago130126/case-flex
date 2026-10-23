interface ClearProps{
    onSuccess: () => void;
}

export default function ClearButton({onSuccess}: ClearProps){
    return(
        <div>
            <button onClick={onSuccess}>Limpar Texto</button>
        </div>
    );
}