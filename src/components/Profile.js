import { useState } from "react";
import profile from "../img/profile.png";

function Profile() {
    const [ state, setState ] = useState({
        email: null,
        isShown: false
    });
    function handleChange(event) {
        setState({ email: event.target.value });
    }
    function handleSubmit(event) {
        event.preventDefault();
        setState({ email: state.email, isShown: !state.isShown });
    }
    function handleClick() {
        setState({ isShown: !state.isShown });
    }
    return (     
        <div className="container">
            <div className="submit">
            { !state.isShown 
                ?   (<form onSubmit={handleSubmit}>
                        <label className="leave-meassage">
                            Please leave your email, then I'll send you my profile.<br /><br />
                        <input type="text" onChange={handleChange} value={state.email} placeHolder="foo@bar.com" />
                        </label>
                        <button type="submit">Submit</button>
                    </form>)
                :   (<dialog open>
                        <p>Profile</p>
                        <img className="profile-image" src={profile} alt="profile"/>
                        <button onClick={handleClick}>Confirm</button>
                    </dialog>)
            }
            </div>
        </div>
    );
}

export default Profile;