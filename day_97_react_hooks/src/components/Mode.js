import ModeText from "./ModeText"

const Mode = (props) => {
    return (
        <div className="pt3">
            <button onClick={() => props.changeIsLight(!props.isLight)}><ModeText isLight={props.isLight} /></button>
        </div>
    );
}

export default Mode;