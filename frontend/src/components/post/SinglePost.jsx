import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

function SinglePost() {
    const { id } = useParams();
    const [post, setPostData] = useState({});
    const [error, setError] = useState(null);

    // handle fetch single post
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchSinglePost = async () => {
        try {
            const response = await fetch(`http://localhost:4400/api/posts/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // update local state
            setPostData(data);
        } catch (error) {
            setError(error.message);
            console.log("Error fetching", error.message);
        }
    };

    useEffect(() => {
        fetchSinglePost();
    }, [fetchSinglePost, id]);

    const styles = {
        img: {
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "16px"
        }
    };

    return (
        <div className="container my-5">
            {error ? (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            ) : (
                <>
                    {post.coverImg && <img style={styles.img} src={post.coverImg} alt="Cover" />}
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </>
            )}
        </div>
    );
}

export default SinglePost;
