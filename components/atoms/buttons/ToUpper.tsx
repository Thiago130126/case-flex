interface ToUpperProps{
    onSuccess: () => void;
}

export default function UpperButton({onSuccess}: ToUpperProps){
    return (
        <div>
            <button onClick={onSuccess}>ToUpper</button>
        </div>
    );
}