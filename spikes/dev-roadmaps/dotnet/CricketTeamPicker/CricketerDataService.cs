namespace CricketTeamPicker
{
    public class CricketerDataService : ICricketerDataService
    {
        public IList<Player> GetAvailablePlayers()
        {
            return new List<Player>
            {
                new Player { Name = "Ben Stokes", Role = "All-Rounder",  CanBowl = true },
                new Player { Name = "Joe Root", Role = "Batsman",  CanBowl = true },
                new Player { Name = "James Anderson", Role = "Bowler",  CanBowl = true },
                new Player { Name = "Stuart Broad", Role = "Bowler",  CanBowl = true },
                new Player { Name = "Jonny Bairstow", IsWicketKeeper = true, Role = "Wicketkeeper",  CanBowl = false },
                new Player { Name = "Zak Crawley", Role = "Batsman",  CanBowl = false },
                new Player { Name = "Harry Brook", Role = "Batsman",  CanBowl = false },
                new Player { Name = "Ollie Pope", IsWicketKeeper = true, Role = "Batsman",  CanBowl = false },
                new Player { Name = "Mark Wood", Role = "Bowler",  CanBowl = true },
                new Player { Name = "Chris Woakes", Role = "All-Rounder",  CanBowl = true },
                new Player { Name = "Ben Duckett", Role = "Batsman",  CanBowl = false },
                new Player { Name = "Jack Leach", Role = "Bowler",  CanBowl = true },
                new Player { Name = "Ollie Robinson", Role = "Bowler",  CanBowl = true },
                new Player { Name = "Josh Tongue", Role = "Bowler",  CanBowl = true },
                new Player { Name = "Rehan Ahmed", Role = "All-Rounder",  CanBowl = true },
            };
        }
    }
}
