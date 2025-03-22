function solution(tickets) {
  tickets.sort();
  const graph = {};
  for (const [from, to] of tickets) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }
  let visited = Array(tickets.length).fill(false);
  let answer = [];

  function dfs(curr, route) {
    if (route.length === tickets.length + 1) {
      answer = route;
      return true;
    }

    for (let i = 0; i < tickets.length; i++) {
      const [from, to] = tickets[i];
      if (from === curr && !visited[i]) {
        visited[i] = true;
        if (dfs(to, [...route, to])) return true;
        visited[i] = false;
      }
    }
    return false;
  }

  dfs('ICN', ['ICN']);
  return answer;
}
