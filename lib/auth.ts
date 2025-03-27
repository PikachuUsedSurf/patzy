import { supabase } from "./superbase"

export const signInWithGoogle = async () => {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {redirectTo: "http://localhost:3000"},
        })
        if (error) throw error
        return data
    } catch (error) {
        console.error("error signing in: ", error)
        return null
    }
}

export const logout = async () => {
    await supabase.auth.signOut()
}