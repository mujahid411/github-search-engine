import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
function User({getSingleUserData, singleUserData }) {
    const { username } = useParams();
    const { name, avatar_url, bio, hireable, following, followers, company, location, blog } = singleUserData;

    // console.log(username);
    useEffect(() => {
        //Getting User Data and Repos Data
        getSingleUserData(username);
    }, []);
    return (
        <center>
        <div className="single-row">
            <div className="side-2">
                <h2>{name}</h2>
                <img src={avatar_url} height={200} alt="profilepic" />
                <h3 style={{ display: "block" }}   >Bio :</h3>
               {bio?<p style={{ color: "black", textAlign: "left", fontSize: "large" }}>
                    {bio}
                </p>:<p >none</p>}
                <h3 style={{ display: "inline" }}>Open for Hiring : </h3>
                <p
                    style={{
                        color: "black",
                        textAlign: "left",
                        fontSize: "large",
                        display: "inline",
                    }}
                >
                    {hireable ? "✅" : "❌"}
                </p>
                <a href={`https://github.com/${username}`} className="gitProfile"  style={{display:"block",margin:'10px'}}>Go to GitHub Profile</a>
                <div className="fakeimg" style={{ height: "60px" }}>
                    Followers : {followers}
                </div>
                <br />
                <div className="fakeimg" style={{ height: "60px" }}>
                    Following : {following}
                </div>
                <br />
                {company && (
                    <>
                        <div className="fakeimg" style={{ height: "60px" }}>
                            Company : {company}
                        </div>
                        <br />
                    </>
                )}
                {location && (
                    <>
                        <div className="fakeimg" style={{ height: "60px" }}>
                            Location : {location}
                        </div>
                        <br />
                    </>
                )}
                {blog && (
                    <>
                        <div className="fakeimg" style={{ height: "60px" }}>
                            Website : {blog}
                        </div>
                        <br />
                    </>
                )}
            </div>

            <div className="main">
               
                {/* <center>
                    {repos ? (
                        <>
                            {repos.map((ele, i) => (
                                <div className="repos-class" key={i}>
                                    <a href={ele.html_url} target="_blank" class="repo-link">
                                        <h2>{ele.name}</h2>
                                    </a>
                                    <p style={{ color: "black" }}>{ele.description}</p>
                                </div>
                            ))}
                        </>
                    ) : null}
                </center> */}
            </div>
        </div>
        <Link to="/">
                    <h2>Go Back</h2>
                </Link>
        </center>
    );
}
export default User;