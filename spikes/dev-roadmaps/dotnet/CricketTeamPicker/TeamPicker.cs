


using System;
using System.Collections.Generic;
using System.Linq;

namespace CricketTeamPicker
{

    public class TeamPicker
    {
        private List<Player> availablePlayers = new List<Player>();
        private List<Player> selectedTeam = new List<Player>();
        private ICricketerDataService _cricketerDataService;

        //public TeamPicker(IEnumerable<Player> players)
        //{
        //    //InitializePlayers();
        //    availablePlayers = players.ToList();
        //}

        public TeamPicker(ICricketerDataService cricketerDataService)
        {
            _cricketerDataService = cricketerDataService;
        }

        // todo: this class is intially setup so that "PickTeam" acts like auto selection. Change so that PickTeam accepts a team and validates it accordingly
        public IList<Player> PickTeam()
        {
            selectedTeam.Clear();

            // Ensure one wicketkeeper
            Player wicketKeeper = availablePlayers.FirstOrDefault(p => p.IsWicketKeeper);
            if (wicketKeeper != null)
            {
                selectedTeam.Add(wicketKeeper);
                availablePlayers.Remove(wicketKeeper);
            }
            else
            {
                throw new Exception("No wicketkeeper available!");
            }

            // Ensure at least 5 bowlers
            List<Player> bowlers = availablePlayers.Where(p => p.CanBowl).Take(5).ToList();
            if (bowlers.Count < 5)
            {
                throw new Exception("Not enough bowlers available!");
            }
            selectedTeam.AddRange(bowlers);
            foreach (var bowler in bowlers)
            {
                availablePlayers.Remove(bowler);
            }

            // Fill remaining slots with other players (prioritize batsmen or all-rounders)
            int remainingSlots = 11 - selectedTeam.Count;
            var otherPlayers = availablePlayers.Where(p => !p.IsWicketKeeper).Take(remainingSlots).ToList();

            if (otherPlayers.Count < remainingSlots)
            {
                throw new Exception("Not enough players available to form a team!");
            }
            selectedTeam.AddRange(otherPlayers);

            return selectedTeam;
        }

        public void DisplayTeam()
        {
            Console.WriteLine("Selected Cricket Team:");
            foreach (var player in selectedTeam)
            {
                Console.WriteLine(player);
                
            }
        }

        public IList<Player> GetAvailablePlayers()
        {
            return _cricketerDataService.GetAvailablePlayers();
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
