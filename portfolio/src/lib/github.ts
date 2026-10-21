export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
}

export async function getGitHubProjects(): Promise<GitHubRepo[]> {
  try {
    // Use your exact GitHub handle here (matching your build logs: kimera-yvonne2)
    const username = "kimera-yvonne2"; 
    
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn(`GitHub API returned status ${res.status}. Falling back to empty array.`);
      return [];
    }

    const repos = await res.json();
    if (!Array.isArray(repos)) return [];

    return repos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      stargazers_count: repo.stargazers_count,
      language: repo.language,
      topics: repo.topics || [],
    }));
  } catch (error) {
    // Catch network or parse errors gracefully so the build NEVER crashes
    console.error("Error fetching GitHub repos during build:", error);
    return [];
  }
}