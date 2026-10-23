interface ReverseProps{
    onSuccess: () => void;
}

export default function ReverseButton({onSuccess}: ReverseProps){
    return (
        <div>
            <button onClick={onSuccess}>Reverse</button>
        </div>
    );
}