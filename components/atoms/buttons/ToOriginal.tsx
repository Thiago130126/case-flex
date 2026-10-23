interface ToOriginalProps{
    onSuccess: () => void;
}

export default function ToOriginal({onSuccess}: ToOriginalProps){
    return(
        <div>
            <button onClick={onSuccess}>Texto Original</button>
        </div>
    );
}