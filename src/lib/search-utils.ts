// Calculate Levenshtein distance between two strings
function levenshteinDistance(str1: string, str2: string): number {
    const track = Array(str2.length + 1).fill(null).map(() =>
        Array(str1.length + 1).fill(null));

    for (let i = 0; i <= str1.length; i++) track[0][i] = i;
    for (let j = 0; j <= str2.length; j++) track[j][0] = j;

    for (let j = 1; j <= str2.length; j++) {
        for (let i = 1; i <= str1.length; i++) {
            const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
            track[j][i] = Math.min(
                track[j][i - 1] + 1, // deletion
                track[j - 1][i] + 1, // insertion
                track[j - 1][i - 1] + indicator // substitution
            );
        }
    }
    return track[str2.length][str1.length];
}

// Check if two strings are similar enough (fuzzy match)
export function isFuzzyMatch(str1: string, str2: string, threshold = 0.3): boolean {
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();

    // If one string contains the other, return true
    if (s1.includes(s2) || s2.includes(s1)) return true;

    // Calculate the maximum allowed distance based on the length of the strings
    const maxLength = Math.max(s1.length, s2.length);
    const maxDistance = Math.floor(maxLength * threshold);

    // Calculate actual distance
    const distance = levenshteinDistance(s1, s2);

    return distance <= maxDistance;
}

// Split search query into words and remove common words
export function normalizeSearchQuery(query: string): string[] {
    const commonWords = new Set(['the', 'and', 'or', 'a', 'an', 'in', 'on', 'at', 'to', 'for', 'of']);
    return query
        .toLowerCase()
        .split(/\s+/)
        .filter(word => word.length > 1 && !commonWords.has(word));
} 