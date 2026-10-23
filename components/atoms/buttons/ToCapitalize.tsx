interface CapitalizeButtonProps{
    onSuccess: () => void;
}

export default function CapitalizeButton({onSuccess}: CapitalizeButtonProps){
    return (
        <div>
            <button onClick={onSuccess}>Capitalize</button>
        </div>
    );
}