interface ToLowerProps{
    onSuccess: () => void;
}

export default function ToLower({onSuccess}: ToLowerProps){
    return(
        <div>
            <button onClick={onSuccess}>ToLower</button>
        </div>
    );
}