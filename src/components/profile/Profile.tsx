
const useProfile = () => {
    jkk

}

const Profile = () => {
    const user = {
        username: 'John Doe',
        email: 'john@doe.bootybutt',
    }

    return (
        <div className='w-screen h-screen fixed top-0 left-0'>

            <div className='w-1/2 h-1/2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            { user.username }
            { user.email }
            </div>


        </div>
    )
}

export default Profile;
