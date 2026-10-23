interface SlugProps{
    onSuccess: () => void;
}

export default function SlugfyButton({onSuccess}: SlugProps){
    return (
        <div>
            <button onClick={onSuccess}>Slugify</button>
        </div>
    );
}