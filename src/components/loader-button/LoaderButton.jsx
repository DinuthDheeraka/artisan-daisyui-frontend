export default function LoaderButton({text}) {
    return (
        <button className="btn">
            <span className="loading loading-spinner"></span>
            {text}
        </button>
    );
}