import CaseButton from "../atoms/buttons/CaseButton";
import CoppyButton from "../molecules/buttons/CoppyButton";
import v from 'voca';

export default function ToolbarButton(){
    return(
        <div>
            <CaseButton onClick={() => {
                setTexto(texto.toLowerCase());
                SafeText(texto.toLowerCase())
            }}>
                Lower
            </CaseButton>

            
        </div>
    );
}