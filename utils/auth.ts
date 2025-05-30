export default function isAuthenticated(token: string): boolean {
    if (!token) {
        return false;
    }
    
    try {
        const parsedToken = JSON.parse(token);
        if (parsedToken && parsedToken.id && parsedToken.id_aluno) {
        return true;
        }
    } catch (error) {
        console.error('Error parsing token:', error);
    }
    
    return false;
}
