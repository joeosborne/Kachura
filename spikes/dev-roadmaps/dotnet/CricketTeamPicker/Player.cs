namespace CricketTeamPicker
{
    public class Player
    {
        public string Name { get; set; }
        public bool CanBowl { get; set; }
        public bool IsWicketKeeper { get; set; }
        public string Role { get; set; } // E.g., Batsman, Bowler, All-Rounder, Wicketkeeper

        public Player(string name, string role, bool canBowl = false, bool isWicketKeeper = false)
        {
            Name = name;
            Role = role;
            CanBowl = canBowl;
            IsWicketKeeper = isWicketKeeper;
        }

        public Player()
        {
            
        }

        public override string ToString()
        {
            return $"{Name} - {Role} {(CanBowl ? "(Bowler)" : "")} {(IsWicketKeeper ? "(Wicketkeeper)" : "")}";
        }
    }
}

//class Program
//{
//    static void Main(string[] args)
//    {
//        try
//        {
//            TeamPicker teamPicker = new TeamPicker();
//            var team = teamPicker.PickTeam();
//            teamPicker.DisplayTeam();
//        }
//        catch (Exception ex)
//        {
//            Console.WriteLine($"Error: {ex.Message}");
//        }
//    }
//}
