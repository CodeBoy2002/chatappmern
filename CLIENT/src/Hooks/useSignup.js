import React from 'react'

const useSignup = () => {
    const [loading, setLoading] = useState(false)

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender })
        if(!success) return
    }

  return (
    <div>useSignup</div>
  )
}

export default useSignup

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if(!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all fields')
        return false
    }


    //CONTINUE FROM HERE -> GOING IN THE BACKEND AFTER THIS
    if(password !== confirmPassword) {
        toast.error('Password do not match')
        return false
    }
}