import './post.module.css'
export default function Btn(props) {


    return (
        <button onClick={() => props.onClick()}>
            {props.post.title}
        </button>
    )
}