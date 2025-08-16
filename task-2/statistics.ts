function calculateStats<T>(items: T[], extractor: (item: T) => number) {
  if (items.length === 0) {
    return null;
  }

  const values = items.map(extractor);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const average = values.reduce((acc, curr) => acc + curr, 0) / values.length;

  return { min, max, average };
}

// Пример использования на основе json из первого задания

interface Team {
  name: string;
  city: string;
  points: number;
}

const teams: Team[] = [
  { name: 'Московские Медведи', city: 'Москва', points: 45 },
  { name: 'Сибирские Барсы', city: 'Новосибирск', points: 38 },
  { name: 'Ледяные Волки', city: 'Санкт-Петербург', points: 52 },
  { name: 'Уральские Орлы', city: 'Екатеринбург', points: 29 },
  { name: 'Казанские Тигры', city: 'Казань', points: 41 },
];

const stats = calculateStats(teams, (team) => team.points); // { min: 29, max: 52, average: 41 }
