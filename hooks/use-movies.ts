import { useEffect, useState } from 'react';

export function useMovies() {
    const [movies, setMovies] = useState<({id: number, title: string, description: string}[])>([]);
    // Simulation API
    useEffect(() => {
        setMovies([
            {id: 1, title: 'Inception', description: 'A mind-bending thriller by Christopher Nolan.'},
            {id: 2, title: 'Interstellar', description: 'A science fiction epic exploring space and time.'},
            {id: 3, title: 'Dunkirk', description: 'A World War II drama about the evacuation of Allied soldiers.'},
        ]);
    }, []);
    return {movies};
}