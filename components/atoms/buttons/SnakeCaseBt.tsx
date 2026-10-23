interface SnakeProps{
    onSuccess: () => void;
}

export default function SnakeButton({onSuccess}: SnakeProps){
    return (
        <div>
            <button onClick={onSuccess}>Snake Case</button>
        </div>
    );
}