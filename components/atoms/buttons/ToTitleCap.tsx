interface TitleCapitalizeButtonProps{
    onSuccess: () => void;
}

export default function TitleCapitalizeButton({onSuccess}: TitleCapitalizeButtonProps){
    return (
        <div>
            <button onClick={onSuccess}>Title Capitalize</button>
        </div>
    );
}