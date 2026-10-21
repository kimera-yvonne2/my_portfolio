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

type GitHubApiRepo = GitHubRepo;

export async function getGitHubProjects(): Promise<GitHubRepo[]> {
  try {
    // Replace 'KimeraYvonne' or your exact GitHub username if different
    const username = "kimera-yvonne2"; 
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repos: GitHubApiRepo[] = await res.json();
    return repos.map((repo) => ({
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
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
