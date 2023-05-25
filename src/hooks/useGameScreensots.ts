import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client"
import { Screenshot } from "../entities/Screensot"
const useScreesots = (gameId:number) => {
    
    const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`)
    return useQuery({
        queryKey:['screensort', gameId],
        queryFn: apiClient.getAll
    })
}

export default useScreesots