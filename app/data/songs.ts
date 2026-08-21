export type Song = {
  id: string;
  title: string;
  character: string;
  duration: string;
  portrait: string;
  youtube: string;
};

export const songs: Song[] = [
  { id: "crystal-gems", title: "We Are the Crystal Gems", character: "Crystal Gems", duration: "0:26", portrait: "steven", youtube: "https://www.youtube.com/watch?v=RTowJWM1TcI" },
  { id: "stronger", title: "Stronger Than You", character: "Garnet", duration: "2:52", portrait: "garnet", youtube: "https://www.youtube.com/@cartoonnetwork/search?query=Stronger%20Than%20You" },
  { id: "love", title: "Love Like You", character: "Rebecca Sugar", duration: "2:06", portrait: "rose", youtube: "https://www.youtube.com/watch?v=u2mefLqCuaY" },
  { id: "thought", title: "Here Comes a Thought", character: "Garnet & Stevonnie", duration: "3:22", portrait: "garnet", youtube: "https://www.youtube.com/@cartoonnetwork/search?query=Here%20Comes%20a%20Thought" },
  { id: "over", title: "It's Over, Isn't It?", character: "Pérola", duration: "2:18", portrait: "pearl", youtube: "https://www.youtube.com/@cartoonnetwork/search?query=It%27s%20Over%20Isn%27t%20It" },
  { id: "friends", title: "Other Friends", character: "Spinel", duration: "2:47", portrait: "spinel", youtube: "https://www.youtube.com/@cartoonnetwork/search?query=Other%20Friends%20Steven%20Universe" },
  { id: "peace", title: "Peace and Love on the Planet Earth", character: "Peridot", duration: "2:35", portrait: "peridot", youtube: "https://www.youtube.com/@cartoonnetwork/search?query=Peace%20and%20Love%20on%20the%20Planet%20Earth" },
  { id: "change", title: "Change Your Mind", character: "Steven", duration: "1:30", portrait: "steven", youtube: "https://www.youtube.com/watch?v=aA-o2vmlCOM" },
];
