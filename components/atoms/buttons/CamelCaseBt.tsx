interface CamelProps{
    onSuccess: () => void;
}

export default function CamelButton({onSuccess}: CamelProps){
    return (
        <div>
            <button onClick={onSuccess}>Camel Case</button>
        </div>
    );
}