"use client"

import { signIn, signOut, useSession } from "next-auth/react"

const Login = () => {
    const session = useSession();
    return (
        <>
            <div>Login</div>
            {session.data?.user
                ?
                <button onClick={() => signOut()}>Sign Out</button>
                :
                <>
                    <button onClick={() => signIn("github")}>Github</button>
                    <button onClick={() => signIn("google")}>Google</button>
                </>
            }
        </>
    )
}

export default Login