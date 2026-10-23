interface KebabProps{
    onSuccess: () => void;
}

export default function KebabButton({onSuccess}: KebabProps){
    return (
        <div>
            <button onClick={onSuccess}>Kebab Case</button>
        </div>
    );
}