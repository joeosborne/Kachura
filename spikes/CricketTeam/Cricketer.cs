namespace CricketTeam
{
    ///
    public class Cricketer
    {
        // Basic properties
        public string Name { get; set; }
        public int Age { get; set; }
        public string Nationality { get; set; }

        public Role Role { get; set; } // Changed to enum
        public string BattingStyle { get; set; } // E.g., Right-hand bat, Left-hand bat
        public string BowlingStyle { get; set; } // E.g., Right-arm fast, Left-arm spin

        // Batting statistics
        public int MatchesPlayed { get; set; }
        public int RunsScored { get; set; }
        public int Hundreds { get; set; }
        public int Fifties { get; set; }
        public double BattingAverage
        {
            get
            {
                return MatchesPlayed > 0 ? (double)RunsScored / MatchesPlayed : 0.0;
            }
        }

        // Bowling statistics
        public int WicketsTaken { get; set; }
        public int BallsBowled { get; set; }
        public int RunsConceded { get; set; }
        public double BowlingAverage
        {
            get
            {
                return WicketsTaken > 0 ? (double)RunsConceded / WicketsTaken : 0.0;
            }
        }
        public double EconomyRate
        {
            get
            {
                return BallsBowled > 0 ? (double)RunsConceded / (BallsBowled / 6.0) : 0.0;
            }
        }

        // Constructor
        public Cricketer(string name, int age, string nationality, Role role, string battingStyle, string bowlingStyle)
        {
            Name = name;
            Age = age;
            Nationality = nationality;
            Role = role;
            BattingStyle = battingStyle;
            BowlingStyle = bowlingStyle;
        }

        // Method to display cricketer's profile
        public void DisplayProfile()
        {
            Console.WriteLine("Cricketer Profile:");
            Console.WriteLine($"Name: {Name}");
            Console.WriteLine($"Age: {Age}");
            Console.WriteLine($"Nationality: {Nationality}");
            Console.WriteLine($"Role: {Role}");
            Console.WriteLine($"Batting Style: {BattingStyle}");
            Console.WriteLine($"Bowling Style: {BowlingStyle}");
            Console.WriteLine($"Matches Played: {MatchesPlayed}");
            Console.WriteLine($"Runs Scored: {RunsScored}");
            Console.WriteLine($"Batting Average: {BattingAverage:F2}");
            Console.WriteLine($"Hundreds: {Hundreds}");
            Console.WriteLine($"Fifties: {Fifties}");
            Console.WriteLine($"Wickets Taken: {WicketsTaken}");
            Console.WriteLine($"Bowling Average: {BowlingAverage:F2}");
            Console.WriteLine($"Economy Rate: {EconomyRate:F2}");
        }
    }

}
