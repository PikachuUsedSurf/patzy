import { supabase } from "./superbase"

export const getJobs = async (searchQuery: string = "") => {
    let query = supabase.from("jobs").select("*").order("created_at", {ascending: false})

    if (searchQuery) {
        query = query.or(`title.ilike.%${searchQuery}%,company.ilike.%${searchQuery}%`)
    }

    const { data, error } = await query
    if (error) throw error
    return data
}

