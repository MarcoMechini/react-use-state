
export default function Post(props) {

    const showCard = () => {
        props.setTitle(props.post.title)
        props.setDesc(props.post.description)
        console.log(props.post.description);
    }


    return (
        <button onClick={showCard}>
            {props.post.title}
        </button>
    )
}